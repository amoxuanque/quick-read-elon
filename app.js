const overviewCards = [
  {
    kicker: '第一层',
    title: '先界定什么值得做',
    summary:
      '这本书先解决价值判断，再谈成功技巧。它反复强调，真正重要的是你做的事是否有用，是否提升了未来变好的概率。',
    bullets: ['有用比荣耀更重要', '使命先于标签', '长期问题值得更大投入']
  },
  {
    kicker: '第二层',
    title: '再决定用什么脑子思考',
    summary:
      '书里最核心的认知姿态，不是聪明感，而是回到物理约束、材料成本、真实反馈和第一性原理，减少认知自欺。',
    bullets: ['默认自己可能有错', '先找真实约束', '别把惯例当答案']
  },
  {
    kicker: '第三层',
    title: '把组织改造成执行机器',
    summary:
      '愿景不能自动落地。真正把事情做出来的，是删流程、去瓶颈、贴近现场、压缩周期和把责任压到具体个人。',
    bullets: ['速度来自删减', '工厂也是产品', '执行是组织设计问题']
  },
  {
    kicker: '第四层',
    title: '把公司放进文明叙事',
    summary:
      '后半本把能源、火箭、人工智能、脑机接口和火星放进同一张长期地图里，公司被视为推动文明向前的机器。',
    bullets: ['企业承担长期目标', '技术被赋予文明含义', '未来议题直接进入战略']
  }
];

const domains = [
  {
    icon: '🌐',
    title: '互联网',
    progress: 95,
    status: '已实现',
    tone: 'linear-gradient(90deg, #e4b860, #ff7e31)',
    summary: 'Zip2 与支付阶段已经完成，证明他最先掌握的是信息与软件层面的杠杆。'
  },
  {
    icon: '⚡',
    title: '可持续能源',
    progress: 66,
    status: '进行中',
    tone: 'linear-gradient(90deg, #3bd48e, #54d9ff)',
    summary: 'Tesla、储能与太阳能被放在同一套能源系统里，不是卖车，而是改写能源基础设施。'
  },
  {
    icon: '🚀',
    title: '太空探索',
    progress: 48,
    status: '进行中',
    tone: 'linear-gradient(90deg, #5aa7ff, #54d9ff)',
    summary: 'SpaceX 的终点不是发射业务，而是把进入太空和去火星的成本打到可持续。'
  },
  {
    icon: '🤖',
    title: '人工智能',
    progress: 56,
    status: '双刃剑',
    tone: 'linear-gradient(90deg, #8e7bff, #f04bb6)',
    summary: '书里对人工智能既兴奋又警惕，它被视为文明级变量，不能只看增长潜力。'
  },
  {
    icon: '🧠',
    title: '脑机接口',
    progress: 23,
    status: '前沿试探',
    tone: 'linear-gradient(90deg, #44e3af, #b88cff)',
    summary: '它被当成连接能力补丁，短期是医疗，长期是人类与更强系统并存时的带宽升级。'
  }
];

const tools = [
  {
    kicker: '思维工具',
    title: '第一性原理',
    summary: '不从类比出发，而从物理规律、材料成本和底层约束出发，重新判断什么是真的难、什么只是传统太重。',
    bullets: ['把问题拆到不能再拆', '别把行业经验当自然法则', '从底层重算成本与可能性']
  },
  {
    kicker: '思维工具',
    title: '魔杖数字',
    summary: '先看理论上的极限值，再判断今天距离极限还有多大优化空间。这个动作让团队不容易把平庸当现实。',
    bullets: ['先想完美值是多少', '用极限值衡量浪费', '让目标有方向感']
  },
  {
    kicker: '思维工具',
    title: '白痴指数',
    summary: '最终售价与原材料成本相比，如果差距异常大，说明中间流程、结构和协作里存在巨大的低效空间。',
    bullets: ['价格差距暴露流程臃肿', '越复杂越要回看材料成本', '浪费往往藏在中间层']
  },
  {
    kicker: '思维工具',
    title: '追求更少的错误',
    summary: '它不是追求绝对正确，而是承认自己随时可能错，然后持续校正，保证今天比昨天更贴近真实。',
    bullets: ['默认自己会犯错', '让坏消息尽快出现', '真实比面子重要']
  }
];

