import React from 'react';

interface EventCardProps {
  imgSrc: string;
  imgAlt: string;
  children: React.ReactNode;
}

const EventCard: React.FC<EventCardProps> = ({ imgSrc, imgAlt, children }) => (
  <div className="event-module">
    <img src={imgSrc} alt={imgAlt} />
    <div className="event-text">{children}</div>
  </div>
);

export default EventCard;

