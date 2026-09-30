import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHead from '../components/SectionHead';
import RecordEntry from '../components/RecordEntry';
import { HERO_MEDIA } from '../data/media';
import { competitionEvents } from '../data/events';
import usePageTitle from '../hooks/usePageTitle';

const TEAMS = [
  { to: '/vex-u-team', img: '/images/vex-u.png', name: 'VEX U', blurbKey: 'vexu.lead' },
  {
    to: '/robomaster-team',
    img: '/images/Robomaster.png',
    name: 'RoboMaster',
    blurbKey: 'robomaster.lead',
  },
];

function Home() {
  const { t } = useTranslation();
  usePageTitle();

  // 比赛和奖项在同一条时间线上，新的在前
  const record = competitionEvents();

  return (
    <>
      <Hero media={HERO_MEDIA.home} title={t('home.title')} />

      <section className="section">
        <div className="shell">
          <div className="lede">
            <div className="lede__body">
              <p>{t('home.body1')}</p>
            </div>
            <div className="lede__body">
              <p>{t('home.body2')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead note={t('home.recordNote')}>{t('home.recordTitle')}</SectionHead>
          <div className="record">
            {record.map((event) => (
              <RecordEntry key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead>{t('home.teamsTitle')}</SectionHead>
          <div className="teams">
            {TEAMS.map((team) => (
              <Link key={team.to} to={team.to} className="team-tile">
                <span className="team-tile__logo">
                  <img
                    src={team.img}
                    alt=""
                    width={160}
                    height={160}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <strong>{team.name}</strong>
                <span>{t(team.blurbKey)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead>{t('home.joinTitle')}</SectionHead>
          {/* 海报和「怎么加入 + 邮箱」并排：海报是竖的，单放左边的话
              宽屏右边会空掉一大片 */}
          <div className="join">
            <figure className="poster">
              <img
                src="/images/robotics_club_poster.webp"
                alt={t('home.posterAlt')}
                width={1100}
                height={1608}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="join__body">
              <p>{t('home.joinBody')}</p>
              <a className="email-link" href={`mailto:${t('footer.contactEmail')}`}>
                {t('footer.contactEmail')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