const parts = [
  {
    id: 'mission',
    index: '第一部分',
    title: '追求使命',
    hook: '先解决“什么值得投入”，否则后面所有高强度执行都会像无意义透支。',
    summary:
      '这部分是价值底盘。它把“有用性”放在个人成功和职业荣耀之前，再把第一性原理接进来，形成一种很典型的马斯克式成功定义：去做真正重要、且有机会扩大现实边界的事。',
    focus: '适合先抓价值标准与判断框架',
    reader: '第一次接触这本书的人应该从这里起步',
    chapters: ['有用的人生', '像物理学家一样思考', '工程创造价值', '为未来而战'],
    takeaways: [
      '职业选择先过“是否有用”这一关。',
      '第一性原理是绕开行业惯性的工具。',
      '工程被视为愿景与现实之间的真正桥梁。'
    ],
    frame:
      '如果你不先理解这一层，第二部分的高压执行会显得像偏执；读懂这一层后，后面的强度才会变得有逻辑。'
  },
  {
    id: 'execution',
    index: '第二部分',
    title: '极限硬核执行',
    hook: '这一部分回答的是：怎样把极难的事真的做出来，而不是做成一堆漂亮幻灯片。',
    summary:
      '这部分最像管理操作手册。它集中讲责任、一线领导、组织边界、沟通路径、工厂、瓶颈、时间压缩和马斯克算法。书的现实价值主要集中在这里。',
    focus: '适合管理者和做复杂项目的人反复看',
    reader: '如果你最关心组织效率，这一部分优先级最高',
    chapters: ['承担责任', '前线领导', '精英团队', '组织边界最小化', '马斯克算法', '制造是护城河'],
    takeaways: [
      '速度不是催出来的，而是删出来的。',
      '领导者必须靠近现场，不能只靠汇报系统判断。',
      '工厂、供应链和制造本身就是产品能力的一部分。'
    ],
    frame:
      '这一部分把抽象目标变成组织纪律，也是全书最容易被迁移到现实工作的区域。'
  },
  {
    id: 'company',
    index: '第三部分',
    title: '建立公司',
    hook: '这里不只是讲创业故事，而是讲连续下注、熬过危机和压回下一局的结构。',
    summary:
      'Zip2、PayPal、Tesla、SpaceX 在这里被串成一条线。重点不在传奇色彩，而在每一次退出如何变成下一次更大押注的筹码，以及控制关键方向为何重要。',
    focus: '适合创业者看连续创业与控制权逻辑',
    reader: '想看故事的人会最先被这一部分吸引',
    chapters: ['Zip2 起点', '支付战场', 'Tesla 下注', 'SpaceX 豪赌', '2008 至暗时刻'],
    takeaways: [
      '退出不是终点，而是进入下一局的资金来源。',
      '关键技术与关键方向不能太早丢失控制权。',
      '危机时刻最能暴露真实的判断结构。'
    ],
    frame:
      '这部分的价值在于让你看到：方法不是抽象格言，它们会在现金流、失败和时间压力下被逼出真实形状。'
  },
  {
    id: 'future',
    index: '第四部分',
    title: '为了人类未来',
    hook: '最后一部分把公司叙事提升到文明尺度，也把这本书最有争议的地方全部推到台前。',
    summary:
      '从这里开始，书的尺度明显放大。能源丰裕、人工智能风险、脑机接口、存在性风险和火星移民被放进一套长期叙事里。它最有想象力，也最需要独立判断。',
    focus: '适合拿走问题意识，不适合整套照搬',
    reader: '关注人工智能、能源和火星的人应重点看这里',
    chapters: ['丰裕时代', '人工智能风险', '脑机接口', '存在性风险', '成为多行星物种'],
    takeaways: [
      '企业被定义为解决长期人类问题的推进器。',
      '人工智能在书里同时是巨大机会和巨大风险。',
      '火星承担的是文明备份，而不是单纯浪漫叙事。'
    ],
    frame:
      '前半本更像方法论，后半本更像世界观。读到这里时，最重要的不是同意，而是学会区分可迁移的方法与有争议的判断。'
  }
];

