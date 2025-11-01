import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Champion = {
  id: number;
  name: string;
  img: string;
  stats: { hp: number; atk: number; spd: number };
};

const champions: Champion[] = [
  { id: 1, name: "Mechimp", img: "https://placehold.co/300x300?text=Mechimp", stats: { hp: 80, atk: 60, spd: 50 } },
  { id: 2, name: "CyberWolf", img: "https://placehold.co/300x300?text=Wolf", stats: { hp: 70, atk: 75, spd: 65 } },
  { id: 3, name: "RoboFrog", img: "https://placehold.co/300x300?text=Frog", stats: { hp: 60, atk: 55, spd: 80 } },
  { id: 4, name: "NanoPig", img: "https://placehold.co/300x300?text=Pig", stats: { hp: 90, atk: 40, spd: 45 } },
  { id: 5, name: "SteelBird", img: "https://placehold.co/300x300?text=Bird", stats: { hp: 65, atk: 70, spd: 75 } },
  { id: 6, name: "AquaCat", img: "https://placehold.co/300x300?text=Cat", stats: { hp: 75, atk: 65, spd: 60 } },
  { id: 7, name: "BoltBear", img: "https://placehold.co/300x300?text=Bear", stats: { hp: 85, atk: 55, spd: 55 } },
  { id: 8, name: "IronLizard", img: "https://placehold.co/300x300?text=Lizard", stats: { hp: 70, atk: 65, spd: 60 } },
  { id: 9, name: "PlasmaHawk", img: "https://placehold.co/300x300?text=Hawk", stats: { hp: 60, atk: 80, spd: 70 } },
];

export default function TeamSelection() {
  const [selected, setSelected] = useState<Champion>(champions[0]);
  const [transitioning, setTransitioning] = useState(false);

  const handleSelect = (champ: Champion) => {
    if (champ.id === selected.id || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setSelected(champ);
      setTransitioning(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-10">
      <div className="max-w-6xl w-full flex gap-10">
        {/* Left: grid */}
        <div className="grid grid-cols-3 gap-6 flex-1">
          {champions.map((champ) => (
            <motion.div
              key={champ.id}
              className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                champ.id === selected.id ? "border-cyan-400" : "border-transparent hover:border-cyan-600"
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleSelect(champ)}
            >
              <img src={champ.img} alt={champ.name} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Right: detail */}
        <div className="relative w-[350px] flex flex-col justify-center items-center bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
          <div className="relative w-64 h-64 overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.img
                key={selected.id}
                src={selected.img}
                alt={selected.name}
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0 }}
                animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
                exit={{
                  clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                  opacity: 0,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
              <p className="text-sm text-slate-400 mb-4">A brave and powerful champion ready for battle.</p>
              <div className="space-y-2 text-left text-sm">
                <p>Health Points: <span className="text-cyan-400">{selected.stats.hp}</span></p>
                <p>Attack: <span className="text-cyan-400">{selected.stats.atk}</span></p>
                <p>Speed: <span className="text-cyan-400">{selected.stats.spd}</span></p>
              </div>
              <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-xl font-semibold transition">Continue</button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}