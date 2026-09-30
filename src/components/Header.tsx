import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LINKS = [
  { to: '/', key: 'nav.home', end: true },
  { to: '/about', key: 'nav.about' },
  { to: '/events', key: 'nav.events' },
  { to: '/contact', key: 'nav.contact' },
];

function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasHero, setHasHero] = useState(true);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 没有头图的页面（404、二维码）白字会落在白底上，
  // 所以检测页面里有没有 .hero，没有就直接用白底黑字。
  // 路由是懒加载的，内容挂载晚于本组件，用 MutationObserver 监听。
  useEffect(() => {
    const main = document.getElementById('main');
    if (!main) return;
    const check = () => setHasHero(Boolean(main.querySelector('.hero')));
    check();
    const observer = new MutationObserver(check);
    observer.observe(main, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');
  };

  return (
    <header className={`site-header${scrolled || open || !hasHero ? ' is-solid' : ''}`}>
      <a className="skip-link" href="#main">
        {t('nav.skipToContent')}
      </a>

      <Link to="/" className="site-header__logo">
        <img
          src="/images/nyush-logo.webp"
          alt="NYU Shanghai"
          width={448}
          height={101}
          decoding="async"
        />
      </Link>

      <button
        type="button"
        className={`site-header__toggle${open ? ' is-open' : ''}`}
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? t('nav.closeMenu') : t('nav.menu')}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`}>
        <ul>
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              >
                {t(link.key)}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={switchLanguage}
              className="language-switch"
              aria-label={i18n.language === 'zh' ? 'Switch to English' : '切换到中文'}
            >
              {i18n.language === 'zh' ? 'EN' : '中文'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
