import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">{t('nav.home')}</Link></li>
          <li><Link to="/about">{t('nav.about')}</Link></li>
          <li><Link to="/members">{t('nav.members')}</Link></li>
          <li><Link to="/events">{t('nav.events')}</Link></li>
          <li><Link to="/contact">{t('nav.contact')}</Link></li>
          <li><button onClick={switchLanguage}>{i18n.language === 'en' ? '中文' : 'EN'}</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
