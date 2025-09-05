import React from 'react';
import { useTranslation } from 'react-i18next';

function RobomasterTeam() {
  const { t } = useTranslation();
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/videos/BG.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>{t('robomaster.title')}</h1>
        <p>{t('general.underConstruction')}</p>
      </div>
    </>
  );
}

export default RobomasterTeam;
