import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import SectionHead from '../components/SectionHead';
import RecordEntry from '../components/RecordEntry';
import { HERO_MEDIA } from '../data/media';
import { eventsByTeam } from '../data/events';
import usePageTitle from '../hooks/usePageTitle';

function VexUTeam() {
  const { t } = useTranslation();
  usePageTitle(t('vexu.title'));

  const results = eventsByTeam('vexu');

  return (
    <>
      <Hero media={HERO_MEDIA.home} title={t('vexu.title')} lead={t('vexu.lead')} short />

      <section className="section">
        <div className="shell">
          <SectionHead note={t('vexu.resultsNote')}>{t('vexu.resultsTitle')}</SectionHead>
          {results.length ? (
            <div className="record">
              {results.map((event) => (
                <RecordEntry key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p>{t('vexu.empty')}</p>
          )}
        </div>
      </section>
    </>
  );
}

export default VexUTeam;
