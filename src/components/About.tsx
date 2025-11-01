import React, { useState } from 'react';
import RobomasterCard from './RobomasterCard';
import VEXCard from './VEXCard';
import PastEventsCard from './PastEventsCard';
import OurTeamsCard from './OurTeamsCard';
import FutureGoalsCard from './FutureGoalsCard';
import CardOpener from './CardOpener';
import './About.css';

type LandingPageProps = {
  onNavigate?: (page: string) => void;
};

type LandingCardType = {
  id: string;
  name: string;
  description: string;
  image?: string;
};

const landingCards: Record<string, LandingCardType> = {
  robomaster: {
    id: 'robomaster',
    name: 'Robomaster',
    description: 'Robomaster is a cutting-edge robotics competition platform.',
    image: '/icons/Robomaster.png'
  },
  vex: {
    id: 'vex',
    name: 'VEX',
    description: 'VEX Robotics Competition - Building robots, building futures.',
    image: '/images/VEX U.png'
  },
  pastEvents: {
    id: 'pastEvents',
    name: 'Past Events',
    description: 'Check out our past robotics competitions and events.'
  },
  ourTeams: {
    id: 'ourTeams',
    name: 'Our Teams',
    description: 'Meet the talented members of our robotics club teams.'
  },
  futureGoals: {
    id: 'futureGoals',
    name: 'Future Goals',
    description: 'Our vision and goals for the future of robotics at NYU Shanghai.'
  }
};

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [selectedCard, setSelectedCard] = useState<LandingCardType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);

  const handleCardClick = (cardId: string, event: React.MouseEvent<HTMLDivElement>) => {
    const cardElement = event.currentTarget;
    const rect = cardElement.getBoundingClientRect();
    const card = landingCards[cardId];

    setSourceRect(rect);
    setSelectedCard({
      ...card,
      name: card.name,
      description: card.description,
      image: card.image
    });
    setIsOpen(true);
  };

  const handleClose = () => {
    console.log('👋 [About.handleClose] CALLED - isOpen:', isOpen, 'selectedCard:', selectedCard?.name);
    setIsOpen(false);
    console.log('👋 [About.handleClose] Set isOpen to FALSE');
    // Immediately reset card state after close animation is done (CardOpener handles exit)
    setTimeout(() => {
      console.log('👋 [About.handleClose] Timeout - resetting card state');
      setSelectedCard(null);
      setSourceRect(null);
      console.log('👋 [About.handleClose] Card state reset complete');
    }, 700); // Match CardOpener exit duration
  };

  const cardOpenerMember = React.useMemo(() => {
    if (!selectedCard) return null;
    return {
      id: selectedCard.id === 'robomaster' ? 1 : 
          selectedCard.id === 'vex' ? 2 :
          selectedCard.id === 'pastEvents' ? 3 :
          selectedCard.id === 'ourTeams' ? 4 : 5,
      name: selectedCard.name,
      img: selectedCard.image || '/icons/logo.png',
      department: 'Landing',
      description: selectedCard.description,
      stats: undefined
    };
  }, [selectedCard?.id]);

  return (
    <>
      <CardOpener
        member={cardOpenerMember}
        isOpen={isOpen}
        onClose={handleClose}
        sourceRect={sourceRect}
        cardId={selectedCard?.id}
        onNavigateBack={() => onNavigate?.('landing')}
      />
      <div className="landing-page-container">
        <div className="landing-grid">
          {/* Top row: Two larger sections */}
          <div className="top-row-card robomaster-wrapper">
            <RobomasterCard onClick={(e) => handleCardClick('robomaster', e)} />
          </div>
          <div className="top-row-card vex-wrapper">
            <VEXCard onClick={(e) => handleCardClick('vex', e)} />
          </div>
          {/* Bottom row: Three smaller sections */}
          <div className="bottom-row-card">
            <PastEventsCard onClick={(e) => handleCardClick('pastEvents', e)} />
          </div>
          <div className="bottom-row-card">
            <OurTeamsCard onNavigate={onNavigate} onClick={(e) => handleCardClick('ourTeams', e)} />
          </div>
          <div className="bottom-row-card">
            <FutureGoalsCard onClick={(e) => handleCardClick('futureGoals', e)} />
          </div>
        </div>
      </div>
    </>
  );
}
