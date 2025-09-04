import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="social-media">
        <a href="https://www.linkedin.com/company/robotics-club-at-nyu-shanghai">
          <img src="/images/Linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/nyush_robotics_club/">
          <img src="/images/Instagram.jpg" alt="Instagram" />
        </a>
        <Link to="/wechat-code">
          <img src="/images/WeChat.PNG" alt={t('footer.wechat')} />
        </Link>
      </div>
      <p>&copy; 2024 NYU Shanghai Robotics Club</p>
    </footer>
  );
}

export default Footer;
