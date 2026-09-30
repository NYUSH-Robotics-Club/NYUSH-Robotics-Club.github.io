import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { ClubEvent } from '../data/events';
import { pick, useLang } from '../data/text';
import { imgUrl, srcSetFor } from '../data/asset';

interface RecordEntryProps {
  event: ClubEvent;
}

/**
 * 一条赛事记录。
 *
 * 奖项直接挂在比赛下面，所以一眼就能看出「这场打了什么、拿了什么」，
 * 而不是要在两张表之间来回对。
 * 布局是日期在左、内容在右，一条条横线，按时间倒序排列。
 */
const RecordEntry: React.FC<RecordEntryProps> = ({ event }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const hasAwards = Boolean(event.awards?.length);

  const className = `record__row${hasAwards ? ' record__row--win' : ''}${
    event.img ? ' record__row--media' : ''
  }`;

  const body = (
    <>
      <p className="record__date">
        <time dateTime={event.dateISO}>{pick(event.date, lang)}</time>
      </p>

      <div className="record__body">
        <h3>{pick(event.title, lang)}</h3>

        {hasAwards && (
          <ul className="awards">
            {event.awards!.map((award) => (
              <li
                key={`${award.prize.en}-${award.name.en}`}
                className={`awards__item${award.top ? ' is-top' : ''}`}
              >
                <span className="awards__prize">{pick(award.prize, lang)}</span>
                <span className="awards__text">
                  <span className="awards__name">{pick(award.name, lang)}</span>
                  {award.detail && (
                    <span className="awards__detail">{pick(award.detail, lang)}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}

        {event.body.map((paragraph) => (
          <p key={paragraph.en.slice(0, 32)}>{pick(paragraph, lang)}</p>
        ))}

        {event.speaker && (
          <p className="record__speaker">
            {t('events.speaker')}: {event.speaker.name}, {pick(event.speaker.affiliation, lang)}{' '}
            {event.speaker.linkHref && (
              <a href={event.speaker.linkHref} target="_blank" rel="noreferrer">
                {event.speaker.linkLabel}
              </a>
            )}
          </p>
        )}

        {event.to && <span className="record__more">{t('events.readMore')}</span>}
      </div>

      {/* 照片是这一行的第三栏，宽屏时和正文并排，窄屏时落到正文下面 */}
      {event.img && (
        <figure className="record__media">
          <img
            src={imgUrl(event.img)}
            srcSet={srcSetFor(event.img, event.imgSmall, event.imgW)}
            sizes="(max-width: 1200px) calc(100vw - 160px), 420px"
            width={event.imgW}
            height={event.imgH}
            alt={event.imgAlt ? pick(event.imgAlt, lang) : ''}
            loading="lazy"
            decoding="async"
          />
        </figure>
      )}
    </>
  );

  // 整条可点击时用 Link 当容器，保证网格还是两列
  return event.to ? (
    <Link to={event.to} className={className}>
      {body}
    </Link>
  ) : (
    <article className={className}>{body}</article>
  );
};

export default RecordEntry;
