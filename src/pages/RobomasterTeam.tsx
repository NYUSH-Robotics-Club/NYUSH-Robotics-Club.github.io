import React from 'react';
import { useTranslation } from 'react-i18next';

function RobomasterTeam() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t('robomaster.title')}</h1>
    </section>
  );
}

export default RobomasterTeam;
