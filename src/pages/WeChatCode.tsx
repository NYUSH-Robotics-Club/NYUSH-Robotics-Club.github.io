import React from 'react';
import { useTranslation } from 'react-i18next';

function WeChatCode() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t('wechat.title')}</h1>
      <img src="/images/WeChatCode.jpg" alt="WeChat QR" />
    </section>
  );
}

export default WeChatCode;
