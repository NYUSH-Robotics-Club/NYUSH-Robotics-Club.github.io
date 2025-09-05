import React from 'react';
import { useTranslation } from 'react-i18next';

function PastEventInvolvementFair() {
  const { t } = useTranslation();
  return (
    <>
      <div className="background-container">
        <img
          src="/images/Involvement Fair/Cropped Involvement Fair.JPG"
          alt="Background Image"
          className="image-with-shadow"
        />
        <div className="background-container-content">
          <h1>{t('pastEventFair.title')}</h1>
          <h2>{t('pastEventFair.date')}</h2>
        </div>
      </div>

      <div className="content">
        <div className="eventrecap">
          <h2>{t('pastEventFair.toBeUpdated')}</h2>
          <p>...</p>
          <p>...</p>
          <img
            src="/images/Involvement Fair/Cropped Involvement Fair.JPG"
            alt="TESOL Group Photo"
          />
          <p>...</p>
        </div>

        <div className="clickable-columns">
          <a href="#" className="column">
            <img
              src="/images/Involvement Fair/Involvement Fair 1.JPG"
              alt="Annual Report"
            />
            <div className="column-text">
              <h3>{t('pastEventFair.labels.event')}</h3>
              <h2>Arduino Workshop</h2>
            </div>
            <span className="arrow">→</span>
          </a>
          <a href="#" className="column">
            <img
              src="/images/Involvement Fair/Involvement Fair 1.JPG"
              alt="Student Statistics"
            />
            <div className="column-text">
              <h3>{t('pastEventFair.labels.competition')}</h3>
              <h2>VEX</h2>
            </div>
            <span className="arrow">→</span>
          </a>
          <a href="#" className="column">
            <img
              src="/images/Involvement Fair/Involvement Fair 1.JPG"
              alt="Event Report"
            />
            <div className="column-text">
              <h3>{t('pastEventFair.labels.event')}</h3>
              <h2>{t('pastEventFair.highlights')}</h2>
            </div>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default PastEventInvolvementFair;