const algorithm = [
  {
    index: '01',
    title: '先质疑需求本身',
    text: '任何要求都应该能追到具体责任人。模糊来源的要求最危险，因为它们最容易把组织带进没有人负责的复杂度。',
    bullets: ['先问“是谁要求的”', '要求必须能追责到个人', '不要把“部门要求”当免检通行证']
  },
  {
    index: '02',
    title: '然后拼命删除部件或流程',
    text: '大多数团队的默认姿势是先保留。书里的姿势相反：先删，删到痛，再把真正不可缺的东西加回来。',
    bullets: ['如果从没删错过，通常说明删得还不够', '复杂性常常只是历史残留', '别迷信“保险起见”']
  },
  {
    index: '03',
    title: '再做简化与优化',
    text: '很多人把高强度投入花在优化一件本不该存在的东西上。删除之后再优化，才能避免漂亮地浪费。',
    bullets: ['先确认对象合理', '减少层次，再谈效率', '别被技术美感带偏方向']
  },
  {
    index: '04',
    title: '确定方向后再加速',
    text: '提速当然重要，但前提是结构和方向已经成立。否则越快，越像把错误以更高效率复制出去。',
    bullets: ['速度服务于真实进展', '错误方向上的高效率只会放大损失', '节拍压缩要和反馈同步']
  },
  {
    index: '05',
    title: '最后才考虑自动化',
    text: '自动化在书里不是先进感标志，而是成熟流程的末端动作。过早自动化，只会把低效固化成更贵的系统。',
    bullets: ['自动化必须放在最后', '错误流程不值得买机器去固化', '先跑顺，再买重工具']
  }
];

const timeline = [
  {
    year: '1995',
    title: 'Zip2 起步',
    desc: '进不去想去的互联网公司，就自己写软件、自己卖产品。起点并不神话，而是一种极低成本的野蛮启动。',
    tags: ['自己写代码', '小团队', '互联网地图与导航']
  },
  {
    year: '1999',
    title: '退出后继续压回支付战场',
    desc: '卖掉 Zip2 并没有结束，反而变成进入金融互联网的门票。退出收益被视为进入下一局的燃料，而不是退休资本。',
    tags: ['再次全押', 'X.com / PayPal', '连续创业']
  },
  {
    year: '2002',
    title: '创立 SpaceX',
    desc: 'SpaceX 在这里不是单纯火箭公司，而是同时下注火箭成本结构与多行星生存可能性的双重项目。',
    tags: ['重算火箭成本', '前三次失败', '长期目标大于短期商业']
  },
  {
    year: '2004',
    title: '投入 Tesla',
    desc: '电动车在书里不是消费升级品，而是能源迁移入口。真正困难的不是做一辆车，而是把制造和供应链系统做出来。',
    tags: ['能源转型入口', '产品走向工厂', '制造地狱']
  },
  {
    year: '2006',
    title: 'SolarCity 补上能源拼图',
    desc: '汽车、电池、太阳能开始被放在同一张系统图里，显示出他更偏爱“系统闭环”而不是单点公司。',
    tags: ['能源闭环', '住宅太阳能', '系统性视角']
  },
  {
    year: '2008',
    title: '至暗时刻',
    desc: 'SpaceX 连续失败，Tesla 现金见底，金融危机又把外部环境一起压下来。书里把这一年写成判断结构被完整暴露的时刻。',
    tags: ['几乎破产', '最后的现金分配', '危机检验判断']
  },
  {
    year: '2008 年末',
    title: '第四次发射成功，故事改写',
    desc: '在几乎没有退路的情况下，SpaceX 第四次发射成功，关键合同也随之到来。连续失败后的反转，成为整条时间线的拐点。',
    tags: ['最后机会成功', '关键合同', '从濒死到转折']
  }
];

const futureTopics = [
  {
    label: '为什么是火星？',
    title: '多行星不是浪漫主义，而是文明保险',
    text: '书里把火星定义成对存在性风险的长期对冲。它不是去一次就算完成，而是要建设在地球出事时仍能自我维持的文明据点。',
    bullets: ['关键门槛是自给自足，而不是一次登陆', '运输成本决定火星方案是否可扩展', '单星球文明被视为过于脆弱']
  },
  {
    label: '现实的残酷',
    title: '去火星从来不是舒适叙事',
    text: '这部分最强烈的地方在于它不遮掩代价：高死亡概率、漫长旅程、极端环境，以及早期殖民地长期的资源匮乏。',
    bullets: ['高风险不是故事装饰，而是前提', '真正困难的是长期生存系统', '这不是豪华版旅游，而是远洋时代式开拓']
  },
  {
    label: '绿色丰裕',
    title: '可持续能源被写成文明底盘',
    text: '电动车、储能和太阳能在书里是一张图，不是三门生意。能源越便宜、越稳定、越可扩张，文明的操作空间就越大。',
    bullets: ['能源产出决定经济潜力', '越早脱离不可再生能源越好', '终局是更便宜、更安静、更充裕的能源世界']
  },
  {
    label: '智能变量',
    title: '人工智能既是跃迁机会，也是最高等级风险',
    text: '这本书对人工智能的态度并不轻松。它一边承认超强系统的巨大生产力，一边反复强调目标失配与失控风险。',
    bullets: ['核心焦虑是目标脱钩', '真实与安全被放在极高位置', '人工智能被视为文明级变量']
  }
];

