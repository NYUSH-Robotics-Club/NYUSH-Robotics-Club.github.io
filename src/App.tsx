import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Events from './pages/Events';
import Contact from './pages/Contact';
import RobomasterTeam from './pages/RobomasterTeam';
import VexUTeam from './pages/VexUTeam';
import WeChatCode from './pages/WeChatCode';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/robomaster-team" element={<RobomasterTeam />} />
          <Route path="/vex-u-team" element={<VexUTeam />} />
          <Route path="/wechat-code" element={<WeChatCode />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
