import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  return (
    <header>
      <a href="https://shanghai.nyu.edu" className="logo">
        <img src="/images/NYUSH logo.png" alt="Robotics Club Logo" />
      </a>
      <nav className={open ? 'expanded' : ''}>
        <img
          src="/images/listbutton.png"
          alt="Menu"
          className="menu-button"
          onClick={toggleMenu}
        />
        <ul className={open ? '' : 'hidden'}>
          <li>
            <Link to="/">{t('nav.home')}</Link>
          </li>
          <li>
            <Link to="/events">{t('nav.events')}</Link>
          </li>
          <li>
            <Link to="/contact">{t('nav.contact')}</Link>
          </li>
          <li>
            <button
              type="button"
              onClick={switchLanguage}
              className="language-switch"
            >
              {i18n.language === 'en' ? '中文' : 'EN'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
