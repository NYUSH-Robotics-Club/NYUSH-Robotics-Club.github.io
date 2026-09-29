import { useEffect } from 'react';

const SITE_NAME = 'NYU Shanghai Robotics Club';

/**
 * 给每个路由设置独立的 document.title。
 *
 * 之前全站共用一个标题：加了书签分不清哪页、分享链接预览也都一样、
 * 浏览器历史里一排同名条目。切换语言时标题也会跟着重建。
 */
export function usePageTitle(pageTitle?: string) {
  useEffect(() => {
    // 首页的标题本身就是站名，别拼成 "X · X"
    document.title =
      pageTitle && pageTitle !== SITE_NAME ? `${pageTitle} · ${SITE_NAME}` : SITE_NAME;
  }, [pageTitle]);
}

export default usePageTitle;
