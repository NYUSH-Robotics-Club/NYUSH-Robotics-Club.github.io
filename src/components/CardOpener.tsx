import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OurTeams from './OurTeams';
import './CardOpener.css';

export type TeamMember = {
  id: number;
  name: string;
  img: string;
  department: string;
  description: string;
  stats?: { hp: number; atk: number; spd: number };
};

type CardOpenerProps = {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigateBack?: () => void;
  sourceRect?: DOMRect | null;
  cardId?: string;
};

export default function CardOpener({ member, isOpen, onClose, onNavigateBack, sourceRect, cardId }: CardOpenerProps) {
  const [stage, setStage] = useState<'flip' | 'medium' | 'fullscreen'>('flip');
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const animationStartedRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const previousMemberIdRef = useRef<number | null>(null);
  const timersOwnerRef = useRef<number | null>(null);

  const calculateInitialTransform = useCallback(() => {
    if (!sourceRect) return null;
    const modalWidth = 400;
    const modalHeight = 500;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const sourceCenterX = sourceRect.left + sourceRect.width / 2;
    const sourceCenterY = sourceRect.top + sourceRect.height / 2;
    const x = sourceCenterX - centerX;
    const y = sourceCenterY - centerY;
    const scaleX = sourceRect.width / modalWidth;
    const scaleY = sourceRect.height / modalHeight;
    return { x, y, scaleX, scaleY };
  }, [sourceRect]);

  const initialTransform = calculateInitialTransform();

  useEffect(() => {
    console.log('🔵 [useEffect] isOpen:', isOpen, 'member:', member?.name, 'isClosing:', isClosing, 'animationStarted:', animationStartedRef.current);
    
    if (!isOpen) {
      console.log('⚪ [useEffect] Card closed - resetting state');
      animationStartedRef.current = false;
      setStage('flip');
      setIsClosing(false);
      previousMemberIdRef.current = null;
      timersOwnerRef.current = null;
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
      return;
    }

    if (!member) {
      console.log('⏭️ [useEffect] Skipping - no member');
      return;
    }

    // If we have a new member, reset everything to allow new animation
    const isNewMember = previousMemberIdRef.current !== member.id;
    if (isNewMember) {
      console.log('🔄 [useEffect] New member detected - resetting flags');
      console.log('🔄 [useEffect] Previous member ID:', previousMemberIdRef.current, 'New member ID:', member.id);
      // Clear all timers first
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
      // Reset all flags and state immediately
      animationStartedRef.current = false;
      setIsClosing(false);
      setStage('flip'); // Reset stage immediately for new card
      previousMemberIdRef.current = member.id;
      
      // Mark this member as the owner of new timers
      timersOwnerRef.current = member.id;
      
      // Use a small delay to ensure state is reset and avoid cleanup conflicts
      const startTimer = setTimeout(() => {
        // Double-check we're still valid and still the owner
        if (isOpen && member && previousMemberIdRef.current === member.id && timersOwnerRef.current === member.id && !animationStartedRef.current) {
          console.log('▶️ [useEffect] Starting card animation (after new member reset)');
          animationStartedRef.current = true;
          setIsClosing(false);
          setStage('flip');
          
          const flipTimer = setTimeout(() => {
            if (timersOwnerRef.current === member.id) {
              console.log('📐 [Timer] Stage transition: flip → medium');
              setStage('medium');
            }
          }, 600);
          
          const fullscreenTimer = setTimeout(() => {
            if (timersOwnerRef.current === member.id) {
              console.log('📐 [Timer] Stage transition: medium → fullscreen');
              setStage('fullscreen');
            }
          }, 1200);
          
          timersRef.current.push(flipTimer, fullscreenTimer);
          console.log('⏱️ [useEffect] Created timers:', timersRef.current.length);
        }
      }, 0);
      timersRef.current.push(startTimer);
      return;
    } else {
      // For same member, check if we should skip
      // If stuck in closing state when opening, reset it
      if (isClosing && !animationStartedRef.current) {
        console.log('🔄 [useEffect] Stuck in closing state - resetting isClosing');
        setIsClosing(false);
        setStage('flip'); // Reset stage
        // Continue to start animation
      } else if (animationStartedRef.current || isClosing) {
        console.log('⏭️ [useEffect] Skipping - animationStarted:', animationStartedRef.current, 'isClosing:', isClosing);
        return;
      }
    }

    console.log('▶️ [useEffect] Starting card animation');
    // Mark this member as the owner of new timers
    timersOwnerRef.current = member.id;
    animationStartedRef.current = true;
    setIsClosing(false);
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];
    setStage('flip');
    console.log('📐 [useEffect] Set stage to: flip');
    
    const flipTimer = setTimeout(() => {
      if (timersOwnerRef.current === member.id) {
        console.log('📐 [Timer] Stage transition: flip → medium');
        setStage('medium');
      }
    }, 600);
    
    const fullscreenTimer = setTimeout(() => {
      if (timersOwnerRef.current === member.id) {
        console.log('📐 [Timer] Stage transition: medium → fullscreen');
        setStage('fullscreen');
      }
    }, 1200);
    
    timersRef.current.push(flipTimer, fullscreenTimer);
    console.log('⏱️ [useEffect] Created timers:', timersRef.current.length);

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        console.log('⌨️ [Keyboard] Escape key pressed');
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      console.log('🧹 [useEffect] Cleanup - timers owner:', timersOwnerRef.current, 'current member:', member?.id);
      // Only clear timers if they don't belong to current member or card is closed
      if (!isOpen || (member && timersOwnerRef.current !== member.id)) {
        console.log('🧹 [useEffect] Actually clearing timers - different owner or closed');
        timersRef.current.forEach(timer => clearTimeout(timer));
        timersRef.current = [];
        if (!isOpen) {
          timersOwnerRef.current = null;
        }
      } else {
        console.log('🧹 [useEffect] Keeping timers - same owner and still open');
      }
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, member?.id, isClosing]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('🖱️ [Backdrop] Clicked, target:', e.target === e.currentTarget, 'stage:', stage);
    if (e.target === e.currentTarget && stage === 'fullscreen') {
      console.log('✅ [Backdrop] Valid backdrop click - calling handleClose');
      handleClose();
    } else {
      console.log('❌ [Backdrop] Invalid backdrop click - target:', e.target === e.currentTarget, 'stage:', stage);
    }
  };

  const handleClose = useCallback(() => {
    console.log('🚪 [handleClose] CALLED - Current stage:', stage, 'isClosing:', isClosing);
    console.log('🚪 [handleClose] Active timers before clear:', timersRef.current.length);
    
    setIsClosing(true);
    console.log('🚪 [handleClose] Set isClosing to TRUE');
    
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];
    console.log('🚪 [handleClose] Cleared all timers');

    if (stage === 'fullscreen') {
      console.log('📐 [handleClose] Path: fullscreen → medium → flip → close');
      setStage('medium');
      console.log('📐 [handleClose] Set stage to: medium');
      
      const timer1 = setTimeout(() => {
        console.log('⏰ [Timer1] 400ms elapsed - transitioning to flip');
        setStage('flip');
        console.log('📐 [Timer1] Set stage to: flip');
        
        const timer2 = setTimeout(() => {
          console.log('⏰ [Timer2] 700ms elapsed - calling onClose()');
          onClose();
          console.log('✅ [Timer2] onClose() executed');
        }, 700);
        timersRef.current.push(timer2);
        console.log('⏱️ [Timer1] Created timer2 (700ms) - total timers:', timersRef.current.length);
      }, 400);
      timersRef.current.push(timer1);
      console.log('⏱️ [handleClose] Created timer1 (400ms) - total timers:', timersRef.current.length);
      
    } else if (stage === 'medium') {
      console.log('📐 [handleClose] Path: medium → flip → close');
      setStage('flip');
      console.log('📐 [handleClose] Set stage to: flip');
      
      const timer = setTimeout(() => {
        console.log('⏰ [Timer] 700ms elapsed - calling onClose()');
        onClose();
        console.log('✅ [Timer] onClose() executed');
      }, 700);
      timersRef.current.push(timer);
      console.log('⏱️ [handleClose] Created timer (700ms) - total timers:', timersRef.current.length);
      
    } else {
      console.log('📐 [handleClose] Path: flip → close (immediate)');
      const timer = setTimeout(() => {
        console.log('⏰ [Timer] 700ms elapsed - calling onClose()');
        onClose();
        console.log('✅ [Timer] onClose() executed');
      }, 700);
      timersRef.current.push(timer);
      console.log('⏱️ [handleClose] Created timer (700ms) - total timers:', timersRef.current.length);
    }
    
    console.log('🚪 [handleClose] EXITING - Final timer count:', timersRef.current.length);
  }, [onClose, stage, isClosing]);

  const getReverseAnimationProps = useCallback(() => {
    if (!initialTransform || !sourceRect) {
      return {
        left: '50%', top: '50%', x: '-50%', y: '-50%', scale: 0.8, opacity: 0,
        transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as const }
      };
    }
    if (stage === 'fullscreen') {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const cardCenterX = sourceRect.left + sourceRect.width / 2;
      const cardCenterY = sourceRect.top + sourceRect.height / 2;
      const midX = (cardCenterX + centerX) / 2;
      const midY = (cardCenterY + centerY) / 2;
      return {
        left: `${midX}px`, top: `${midY}px`, x: '-50%', y: '-50%',
        scaleX: initialTransform.scaleX * 1.2,
        scaleY: initialTransform.scaleY * 1.2,
        width: '500px', height: '600px',
        transition: { duration: 0.4, ease: [0.6, 0.01, 0.05, 0.95] as const }
      };
    } else if (stage === 'medium') {
      return {
        left: `${sourceRect.left + sourceRect.width / 2}px`,
        top: `${sourceRect.top + sourceRect.height / 2}px`, x: '-50%', y: '-50%',
        scaleX: initialTransform.scaleX, scaleY: initialTransform.scaleY,
        width: '400px', height: '500px', opacity: 0,
        transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as const }
      };
    } else {
      return {
        left: `${sourceRect.left + sourceRect.width / 2}px`,
        top: `${sourceRect.top + sourceRect.height / 2}px`, x: '-50%', y: '-50%',
        scaleX: initialTransform.scaleX, scaleY: initialTransform.scaleY, opacity: 0,
        transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as const }
      };
    }
  }, [initialTransform, sourceRect, stage]);

  const getAnimationProps = useCallback(() => {
    if (!initialTransform || !sourceRect) {
      if (stage === 'flip') {
        return { rotateY: [0, 180], scale: 1, opacity: 1, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as const } };
      } else if (stage === 'medium') {
        return { rotateY: 0, scale: 1.2, transition: { duration: 0.4, ease: [0.6, 0.01, 0.05, 0.95] as const } };
      } else {
        return { scale: 1, transition: { duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] as const } };
      }
    }
    if (stage === 'flip') {
      return {
        left: `${sourceRect.left + sourceRect.width / 2}px`,
        top: `${sourceRect.top + sourceRect.height / 2}px`, x: '-50%', y: '-50%',
        scaleX: initialTransform.scaleX, scaleY: initialTransform.scaleY, opacity: 1,
        transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as const }
      };
    } else if (stage === 'medium') {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const cardCenterX = sourceRect.left + sourceRect.width / 2;
      const cardCenterY = sourceRect.top + sourceRect.height / 2;
      const midX = (cardCenterX + centerX) / 2;
      const midY = (cardCenterY + centerY) / 2;
      return {
        left: `${midX}px`, top: `${midY}px`, x: '-50%', y: '-50%',
        scaleX: [initialTransform.scaleX, initialTransform.scaleX * 1.2],
        scaleY: [initialTransform.scaleY, initialTransform.scaleY * 1.2],
        transition: { duration: 0.4, ease: [0.6, 0.01, 0.05, 0.95] as const }
      };
    } else {
      return {
        left: '50%', top: '50%', x: '-50%', y: '-50%',
        scaleX: 1, scaleY: 1, width: '100vw', height: '100vh',
        transition: { duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] as const }
      };
    }
  }, [initialTransform, sourceRect, stage]);

  // Log state changes
  useEffect(() => {
    console.log('🔄 [State] stage:', stage, 'isClosing:', isClosing, 'isOpen:', isOpen, 'member:', member?.name);
  }, [stage, isClosing, isOpen, member?.name]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && member && (
        <>
          <motion.div
            className={`card-opener-backdrop ${isClosing ? 'closing' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isClosing ? 0 : (stage === 'fullscreen' ? 1 : 0.5) }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackdropClick}
            style={{ pointerEvents: isClosing ? 'none' : 'auto' }}
          />

          <motion.div
            key={`card-${member.id}`}
            ref={modalRef}
            className={`flip-card card-opener-stage-${stage} ${isClosing ? 'closing' : ''}`}
            initial={
              initialTransform
                ? {
                    left: `${sourceRect!.left + sourceRect!.width / 2}px`,
                    top: `${sourceRect!.top + sourceRect!.height / 2}px`,
                    x: '-50%', y: '-50%',
                    scaleX: initialTransform.scaleX,
                    scaleY: initialTransform.scaleY,
                    opacity: 1,
                  }
                : { left: '50%', top: '50%', x: '-50%', y: '-50%', scale: 0.8, opacity: 0 }
            }
            animate={ isClosing ? getReverseAnimationProps() : getAnimationProps() }
            exit={{
              left: initialTransform && sourceRect ? `${sourceRect.left + sourceRect.width / 2}px` : '50%',
              top: initialTransform && sourceRect ? `${sourceRect.top + sourceRect.height / 2}px` : '50%',
              x: '-50%', y: '-50%',
              scaleX: initialTransform?.scaleX ?? 1,
              scaleY: initialTransform?.scaleY ?? 1,
              opacity: 0,
              transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as const }
            }}
            style={{ perspective: '1000px', transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
          >
            <motion.div
              className="flip-card__flipper"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: isClosing ? 0 : 180 }}
              exit={{ rotateY: 0 }}
              transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] as const }}
            >
              <motion.div
                className="flip-card__front"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
              >
                <div className="flip-card-front-content">
                  {member.img && (
                    <img src={member.img} alt={member.name} className="flip-card-front-image" />
                  )}
                  <h2 className="flip-card-front-title">{member.name}</h2>
                </div>
              </motion.div>

              <motion.div
                className="flip-card__back"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <button 
                  className="card-opener-back-button" 
                  onClick={(e) => {
                    console.log('🔘 [BackButton] Clicked');
                    e.stopPropagation();
                    handleClose();
                  }} 
                  aria-label="Back"
                >
                  ← Back
                </button>

                <div className="flip-card-back-content">
                  <video autoPlay muted loop playsInline className="component-page-video-bg">
                    <source src="/videos/BG.mp4" type="video/mp4" />
                  </video>

                  {cardId === 'ourTeams' && (
                    <OurTeams showGridOnly={true} onNavigate={handleClose} />
                  )}
                  {cardId === 'robomaster' && (
                    <div className="card-page-content">
                      <div className="card-page-header">
                        <img src={member.img || '/icons/Robomaster.png'} alt="Robomaster" className="card-page-icon" />
                        <h1 className="card-page-title">{member.name}</h1>
                      </div>
                      <div className="card-detail-content">
                        <p>{member.description}</p>
                        <div className="card-section">
                          <h3>About Robomaster</h3>
                          <p>Robomaster is a cutting-edge robotics competition platform that combines technology, strategy, and teamwork. Teams build and program autonomous robots to compete in intense battles.</p>
                        </div>
                        <div className="card-section">
                          <h3>Our Participation</h3>
                          <p>Our team actively participates in Robomaster competitions, building advanced robots with cutting-edge technology and innovative designs.</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {cardId === 'vex' && (
                    <div className="card-page-content">
                      <div className="card-page-header">
                        <img src={member.img || '/images/VEX U.png'} alt="VEX" className="card-page-icon" />
                        <h1 className="card-page-title">{member.name}</h1>
                      </div>
                      <div className="card-detail-content">
                        <p>{member.description}</p>
                        <div className="card-section">
                          <h3>About VEX Robotics</h3>
                          <p>VEX Robotics Competition provides students with hands-on STEM learning. Teams compete in challenging game-based engineering challenges.</p>
                        </div>
                        <div className="card-section">
                          <h3>Our Teams</h3>
                          <p>Our VEX teams design, build, and program robots to compete at regional and world championship levels.</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {cardId === 'pastEvents' && (
                    <div className="card-page-content">
                      <div className="card-page-header">
                        <h1 className="card-page-title">{member.name}</h1>
                      </div>
                      <div className="card-detail-content">
                        <p>{member.description}</p>
                        <div className="card-section">
                          <h3>Recent Competitions</h3>
                          <ul className="event-list">
                            <li>Robomaster Regional Championship 2024</li>
                            <li>VEX Robotics World Championship Qualifiers</li>
                            <li>Tech Innovation Expo 2024</li>
                            <li>STEM Fair - Robotics Showcase</li>
                          </ul>
                        </div>
                        <div className="card-section">
                          <h3>Workshops & Events</h3>
                          <ul className="event-list">
                            <li>Introduction to Robotics Workshop</li>
                            <li>3D Printing & Design Workshop</li>
                            <li>Programming Bootcamp</li>
                            <li>Robot Building Competition</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  {cardId === 'futureGoals' && (
                    <div className="card-page-content">
                      <div className="card-page-header">
                        <h1 className="card-page-title">{member.name}</h1>
                      </div>
                      <div className="card-detail-content">
                        <p>{member.description}</p>
                        <div className="card-section">
                          <h3>Short-term Goals</h3>
                          <ul className="event-list">
                            <li>Expand team membership and outreach</li>
                            <li>Participate in more regional competitions</li>
                            <li>Develop advanced robotics curriculum</li>
                            <li>Build partnerships with industry leaders</li>
                          </ul>
                        </div>
                        <div className="card-section">
                          <h3>Long-term Vision</h3>
                          <ul className="event-list">
                            <li>Establish NYU Shanghai as a robotics hub</li>
                            <li>Win international robotics championships</li>
                            <li>Develop innovative robotics solutions</li>
                            <li>Create pathways for students in robotics careers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function useCardOpener() {
  const [selectedCard, setSelectedCard] = useState<TeamMember | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openCard = useCallback((member: TeamMember) => {
    setSelectedCard(member);
    setIsOpen(true);
  }, []);

  const closeCard = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => setSelectedCard(null), 400);
  }, []);

  return { selectedCard, isOpen, openCard, closeCard };
} 