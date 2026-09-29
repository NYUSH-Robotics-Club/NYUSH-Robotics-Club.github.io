import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 路由切换后回到页面顶部。
 * 之前用 BrowserRouter 但没有这个组件，从首页滚到很下面再点导航，
 * 新页面会停在同样的滚动位置，看起来像是「页面没加载出来」。
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
