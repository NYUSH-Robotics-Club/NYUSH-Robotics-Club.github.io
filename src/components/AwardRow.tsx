import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Award } from '../data/awards';
import { pick, toLang } from '../data/text';

interface AwardRowProps {
  award: Award;
}

/**
 * 战绩表的一行。主页的完整奖项列表和队伍页共用同一个组件，
 * 保证同一份战绩在两处的写法一致。
 */
const AwardRow: React.FC<AwardRowProps> = ({ award }) => {
  const { i18n } = useTranslation();
  const lang = toLang(i18n.language);

  return (
    <article className={`record__row${award.top ? ' record__row--win' : ''}`}>
      <p className="record__date">
        <time dateTime={award.dateISO}>{pick(award.date, lang)}</time>
      </p>

      <div className="record__body">
        <p className="award-prize">{pick(award.prize, lang)}</p>
        <h3>{pick(award.event, lang)}</h3>
        <p>{pick(award.detail, lang)}</p>

        {award.img && (
          <figure className="record__media">
            <img
              src={award.img}
              srcSet={
                award.imgSmall && award.imgW
                  ? `${award.imgSmall} 700w, ${award.img} ${award.imgW}w`
                  : undefined
              }
              sizes="(max-width: 820px) 100vw, 620px"
              width={award.imgW}
              height={award.imgH}
              alt={award.imgAlt ? pick(award.imgAlt, lang) : ''}
              loading="lazy"
              decoding="async"
            />
          </figure>
        )}
      </div>
    </article>
  );
};

export default AwardRow;
