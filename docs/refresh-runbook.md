# 成绩看板 · 每日刷新步骤

看板：<看板的 Artifact 链接>
本地文件：本目录的 `index.html`（页面）、`config.js`（权重与口径，手动维护）、`snapshot.js`（Canvas 快照，每天覆盖）、`canvas_fetch.js`（抓取脚本）、`export_timeline.mjs`（导出脚本）和它生成的 `timeline.json`（给 course-timeline mod 用）。

刷新只做一件事：用 Chrome 里已登录的 Canvas 读最新的作业、截止时间和成绩，覆盖 `snapshot.js`，再写进看板数据库的 `snapshots/latest` 文档（页面打开时会读它，已打开的页面会自动更新）。**不重新发布看板**（定时任务没人在场时发布会被拒绝），也**不改** `config.js` 和 `index.html`。

页面右上角的「刷新」按钮只会重新读取数据库里最新的一份（平台不允许网页直接调用 Chrome 扩展，也没有 Canvas 连接器）。想立刻从 Canvas 拉取，就在 Claude 桌面 App 的 Scheduled 里对「Canvas 成绩看板刷新」点 Run now，跑完后已打开的页面会自动更新。

## 步骤

1. 用 ToolSearch 一次加载 Claude in Chrome 工具：`select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__javascript_tool,mcp__claude-in-chrome__get_page_text,mcp__claude-in-chrome__tabs_close_mcp`。
   扩展没连上（Chrome 没开）就停下，在结果里写「Chrome 未连接，今天没刷新」。
2. `tabs_context_mcp`，然后 `tabs_create_mcp` 开一个新标签，导航到 `https://<学校>.instructure.com/courses/<课程 ID>/grades`。
   如果跳到了 UF 登录页（网址不是 <学校>.instructure.com，或页面要求 GatorLink 登录），**不要输入任何账号密码**，关掉标签并停下，写「Canvas 登录过期，需要你在 Chrome 里重新登录」。
3. 读 `canvas_fetch.js`，把整个文件内容作为 `javascript_tool` 的代码执行。应返回 `ok <N> chars`。
4. 对同一标签调用 `get_page_text`，取 `---` 之后的那一行 JSON。
5. 用 Python 校验：能 `json.loads`、`courses` 里有 CEN4721、COP4533、EEL3872、HFT4442、PHI3681 五门、`fetchedAt` 是刚才的时间。校验不过就停下，不覆盖旧快照。
6. 和旧的 `snapshot.js` 对比，整理变化：新出的成绩（课程、作业名、得分/满分）、新增或删除的作业、截止时间变了的作业、新提交的作业、出现但 `config.js` 里没有对应权重的新作业组。
7. 覆盖 `snapshot.js`，格式保持两行：
   ```
   // 自动生成：Canvas 快照（canvas_fetch.js 的输出）。不要手改，下次刷新会覆盖。
   window.CANVAS_SNAPSHOT = <JSON>;
   ```
7b. 导出给 mod：`node "<项目目录>/export_timeline.mjs"`。它直接复用 `index.html` 里的计算代码（从 `const C = window.DASH_CONFIG` 到 `/* ---------- Tooltip`），把每项任务的截止时间和状态写成 `timeline.json`；course-timeline mod（输入框上方的倒计时、/timeline 面板、发消息时附带的 DDL）优先读它，读不到才退回 `DEADLINES.json`。提前停下（登录过期等）时也跑一次，因为「已过期」会随日期变化。改了 `config.js` 或 `index.html` 之后也要手动跑一次。
8. 写进看板数据库（用 ArtifactData 工具，ToolSearch `select:ArtifactData` 加载）：
   - 用 `python3 -I` 生成文档文件（放在系统临时目录，比如 `/private/tmp/uf_snapshot_doc.json`）：`{"fetchedAt": <快照的 fetchedAt>, "source": "scheduled", "json": <整个快照 JSON 压缩成一行的字符串>}`。
   - `ArtifactData` `action: "get"`，`url` 为看板链接，`collection: "snapshots"`，`doc_id: "latest"`，记下 `version`。如果数据库里那份的 `fetchedAt` 比这次的还新（说明有人刚在页面上手动刷新过），就跳过写入。
   - `ArtifactData` `action: "set"`，同样的 `url`、`collection`、`doc_id`，`file_path` 为上面的文件，`if_version` 为刚记下的版本（文档不存在时不传）。版本冲突就重新 get 一次再写，最多重试一次。
   - 不要调用 `Artifact` 发布。
9. 关掉自己开的 Chrome 标签。
10. 结果写成 3–6 行中文：刷新时间、有哪些变化（没有就写「无变化」）。有新成绩或新的/改期的 DDL 时，用 PushNotification（如果可用）发一条简短通知。

## 不要做的事

- 不登录、不输入密码、不点 Canvas 上任何提交/修改按钮；只用 GET 接口读数据。
- 不改 `config.js`、`index.html`、`export_timeline.mjs`、`DEADLINES.json`。新作业组或权重问题只在结果里提出来。

## 运行日志（看板「运维」页）

每次运行结束前（包括登录过期、Chrome 没开、校验失败而提前停下的情况）都要写一条运行日志到看板数据库的 `runs` 集合：doc_id 用开始时间（如 `20261022-113005`），字段 `at`（开始时间 ISO）、`trigger`（scheduled / manual）、`status`（ok / login_expired / chrome_offline / invalid / error）、`summary`、`changes`、`unclassified`、`fetchedAt`、`dbVersion`。详细格式见定时任务的第 12 步。

看板的改版记录在 `changelog.js`，由 Claude 在对话里改版时追加，定时任务不改它。
