import type { LocalizedText } from './text';

/**
 * 社团得过的全部奖项。单一来源，主页与 RoboMaster / VEX U 页都从这里取。
 *
 * 一条 = 一个具体奖项（不是一场比赛）。所以 RoboMaster 江苏站的三个奖
 * 拆成三条，主页上就能把拿过的奖一次列全。
 */

export type AwardTeam = 'vexu' | 'robomaster';

export interface Award {
  id: string;
  team: AwardTeam;
  dateISO: string;
  date: LocalizedText;
  /** 奖项名次 */
  prize: LocalizedText;
  /** 赛项 */
  event: LocalizedText;
  /** 补充说明（组别、赛站等） */
  detail: LocalizedText;
  /** 该奖项有照片时放这里 */
  img?: string;
  imgSmall?: string;
  imgW?: number;
  imgH?: number;
  imgAlt?: LocalizedText;
  /** 赛季最好成绩，页面上会点出来 */
  top?: boolean;
}

export const AWARDS: Award[] = [
  {
    id: 'rmul-2026-infantry-robot',
    team: 'robomaster',
    dateISO: '2026-03-27',
    date: { en: 'Mar 27–29, 2026', zh: '2026年3月27–29日' },
    prize: { en: 'Second Prize', zh: '二等奖' },
    event: { en: '3v3 Combat — Infantry Robot', zh: '3V3 对抗赛 —— 步兵机器人' },
    detail: {
      en: 'Individual robot award, RoboMaster University League 2026, Jiangsu Station',
      zh: '机器人竞技奖，RoboMaster 2026 机甲大师高校联盟赛 江苏站',
    },
    top: true,
  },
  {
    id: 'rmul-2026-3v3',
    team: 'robomaster',
    dateISO: '2026-03-27',
    date: { en: 'Mar 27–29, 2026', zh: '2026年3月27–29日' },
    prize: { en: 'Third Prize', zh: '三等奖' },
    event: { en: '3v3 Combat', zh: '3V3 对抗赛' },
    detail: {
      en: 'Match placement, non-A-tier division, Jiangsu Station',
      zh: '比赛名次，非甲级组，江苏站',
    },
  },
  {
    id: 'rmul-2026-infantry-combat',
    team: 'robomaster',
    dateISO: '2026-03-27',
    date: { en: 'Mar 27–29, 2026', zh: '2026年3月27–29日' },
    prize: { en: 'Third Prize', zh: '三等奖' },
    event: { en: 'Infantry Combat', zh: '步兵对抗赛' },
    detail: { en: 'Match placement, Jiangsu Station', zh: '比赛名次，江苏站' },
  },
  {
    id: 'vex-asia-open-2025',
    team: 'vexu',
    dateISO: '2024-12-29',
    date: { en: 'Dec 29, 2024 – Jan 1, 2025', zh: '2024年12月29日 – 2025年1月1日' },
    prize: { en: 'Second Prize', zh: '二等奖' },
    event: { en: 'VEX Asia Open Signature Event', zh: 'VEX 机器人亚洲公开赛国际签名赛' },
    detail: {
      en: 'Over 500 teams from China, Macao, Hong Kong, the US, Singapore and the UAE',
      zh: '来自中国、澳门、香港、美国、新加坡和阿联酋的 500 余支队伍参赛',
    },
    img: '/images/2024_VEX_Asia_Open_Signaure_Event/DSC07467.webp',
    imgSmall: '/images/2024_VEX_Asia_Open_Signaure_Event/DSC07467-700.webp',
    imgW: 1400,
    imgH: 933,
    imgAlt: {
      en: 'The club at the VEX Asia Open Signature Event',
      zh: '社团在 VEX 机器人亚洲公开赛国际签名赛现场',
    },
  },
  {
    id: 'sjtu-promising-2024',
    team: 'vexu',
    dateISO: '2024-12-22',
    date: { en: 'Dec 22, 2024', zh: '2024年12月22日' },
    prize: { en: 'Promising Award', zh: '潜力奖' },
    event: { en: 'SJTU VEX Elite Invitational Competition', zh: '上海交通大学 VEX 精英邀请赛' },
    detail: {
      en: '29 teams from 17 universities including SJTU, XJTU, Tongji and HIT Shenzhen',
      zh: '上海交大、西安交大、同济、哈工大（深圳）等 17 所高校的 29 支队伍参赛',
    },
    img: '/images/2024-vex-elite-invitational/dsc06769.webp',
    imgSmall: '/images/2024-vex-elite-invitational/dsc06769-700.webp',
    imgW: 1400,
    imgH: 933,
    imgAlt: {
      en: 'The club receiving the Promising Award at SJTU',
      zh: '社团在上海交大领取潜力奖',
    },
  },
];

/** 按时间倒序：最新的战绩排在前面 */
export const awardsByTeam = (team?: AwardTeam) =>
  (team ? AWARDS.filter((award) => award.team === team) : AWARDS)
    .slice()
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO));
