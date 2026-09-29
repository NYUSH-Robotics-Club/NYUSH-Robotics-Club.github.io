import type { LocalizedText } from './text';

/**
 * 社团活动与赛事记录。中英双语。
 *
 * 之前 Home 和 Events 两个页面各自硬编码一份列表，改一处要改两处。
 * 现在统一在这里维护，页面只负责渲染。
 */

export type EventCategory = 'award' | 'competition' | 'past';

/** 归属：两支竞赛队，或社团层面的活动 */
export type EventTeam = 'vexu' | 'robomaster' | 'club';

export interface SpeakerInfo {
  name: string;
  affiliation: LocalizedText;
  linkLabel?: string;
  linkHref?: string;
}

export interface ClubEvent {
  /** 稳定 id，用作 React key */
  id: string;
  /** 这条记录属于谁 */
  team: EventTeam;
  category: EventCategory;
  /** 展示用的时间描述 */
  date: LocalizedText;
  /** 机器可读的起始日期（ISO 8601），供 <time dateTime> 使用 */
  dateISO: string;
  title: LocalizedText;
  /** 卡片配图；暂无合适照片时留空 */
  img?: string;
  /**
   * 同一张图的 700px 宽变体。
   * 卡片在桌面端只占几百像素，没有它浏览器会去下 1400px 那张。
   */
  imgSmall?: string;
  /** 配图原始像素尺寸，用于 width/height 与 srcset */
  imgW?: number;
  imgH?: number;
  imgAlt?: LocalizedText;
  /** 正文段落 */
  body: LocalizedText[];
  speaker?: SpeakerInfo;
  /** 卡片整体可点击时指向的内部路由 */
  to?: string;
}

