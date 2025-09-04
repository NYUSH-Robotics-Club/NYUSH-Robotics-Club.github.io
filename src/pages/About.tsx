import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/videos/About.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>{t('about.title')}</h1>
        <p>
          The NYU Shanghai Robotics Club is dedicated to promoting interest in robotics through education,
          competitions, and hands-on projects. Our mission is to foster creativity and technical skills through
          rich educational resources and practical projects.
        </p>
        <h2>Our Teams</h2>
        <div className="team-button">
          <Link to="/vex-u-team">
            <img src="/images/VEX U.png" alt="VEX U Team" />
            <div className="team-text">VEX U Team</div>
          </Link>
        </div>
        <div className="team-button">
          <Link to="/robomaster-team">
            <img src="/images/Robomaster.png" alt="Robomaster Team" />
            <div className="team-text">Robomaster Team</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
