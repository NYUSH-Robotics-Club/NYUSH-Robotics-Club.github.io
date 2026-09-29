import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SOCIALS = [
  {
    href: 'https://www.linkedin.com/company/robotics-club-at-nyu-shanghai',
    icon: '/images/Linkedin.webp',
    label: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/nyush_robotics_club/',
    icon: '/images/Instagram.webp',
    label: 'Instagram',
  },
];

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__inner">
          <div>
            <p className="site-footer__name">{t('home.title')}</p>
            <a href={`mailto:${t('footer.contactEmail')}`}>{t('footer.contactEmail')}</a>
          </div>

          <nav className="site-footer__nav">
            <Link to="/about">{t('nav.about')}</Link>
            <Link to="/events">{t('nav.events')}</Link>
            <Link to="/vex-u-team">VEX U</Link>
            <Link to="/robomaster-team">RoboMaster</Link>
            <Link to="/contact">{t('nav.contact')}</Link>
          </nav>

          <div className="site-footer__social">
            <span>{t('footer.followUs')}</span>
            <div className="social-media">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <img src={social.icon} alt="" width={30} height={30} loading="lazy" decoding="async" />
                </a>
              ))}
              <Link to="/wechat-code" aria-label={t('footer.wechat')}>
                <img
                  src="/images/WeChat.webp"
                  alt=""
                  width={30}
                  height={30}
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            </div>
          </div>

          <p className="site-footer__legal">
            &copy; {year} {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
