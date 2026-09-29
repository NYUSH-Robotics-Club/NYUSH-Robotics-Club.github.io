import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// 路由级代码分割：首屏只加载首页，其余页面按需拉取
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Events = lazy(() => import('./pages/Events'));
const Contact = lazy(() => import('./pages/Contact'));
const RobomasterTeam = lazy(() => import('./pages/RobomasterTeam'));
const VexUTeam = lazy(() => import('./pages/VexUTeam'));
const WeChatCode = lazy(() => import('./pages/WeChatCode'));
const PastEventInvolvementFair = lazy(() => import('./pages/PastEventInvolvementFair'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      {/* tabIndex=-1：让顶部「跳到主要内容」链接能把焦点真正移进正文 */}
      <main id="main" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="route-loading" role="status" aria-live="polite">
              <span className="route-loading__spinner" aria-hidden="true" />
              <span className="sr-only">Loading…</span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/robomaster-team" element={<RobomasterTeam />} />
            <Route path="/vex-u-team" element={<VexUTeam />} />
            <Route path="/wechat-code" element={<WeChatCode />} />
            <Route path="/past-event-involvementfair" element={<PastEventInvolvementFair />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