export const EVENTS: ClubEvent[] = [
  {
    id: 'vex-asia-open-2025',
    team: 'vexu',
    category: 'award',
    date: { en: 'Dec 29, 2024 – Jan 1, 2025', zh: '2024年12月29日 – 2025年1月1日' },
    dateISO: '2024-12-29',
    title: {
      en: 'Second Prize – VEX Asia Open Signature Event',
      zh: '二等奖 —— VEX 机器人亚洲公开赛国际签名赛',
    },
    img: '/images/2024_VEX_Asia_Open_Signaure_Event/DSC07467.webp',
    imgSmall: '/images/2024_VEX_Asia_Open_Signaure_Event/DSC07467-700.webp',
    imgW: 1400,
    imgH: 933,
    imgAlt: {
      en: 'The club at the VEX Asia Open Signature Event',
      zh: '社团在 VEX 机器人亚洲公开赛国际签名赛现场',
    },
    body: [
      {
        en: 'From December 29th to January 1st, the NYU Shanghai Robotics Club earned an impressive second prize at the VEX Asia Open Signature Event. The competition welcomed over 500 elite teams from China, Macao, Hong Kong, the United States, Singapore, and the UAE. Both NYU Shanghai teams advanced through the group stages, demonstrating exceptional skill and perseverance.',
        zh: '2024 年 12 月 29 日至 2025 年 1 月 1 日，上海纽约大学机器人俱乐部在 VEX 机器人亚洲公开赛国际签名赛上获得二等奖。赛事汇聚了来自中国、澳门、香港、美国、新加坡和阿联酋的 500 余支队伍。上纽大的两支队伍均从小组赛出线，展现出扎实的技术和顽强的作风。',
      },
    ],
  },
  {
    id: 'sjtu-vex-elite-invitational-2024',
    team: 'vexu',
    category: 'award',
    date: { en: 'Dec 22, 2024', zh: '2024年12月22日' },
    dateISO: '2024-12-22',
    title: {
      en: 'Promising Award – SJTU VEX Elite Invitational Competition',
      zh: '潜力奖 —— 上海交通大学 VEX 精英邀请赛',
    },
    img: '/images/2024-vex-elite-invitational/dsc06769.webp',
    imgSmall: '/images/2024-vex-elite-invitational/dsc06769-700.webp',
    imgW: 1400,
    imgH: 933,
    imgAlt: {
      en: 'The club receiving the Promising Award at SJTU',
      zh: '社团在上海交大领取潜力奖',
    },
    body: [
      {
        en: 'On December 22, 2024, the NYU Shanghai Robotics Club received the Promising Award at the SJTU VEX Elite Invitational Competition. The event featured 29 teams from 17 top universities including SJTU, Xi’an Jiaotong University, Tongji University, and HIT Shenzhen. This recognition highlights the club’s dedication to innovation and collaboration in competitive robotics.',
        zh: '2024 年 12 月 22 日，上海纽约大学机器人俱乐部在上海交通大学 VEX 精英邀请赛上获得潜力奖。赛事共有来自上海交大、西安交通大学、同济大学、哈工大（深圳）等 17 所高校的 29 支队伍参加。这个奖项是对社团在竞赛机器人上持续投入与协作的肯定。',
      },
    ],
  },
  {
    id: 'rmul-2026-jiangsu',
    team: 'robomaster',
    category: 'award',
    date: { en: 'Mar 27–29, 2026', zh: '2026年3月27–29日' },
    dateISO: '2026-03-27',
    title: {
      en: 'RoboMaster University League 2026 – Jiangsu Station',
      zh: 'RoboMaster 2026 机甲大师高校联盟赛 · 江苏站',
    },
    body: [
      {
        en: 'The 25th National University Robot Competition — RoboMaster 2026 University League (Jiangsu Station) was held at the Jiangyin Gymnasium from March 27 to 29, 2026, bringing together nearly 40 university teams from across the country.',
        zh: '第二十五届全国大学生机器人大赛 RoboMaster 2026 机甲大师高校联盟赛（江苏站）于 2026 年 3 月 27 日至 29 日在江阴市体育馆举行，共有来自全国近 40 所高校的队伍参赛。',
      },
      {
        en: 'Our team, United Force (联合力量), competed in the non-A-tier division and took home a Third Prize in the 3v3 Combat and a Third Prize in the Infantry Combat. In the individual robot awards, our infantry robot earned a Second Prize in the 3v3 Combat – Infantry Robot category.',
        zh: '我们的「联合力量」战队参加非甲级组比赛，获得 3V3 对抗赛三等奖和步兵对抗赛三等奖；在机器人竞技奖评选中，步兵机器人拿下 3V3 对抗赛·步兵机器人二等奖。',
      },
    ],
  },
  {
    id: 'vex-u-beijing-2025',
    team: 'vexu',
    category: 'competition',
    date: { en: 'Dec 18–21, 2025', zh: '2025年12月18–21日' },
    dateISO: '2025-12-18',
    title: { en: 'VEX U Competition – Beijing', zh: 'VEX U 北京站比赛' },
    img: '/images/events/2025-2026/vex-u-beijing.webp',
    imgSmall: '/images/events/2025-2026/vex-u-beijing-700.webp',
    imgW: 1400,
    imgH: 997,
    imgAlt: { en: 'VEX U competition in Beijing', zh: 'VEX U 北京站比赛现场' },
    body: [
      {
        en: 'From December 18 to 21, 2025, our team participated in the VEX U competition in Beijing. While we did not secure a podium finish, the event offered invaluable opportunities to evaluate and refine our robot’s design and performance. Competing against highly skilled teams allowed us to systematically identify areas for improvement in both hardware and control systems. We subsequently implemented targeted optimizations, resulting in marked enhancements in the robot’s reliability and overall functionality.',
        zh: '2025 年 12 月 18 日至 21 日，我们参加了在北京举行的 VEX U 比赛。虽然没能站上领奖台，但这次比赛给了我们难得的检验机会。与强队交手让我们系统地发现了硬件和控制系统上的短板，赛后我们针对性地做了优化，机器人的稳定性和整体表现都有明显提升。',
      },
    ],
  },
  {
    id: 'vex-asian-open-xian-2026',
    team: 'vexu',
    category: 'competition',
    date: { en: 'Jan 1–3, 2026', zh: '2026年1月1–3日' },
    dateISO: '2026-01-01',
    title: {
      en: 'VEX Robotics Asian Open Grand Finals – Xi’an',
      zh: 'VEX 机器人亚洲公开赛总决赛 · 西安',
    },
    img: '/images/events/2025-2026/vex-asian-open-xian.webp',
    imgSmall: '/images/events/2025-2026/vex-asian-open-xian-700.webp',
    imgW: 1400,
    imgH: 1050,
    imgAlt: {
      en: 'VEX Robotics Asian Open Grand Finals in Xi’an',
      zh: '西安 VEX 机器人亚洲公开赛总决赛现场',
    },
    body: [
      {
        en: 'From January 1 to 3, 2026, the 2025-2026 VEX Robotics Asian Open Grand Finals was held in Xi’an. The NYU Shanghai Robotics Club competed in the VEX U division and ranked 7th in the Asian region. After months of preparation on hardware optimization, software development, and strategy refinement, the team performed strongly in the group stage with key wins against CZTU and HITSZ7, advancing to the elimination rounds.',
        zh: '2026 年 1 月 1 日至 3 日，2025-2026 赛季 VEX 机器人亚洲公开赛总决赛在西安举行。上海纽约大学机器人俱乐部参加 VEX U 组别，最终位列亚洲区第 7。经过数月在硬件优化、软件开发与战术打磨上的准备，队伍在小组赛阶段表现强势，先后战胜 CZTU 和 HITSZ7，晋级淘汰赛。',
      },
      {
        en: 'In the knockout stage, the team faced the experienced U.S. team BAD and delivered a stable and coordinated performance. Overall, the competition demonstrated significant progress in execution consistency, match pacing, and adaptability, providing valuable validation of the team’s engineering design and collaboration.',
        zh: '淘汰赛阶段，队伍遭遇经验丰富的美国战队 BAD，打出了稳定而默契的一场。整体来看，这次比赛在操作稳定性、比赛节奏把控和临场应变上都有明显进步，也验证了队伍在工程设计与协作上的积累。',
      },
    ],
  },
  {
    id: 'sjtu-vex-u-2026',
    team: 'vexu',
    category: 'competition',
    date: { en: 'Jan 24–25, 2026', zh: '2026年1月24–25日' },
    dateISO: '2026-01-24',
    title: { en: 'VEX U Competition – SJTU', zh: 'VEX U 上海交大站比赛' },
    img: '/images/events/2025-2026/sjtu.webp',
    imgSmall: '/images/events/2025-2026/sjtu-700.webp',
    imgW: 1400,
    imgH: 933,
    imgAlt: {
      en: 'VEX U competition hosted by Shanghai Jiao Tong University',
      zh: '上海交通大学主办的 VEX U 比赛现场',
    },
    body: [
      {
        en: 'From January 24 to 25, 2026, our team participated in the VEX U competition hosted by Shanghai Jiao Tong University. During the two-day event, we competed against multiple strong teams and achieved a notable victory against SMP2. The competition provided valuable experience in high-intensity match execution, strategy adjustment, and team coordination, contributing significantly to our technical growth and competitive development.',
        zh: '2026 年 1 月 24 日至 25 日，我们参加了上海交通大学主办的 VEX U 比赛。两天的赛程里我们与多支强队交手，并赢下了对 SMP2 的一场关键比赛。高强度的对抗让我们在临场操作、战术调整和团队配合上都积累了经验，对队伍的技术成长帮助很大。',
      },
    ],
  },
  {
    id: 'usst-friendly-match-2025',
    team: 'club',
    category: 'past',
    date: { en: 'Oct 15, 2025', zh: '2025年10月15日' },
    dateISO: '2025-10-15',
    title: { en: 'USST Friendly Match', zh: '上海理工大学友谊赛' },
    img: '/images/events/2025-2026/usst-friendly-match.webp',
    imgSmall: '/images/events/2025-2026/usst-friendly-match-700.webp',
    imgW: 1400,
    imgH: 1050,
    imgAlt: {
      en: 'Friendly robotics match with the USST Robotics Club',
      zh: '与上海理工大学机器人社的友谊赛',
    },
    body: [
      {
        en: 'On Oct 15, 2025, our robotics club hosted a friendly robotics competition with the University of Shanghai for Science and Technology (USST) Robotics Club to promote academic exchange and collaboration. The event included team-based competitions and a mini-lecture by the USST club president on programming and algorithm design. Members from both universities exchanged ideas and strengthened connections, laying the foundation for future joint projects and collaborations.',
        zh: '2025 年 10 月 15 日，我们与上海理工大学机器人社联合举办了一场友谊赛，推动两校之间的交流与合作。活动包括分组对抗，以及由上理工社长带来的编程与算法设计小型讲座。两校成员交流了想法，也加深了联系，为今后的联合项目打好了基础。',
      },
    ],
  },
  {
    id: '3d-printing-workshop-2025',
    team: 'club',
    category: 'past',
    date: { en: 'Nov 6, 2025', zh: '2025年11月6日' },
    dateISO: '2025-11-06',
    title: { en: '3D Printing Workshop', zh: '3D 打印工作坊' },
    img: '/images/events/2025-2026/3d-printing-workshop.webp',
    imgSmall: '/images/events/2025-2026/3d-printing-workshop-700.webp',
    imgW: 1400,
    imgH: 837,
    imgAlt: {
      en: 'Children designing their own creations at the 3D printing workshop',
      zh: '孩子们在 3D 打印工作坊里设计自己的作品',
    },
    body: [
      {
        en: 'On Nov 6, 2025, our robotics team hosted an engaging 3D Printing Workshop that brought innovation to life. Over 20 curious and enthusiastic children joined us to explore the fascinating world of 3D printing. After learning the fundamentals, they turned theory into practice by designing their very own creations. It was an inspiring experience that united young minds passionate about technology, creativity, and the future of engineering.',
        zh: '2025 年 11 月 6 日，我们办了一场 3D 打印工作坊。20 多个孩子来一起认识 3D 打印：先了解基本原理，再动手把自己的想法做成模型。看着一群对技术、创造和工程感兴趣的小朋友凑在一起，是件挺有意义的事。',
      },
    ],
  },
  {
    id: 'sjtu-prof-lecture-2025',
    team: 'club',
    category: 'past',
    date: { en: 'Dec 8, 2025', zh: '2025年12月8日' },
    dateISO: '2025-12-08',
    title: { en: 'SJTU Professor Lecture', zh: '上海交大教授讲座' },
    img: '/images/events/2025-2026/sjtu-prof-lecture.webp',
    imgSmall: '/images/events/2025-2026/sjtu-prof-lecture-700.webp',
    imgW: 1080,
    imgH: 1350,
    imgAlt: {
      en: 'Professor Chuntao Leng giving a lecture at NYU Shanghai',
      zh: '冷春涛教授在上海纽约大学做讲座',
    },
    body: [
      {
        en: 'On Dec 8, 2025, the Robotics Club hosted an academic seminar featuring Professor Chuntao Leng from Shanghai Jiao Tong University. In his lecture, “Robots, Science and Technology Innovation Practice,” he discussed recent advances in robotics, emerging trends, and the integration of engineering education with innovation practice. Drawing on his experience mentoring championship robotics teams, he shared insights on talent cultivation and engineering training, providing participants with valuable academic and practical perspectives on robotics research and education.',
        zh: '2025 年 12 月 8 日，社团举办了学术讲座，主讲人是上海交通大学冷春涛教授。他以《机器人科技创新实践》为题，介绍了机器人领域的最新进展与趋势，以及工程教育如何与创新实践结合。结合他带队参加机器人竞赛的经验，他分享了人才培养和工程训练方面的做法，给在场同学提供了学术与实践两方面的视角。',
      },
    ],
  },
  {
    id: 'embodied-spatial-intelligence-talk',
    team: 'club',
    category: 'past',
    date: { en: 'Apr 18, 2025', zh: '2025年4月18日' },
    dateISO: '2025-04-18',
    title: {
      en: 'Embodied Spatial Intelligence: Bridging Perception, Reasoning, and Action',
      zh: '具身空间智能：连接感知、推理与行动',
    },
    img: '/images/chen-feng-talk.webp',
    imgSmall: '/images/chen-feng-talk-700.webp',
    imgW: 1131,
    imgH: 681,
    imgAlt: {
      en: 'Prof. Chen Feng presenting on embodied spatial intelligence',
      zh: '陈锋教授讲解具身空间智能',
    },
    body: [
      {
        en: 'This talk introduces how machines learn to see, understand, and interact with the world in ways similar to humans. It explores embodied spatial intelligence, where agents build robust environmental representations to complete navigation and manipulation tasks. Topics included spatial mapping, unknown environment exploration, understanding human intention, and robot learning from human activity videos.',
        zh: '这场讲座介绍机器如何像人一样去看、去理解、去和环境互动。内容围绕具身空间智能展开：智能体如何建立对环境的表征，从而完成导航和操作任务。涉及空间建图、未知环境探索、人类意图理解，以及从人类活动视频中学习机器人操作。',
      },
    ],
    speaker: {
      name: 'Prof. Chen Feng',
      affiliation: {
        en: 'Director of AI4CE Lab, NYU. NSF CAREER Awardee.',
        zh: '纽约大学 AI4CE 实验室主任，NSF CAREER 奖获得者。',
      },
      linkLabel: 'ai4ce.github.io',
      linkHref: 'https://ai4ce.github.io',
    },
  },
  {
    id: 'lenovo-field-trip-2024',
    team: 'club',
    category: 'past',
    date: { en: 'Nov 15, 2024', zh: '2024年11月15日' },
    dateISO: '2024-11-15',
    title: { en: 'Field Trip: Robotics Club | Lenovo Future Center', zh: '参访：联想未来中心' },
    img: '/images/group-photo.webp',
    imgSmall: '/images/group-photo-700.webp',
    imgW: 1400,
    imgH: 933,
    imgAlt: {
      en: 'Club members on a field trip to the Lenovo Future Center',
      zh: '社团成员参访联想未来中心',
    },
    body: [
      {
        en: 'On November 15, 2024, members of the NYU Shanghai Robotics Club visited the Lenovo Future Center in Shanghai. During the trip, students explored cutting-edge technologies in AI, robotics, and smart manufacturing. The field trip offered valuable industry exposure and sparked meaningful discussions on the future of robotics.',
        zh: '2024 年 11 月 15 日，社团成员参访了位于上海的联想未来中心。同学们近距离了解了人工智能、机器人和智能制造方面的最新技术。这次参访让大家接触到产业一线的做法，也引发了不少关于机器人未来的讨论。',
      },
    ],
  },
  {
    id: 'involvement-fair-2024',
    team: 'club',
    category: 'past',
    date: { en: 'Sep 12, 2024', zh: '2024年9月12日' },
    dateISO: '2024-09-12',
    title: { en: '2024 Fall Involvement Fair', zh: '2024 秋季社团招新会' },
    img: '/images/involvement-fair/involvement-fair-1.webp',
    imgSmall: '/images/involvement-fair/involvement-fair-1-700.webp',
    imgW: 1400,
    imgH: 933,
    imgAlt: {
      en: 'Robotics Club booth at the 2024 Fall Involvement Fair',
      zh: '2024 秋季招新会上的机器人社摊位',
    },
    body: [
      {
        en: 'On September 12, 2024, the Robotics Club participated in the Fall Involvement Fair held at NYU Shanghai’s Qiantan campus. Club members showcased past projects, upcoming events, and the vision of the club to dozens of interested students and faculty. The fair served as a strong recruiting opportunity, welcoming a new wave of robotics enthusiasts into our community.',
        zh: '2024 年 9 月 12 日，社团参加了在上纽大前滩校区举办的秋季招新会。社员向到场的同学和老师展示了过往项目、接下来的活动安排，以及社团的方向。这次招新为我们带来了一批新的机器人爱好者。',
      },
    ],
    to: '/past-event-involvementfair',
  },
];

export const byCategory = (category: EventCategory) =>
  EVENTS.filter((event) => event.category === category);

/** 某个队的全部记录（VEX U 页用） */
export const byTeam = (team: EventTeam) => EVENTS.filter((event) => event.team === team);
