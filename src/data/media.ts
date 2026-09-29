/**
 * 页面头图视频。之前每个页面都直接把 11–30 MB 的原始 mp4 塞进 <video>，
 * 没有 poster、没有 preload 控制，首屏经常是一大块白屏。
 * 现在统一在这里登记（视频已重新编码，见 public/videos），
 * 并在 HeroVideo 里配 poster + 深色底色，加载期间不会再闪白。
 */

export interface VideoSource {
  src: string;
  type: string;
}

export interface HeroMedia {
  sources: VideoSource[];
  poster: string;
}

export const HERO_MEDIA: Record<string, HeroMedia> = {
  home: {
    sources: [
      { src: '/videos/BG.mp4', type: 'video/mp4' },
      { src: '/videos/BG.webm', type: 'video/webm' },
    ],
    poster: '/videos/BG-poster.webp',
  },
  about: {
    sources: [{ src: '/videos/About.mp4', type: 'video/mp4' }],
    poster: '/videos/About-poster.webp',
  },
  contact: {
    sources: [{ src: '/videos/Contact.mp4', type: 'video/mp4' }],
    poster: '/videos/Contact-poster.webp',
  },
  members: {
    sources: [{ src: '/videos/Members.mp4', type: 'video/mp4' }],
    poster: '/videos/Members-poster.webp',
  },
};
