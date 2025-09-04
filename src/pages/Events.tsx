import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Events() {
  const { t } = useTranslation();
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Events1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content">
        <h1>Upcoming Event</h1>
        <div className="event-module award-module">
          <img
            src="/images/hmJ2dyvQ_1742195030203.png"
            alt="8th China University Intelligent Robot Innovation Competition"
          />
          <div className="event-text">
            <h3>8th China University Intelligent Robot Innovation Competition</h3>
            <p>
              Established in 2017, this national-level competition is jointly hosted by the China Association of Higher
              Education, the Ministry of Education’s Engineering Graphics Curriculum Committee, and the China University
              Intelligent Robot Innovation Competition Committee. It is co-organized by Zhejiang University and supported by
              the People’s Government of Yuyao, Zhejiang.
            </p>
            <p>
              Held annually, the event promotes innovation and engineering skills among university students through a talent
              development chain integrating problem discovery, solution design, technical implementation, and project
              incubation. In 2020, it was listed among the top national university competitions in China.
            </p>
            <p>
              <strong>Special Event 3: VEX U Intelligent Robot Competition</strong>
              <br />
              As part of the globally renowned VEX World Championship, this year’s VEX U challenge is titled
              <em>“High Stakes.”</em> Each team controls two robots on a 3.7m x 3.7m field, competing through a 30-second
              autonomous period and a 90-second driver-controlled period. Points are earned by placing rings on posts,
              moving mobile goals, and climbing during the endgame.
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

        <h1>Awards</h1>
        <div className="event-module award-module">
          <img
            src="/images/2024_VEX_Asia_Open_Signaure_Event/DSC07467.JPG"
            alt="Second Prize – VEX Asia Open Signature Event"
          />
          <div className="event-text">
            <h3>Second Prize – VEX Asia Open Signature Event</h3>
            <p>
              From December 29th to January 1st, the NYU Shanghai Robotics Club earned an impressive second prize at the VEX
              Asia Open Signature Event. The competition welcomed over 500 elite teams from China, Macao, Hong Kong, the
              United States, Singapore, and the UAE. Both NYU Shanghai teams advanced through the group stages, demonstrating
              exceptional skill and perseverance.
            </p>
          </div>
        </div>

        <div className="event-module award-module">
          <img
            src="/images/2024_VEX_Elite_Invitational _Competition/DSC06769.JPG"
            alt="Promising Award – SJTU VEX Elite Invitational"
          />
          <div className="event-text">
            <h3>Promising Award – SJTU VEX Elite Invitational Competition</h3>
            <p>
              On December 22, 2024, the NYU Shanghai Robotics Club received the Promising Award at the SJTU VEX Elite
              Invitational Competition. The event featured 29 teams from 17 top universities including SJTU, Xi’an Jiaotong
              University, Tongji University, and HIT Shenzhen. This recognition highlights the club’s dedication to innovation
              and collaboration in competitive robotics.
            </p>
          </div>
        </div>

        <h1>Past Events</h1>
        <div className="event-module award-module">
          <img
            src="/images/20250418, Chen Feng, cover (1).png"
            alt="Embodied Spatial Intelligence Talk"
          />
          <div className="event-text">
            <h3>Embodied Spatial Intelligence: Bridging Perception, Reasoning, and Action</h3>
            <p>
              This talk introduces how machines learn to see, understand, and interact with the world in ways similar to humans.
              It explores embodied spatial intelligence, where agents build robust environmental representations to complete
              navigation and manipulation tasks. Topics included spatial mapping, unknown environment exploration, understanding
              human intention, and robot learning from human activity videos.
            </p>
            <p>
              <strong>Speaker:</strong> Prof. Chen Feng, Director of AI4CE Lab, NYU. NSF CAREER Awardee.
              <br />
              More at <a href="https://ai4ce.github.io" target="_blank" rel="noreferrer">ai4ce.github.io</a>
            </p>
          </div>
        </div>

        <div className="event-module award-module">
          <img src="/images/Group Photo.jpg" alt="Lenovo Visit" />
          <div className="event-text">
            <h3>Field Trip: Robotics Club | Lenovo Future Center</h3>
            <p>
              On November 15, 2024, members of the NYU Shanghai Robotics Club visited the Lenovo Future Center in Shanghai.
              During the trip, students explored cutting-edge technologies in AI, robotics, and smart manufacturing. The field
              trip offered valuable industry exposure and sparked meaningful discussions on the future of robotics.
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
              On September 12, 2024, the Robotics Club participated in the Fall Involvement Fair held at NYU Shanghai’s
              Qiantan campus. Club members showcased past projects, upcoming events, and the vision of the club to dozens of
              interested students and faculty. The fair served as a strong recruiting opportunity, welcoming a new wave of
              robotics enthusiasts into our community.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Events;
