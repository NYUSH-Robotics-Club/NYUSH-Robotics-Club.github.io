import React from 'react';
import { useTranslation } from 'react-i18next';

function VexUTeam() {
  const { t } = useTranslation();
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/videos/BG.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>{t('vexu.title')}</h1>
        <div className="members-wall">
          <div className="member">
            <img src="/images/Allen.jpg" alt="Allen Vikram Chand" />
            <h3>Allen Vikram Chand</h3>
            <p>Team Leader</p>
          </div>
          <div className="member">
            <img src="/images/Evan.JPG" alt="Evan Xiao" />
            <h3>Evan Xiao</h3>
          </div>
          <div className="member">
            <img src="/images/Eric.jpg" alt="Eric Liang" />
            <h3>Eric Liang</h3>
          </div>
          <div className="member">
            <img src="/images/Lewis.jpg" alt="Lewis Zhang" />
            <h3>Lewis Zhang</h3>
          </div>
          <div className="member">
            <img src="/images/Kyle.jpg" alt="Kyle Chen" />
            <h3>Kyle Chen</h3>
          </div>
          <div className="member">
            <img src="/images/Jeff.jpg" alt="Jeffrey Isman" />
            <h3>Jeffrey Isman</h3>
          </div>
          <div className="member">
            <img src="/images/Siona_Phan.jpg" alt="Siona Siona Phan" />
            <h3>Siona Phan</h3>
          </div>
          <div className="member">
            <img src="/images/Edward Peng.jpg" alt="Edward Peng" />
            <h3>Edward Peng</h3>
          </div>
          <div className="member">
            <img src="/images/Jason Xu.jpg" alt="Jason Xu" />
            <h3>Jason Xu</h3>
          </div>
          <div className="member">
            <img src="/images/William Wei.jpg" alt="William Wei" />
            <h3>William Wei</h3>
          </div>
          <div className="member">
            <img src="/images/Eric Jin.jpg" alt="Eric Jin" />
            <h3>Eric Jin</h3>
          </div>
          <div className="member">
            <img src="/images/Muhammad.jpg" alt="Muhammad Huzyafa Khokhar" />
            <h3>Muhammad Huzyafa Khokhar</h3>
          </div>
          <div className="member">
            <img src="/images/Andy Lu.pic.jpg" alt="Andy Lu" />
            <h3>Andy Lu</h3>
          </div>
          <div className="member">
            <img src="/images/Chanikan(Yiru) Poltanawasit.pic.jpg" alt="Chanikan(Yiru) Poltanawasit" />
            <h3>Chanikan (Yiru) Poltanawasit</h3>
          </div>
          <div className="member">
            <img src="/images/Daniyal Malik.pic.jpg" alt="Daniyal Malik" />
            <h3>Daniyal Malik</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default VexUTeam;
