import React from 'react';
import { motion } from 'framer-motion';
import './LandingCard.css';

type OurTeamsCardProps = {
  onNavigate?: (page: string) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export default function OurTeamsCard({ onNavigate, onClick }: OurTeamsCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If custom onClick provided, use it (for animation)
    // Otherwise navigate to teams page
    if (onClick) {
      onClick(e);
    } else if (onNavigate) {
      e.stopPropagation();
      onNavigate('teams');
    }
  };

  return (
    <motion.div 
      className="landing-card our-teams-card"
      whileHover={{ scale: 1.04 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="card-content">
        <span className="card-label">OUR TEAMS</span>
        <motion.button
          className="card-explore-btn"
          whileHover={{ backgroundColor: '#000000', color: '#ffffff' }}
          transition={{ duration: 0.3 }}
        >
          EXPLORE
        </motion.button>
      </div>
    </motion.div>
  );
}

