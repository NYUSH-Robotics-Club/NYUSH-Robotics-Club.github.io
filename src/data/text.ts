import { useTranslation } from 'react-i18next';

/**
 * 内容型文案（赛事、奖项）不走 i18next 的 key 体系——
 * 它们和路由、列表结构绑在一起，放在 data/ 里维护更直观。
 * 这里只提供一个语言判别和取值的小工具。
 */

export type Lang = 'en' | 'zh';

export interface LocalizedText {
  en: string;
  zh: string;
}

export const toLang = (language: string | undefined): Lang =>
  (language ?? 'en').toLowerCase().startsWith('zh') ? 'zh' : 'en';

/** 当前语言 */
export function useLang(): Lang {
  const { i18n } = useTranslation();
  return toLang(i18n.language);
}

/** 取当前语言的文案 */
export const pick = (text: LocalizedText, lang: Lang): string => text[lang];
