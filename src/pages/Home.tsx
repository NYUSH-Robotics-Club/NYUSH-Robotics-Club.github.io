import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
        <h1>{t('home.title')}</h1>
        <p>{t('home.intro')}</p>

        <br />

        <h2>{t('home.who')}</h2>
        <p>
          Founded in 2024, the NYU Shanghai Robotics Club provides a platform for students to explore the world of robotics.
          Our mission is to foster creativity and technical skills through rich educational resources and practical projects.
        </p>

        <br />
        <br />

        <h2>{t('home.awards')}</h2>

        <div className="event-module award-module">
          <img
            src="/images/2024_VEX_Asia_Open_Signaure_Event/DSC07467.JPG"
            alt="VEX Asia Open Second Prize"
          />
          <div className="event-text">
            <h3>Second Prize – VEX Asia Open Signature Event</h3>
            <p>
              From December 29th to January 1st, the NYU Shanghai Robotics Club earned an impressive second prize at the VEX Asia Open Signature Event.
              The competition welcomed over 500 elite teams from China, Macao, Hong Kong, the United States, Singapore, and the UAE.
            </p>
          </div>
        </div>

        <div className="event-module award-module">
          <img
            src="/images/2024_VEX_Elite_Invitational _Competition/DSC06769.JPG"
            alt="Promising Award – SJTU VEX Elite Invitational"
          />
          <div className="event-text">
            <h3>Promising Award – Shanghai Jiao Tong University VEX Elite Invitational Competition</h3>
            <p>
              On December 22, 2024, the NYU Shanghai Robotics Club received the Promising Award at the VEX Elite Invitational Competition hosted by Shanghai Jiao Tong University.
              The event gathered 29 teams from 17 top universities including SJTU, Xi’an Jiaotong University, Tongji University, and HIT Shenzhen.
            </p>
          </div>
        </div>

        <br />
        <br />

        <h2>{t('home.upcoming')}</h2>
        <div className="event-module award-module">
          <img
            src="/images/hmJ2dyvQ_1742195030203.png"
            alt="8th China University Intelligent Robot Innovation Competition"
          />
          <div className="event-text">
            <h3>8th China University Intelligent Robot Innovation Competition</h3>
            <p>
              Established in 2017, this national-level competition is hosted by the China Association of Higher Education and co-organized by Zhejiang University and the People’s Government of Yuyao.
            </p>
            <p>
              The event fosters innovation through a talent development chain integrating problem discovery, solution design, technical implementation, and incubation.
            </p>
            <p>
              <strong>Special Event 3: VEX U Intelligent Robot Competition</strong>
              <br />
              This year's theme “High Stakes” features two robots per team in a 3.7m x 3.7m arena with autonomous and driver-controlled periods.
              Teams score by placing rings, moving mobile goals, and climbing during the endgame.
              <br />
              <br />
              Learn more via the{' '}
              <a href="https://www.vexforum.cn/t/topic/14581?" target="_blank" rel="noreferrer">
                official Chinese VEX forum
              </a>
              .
            </p>
          </div>
        </div>

        <br />
        <br />

        <h2>{t('home.past')}</h2>

        <div className="event-module award-module">
          <img
            src="/images/20250418, Chen Feng, cover (1).png"
            alt="Embodied Spatial Intelligence Talk"
          />
          <div className="event-text">
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
          </div>
        </div>

        <div className="event-module award-module">
          <img src="/images/Group Photo.jpg" alt="Lenovo Future Center Visit" />
          <div className="event-text">
            <h3>Field Trip: Robotics Club | Lenovo Future Center</h3>
            <p>
              On November 15, 2024, club members visited Lenovo’s Future Center in Shanghai to explore innovations in AI, robotics, and smart manufacturing.
            </p>
          </div>
        </div>

        <Link
          to="/past-event-involvementfair"
          className="event-module award-module"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <img
            src="/images/Involvement Fair/Involvement Fair 1.JPG"
            alt="2024 Fall Involvement Fair"
          />
          <div className="event-text">
            <h3>2024 Fall Involvement Fair</h3>
            <p>
              On September 12, 2024, the Robotics Club showcased its vision and past projects at NYU Shanghai’s Qiantan campus, attracting a new wave of robotics enthusiasts.
            </p>
          </div>
        </Link>

        <br />
        <br />

        <h2>{t('home.join')}</h2>
        <p>
          Interested in joining the NYU Shanghai Robotics Club? Get involved in exciting projects and competitions and shape the future of robotics with us!
        </p>

        <br />

        <h2>{t('home.contact')}</h2>
        <p>If you have any questions or would like to learn more, please reach out through our social media platforms.</p>
      </div>
    </>
  );
}

export default Home;
