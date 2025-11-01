import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LandingCard.css';

type RobomasterCardProps = {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export default function RobomasterCard({ onClick }: RobomasterCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="landing-card robomaster-card"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* Video background on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.video
            className="card-hover-video"
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <source src="/videos/RoboMasters.mp4" type="video/mp4" />
          </motion.video>
        )}
      </AnimatePresence>
      
      <div className="card-content">
        <motion.h2
          className="card-title"
          animate={{ letterSpacing: ['0px', '8px', '4px'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ROBOMASTER
        </motion.h2>
        <div className="card-image-container">
          <AnimatePresence>
            {!isHovered && (
              <motion.img 
                src="/icons/Robomaster.png" 
                alt="Robomaster" 
                className="card-logo"
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </div>
        <motion.div
          className="card-arrow"
          whileHover={{ x: 5, y: 5 }}
        >
          ↘
        </motion.div>
      </div>
    </motion.div>
  );
}

