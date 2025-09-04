import React from 'react';
import { useTranslation } from 'react-i18next';

function Events() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t('events.title')}</h1>
      <p>{t('events.content')}</p>
    </section>
  );
}

export default Events;
