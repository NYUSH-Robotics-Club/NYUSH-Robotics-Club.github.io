import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';

function Events() {
  const { t } = useTranslation();
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Members.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content">

        <h1>Awards</h1>
        <EventCard
          imgSrc="/images/2024_VEX_Asia_Open_Signaure_Event/DSC07467.JPG"
          imgAlt="Second Prize – VEX Asia Open Signature Event"
        >
          <h3>Second Prize – VEX Asia Open Signature Event</h3>
          <p>
            From December 29th to January 1st, the NYU Shanghai Robotics Club earned an impressive second prize at the VEX
            Asia Open Signature Event. The competition welcomed over 500 elite teams from China, Macao, Hong Kong, the
            United States, Singapore, and the UAE. Both NYU Shanghai teams advanced through the group stages, demonstrating
            exceptional skill and perseverance.
          </p>
        </EventCard>

        <EventCard
          imgSrc="/images/2024_VEX_Elite_Invitational _Competition/DSC06769.JPG"
          imgAlt="Promising Award – SJTU VEX Elite Invitational"
        >
          <h3>Promising Award – SJTU VEX Elite Invitational Competition</h3>
          <p>
            On December 22, 2024, the NYU Shanghai Robotics Club received the Promising Award at the SJTU VEX Elite
            Invitational Competition. The event featured 29 teams from 17 top universities including SJTU, Xi’an Jiaotong
            University, Tongji University, and HIT Shenzhen. This recognition highlights the club’s dedication to innovation
            and collaboration in competitive robotics.
          </p>
        </EventCard>

        <h1>Past Events</h1>
        <EventCard
          imgSrc="/images/20250418, Chen Feng, cover (1).png"
          imgAlt="Embodied Spatial Intelligence Talk"
        >
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
        </EventCard>

        <EventCard imgSrc="/images/Group Photo.jpg" imgAlt="Lenovo Visit">
          <h3>Field Trip: Robotics Club | Lenovo Future Center</h3>
          <p>
            On November 15, 2024, members of the NYU Shanghai Robotics Club visited the Lenovo Future Center in Shanghai.
            During the trip, students explored cutting-edge technologies in AI, robotics, and smart manufacturing. The field
            trip offered valuable industry exposure and sparked meaningful discussions on the future of robotics.
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
                On September 12, 2024, the Robotics Club participated in the Fall Involvement Fair held at NYU Shanghai’s
                Qiantan campus. Club members showcased past projects, upcoming events, and the vision of the club to dozens of
                interested students and faculty. The fair served as a strong recruiting opportunity, welcoming a new wave of
                robotics enthusiasts into our community.
              </p>
            </EventCard>
          </Link>
      </div>
    </>
  );
}

export default Events;
