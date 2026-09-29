import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import SectionHead from '../components/SectionHead';
import Entry from '../components/Entry';
import { HERO_MEDIA } from '../data/media';
import { byCategory } from '../data/events';
import usePageTitle from '../hooks/usePageTitle';

const SECTIONS = [
  { category: 'award' as const, labelKey: 'events.awards' },
  { category: 'competition' as const, labelKey: 'events.competitions' },
  { category: 'past' as const, labelKey: 'events.pastEvents' },
];

function Events() {
  const { t } = useTranslation();
  usePageTitle(t('events.title'));

  return (
    <>
      <Hero media={HERO_MEDIA.members} title={t('events.title')} lead={t('events.lead')} short />

      <section className="section">
        <div className="shell">
          {SECTIONS.map((section, index) => {
            const events = byCategory(section.category);
            if (events.length === 0) return null;
            return (
              <div key={section.category} style={index ? { marginTop: 'var(--sp-11)' } : undefined}>
                <SectionHead>{t(section.labelKey)}</SectionHead>
                <div>
                  {events.map((event) => (
                    <Entry key={event.id} event={event} showCategory={false} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Events;
