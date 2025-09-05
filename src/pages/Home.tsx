import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/videos/BG.mp4" type="video/mp4" />
          <source src="/videos/BG.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content">
        <section className="intro-section">
          <h1>{t('home.title')}</h1>
          <p>{t('home.introLine1')}</p>
          <p>{t('home.introLine2')}</p>
          <ul>
            <li>{t('home.introVexU')}</li>
            <li>{t('home.introRoboMaster')}</li>
          </ul>
        </section>

        <h2 className="section-title">{t('home.competition')}</h2>

        <EventCard
          imgSrc="/images/2024_VEX_Asia_Open_Signaure_Event/DSC07467.JPG"
          imgAlt="VEX Asia Open Second Prize"
        >
          <h3>Second Prize – VEX Asia Open Signature Event</h3>
          <p>
            From December 29th to January 1st, the NYU Shanghai Robotics Club earned an impressive second prize at the VEX Asia Open Signature Event.
            The competition welcomed over 500 elite teams from China, Macao, Hong Kong, the United States, Singapore, and the UAE.
          </p>
        </EventCard>

        <EventCard
          imgSrc="/images/2024_VEX_Elite_Invitational _Competition/DSC06769.JPG"
          imgAlt="Promising Award – SJTU VEX Elite Invitational"
        >
          <h3>Promising Award – Shanghai Jiao Tong University VEX Elite Invitational Competition</h3>
          <p>
            On December 22, 2024, the NYU Shanghai Robotics Club received the Promising Award at the VEX Elite Invitational Competition hosted by Shanghai Jiao Tong University.
            The event gathered 29 teams from 17 top universities including SJTU, Xi’an Jiaotong University, Tongji University, and HIT Shenzhen.
          </p>
        </EventCard>

        <h2 className="section-title">{t('home.past')}</h2>

        <EventCard
          imgSrc="/images/20250418, Chen Feng, cover (1).png"
          imgAlt="Embodied Spatial Intelligence Talk"
        >
          <h3>Embodied Spatial Intelligence: Bridging Perception, Reasoning, and Action</h3>
          <p>
            This talk introduces how machines learn to see, understand, and interact with the world in ways similar to humans.
            It delves into embodied spatial intelligence, where agents build robust representations of their surroundings to navigate and complete tasks.
            Topics include mapping, exploring unknown environments, human intention understanding, and video-based robot manipulation.
            The speaker also discusses the broader impact on autonomous driving, delivery, household automation, and space exploration.
          </p>
          <p>
            <strong>Speaker:</strong> Prof. Chen Feng, Director of AI4CE Lab, NYU
            <br />
            NSF CAREER Awardee, former scientist at MERL, active researcher in robot perception, mapping, and learning.
            <br />
            More at <a href="https://ai4ce.github.io" target="_blank" rel="noreferrer">ai4ce.github.io</a>
          </p>
        </EventCard>

        <EventCard imgSrc="/images/Group Photo.jpg" imgAlt="Lenovo Future Center Visit">
          <h3>Field Trip: Robotics Club | Lenovo Future Center</h3>
          <p>
            On November 15, 2024, club members visited Lenovo’s Future Center in Shanghai to explore innovations in AI, robotics, and smart manufacturing.
          </p>
        </EventCard>

        <Link
          to="/past-event-involvementfair"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <EventCard
            imgSrc="/images/Involvement Fair/Involvement Fair 1.JPG"
            imgAlt="2024 Fall Involvement Fair"
          >
            <h3>2024 Fall Involvement Fair</h3>
            <p>
              On September 12, 2024, the Robotics Club showcased its vision and past projects at NYU Shanghai’s Qiantan campus, attracting a new wave of robotics enthusiasts.
            </p>
          </EventCard>
        </Link>

        <h2 className="section-title">{t('home.join')}</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="/images/robotics_club_poster.png"
            alt="NYU Shanghai Robotics Club recruitment poster"
            style={{ maxWidth: '50%', height: 'auto', borderRadius: '12px' }}
            loading="lazy"
          />
        </div>
        
      </div>
    </>
  );
}

export default Home;