const quotes = [
  {
    title: '有用，才值得投入',
    source: '价值标准',
    text: '全书最稳定的判断不是成功，而是有用。它不断把读者拉回一个更硬的问题：这件事究竟有没有真实贡献。'
  },
  {
    title: '重要问题，要从底层原理往上推',
    source: '认知方式',
    text: '书里真正推崇的不是“聪明”，而是把行业惯例拆开，看见更底层的约束，然后重新推理。'
  },
  {
    title: '最常见的错误，是优化不该存在的东西',
    source: '马斯克算法',
    text: '它对组织最大的挑战是：先承认自己可能把很多时间花在错误对象上，再谈提速。'
  },
  {
    title: '原型不是难点，制造才是',
    source: '执行与工厂',
    text: '书里最务实的部分就在这里。做出一个能演示的样品不算赢，能稳定、低成本、大规模做出来才算。'
  },
  {
    title: '重要的事，即使胜算不高也要做',
    source: '创业与下注',
    text: '这本书塑造的创业者形象，不是风险厌恶者，而是愿意为高价值问题承受更高不确定性的人。'
  },
  {
    title: '公司不是赚钱容器，而是推动未来的机器',
    source: '文明叙事',
    text: '后半本最大的野心，是把企业重新定义成文明推进器。这也是它最有力量、也最容易引发争议的部分。'
  }
];

