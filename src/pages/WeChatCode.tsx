import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

function WeChatCode() {
  const { t } = useTranslation();
  usePageTitle(t('wechat.title'));

  return (
    <div className="qr-page">
      <div className="qr-card">
        <h1>{t('wechat.title')}</h1>
        <img
          className="qr-image"
          src="/images/WeChatCode.webp"
          alt={t('wechat.title')}
          width={900}
          height={497}
          decoding="async"
        />
        <p>{t('wechat.lead')}</p>
        <Link className="btn btn--ghost" to="/">
          {t('wechat.back')}
        </Link>
      </div>
    </div>
  );
}

export default WeChatCode;
