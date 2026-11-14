// 示例配置：课程结构和权重来自真实的一个学期，个人备注已删除。
// 权重、口径假设、Canvas 上没有的待办和甘特图都在这里手动维护；每日刷新只覆盖 snapshot.js。
// 日期：'YYYY-MM-DD' 表示全天；'YYYY-MM-DDTHH:MM' 是美东时间。
window.DASH_CONFIG = {
  "tz": "America/New_York",
  "semesterStart": "2026-08-20",
  "classesEnd": "2026-12-02",
  "finals": [
    "2026-12-05",
    "2026-12-11"
  ],
  "flightHome": "2026-12-12",
  "noClass": [
    {
      "label": "Labor Day",
      "start": "2026-09-07",
      "end": "2026-09-07"
    },
    {
      "label": "Homecoming",
      "start": "2026-10-09",
      "end": "2026-10-10"
    },
    {
      "label": "退伍军人节",
      "start": "2026-11-11",
      "end": "2026-11-11"
    },
    {
      "label": "感恩节停课",
      "start": "2026-11-23",
      "end": "2026-11-28"
    },
    {
      "label": "复习日",
      "start": "2026-12-03",
      "end": "2026-12-04"
    }
  ],
  "glasgow": {
    "A": "A3",
    "A-": "B1",
    "B+": "B2",
    "B": "B3",
    "B-": "B3",
    "C+": "C1",
    "C": "C2",
    "C-": "C3",
    "D+": "D1",
    "D": "D2",
    "D-": "D3",
    "E": "E2"
  },
  "targets": [
    80,
    87,
    90,
    94
  ],
  "scale": [
    [
      94,
      "A"
    ],
    [
      90,
      "A-"
    ],
    [
      87,
      "B+"
    ],
    [
      83,
      "B"
    ],
    [
      80,
      "B-"
    ],
    [
      77,
      "C+"
    ],
    [
      73,
      "C"
    ],
    [
      70,
      "C-"
    ],
    [
      67,
      "D+"
    ],
    [
      63,
      "D"
    ],
    [
      60,
      "D-"
    ],
    [
      0,
      "E"
    ]
  ],
  "courses": [
    {
      "code": "CEN4721",
      "short": "HCI",
      "name": "Human-Computer Interaction",
      "zh": "人机交互",
      "color": "blue",
      "canvasId": 100001,
      "headline": "category",
      "groups": [
        {
          "canvas": "Assignments",
          "label": "作业 Assignments",
          "weight": 14,
          "note": "Canvas 14%；正式大纲写 15%（四项合计 101%），以 Canvas 为准。"
        },
        {
          "canvas": "Course Project",
          "label": "课程项目 Course Project",
          "weight": 35,
          "note": "组内按 Canvas 分值折算：Proposal 100 + Implementation 250 + Final Project Deliverables 300。"
        },
        {
          "canvas": "Exams",
          "label": "考试 Exams",
          "weight": 50,
          "note": "期中 100 分（另有 +9 调分），期末 200 分，组内按分值折算。"
        },
        {
          "canvas": "Research Participation & Extra Credit",
          "label": "研究参与 Research",
          "weight": 1
        }
      ],
      "overrides": {
        "Project Groups": {
          "status": "done",
          "note": "已分组"
        },
        "EC - Kaber Seminar": {
          "status": "skip",
          "note": "过期的选做加分"
        },
        "Project Implementation (Multiple Deadlines)": {
          "status": "done"
        },
        "Project Implementation Peer Reivew": {
          "status": "done"
        },
        "Final Project Deliverables": {
          "title": "Final Report & Video（Final Project Deliverables）",
          "note": "报告 ≤ 10 页 + 视频；Canvas 11/5 建了条目，300 分"
        },
        "Research Participation": {
          "status": "done"
        }
      },
      "extras": [
        {
          "title": "Prototype presentation（课上展示）",
          "due": "2026-10-19",
          "kind": "项目",
          "note": "每组 ≤ 5 分钟；算在 Implementation 250 分里"
        },
        {
          "title": "内部截止：Final Report & Video 完成",
          "due": "2026-11-25",
          "kind": "计划",
          "plan": true,
          "note": "正式截止 12/2。感恩节停课的前三天写完，12/1 考完只做提交。"
        }
      ],
      "bonus": [
        {
          "label": "额外研究参与",
          "max": 1,
          "earned": 0
        }
      ]
    },
    {
      "code": "COP4533",
      "short": "算法",
      "name": "Algorithm Abstraction & Design",
      "zh": "算法设计",
      "color": "purple",
      "canvasId": 100002,
      "headline": "category",
      "scale": [
        [
          94,
          "A"
        ],
        [
          90,
          "A-"
        ],
        [
          85,
          "B+"
        ],
        [
          80,
          "B"
        ],
        [
          75,
          "B-"
        ],
        [
          70,
          "C+"
        ],
        [
          60,
          "C"
        ],
        [
          55,
          "C-"
        ],
        [
          50,
          "D+"
        ],
        [
          45,
          "D"
        ],
        [
          40,
          "D-"
        ],
        [
          0,
          "E"
        ]
      ],
      "targets": [
        75,
        80,
        85,
        90
      ],
      "canvasNote": "等级线按老师 11/5 邮件的新标准：A 94、A- 90、B+ 85、B 80、B- 75、C+ 70、C 60（邮件漏写 65–70，按 C 算）。老师说这次估算没算出勤加分，期末才加。",
      "groups": [
        {
          "canvas": "Exams",
          "label": "考试 Exams",
          "weight": 45,
          "split": "equal",
          "placeholders": [
            {
              "title": "Exam 2",
              "match": "Exam 2",
              "pts": 120,
              "due": "2026-10-27",
              "note": "范围第 5–7 章；Honorlock"
            },
            {
              "title": "Exam 3",
              "match": "Exam 3",
              "pts": 120,
              "due": "2026-12-01"
            }
          ]
        },
        {
          "canvas": "Quizzes",
          "label": "小测 Quizzes",
          "weight": 15,
          "split": "equal",
          "note": "三次 Quiz 各占 5%（平均分配）。Canvas 上 Quiz 3 的满分 11/10 写的是 60（可拿到的最高分），Quiz 1、2 是 50；出分后可能改回 50，和 Exam 2 当时一样，到时以 Canvas 为准。",
          "placeholders": [
            {
              "title": "Quiz 3",
              "match": "Quiz 3",
              "pts": 50,
              "due": "2026-11-12T10:30",
              "note": "老师 11/3 课上说 11/12 周四，上课时间考；10:30 截止是照 Quiz 2 推的。范围应是第 8 章 NP 与归约。Canvas 还没发布"
            }
          ]
        },
        {
          "canvas": "Programming Project",
          "label": "编程项目 Project",
          "weight": 40,
          "note": "按分值：M1 60 → 12%，M2 100 → 20%，M3 40 → 8%。只能单人或 ≤3 人组队。"
        }
      ],
      "overrides": {},
      "extras": [
        {
          "title": "内部截止：Project Milestone 2 完成",
          "due": "2026-11-07",
          "kind": "计划",
          "plan": true,
          "note": "正式截止 11/10（占总评 20%，11 月最大的一项）。提前三天做完，留出检查时间。"
        },
        {
          "title": "开始复习 Quiz 3 / Exam 3（每天一小块）",
          "due": "2026-11-09",
          "kind": "计划",
          "plan": true,
          "note": "Quiz 3 提前到 11/12 周四，原定 11/11 才开始就来不及了。M2（11/7）和 EEL 报告（11/8）交完就开始：11/9–11/11 每天做几道第 8 章归约题；Quiz 3 之后接着按块复习 Exam 3（12/1，和 PHI 期末同一天），感恩节后半周全力复习。"
        }
      ],
      "bonus": [
        {
          "label": "Quiz 0 加分",
          "canvasMatch": "Quiz 0",
          "max": 1,
          "note": "1 个总评点 × Quiz 0 得分率"
        },
        {
          "label": "出勤加分 iClicker",
          "kind": "attendance",
          "max": 5,
          "need": 20,
          "days": 12,
          "asOf": "2026-11-01",
          "note": "满 20 个有效到课日拿满 5 分；不足按比例。"
        }
      ]
    },
    {
      "code": "EEL3872",
      "short": "AI 基础",
      "name": "AI Fundamentals",
      "zh": "AI 基础",
      "color": "cyan",
      "canvasId": 100003,
      "headline": "category",
      "groups": [
        {
          "canvas": "Learning Checks",
          "label": "Learning Checks",
          "weight": 30,
          "open": true,
          "note": "后面每周还会新增，组内按分值折算。"
        },
        {
          "canvas": "Homework",
          "label": "作业 Homework",
          "weight": 30,
          "open": true,
          "note": "后面还会新增作业和 Part 2/3 Quiz。"
        },
        {
          "canvas": "Projects",
          "label": "项目 Sea Turtle",
          "weight": 40,
          "split": "unknown",
          "note": "大纲写 Project 1/2/3 = 20/10/10%；Canvas 目前有 Sea Turtle Part 1/2/3（3/3/4 分）、Final Report 10 分和 Neural Networks Lab 10 分，各项怎么对应大纲比例还不明。"
        }
      ],
      "overrides": {
        "Sea Turtle Conservation - AI Project - Description": {
          "title": "Sea Turtle 项目说明",
          "status": "skip",
          "note": "0 分的项目总说明页，不用交；最终报告是另一条「Sea Turtle Final Report」"
        },
        "Sea Turtle Conservation AI Project Final Report": {
          "title": "Sea Turtle Final Report",
          "note": "最终报告：Part 1 训练、Part 2 体重预测、Part 3 物种识别"
        },
        "Sea Turtle Conservation - AI Project - PART # 2": {
          "title": "Sea Turtle Part 2: Weight Prediction"
        },
        "Sea Turtle Conservation AI Project — Part 1: Training Cammy": {
          "title": "Sea Turtle Part 1: Training Cammy"
        }
      },
      "extras": [],
      "bonus": []
    },
    {
      "code": "HFT4442",
      "short": "AI 革命",
      "name": "AI Revolution",
      "zh": "AI 与酒店业",
      "color": "gold",
      "canvasId": 100004,
      "headline": "category",
      "canvasNote": "Canvas 本课不加权（只按已有条目的分值算），所以按大纲 100 分制重算。",
      "groups": [
        {
          "label": "出勤·参与·案例讨论",
          "weight": 10,
          "note": "缺课超过 3 次，总评降一整个字母等级。",
          "items": [
            {
              "match": "^Roll Call Attendance$",
              "title": "出勤与课堂参与",
              "weight": 10
            }
          ]
        },
        {
          "label": "短论文 Essays",
          "weight": 15,
          "note": "大纲是 3 篇各 5 分。Essay 3（AI Agent Performance Evaluation）10/21 在 Canvas 上发布。",
          "items": [
            {
              "match": "^Essay 1$",
              "title": "Essay 1",
              "weight": 5
            },
            {
              "match": "^Essay 2$",
              "title": "Essay 2",
              "weight": 5
            },
            {
              "match": "^Essay 3",
              "title": "Essay 3 · AI Agent Performance Evaluation",
              "weight": 5
            }
          ]
        },
        {
          "label": "考试 Exams",
          "weight": 30,
          "note": "期中、期末各 15 分。",
          "items": [
            {
              "match": "^(Exam 1|Mid-?term)",
              "title": "Midterm Exam（开卷，Canvas 上叫 Exam 1）",
              "weight": 15,
              "due": "2026-10-21",
              "fixDue": "2026-10-21",
              "kind": "考试"
            },
            {
              "match": "^(Exam 2|Final Exam)",
              "title": "Final Exam",
              "weight": 15,
              "due": "2026-12-07",
              "kind": "考试"
            }
          ]
        },
        {
          "label": "小组项目 Group Project",
          "weight": 45,
          "note": "Proposal 10 + Paper 25 + Presentation 10。Canvas 的 Final Project Plan 就是 Proposal。",
          "items": [
            {
              "match": "^Final Project Plan$",
              "title": "Proposal (Final Project Plan)",
              "weight": 10
            },
            {
              "match": "Group (Project )?Paper|Final Paper",
              "title": "Group Project Paper（10–12 页）",
              "weight": 25,
              "due": "2026-12-04",
              "kind": "项目",
              "note": "日期按大纲周五推算"
            },
            {
              "match": "Group Presentation|Final Presentation",
              "title": "Group Presentation（约 20 分钟）",
              "weight": 10,
              "due": "2026-11-16",
              "tentative": true,
              "kind": "项目"
            }
          ]
        }
      ],
      "overrides": {
        "Final Project- Market Examination Video": {
          "status": "done"
        }
      },
      "extras": [
        {
          "title": "案例讨论幻灯片发给老师（至少提前 2 天）",
          "due": "2026-11-18",
          "kind": "讨论",
          "tentative": true,
          "note": "Case Discussion Guide：展示用的幻灯片至少提前 2 天邮件发给老师。按讨论日 11/20 推算，讨论日期定了这里跟着改；如果讨论在周一 11/16，幻灯片周六 11/14 就要发。"
        },
        {
          "title": "带领案例讨论：Five Challenges for Government Adoption of AI",
          "due": "2026-11-20",
          "kind": "讨论",
          "tentative": true
        }
      ],
      "bonus": []
    },
    {
      "code": "PHI3681",
      "short": "伦理",
      "name": "Ethics, Data & Technology",
      "zh": "AI 伦理",
      "color": "magenta",
      "canvasId": 100005,
      "headline": "category",
      "canvasNote": "Canvas 把两次考试放进了 0% 的 Imported Assignments，所以按大纲权重重算。",
      "groups": [
        {
          "label": "小组案例 Group Project",
          "weight": 20,
          "items": [
            {
              "match": "^Group Project$",
              "title": "Group Project / Case Study",
              "weight": 20
            }
          ]
        },
        {
          "label": "考试 Exams",
          "weight": 40,
          "note": "大纲两次共 40%，按各 20% 算；Canvas 期中满分 27.5。",
          "items": [
            {
              "match": "^Midterm$",
              "title": "Midterm",
              "weight": 20
            },
            {
              "match": "^Final Exam$",
              "title": "Final Exam",
              "weight": 20,
              "note": "12/1；按 study guide 出题"
            }
          ]
        },
        {
          "label": "论文 Paper",
          "weight": 30,
          "note": "800–1000 词，按老师给的选题和结构。",
          "items": [
            {
              "match": "^Paper$",
              "title": "Paper",
              "weight": 30
            }
          ]
        },
        {
          "label": "出勤参与 Attendance",
          "weight": 10,
          "items": [
            {
              "match": "^Attendance$",
              "title": "出勤与课堂参与",
              "weight": 10
            }
          ]
        }
      ],
      "overrides": {},
      "extras": [
        {
          "title": "内部截止：Paper 完稿",
          "due": "2026-11-25",
          "kind": "计划",
          "plan": true,
          "note": "正式截止 12/4（30%），但 12/1 有 COP Exam 3 和本课期末。感恩节停课的前三天写完。"
        },
        {
          "title": "开始背 study guide",
          "due": "2026-11-24",
          "kind": "计划",
          "plan": true,
          "note": "期末题目和 study guide 一致，背会就行。老师大约考前一周才发，发下来就开始，日期按考前一周估。"
        }
      ],
      "bonus": []
    }
  ],
  "gantt": {
    "CEN4721": [
      {
        "lane": "单元",
        "label": "HCI 导论·历史·需求",
        "start": "2026-08-20",
        "end": "2026-08-28",
        "source": "大纲 wk1–3"
      },
      {
        "lane": "单元",
        "label": "Affinity·设计·原型",
        "start": "2026-08-31",
        "end": "2026-09-18",
        "source": "大纲 wk4–6"
      },
      {
        "lane": "单元",
        "label": "形式模型·认知理论",
        "start": "2026-09-21",
        "end": "2026-10-02",
        "source": "大纲 wk7–8（10/2 期中）"
      },
      {
        "lane": "单元",
        "label": "评估·实验·统计",
        "start": "2026-10-05",
        "end": "2026-10-30",
        "source": "大纲 wk9–12"
      },
      {
        "lane": "单元",
        "label": "无障碍·HCI 新议题",
        "start": "2026-11-02",
        "end": "2026-11-20",
        "source": "大纲 wk13–15"
      },
      {
        "lane": "单元",
        "label": "感恩节·复习",
        "start": "2026-11-23",
        "end": "2026-12-02",
        "source": "大纲 wk16–17"
      },
      {
        "lane": "项目",
        "label": "Initial Idea",
        "start": "2026-09-04",
        "end": "2026-09-11",
        "start_guess": true,
        "source": "Project Overview 第 8 页"
      },
      {
        "lane": "项目",
        "label": "Proposal",
        "start": "2026-09-11",
        "end": "2026-09-25",
        "source": "Canvas 9/25 23:59"
      },
      {
        "lane": "项目",
        "label": "Part 2 原型",
        "start": "2026-10-07",
        "end": "2026-10-19",
        "start_guess": true,
        "source": "Part 2 课件；10/19 课上展示"
      },
      {
        "lane": "项目",
        "label": "Part 2 实现+报告",
        "start": "2026-10-19",
        "end": "2026-10-30",
        "source": "Part 2 课件；Canvas 10/30 23:59"
      },
      {
        "lane": "项目",
        "label": "Part 3 用户评估",
        "start": "2026-10-30",
        "end": "2026-12-02",
        "start_guess": true,
        "source": "Part 2 课件：最终报告+视频 12/2"
      },
      {
        "lane": "考试",
        "label": "Midterm",
        "start": "2026-10-02",
        "end": "2026-10-02",
        "source": "Canvas 09:35"
      },
      {
        "lane": "考试",
        "label": "Final",
        "start": "2026-12-09",
        "end": "2026-12-09",
        "source": "Canvas 10:00"
      }
    ],
    "COP4533": [
      {
        "lane": "单元",
        "label": "Ch1–3 匹配·分析·图",
        "start": "2026-08-20",
        "end": "2026-09-17",
        "source": "大纲 wk0–4；Quiz 1 范围"
      },
      {
        "lane": "单元",
        "label": "Ch4 Greedy",
        "start": "2026-09-22",
        "end": "2026-09-29",
        "source": "大纲 wk5–6；Exam 1"
      },
      {
        "lane": "单元",
        "label": "Ch5–7 分治·DP·网络流",
        "start": "2026-10-01",
        "end": "2026-10-27",
        "source": "大纲 wk7–11；Exam 2 范围"
      },
      {
        "lane": "单元",
        "label": "NP 与归约",
        "start": "2026-10-29",
        "end": "2026-11-19"
      },
      {
        "lane": "单元",
        "label": "空间复杂度·近似",
        "start": "2026-11-24",
        "end": "2026-12-01",
        "source": "大纲 wk14–15"
      },
      {
        "lane": "项目",
        "label": "M1 Greedy",
        "start": "2026-09-23",
        "end": "2026-10-13",
        "source": "Canvas 9/23 开放，10/13 截止"
      },
      {
        "lane": "项目",
        "label": "M2 DP",
        "start": "2026-10-14",
        "end": "2026-11-10",
        "source": "Canvas 10/14 开放，11/10 截止"
      },
      {
        "lane": "项目",
        "label": "M3 视频",
        "start": "2026-11-11",
        "end": "2026-11-24",
        "source": "Canvas 11/11 开放，11/24 截止"
      },
      {
        "lane": "考试",
        "label": "Quiz 1",
        "start": "2026-09-17",
        "end": "2026-09-17",
        "source": "课程邮件"
      },
      {
        "lane": "考试",
        "label": "Exam 1",
        "start": "2026-09-29",
        "end": "2026-09-29",
        "source": "Canvas"
      },
      {
        "lane": "考试",
        "label": "Quiz 2",
        "start": "2026-10-15",
        "end": "2026-10-15",
        "source": "Canvas"
      },
      {
        "lane": "考试",
        "label": "Exam 2",
        "start": "2026-10-27",
        "end": "2026-10-27",
        "source": "大纲暂定"
      },
      {
        "lane": "考试",
        "label": "Quiz 3",
        "start": "2026-11-12",
        "end": "2026-11-12",
        "source": "老师 11/3 课上说"
      },
      {
        "lane": "考试",
        "label": "Exam 3",
        "start": "2026-12-01",
        "end": "2026-12-01"
      }
    ],
    "EEL3872": [
      {
        "lane": "单元",
        "label": "AI 导论·编程·Scratch",
        "start": "2026-08-20",
        "end": "2026-09-13",
        "source": "大纲 wk1–2,5"
      },
      {
        "lane": "单元",
        "label": "What is AI·AI 史",
        "start": "2026-09-14",
        "end": "2026-09-27",
        "source": "大纲 wk3–4"
      },
      {
        "lane": "单元",
        "label": "ML·监督·无监督",
        "start": "2026-09-28",
        "end": "2026-10-18",
        "source": "大纲 wk6–8"
      },
      {
        "lane": "单元",
        "label": "强化学习·神经网络",
        "start": "2026-10-19",
        "end": "2026-11-01",
        "start_guess": true,
        "source": "大纲 wk9–10（按模块推算）"
      },
      {
        "lane": "单元",
        "label": "ML 项目·GenAI/IoT",
        "start": "2026-11-02",
        "end": "2026-11-15",
        "start_guess": true,
        "source": "大纲 wk11–12"
      },
      {
        "lane": "单元",
        "label": "AI today·负责任 AI",
        "start": "2026-11-16",
        "end": "2026-12-02",
        "start_guess": true,
        "source": "大纲 wk13–15"
      },
      {
        "lane": "项目",
        "label": "Sea Turtle P1",
        "start": "2026-10-05",
        "end": "2026-10-11",
        "start_guess": true,
        "source": "Canvas 10/11 23:59"
      },
      {
        "lane": "项目",
        "label": "Sea Turtle P2",
        "start": "2026-10-12",
        "end": "2026-10-18",
        "start_guess": true,
        "source": "Canvas 10/18 23:59"
      },
      {
        "lane": "项目",
        "label": "P3 + Final Report",
        "start": "2026-10-19",
        "end": "2026-11-08",
        "start_guess": true,
        "source": "Canvas 最终报告 11/8 23:59；P3 日期未公布"
      },
      {
        "lane": "考试",
        "label": "Part 1 Quiz",
        "start": "2026-10-11",
        "end": "2026-10-11",
        "source": "Canvas 20 分"
      }
    ],
    "HFT4442": [
      {
        "lane": "单元",
        "label": "AI 入门·AI 革命史",
        "start": "2026-08-20",
        "end": "2026-08-29",
        "source": "大纲 wk1–2"
      },
      {
        "lane": "单元",
        "label": "理性 agent·THE 应用",
        "start": "2026-08-31",
        "end": "2026-09-26",
        "source": "大纲 wk3–6"
      },
      {
        "lane": "单元",
        "label": "AI 竞赛·agent 程序",
        "start": "2026-09-28",
        "end": "2026-10-10",
        "source": "大纲 wk7–8"
      },
      {
        "lane": "单元",
        "label": "求解·不确定性·ML",
        "start": "2026-10-12",
        "end": "2026-10-31",
        "source": "大纲 wk9–11"
      },
      {
        "lane": "单元",
        "label": "消费者行为与 AI",
        "start": "2026-11-02",
        "end": "2026-11-14",
        "source": "大纲 wk12–13"
      },
      {
        "lane": "单元",
        "label": "展示周·感恩节",
        "start": "2026-11-16",
        "end": "2026-12-02",
        "source": "大纲 wk14–16"
      },
      {
        "lane": "项目",
        "label": "Group Contract",
        "start": "2026-08-31",
        "end": "2026-09-04",
        "start_guess": true,
        "source": "大纲「第三个周五」推算"
      },
      {
        "lane": "项目",
        "label": "Proposal（Plan）",
        "start": "2026-09-14",
        "end": "2026-09-25",
        "start_guess": true
      },
      {
        "lane": "项目",
        "label": "Market 视频",
        "start": "2026-10-22",
        "end": "2026-11-06",
        "start_guess": true,
        "source": "Canvas 11/6 23:59"
      },
      {
        "lane": "项目",
        "label": "Group Paper",
        "start": "2026-11-07",
        "end": "2026-12-04",
        "start_guess": true,
        "source": "大纲 wk16 周五推算 12/4"
      },
      {
        "lane": "项目",
        "label": "展示窗口 A",
        "start": "2026-11-16",
        "end": "2026-11-20"
      },
      {
        "lane": "考试",
        "label": "带领案例讨论",
        "start": "2026-11-20",
        "end": "2026-11-20"
      },
      {
        "lane": "项目",
        "label": "展示窗口 B",
        "start": "2026-11-30",
        "end": "2026-12-02"
      },
      {
        "lane": "考试",
        "label": "Midterm",
        "start": "2026-10-21",
        "end": "2026-10-21"
      },
      {
        "lane": "考试",
        "label": "Final",
        "start": "2026-12-07",
        "end": "2026-12-07"
      }
    ],
    "PHI3681": [
      {
        "lane": "单元",
        "label": "U1–2 论证·伦理理论",
        "start": "2026-08-20",
        "end": "2026-09-17",
        "source": "大纲 Unit 1–2；录课 9/10、9/17"
      },
      {
        "lane": "单元",
        "label": "U3 Machine Bias",
        "start": "2026-09-22",
        "end": "2026-10-08",
        "source": "Unit 3；10/8 复习课"
      },
      {
        "lane": "单元",
        "label": "U4–9 黑箱→基因增强",
        "start": "2026-10-15",
        "end": "2026-11-19",
        "start_guess": true,
        "source": "大纲 Unit 4–9（大纲没写日期）"
      },
      {
        "lane": "单元",
        "label": "U10 期末复习",
        "start": "2026-11-24",
        "end": "2026-12-01",
        "start_guess": true,
        "source": "大纲 Unit 10（大纲没写日期）"
      },
      {
        "lane": "项目",
        "label": "Case Study 小组",
        "start": "2026-09-22",
        "end": "2026-10-06",
        "source": "Canvas 10/6 23:59"
      },
      {
        "lane": "项目",
        "label": "Paper 写作",
        "start": "2026-11-02",
        "end": "2026-12-04",
        "start_guess": true,
        "source": "Canvas 12/4 23:59；题目待发"
      },
      {
        "lane": "考试",
        "label": "Midterm",
        "start": "2026-10-13",
        "end": "2026-10-13",
        "source": "Canvas 15:00"
      },
      {
        "lane": "考试",
        "label": "Final",
        "start": "2026-12-01",
        "end": "2026-12-01"
      }
    ]
  }
};
