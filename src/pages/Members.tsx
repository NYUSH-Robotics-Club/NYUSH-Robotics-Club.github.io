import React from 'react';
import { useTranslation } from 'react-i18next';

function Members() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t('members.title')}</h1>
      <p>{t('members.content')}</p>
    </section>
  );
}

export default Members;
