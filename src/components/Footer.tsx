import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <p>&copy; 2024 NYU Shanghai Robotics Club</p>
      <Link to="/wechat-code">{t('footer.wechat')}</Link>
    </footer>
  );
}

export default Footer;
