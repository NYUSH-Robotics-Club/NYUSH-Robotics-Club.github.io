import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t('home.title')}</h1>
      <p>{t('home.intro')}</p>
    </section>
  );
}

export default Home;
