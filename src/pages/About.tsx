import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import SectionHead from '../components/SectionHead';
import { HERO_MEDIA } from '../data/media';
import usePageTitle from '../hooks/usePageTitle';

function About() {
  const { t } = useTranslation();
  usePageTitle(t('about.title'));

  return (
    <>
      <Hero media={HERO_MEDIA.about} title={t('about.title')} lead={t('about.lead')} short />

      <section className="section">
        <div className="shell">
          <div className="lede">
            <p className="lede__statement">{t('about.missionTitle')}</p>
            <div className="lede__body">
              <p>{t('about.missionBody')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="lede">
            <p className="lede__statement">{t('about.structureTitle')}</p>
            <div className="lede__body">
              <p>{t('about.structureBody')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="shell">
          <SectionHead>{t('about.contactTitle')}</SectionHead>
          <p className="section__note">{t('about.contactBody')}</p>
          <p className="mt-6">
            <a className="btn" href={`mailto:${t('footer.contactEmail')}`}>
              {t('footer.contactEmail')}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
