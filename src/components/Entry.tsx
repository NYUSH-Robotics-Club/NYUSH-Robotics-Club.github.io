import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { ClubEvent } from '../data/events';
import { pick, useLang } from '../data/text';
import { imgUrl, srcSetFor } from '../data/asset';

interface EntryProps {
  event: ClubEvent;
  /** 列出条目时不再重复显示分类（分组标题已经说明了） */
  showCategory?: boolean;
}

const CATEGORY_KEY: Record<ClubEvent['category'], string> = {
  award: 'events.categoryAward',
  competition: 'events.categoryCompetition',
  past: 'events.categoryPast',
};

/**
 * 一条活动记录。左右两栏：图 + 文。
 * 获奖只靠一粒强调色的小字标记，不用色块。
 */
const Entry: React.FC<EntryProps> = ({ event, showCategory = true }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const isAward = event.category === 'award';

  const inner = (
    <>
      {event.img && (
        <div className="entry__media">
          <img
            src={imgUrl(event.img)}
            srcSet={srcSetFor(event.img!, event.imgSmall, event.imgW)}
            sizes="(max-width: 820px) 100vw, 560px"
            width={event.imgW}
            height={event.imgH}
            alt={event.imgAlt ? pick(event.imgAlt, lang) : ''}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div className="entry__body">
        <p className="entry__meta">
          <time dateTime={event.dateISO}>{pick(event.date, lang)}</time>
          {isAward && <span className="is-win">{t(CATEGORY_KEY[event.category])}</span>}
          {!isAward && showCategory && <span>{t(CATEGORY_KEY[event.category])}</span>}
        </p>

        <h3>{pick(event.title, lang)}</h3>

        {event.body.map((paragraph) => (
          <p key={paragraph.en.slice(0, 32)}>{pick(paragraph, lang)}</p>
        ))}

        {event.speaker && (
          <p className="entry__speaker">
            {t('events.speaker')}: {event.speaker.name}, {pick(event.speaker.affiliation, lang)}{' '}
            {event.speaker.linkHref && (
              <a href={event.speaker.linkHref} target="_blank" rel="noreferrer">
                {event.speaker.linkLabel}
              </a>
            )}
          </p>
        )}

        {event.to && <span className="entry__more">{t('events.readMore')}</span>}
      </div>
    </>
  );

  const className = `entry${event.img ? '' : ' entry--text-only'}`;

  return event.to ? (
    <Link to={event.to} className={className}>
      {inner}
    </Link>
  ) : (
    <article className={className}>{inner}</article>
  );
};

export default Entry;
