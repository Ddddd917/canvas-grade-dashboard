// 把看板算出来的「每一项任务 + 状态」导出成 timeline.json，给 course-timeline mod 用。
// 用法：node "10_成绩Dashboard/export_timeline.mjs"
// 计算逻辑直接取自 index.html 里的同一段代码（从 `const C = window.DASH_CONFIG` 到 `/* ---------- Tooltip`），
// 所以 mod 和看板看到的状态永远一致；改了 index.html 的这两个标记就要同步改这里。
import { readFileSync, writeFileSync, renameSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import vm from 'node:vm'

const DIR = dirname(fileURLToPath(import.meta.url))
const START = 'const C = window.DASH_CONFIG'
const END = '/* ---------- Tooltip'

const win = {}
const ctx = vm.createContext({ window: win })
for (const f of ['config.js', 'snapshot.js']) vm.runInContext(readFileSync(join(DIR, f), 'utf8'), ctx, { filename: f })
if (!win.DASH_CONFIG || !win.CANVAS_SNAPSHOT) throw new Error('config.js 或 snapshot.js 没有定义需要的变量')

const html = readFileSync(join(DIR, 'index.html'), 'utf8')
const script = (html.match(/<script>\n([\s\S]*?)<\/script>/) || [])[1] || ''
const a = script.indexOf(START), b = script.indexOf(END)
if (a < 0 || b <= a) throw new Error('index.html 里找不到计算逻辑的起止标记，export_timeline.mjs 需要更新')
const core = script.slice(a, b)
const memory = { getItem: () => null, setItem() {} }
const { COURSES } = new Function('window', 'localStorage', 'matchMedia', core + '\nreturn { COURSES };')(win, memory, () => ({ matches: false }))

const TZ = 'America/New_York'
const ymd = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' })
const hm = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, hour: '2-digit', minute: '2-digit', hour12: false })
const DONE = new Set(['graded', 'pending', 'done', 'past'])
const HIDDEN = new Set(['skip', 'ongoing', 'excused'])

const items = []
for (const c of COURSES) {
  for (const i of c.items) {
    if (HIDDEN.has(i.status)) continue
    items.push({
      id: i.key,
      course: c.cc.code,
      title: i.title,
      kind: i.kind || '作业',
      date: i.due ? ymd.format(i.due.date) : null,
      time: i.due && !i.due.allDay ? hm.format(i.due.date) : null,
      dueAt: i.due ? i.due.date.toISOString() : null,
      status: i.status,
      isDone: DONE.has(i.status),
      // canvas / placeholder（Canvas 还没发布或日期待确认，按大纲估）/ manual（大纲或你告知）/ plan（自己定的内部截止）
      source: i.plan ? 'plan' : i.tentative ? 'placeholder' : i.source,
      group: i.group && i.group.extra ? 'unclassified' : null,
      weight: i.w != null ? Math.round(i.w * 10) / 10 : null,
      url: i.link || null,
      note: i.note || ''
    })
  }
}

const out = {
  generatedAt: new Date().toISOString(),
  snapshotAt: win.CANVAS_SNAPSHOT.fetchedAt || null,
  flight: win.DASH_CONFIG.flightHome,
  courses: COURSES.map(c => ({ code: c.cc.code, name: c.cc.zh || c.cc.name })),
  items
}
const tmp = join(DIR, 'timeline.json.tmp')
writeFileSync(tmp, JSON.stringify(out, null, 1) + '\n')
renameSync(tmp, join(DIR, 'timeline.json'))
console.log(`timeline.json: ${items.length} 项（未完成 ${items.filter(i => !i.isDone).length}），Canvas 快照 ${out.snapshotAt}`)
