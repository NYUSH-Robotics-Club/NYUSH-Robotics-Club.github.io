import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from './en.json';
import zh from './zh.json';

const STORAGE_KEY = 'nyush-robotics-lang';
export const SUPPORTED_LANGS = ['en', 'zh'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

const isLang = (value: unknown): value is Lang =>
  typeof value === 'string' && (SUPPORTED_LANGS as readonly string[]).includes(value);

/**
 * 判断设备语言。
 *
 * 用户明确选了语言就听用户的（存 localStorage）；否则完全按设备来：
 * 依次看 navigator.languages / navigator.language / <html lang>，
 * 只要第一个有语言标签的项是中文（zh、zh-CN、zh-Hans、zh-Hant…）就用中文。
 */
function detectDeviceLang(): Lang {
  const candidates: string[] = [];

  if (typeof navigator !== 'undefined') {
    if (Array.isArray(navigator.languages)) candidates.push(...navigator.languages);
    if (navigator.language) candidates.push(navigator.language);
  }
  if (typeof document !== 'undefined' && document.documentElement.lang) {
    candidates.push(document.documentElement.lang);
  }

  for (const tag of candidates) {
    if (!tag) continue;
    const lower = tag.toLowerCase();
    if (lower.startsWith('zh')) return 'zh';
    // 第一个能识别的语言不是中文，就按英文走，不再往下找
    if (/^[a-z]{2}/.test(lower)) return 'en';
  }

  return 'en';
}

function initialLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    /* 隐私模式下 localStorage 可能不可用 */
  }
  return detectDeviceLang();
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    zh: { translation: zh },
  },
  lng: initialLang(),
  fallbackLng: 'en',
  supportedLngs: SUPPORTED_LANGS as unknown as string[],
  interpolation: { escapeValue: false },
});

/** 让 <html lang> 跟随当前语言（对屏幕阅读器和搜索引擎都重要）。 */
function syncHtmlLang(lang: string) {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.setAttribute('data-lang', lang);
}

syncHtmlLang(i18n.language);
i18n.on('languageChanged', (lang) => {
  syncHtmlLang(lang);
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* 忽略写入失败 */
  }
});

export default i18n;