const methodCategories = [
  {
    id: 'value',
    label: '价值标准',
    intro: '这一组方法回答的是“什么值得做”。',
    items: [
      { title: '普通人也能把自己练到不普通', note: '能力不是先天标签，而是长期投入后的结果。' },
      { title: '先问是否有用，再问是否好看', note: '有贡献的工作比体面的叙事更重要。' },
      { title: '荣耀不是目标，贡献才是', note: '别把外界认同误当成工作的意义。' },
      { title: '采取会提高未来变好概率的行动', note: '方向感来自长期效果，而不是一时热闹。' },
      { title: '工作的意义来自真实产出', note: '如果没造出东西，就只是停留在表述层。' },
      { title: '对社会净贡献高于个人头衔', note: '评价标准应该落在结果，而不是身份。' },
      { title: '如果不制造东西，世界不会变', note: '工程与制造在书里占据极高地位。' },
      { title: '使命应比舒适更大', note: '真正困难的问题通常伴随长期不舒服。' },
      { title: '长期问题比热点问题更值钱', note: '越是基础设施级问题，越值得下重注。' },
      { title: '让产品真的改善生活', note: '用户价值不是宣传词，而是判断底线。' },
      { title: '把资源投向更难但更重要的事', note: '轻松路径往往没有战略回报。' },
      { title: '长期价值值得承受短期痛感', note: '书里大量决策都建立在这条取舍上。' }
    ]
  },
  {
    id: 'thinking',
    label: '认知方式',
    intro: '这一组方法决定“你用什么脑子判断问题”。',
    items: [
      { title: '从第一性原理出发', note: '从物理、材料和真实约束出发，而不是从行业常识出发。' },
      { title: '默认自己可能有错', note: '认知进步来自持续纠偏，而不是持续自证。' },
      { title: '追求比昨天少错一点', note: '它强调渐进逼近真实，而不是装出绝对确定。' },
      { title: '把问题拆到材料、成本和物理限制', note: '拆到底层，才能看见真实优化空间。' },
      { title: '先看理论极限值', note: '先知道天花板，再判断现实还有多大提升余地。' },
      { title: '别把历史困难当未来定数', note: '过去难，不等于今天仍然必须难。' },
      { title: '先找真实约束，再讨论情绪', note: '先搞清客观边界，再处理主观判断。' },
      { title: '让数字暴露浪费', note: '很多无效流程只要被量化就会原形毕露。' },
      { title: '先问“为什么必须这样”', note: '这个问题能拆掉很多陈年习惯。' },
      { title: '不用黑话替代判断', note: '概念感越强，越要小心它是否遮蔽了问题。' },
      { title: '真相比面子重要', note: '坏消息越早到达，系统越有修正机会。' },
      { title: '让系统直接接触现实反馈', note: '不要只活在中层总结和二手信息里。' }
    ]
  },
  {
    id: 'execution',
    label: '执行机制',
    intro: '这一组方法回答的是“怎样推进事情”。',
    items: [
      { title: '先质疑需求', note: '不被质疑的需求最容易制造巨大浪费。' },
      { title: '再删除步骤', note: '先把不必要的东西拿掉，再谈后续动作。' },
      { title: '然后简化结构', note: '把系统变短、变薄、变直接。' },
      { title: '再提高速度', note: '方向对了之后，速度才有放大价值。' },
      { title: '最后才自动化', note: '别把未成熟流程固化成昂贵的机器系统。' },
      { title: '错误流程越快越危险', note: '提速会同步放大错误。' },
      { title: '并行推进压缩周期', note: '关键路径越短，组织反应越快。' },
      { title: '关键项目按日跟踪', note: '重要事项不适合靠周会慢慢讲。' },
      { title: '能在现场解决，就别拖到会上', note: '短反馈链比完美会议更重要。' },
      { title: '把瓶颈公开化', note: '系统速度最终由最慢的那一段决定。' },
      { title: '原型不是终点，制造才是大考', note: '能演示和能量产是两种完全不同的能力。' }
    ]
  },
  {
    id: 'organization',
    label: '组织管理',
    intro: '这一组方法解决“怎样组织人和系统”。',
    items: [
      { title: '领导者必须贴近一线', note: '离现场越远，判断误差通常越大。' },
      { title: '坏消息要快、直、尽早出现', note: '把问题藏住，对系统是更大的伤害。' },
      { title: '组织边界越厚，误差越大', note: '层层转述会快速稀释真实信息。' },
      { title: '能力密度比人数重要', note: '强团队首先是高标准团队。' },
      { title: '跨部门目标要直接对齐', note: '不要让部门利益替代系统目标。' },
      { title: '不用汇报代替判断', note: '文档可以辅助，但不能代替面对现实。' },
      { title: '责任必须指向具体个人', note: '责任模糊就意味着问题无人拥有。' },
      { title: '高标准和高容错要同时存在', note: '允许试错，但不允许反复低水平错误。' },
      { title: '会议越短越好', note: '会议是手段，不是工作的主体。' },
      { title: '设计、工程、制造要一起迭代', note: '拆开之后，产品和工厂会一起失真。' },
      { title: '工厂本身就是产品的一部分', note: '制造系统决定规模化质量与成本。' },
      { title: '奖励真正解决问题的人', note: '不是谁会讲，而是谁能把系统往前推。' }
    ]
  },
  {
    id: 'founding',
    label: '创业与下注',
    intro: '这一组方法回答的是“怎样决定下注、怎样熬过下注”。',
    items: [
      { title: '重要的事，即使低胜算也要做', note: '价值足够高时，概率不是唯一变量。' },
      { title: '退出是下一局筹码，不是收工信号', note: '连续创业依赖资本的持续再部署。' },
      { title: '关键方向不要过早让渡控制权', note: '控制权决定公司能否保持原始使命。' },
      { title: '先找能长期复利的问题', note: '真正大的创业，不是短期套利。' },
      { title: '创业等于持续重新下注', note: '每一轮成功都只是下一轮的起点。' },
      { title: '资金优先压向关键瓶颈', note: '最短板最值得被资源优先攻击。' },
      { title: '危机时不要自欺', note: '最危险的不是坏消息，而是假装没事。' },
      { title: '用户反馈比行业掌声更值钱', note: '市场表演感常常会误导创业者。' },
      { title: '在谷底保持行动能力', note: '组织在极端压力下的反应，决定能否活下来。' },
      { title: '找愿意为使命吃苦的人', note: '困难任务需要高认同感，不只是高薪资。' },
      { title: '最难阶段决定公司气质', note: '企业文化往往是在危机里被真正写出来的。' }
    ]
  },
  {
    id: 'future',
    label: '未来与文明',
    intro: '这一组方法说明“为什么这本书最后会走到文明尺度”。',
    items: [
      { title: '公司也可以是文明推进器', note: '企业不只服务市场，也可以服务长期人类问题。' },
      { title: '可持续能源是文明底盘', note: '便宜、稳定、可扩张的能源决定社会上限。' },
      { title: '人工智能先求真实与安全', note: '能力越强，目标对齐就越关键。' },
      { title: '超强智能是文明级变量', note: '它不是单一行业问题，而是全局问题。' },
      { title: '脑机接口是连接能力补丁', note: '它被想象成缩小人机带宽差距的一种路径。' },
      { title: '多行星是风险分散', note: '文明保险的核心逻辑是别把所有筹码压在一个星球。' },
      { title: '运输成本决定火星是否可达', note: '火星叙事最终还是工程和成本问题。' },
      { title: '文明需要能源丰裕', note: '丰裕不是奢侈，而是可持续发展的前提。' },
      { title: '技术选择要看生存概率', note: '最终衡量标准是文明是否更稳健。' },
      { title: '长期叙事必须落到产品', note: '再大的愿景，也要落到公司与工程系统。' },
      { title: '未来要被制造出来，不是被等待', note: '真正的未来感来自工程动作，而不是口号。' }
    ]
  }
];

