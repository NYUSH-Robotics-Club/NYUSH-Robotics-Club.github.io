import React from 'react';

interface EventCardProps {
  imgSrc: string;
  imgAlt: string;
  children: React.ReactNode;
}

const EventCard: React.FC<EventCardProps> = ({ imgSrc, imgAlt, children }) => (
  <article className="event-card" role="group" aria-label={imgAlt}>
    <div className="event-card__media">
      <img src={imgSrc} alt={imgAlt} loading="lazy" />
    </div>
    <div className="event-card__body">
      {children}
    </div>
  </article>
);

export default EventCard;

