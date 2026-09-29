import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { HeroMedia } from '../data/media';

interface HeroProps {
  media: HeroMedia;
  title: string;
  lead?: string;
  /** 头图里的行动按钮 */
  cta?: { to?: string; href?: string; label: string };
  /** 内页用短头图 */
  short?: boolean;
}

/**
 * 全幅头图。参考真实机器人/工程团队官网的做法：
 * 影像占满大半个屏幕，标题压在左下角，最多配一个胶囊按钮。
 * 素材不做任何调色，遮罩只负责让文字读得清。
 */
const Hero: React.FC<HeroProps> = ({ media, title, lead, cta, short = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    query.addEventListener?.('change', onChange);
    return () => query.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) {
      video.pause();
      return;
    }
    video.play().catch(() => undefined);
  }, [reducedMotion]);

  const ctaEl = cta
    ? cta.href
      ? (
          <a className="btn" href={cta.href}>
            {cta.label}
          </a>
        )
      : (
          <Link className="btn" to={cta.to ?? '/'}>
            {cta.label}
          </Link>
        )
    : null;

  return (
    <section className={`hero${short ? ' hero--short' : ''}`} aria-label={title}>
      <img
        className={`hero__poster${ready ? ' is-hidden' : ''}`}
        src={media.poster}
        alt=""
        aria-hidden="true"
        decoding="async"
        fetchPriority="high"
      />
      <video
        ref={videoRef}
        className={`hero__video${ready ? ' is-ready' : ''}`}
        poster={media.poster}
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        onCanPlay={() => setReady(true)}
        onPlaying={() => setReady(true)}
      >
        {media.sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
      </video>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner">
        <h1 className="hero__title">{title}</h1>
        {lead && <p className="hero__lead">{lead}</p>}
        {ctaEl && <div className="hero__cta">{ctaEl}</div>}
      </div>
    </section>
  );
};

export default Hero;
