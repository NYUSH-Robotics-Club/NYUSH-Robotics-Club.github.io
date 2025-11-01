import React from 'react';
import { motion } from 'framer-motion';
import './LandingCard.css';

type PastEventsCardProps = {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export default function PastEventsCard({ onClick }: PastEventsCardProps) {
  return (
    <motion.div 
      className="landing-card past-events-card"
      whileHover={{ scale: 1.04 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className="card-content">
        <span className="card-label">PAST EVENTS</span>
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

