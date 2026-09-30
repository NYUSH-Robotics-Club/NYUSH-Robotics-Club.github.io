import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHead from '../components/SectionHead';
import RecordEntry from '../components/RecordEntry';
import { HERO_MEDIA } from '../data/media';
import { eventsByTeam } from '../data/events';
import usePageTitle from '../hooks/usePageTitle';

/**
 * 合照尚未提供，先用占位框；把图片放到 public/images/robomaster-team.webp
 * 后把 PHOTO 改成该路径即可。
 */
const PHOTO: string | null = null;

function RobomasterTeam() {
  const { t } = useTranslation();
  usePageTitle(t('robomaster.title'));

  const results = eventsByTeam('robomaster');

  return (
    <>
      <Hero
        media={HERO_MEDIA.home}
        title={t('robomaster.title')}
        lead={t('robomaster.lead')}
        short
      />

      <section className="section">
        <div className="shell">
          <p className="nameplate">
            <span className="nameplate__label">{t('robomaster.teamLabel')}</span>
            <strong>{t('robomaster.teamName')}</strong>
          </p>
          <div className="lede">
            <div className="lede__body">
              <p>{t('robomaster.intro1')}</p>
              <p>{t('robomaster.intro2')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead note={t('robomaster.resultsNote')}>
            {t('robomaster.resultsTitle')}
          </SectionHead>
          <div className="record">
            {results.map((event) => (
              <RecordEntry key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead>{t('robomaster.photoTitle')}</SectionHead>
          <div className="photo-slot">
            {PHOTO ? (
              <img src={PHOTO} alt={t('robomaster.photoTitle')} loading="lazy" decoding="async" />
            ) : (
              <p style={{ margin: 0 }}>{t('robomaster.photoPlaceholder')}</p>
            )}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <div className="sources">
            <h2>{t('robomaster.sourcesTitle')}</h2>
            <ul>
              <li>
                <a
                  href="https://www.robomaster.com/zh-CN/resource/pages/announcement/1913"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('robomaster.sourceAwards')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.robomaster.com/zh-CN/resource/pages/announcement/1916"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('robomaster.sourceRobot')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.robomaster.com/zh-CN/resource/pages/announcement/1904"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('robomaster.sourceSignup')}
                </a>
              </li>
            </ul>
            <p className="mt-5">
              <Link className="btn btn--ghost" to="/events">
                {t('home.allEvents')}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default RobomasterTeam;