const elements = {
  overviewGrid: document.getElementById('overviewGrid'),
  domainList: document.getElementById('domainList'),
  toolList: document.getElementById('toolList'),
  partTabs: document.getElementById('partTabs'),
  partDetail: document.getElementById('partDetail'),
  algorithmSteps: document.getElementById('algorithmSteps'),
  timelineList: document.getElementById('timelineList'),
  futureGrid: document.getElementById('futureGrid'),
  quoteGrid: document.getElementById('quoteGrid'),
  methodFilter: document.getElementById('methodFilter'),
  methodGrid: document.getElementById('methodGrid')
};

let activePartId = parts[0].id;
let activeMethodCategory = methodCategories[0].id;

function escapeHtml(input) {
  return String(input)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderOverview() {
  elements.overviewGrid.innerHTML = overviewCards
    .map(
      (item) => `
        <article class="overview-card">
          <p class="meta-kicker">${escapeHtml(item.kicker)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <ul>
            ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
}

function renderDomains() {
  elements.domainList.innerHTML = domains
    .map(
      (item) => `
        <article class="domain-row">
          <div class="domain-name">
            <strong>${escapeHtml(item.icon)} ${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.status)}</span>
          </div>
          <div class="domain-bar">
            <div class="domain-fill" style="width: ${item.progress}%; background: ${item.tone};"></div>
          </div>
          <p class="domain-note">${escapeHtml(item.summary)}</p>
        </article>
      `
    )
    .join('');
}

function renderTools() {
  elements.toolList.innerHTML = tools
    .map(
      (item) => `
        <article class="tool-card">
          <p class="meta-kicker">${escapeHtml(item.kicker)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <ul>
            ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
}

function renderPartTabs() {
  elements.partTabs.innerHTML = parts
    .map(
      (part) => `
        <button class="part-tab${part.id === activePartId ? ' is-active' : ''}" data-part-id="${escapeHtml(part.id)}" type="button">
          <p class="meta-kicker">${escapeHtml(part.index)}</p>
          <h3>${escapeHtml(part.title)}</h3>
          <p>${escapeHtml(part.hook)}</p>
        </button>
      `
    )
    .join('');

  elements.partTabs.querySelectorAll('[data-part-id]').forEach((button) => {
    button.addEventListener('click', () => {
      activePartId = button.getAttribute('data-part-id') || parts[0].id;
      renderPartTabs();
      renderPartDetail();
    });
  });
}

function renderPartDetail() {
  const part = parts.find((item) => item.id === activePartId) || parts[0];

  elements.partDetail.innerHTML = `
    <article class="part-detail-card">
      <p class="meta-kicker">${escapeHtml(part.index)}</p>
      <h3>${escapeHtml(part.title)}</h3>
      <p class="part-summary">${escapeHtml(part.summary)}</p>

      <div class="part-meta">
        <span>${escapeHtml(part.focus)}</span>
        <span>${escapeHtml(part.reader)}</span>
      </div>

      <div class="detail-grid">
        <section class="detail-box">
          <h4>这一部分的任务</h4>
          <p>${escapeHtml(part.hook)}</p>
        </section>
        <section class="detail-box">
          <h4>优先章节</h4>
          <div class="chip-row">
            ${part.chapters.map((chapter) => `<span>${escapeHtml(chapter)}</span>`).join('')}
          </div>
        </section>
        <section class="detail-box">
          <h4>看完最该带走</h4>
          <ul>
            ${part.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
          </ul>
        </section>
        <section class="detail-box">
          <h4>怎么理解它的位置</h4>
          <p>${escapeHtml(part.frame)}</p>
        </section>
      </div>
    </article>
  `;
}

function renderAlgorithm() {
  elements.algorithmSteps.innerHTML = algorithm
    .map(
      (step) => `
        <article class="algo-card">
          <div class="algo-index">${escapeHtml(step.index)}</div>
          <div class="algo-copy">
            <h3>${escapeHtml(step.title)}</h3>
            <p>${escapeHtml(step.text)}</p>
            <ul>
              ${step.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}
            </ul>
          </div>
        </article>
      `
    )
    .join('');
}

function renderTimeline() {
  elements.timelineList.innerHTML = timeline
    .map(
      (item) => `
        <article class="timeline-card">
          <div>
            <p class="meta-kicker timeline-year">${escapeHtml(item.year)}</p>
          </div>
          <div class="timeline-body">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.desc)}</p>
            <div class="timeline-tags">
              ${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderFuture() {
  elements.futureGrid.innerHTML = futureTopics
    .map(
      (topic) => `
        <article class="future-card">
          <p class="meta-kicker">${escapeHtml(topic.label)}</p>
          <h3>${escapeHtml(topic.title)}</h3>
          <p>${escapeHtml(topic.text)}</p>
          <ul>
            ${topic.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
}

function renderQuotes() {
  elements.quoteGrid.innerHTML = quotes
    .map(
      (quote) => `
        <article class="quote-card">
          <h3>${escapeHtml(quote.title)}</h3>
          <p>${escapeHtml(quote.text)}</p>
          <p class="meta-kicker">${escapeHtml(quote.source)}</p>
        </article>
      `
    )
    .join('');
}

function renderMethodFilters() {
  elements.methodFilter.innerHTML = methodCategories
    .map(
      (category) => `
        <button class="${category.id === activeMethodCategory ? 'is-active' : ''}" data-method-category="${escapeHtml(category.id)}" type="button">
          ${escapeHtml(`${category.label} · ${category.items.length}`)}
        </button>
      `
    )
    .join('');

  elements.methodFilter.querySelectorAll('[data-method-category]').forEach((button) => {
    button.addEventListener('click', () => {
      activeMethodCategory = button.getAttribute('data-method-category') || methodCategories[0].id;
      renderMethodFilters();
      renderMethods();
    });
  });
}

function renderMethods() {
  const active = methodCategories.find((item) => item.id === activeMethodCategory) || methodCategories[0];

  elements.methodGrid.innerHTML = [
    `
      <article class="method-card is-featured">
        <p class="meta-kicker">${escapeHtml(active.label)} · ${active.items.length} 条</p>
        <h3>${escapeHtml(active.intro)}</h3>
        <p>这一组不是横向滚动列表，而是固定知识网格。你可以把它当成这一类方法的速记卡片墙，先扫一遍，再挑和你工作最相关的几条深读。</p>
      </article>
    `,
    ...active.items.map(
      (item, index) => `
        <article class="method-card">
          <p class="meta-kicker">${escapeHtml(active.label)} · ${String(index + 1).padStart(2, '0')}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.note)}</p>
        </article>
      `
    )
  ].join('');
}

function setupReveal() {
  const nodes = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    nodes.forEach((node) => node.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  nodes.forEach((node) => observer.observe(node));
}

function setupActiveNav() {
  const links = [...document.querySelectorAll('.nav-link')];
  const sections = links
    .map((link) => {
      const href = link.getAttribute('href');
      return href ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  if (!('IntersectionObserver' in window)) {
    if (links[0]) {
      links[0].classList.add('is-active');
    }
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

      if (!current) {
        return;
      }

      links.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${current.target.id}`);
      });
    },
    { rootMargin: '-20% 0px -55% 0px', threshold: [0.12, 0.28, 0.5] }
  );

  sections.forEach((section) => observer.observe(section));
}

renderOverview();
renderDomains();
renderTools();
renderPartTabs();
renderPartDetail();
renderAlgorithm();
renderTimeline();
renderFuture();
renderQuotes();
renderMethodFilters();
renderMethods();
setupReveal();
setupActiveNav();
