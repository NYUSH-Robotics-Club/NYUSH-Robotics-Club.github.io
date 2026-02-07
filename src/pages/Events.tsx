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

        <h1>Competitions</h1>
        <EventCard
          imgSrc="/images/events/2025-2026/vex-u-beijing.jpg"
          imgAlt="VEX U Competition - Beijing"
        >
          <h3>VEX U Competition - Beijing</h3>
          <p>
            From December 18 to 21, 2025, our team participated in the VEX U competition in Beijing. While we did not secure a
            podium finish, the event offered invaluable opportunities to evaluate and refine our robot's design and
            performance. Competing against highly skilled teams allowed us to systematically identify areas for improvement in
            both hardware and control systems. We subsequently implemented targeted optimizations, resulting in marked
            enhancements in the robot's reliability and overall functionality.
          </p>
        </EventCard>

        <EventCard
          imgSrc="/images/events/2025-2026/vex-asian-open-xian.jpg"
          imgAlt="VEX Robotics Asian Open Grand Finals - Xi'an"
        >
          <h3>VEX Robotics Asian Open Grand Finals - Xi'an</h3>
          <p>
            From January 1 to 3, 2026, the 2025-2026 VEX Robotics Asian Open Grand Finals was held in Xi'an. The NYU Shanghai
            Robotics Club competed in the VEX U division and ranked 7th in the Asian region. After months of preparation on
            hardware optimization, software development, and strategy refinement, the team performed strongly in the group
            stage with key wins against CZTU and HITSZ7, advancing to the elimination rounds. In the knockout stage, the team
            faced the experienced U.S. team BAD and delivered a stable and coordinated performance. Overall, the competition
            demonstrated significant progress in execution consistency, match pacing, and adaptability, providing valuable
            validation of the team's engineering design and collaboration.
          </p>
        </EventCard>

        <EventCard
          imgSrc="/images/events/2025-2026/sjtu.jpg"
          imgAlt="VEX U Competition - SJTU"
        >
          <h3>VEX U Competition - SJTU</h3>
          <p>
            From January 24 to 25, 2026, our team participated in the VEX U competition hosted by Shanghai Jiao Tong
            University. During the two-day event, we competed against multiple strong teams and achieved a notable victory
            against SMP2. The competition provided valuable experience in high-intensity match execution, strategy
            adjustment, and team coordination, contributing significantly to our technical growth and competitive
            development.
          </p>
        </EventCard>

        <h1>Past Events</h1>
        <EventCard
          imgSrc="/images/events/2025-2026/usst-friendly-match.jpg"
          imgAlt="USST Friendly Match"
        >
          <h3>USST Friendly Match</h3>
          <p>
            On Oct 15, 2025, our robotics club hosted a friendly robotics competition with the University of Shanghai for
            Science and Technology (USST) Robotics Club to promote academic exchange and collaboration. The event included
            team-based competitions and a mini-lecture by the USST club president on programming and algorithm design. Members
            from both universities exchanged ideas and strengthened connections, laying the foundation for future joint
            projects and collaborations.
          </p>
        </EventCard>

        <EventCard
          imgSrc="/images/events/2025-2026/3d-printing-workshop.jpg"
          imgAlt="3D Printing Workshop"
        >
          <h3>3D Printing Workshop</h3>
          <p>
            On Nov 6, 2025, our robotics team hosted an engaging 3D Printing Workshop that brought innovation to life. Over
            20 curious and enthusiastic children joined us to explore the fascinating world of 3D printing. After learning the
            fundamentals, they turned theory into practice by designing their very own creations. It was an inspiring
            experience that united young minds passionate about technology, creativity, and the future of engineering.
          </p>
        </EventCard>

        <EventCard
          imgSrc="/images/events/2025-2026/sjtu-prof-lecture.jpg"
          imgAlt="SJTU Professor Lecture"
        >
          <h3>SJTU Professor Lecture</h3>
          <p>
            On Dec 8, 2026, the Robotics Club hosted an academic seminar featuring Professor Chuntao Leng from Shanghai Jiao
            Tong University. In his lecture, "Robots, Science and Technology Innovation Practice," he discussed recent
            advances in robotics, emerging trends, and the integration of engineering education with innovation practice.
            Drawing on his experience mentoring championship robotics teams, he shared insights on talent cultivation and
            engineering training, providing participants with valuable academic and practical perspectives on robotics
            research and education.
          </p>
        </EventCard>

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
