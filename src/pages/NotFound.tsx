import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const SITE_NAME = 'NYU Shanghai Robotics Club';

function NotFound() {
  const { t } = useTranslation();
  usePageTitle(t('notFound.title'));

  // GitHub Pages 的 SPA 兜底会把 404.html（= index.html）以 200 返回，
  // 任何乱敲的地址都会被搜索引擎当成正常页面收录。这里显式声明不索引。
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, follow';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="not-found">
      <p className="not-found__code">{SITE_NAME}</p>
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.body')}</p>
      <Link className="btn btn--ghost" to="/">
        {t('notFound.back')}
      </Link>
    </div>
  );
}

export default NotFound;
