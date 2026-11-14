// 在已登录 Canvas（your-school.instructure.com）的标签页里运行（javascript_tool）。
// 只读：调用 Canvas API 的 GET 接口，把五门课的作业组、分值、截止时间和本人提交/成绩
// 整理成紧凑 JSON，然后把页面内容替换成 <pre id="snap">，供 get_page_text 一次读出。
// 不含 URL、token 或 cookie。定时任务（REFRESH.md）用它；网页本身不能调用 Chrome。
await (async () => {
  if (location.host !== 'your-school.instructure.com') throw new Error('NOT_CANVAS ' + location.host);
  const COURSES = { CEN4721: 100001, COP4533: 100002, EEL3872: 100003, HFT4442: 100004, PHI3681: 100005 }; // 换成你自己的 Canvas 课程 ID
  const J = t => JSON.parse(t.replace(/^while\(1\);/, ''));
  const get = p => fetch(p, { headers: { Accept: 'application/json' }, credentials: 'same-origin' }).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); }).then(J);
  const snap = { fetchedAt: new Date().toISOString(), courses: {} };
  for (const [code, id] of Object.entries(COURSES)) {
    const groups = await get(`/api/v1/courses/${id}/assignment_groups?include[]=assignments&include[]=submission&per_page=100`);
    const course = await get(`/api/v1/courses/${id}?include[]=total_scores`);
    const e = (course.enrollments || [])[0] || {};
    snap.courses[code] = {
      id,
      current: e.computed_current_score ?? null,
      final: e.computed_final_score ?? null,
      weighted: !!course.apply_assignment_group_weights,
      // 每个作业：[id, 名称, 满分, 截止(UTC ISO), 得分, 状态, 提交时间, 标记]
      groups: groups.map(g => ({
        name: g.name.trim(),
        weight: g.group_weight,
        items: (g.assignments || []).map(a => {
          const s = a.submission || {};
          const flags = [s.missing && 'missing', s.late && 'late', s.excused && 'excused', a.omit_from_final_grade && 'omit']
            .filter(Boolean).join(',');
          return [a.id, a.name.trim(), a.points_possible, a.due_at, s.score ?? null, s.workflow_state || 'unsubmitted', s.submitted_at || null, flags];
        })
      }))
    };
  }
  const text = JSON.stringify(snap);
  document.body.innerHTML = '';
  const pre = document.createElement('pre');
  pre.id = 'snap';
  pre.textContent = text;
  document.body.appendChild(pre);
  return `ok ${text.length} chars`;
})();
