import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./OurTeams.css";

type OurTeamsProps = {
  showGridOnly?: boolean;
  onNavigate?: (page: string) => void;
};

type TeamMember = {
  id: number;
  name: string;
  img: string;
  department: string;
  description: string;
  stats: { hp: number; atk: number; spd: number };
};

const departments = ["All", "PR & Marketing", "Hardware", "Mechanical"];

const departmentDescriptions: Record<string, string> = {
  All: "Welcome to NYU Shanghai Robotics Club! We are a passionate community of innovators, builders, and problem-solvers dedicated to advancing robotics technology and education.",
  "PR & Marketing": "Media & design\nOrganizing events\nPromotional materials\nManage social media and external communications\nSeek sponsorships and partnerships\nBuild connections with other teams, companies, and the school board\nGet more students involved in STEM",
  Hardware: "Programming\nHardware Design\nEmbedded Programming\nRobot Control Theory\nKinematics\nPID tuning and implementation\nCAN, UART, PWM communication",
  Mechanical: "Solidworks and Autofusion 360 design\nBuilding and repairing robots in real time\n3D printing\nCNC designing\nManufacturing and testing",
};

const teamMembers: TeamMember[] = [
  { id: 1, name: "Mechimp", img: "https://placehold.co/300x300?text=Mechimp", department: "Hardware", description: "A brave and powerful champion ready for battle.", stats: { hp: 80, atk: 60, spd: 50 } },
  { id: 2, name: "CyberWolf", img: "https://placehold.co/300x300?text=Wolf", department: "PR & Marketing", description: "A brave and powerful champion ready for battle.", stats: { hp: 70, atk: 75, spd: 65 } },
  { id: 3, name: "RoboFrog", img: "https://placehold.co/300x300?text=Frog", department: "Mechanical", description: "A brave and powerful champion ready for battle.", stats: { hp: 60, atk: 55, spd: 80 } },
  { id: 4, name: "NanoPig", img: "https://placehold.co/300x300?text=Pig", department: "Hardware", description: "A brave and powerful champion ready for battle.", stats: { hp: 90, atk: 40, spd: 45 } },
  { id: 5, name: "SteelBird", img: "https://placehold.co/300x300?text=Bird", department: "Hardware", description: "A brave and powerful champion ready for battle.", stats: { hp: 65, atk: 70, spd: 75 } },
  { id: 6, name: "AquaCat", img: "https://placehold.co/300x300?text=Cat", department: "PR & Marketing", description: "A brave and powerful champion ready for battle.", stats: { hp: 75, atk: 65, spd: 60 } },
  { id: 7, name: "BoltBear", img: "https://placehold.co/300x300?text=Bear", department: "Mechanical", description: "A brave and powerful champion ready for battle.", stats: { hp: 85, atk: 55, spd: 55 } },
  { id: 8, name: "IronLizard", img: "https://placehold.co/300x300?text=Lizard", department: "Hardware", description: "A brave and powerful champion ready for battle.", stats: { hp: 70, atk: 65, spd: 60 } },
  { id: 9, name: "PlasmaHawk", img: "https://placehold.co/300x300?text=Hawk", department: "Mechanical", description: "A brave and powerful champion ready for battle.", stats: { hp: 60, atk: 80, spd: 70 } },
];

export default function OurTeams({ showGridOnly = false, onNavigate }: OurTeamsProps) {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [transitioning, setTransitioning] = useState(false);

  const filteredMembers = selectedDepartment === "All" 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  const handleSelect = (member: TeamMember) => {
    if (selected && member.id === selected.id || transitioning) return;
    
    setTransitioning(true);
    setTimeout(() => {
      setSelected(member);
      setTransitioning(false);
    }, 600);
  };

  const handleDepartmentChange = (dept: string) => {
    setSelectedDepartment(dept);
    setSelected(null); // Reset to show department description
  };

  // Show department description or member details
  const displayContent = selected ? {
    name: selected.name,
    description: selected.description,
    image: selected.img,
    showStats: true,
    stats: selected.stats
  } : {
    name: selectedDepartment,
    description: departmentDescriptions[selectedDepartment],
    image: "https://placehold.co/300x300?text=" + selectedDepartment,
    showStats: false,
    stats: null
  };

  return (
    <div className={`our-teams-container ${showGridOnly ? 'grid-only' : ''}`}>
        {/* Back button hidden when used in CardOpener - CardOpener has its own back button */}
      <div className={`our-teams-content ${showGridOnly ? 'center-grid' : ''}`}>
        {/* Left: Grid with Department Filter */}
        <div className="teams-section">
          {/* Department Selection Bar */}
          <div className="department-bar">
            {departments.map((dept) => (
              <button
                key={dept}
                className={`department-tab ${selectedDepartment === dept ? "active" : ""}`}
                onClick={() => handleDepartmentChange(dept)}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="teams-grid">
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                className={`team-member-card ${
                  selected && member.id === selected.id
                    ? "selected"
                    : ""
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleSelect(member)}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="member-image"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Detail Panel */}
        <div className={`team-detail-panel ${showGridOnly ? 'grid-only-detail' : ''}`}>
          <div className="detail-image-container">
            <AnimatePresence mode="wait">
              <motion.img
                key={displayContent.name}
                src={displayContent.image}
                alt={displayContent.name}
                className="detail-image"
                initial={{
                  clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                  opacity: 0,
                }}
                animate={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  opacity: 1,
                }}
                exit={{
                  clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.6, 0.01, 0.05, 0.95],
                }}
              />
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={displayContent.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="detail-info"
            >
              <h2 className="member-name">{displayContent.name}</h2>
              <p className="member-description">
                {displayContent.description}
              </p>
              {displayContent.showStats && displayContent.stats && (
                <div className="member-stats">
                  <p>
                    Health Points:{" "}
                    <span className="stat-value">{displayContent.stats.hp}</span>
                  </p>
                  <p>
                    Attack:{" "}
                    <span className="stat-value">{displayContent.stats.atk}</span>
                  </p>
                  <p>
                    Speed:{" "}
                    <span className="stat-value">{displayContent.stats.spd}</span>
                  </p>
                </div>
              )}
              <button className="continue-button">
                Continue
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
