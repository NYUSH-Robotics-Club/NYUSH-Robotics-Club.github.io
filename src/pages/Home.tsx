import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHead from '../components/SectionHead';
import AwardRow from '../components/AwardRow';
import { HERO_MEDIA } from '../data/media';
import { awardsByTeam } from '../data/awards';
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

  // 主页把拿过的奖一次列全，不做筛选
  const awards = awardsByTeam();

  return (
    <>
      <Hero
        media={HERO_MEDIA.home}
        title={t('home.title')}
        lead={t('home.lead')}
        cta={{ to: '/events', label: t('home.allEvents') }}
      />

      <section className="section">
        <div className="shell">
          <div className="lede">
            <div className="lede__body">
              <p>{t('home.body1')}</p>
              <p>{t('home.body2')}</p>
            </div>
            <div className="lede__body">
              <p className="muted-text">{t('home.introContact')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead note={t('home.recordNote')}>{t('home.recordTitle')}</SectionHead>
          <div className="record">
            {awards.map((award) => (
              <AwardRow key={award.id} award={award} />
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
                    width={225}
                    height={225}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <strong>{team.name}</strong>
                <span>{t(team.blurbKey)}</span>
              </Link>
            ))}
          </div>
          <p className="mt-6">
            <Link className="btn btn--ghost" to="/events">
              {t('home.allEvents')}
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead note={t('home.joinBody')}>{t('home.joinTitle')}</SectionHead>
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
          <p className="mt-7">
            <a className="btn" href={`mailto:${t('footer.contactEmail')}`}>
              {t('footer.contactEmail')}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
