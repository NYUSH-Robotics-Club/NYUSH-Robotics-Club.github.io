import React from 'react';
import { useTranslation } from 'react-i18next';

function VexUTeam() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t('vexu.title')}</h1>
    </section>
  );
}

export default VexUTeam;
