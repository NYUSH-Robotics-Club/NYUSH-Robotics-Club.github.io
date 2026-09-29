import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHead from '../components/SectionHead';
import usePageTitle from '../hooks/usePageTitle';

const GALLERY = [
  {
    src: '/images/involvement-fair/involvement-fair-1.webp',
    alt: 'Robotics Club booth at the 2024 Fall Involvement Fair',
  },
  {
    src: '/images/involvement-fair/cropped-involvement-fair.webp',
    alt: 'Students visiting the Robotics Club booth',
  },
];

function PastEventInvolvementFair() {
  const { t } = useTranslation();
  usePageTitle(t('pastEventFair.title'));

  return (
    <>
      <section className="hero hero--short" aria-label={t('pastEventFair.title')}>
        <img
          className="hero__poster"
          src="/images/involvement-fair/cropped-involvement-fair.webp"
          alt=""
          aria-hidden="true"
          decoding="async"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__inner">
          <h1 className="hero__title">{t('pastEventFair.title')}</h1>
          <p className="hero__lead">{t('pastEventFair.date')}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead>{t('pastEventFair.recapTitle')}</SectionHead>
          <div>
            <p>{t('pastEventFair.recapBody')}</p>
            <div className="gallery">
              {GALLERY.map((item) => (
                <img key={item.src} src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              ))}
            </div>
          </div>
          <p className="mt-7">
            <Link className="btn btn--ghost" to="/events">
              {t('home.allEvents')}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default PastEventInvolvementFair;
