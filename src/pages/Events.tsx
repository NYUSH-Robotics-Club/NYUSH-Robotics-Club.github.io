import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import SectionHead from '../components/SectionHead';
import RecordEntry from '../components/RecordEntry';
import { HERO_MEDIA } from '../data/media';
import { competitionEvents, clubEvents } from '../data/events';
import usePageTitle from '../hooks/usePageTitle';

function Events() {
  const { t } = useTranslation();
  usePageTitle(t('events.title'));

  // 一条时间线：比赛和奖项在一起，新的在前；工作坊和参访另起一段
  const competitions = competitionEvents();
  const club = clubEvents();

  return (
    <>
      <Hero media={HERO_MEDIA.members} title={t('events.title')} lead={t('events.lead')} short />

      <section className="section">
        <div className="shell">
          <SectionHead note={t('events.competitionsNote')}>{t('events.competitions')}</SectionHead>
          <div className="record">
            {competitions.map((event) => (
              <RecordEntry key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead note={t('events.pastNote')}>{t('events.pastEvents')}</SectionHead>
          <div className="record">
            {club.map((event) => (
              <RecordEntry key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
