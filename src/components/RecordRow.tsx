import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ClubEvent } from '../data/events';
import { pick, toLang } from '../data/text';

interface RecordRowProps {
  event: ClubEvent;
}

/**
 * 赛事记录的一行（VEX U 页用）。
 * 只用排版层级区分：获奖条目的日期用强调色，其余靠字号和留白。
 */
const RecordRow: React.FC<RecordRowProps> = ({ event }) => {
  const { i18n } = useTranslation();
  const lang = toLang(i18n.language);

  return (
    <article className={`record__row${event.category === 'award' ? ' record__row--win' : ''}`}>
      <p className="record__date">
        <time dateTime={event.dateISO}>{pick(event.date, lang)}</time>
      </p>

      <div className="record__body">
        <h3>{pick(event.title, lang)}</h3>

        {event.body.map((paragraph) => (
          <p key={paragraph.en.slice(0, 32)}>{pick(paragraph, lang)}</p>
        ))}

        {event.img && (
          <figure className="record__media">
            <img
              src={event.img}
              srcSet={
                event.imgSmall && event.imgW
                  ? `${event.imgSmall} 700w, ${event.img} ${event.imgW}w`
                  : undefined
              }
              sizes="(max-width: 820px) 100vw, 620px"
              width={event.imgW}
              height={event.imgH}
              alt={event.imgAlt ? pick(event.imgAlt, lang) : ''}
              loading="lazy"
              decoding="async"
            />
          </figure>
        )}
      </div>
    </article>
  );
};

export default RecordRow;
