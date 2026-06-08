import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Target, Zap, Award, TrendingUp } from 'lucide-react';

interface GameSidebarProps {
  totalPoints: number;
  currentSection: string;
}

const GameSidebar: React.FC<GameSidebarProps> = ({ totalPoints, currentSection }) => {
  const [isVisible, setIsVisible] = useState(true);

  const sectionDetails = {
    hero: { title: 'Home', icon: Star, color: 'var(--gold)' },
    about: { title: 'About', icon: Target, color: 'var(--gold)' },
    skills: { title: 'Skills', icon: Zap, color: 'var(--gold)' },
    projects: { title: 'Projects', icon: Award, color: 'var(--gold)' },
    experience: { title: 'Experience', icon: TrendingUp, color: 'var(--gold)' },
    contact: { title: 'Contact', icon: Trophy, color: 'var(--gold)' }
  };

  const currentDetails = sectionDetails[currentSection as keyof typeof sectionDetails] || sectionDetails.hero;
  const CurrentIcon = currentDetails.icon;

  const achievements = [
    { name: 'First Visit', points: 1000, unlocked: totalPoints >= 1000 },
    { name: 'Explorer', points: 250, unlocked: totalPoints >= 1250 },
    { name: 'Social Connector', points: 500, unlocked: totalPoints >= 1500 },
    { name: 'Code Explorer', points: 1000, unlocked: totalPoints >= 2500 },
    { name: 'Portfolio Master', points: 2000, unlocked: totalPoints >= 4000 },
  ];

  const getLevel = (points: number) => Math.floor(points / 1000) + 1;
  const getProgressInLevel = (points: number) => (points % 1000) / 1000 * 100;

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed top-24 right-8 z-40 w-12 h-12 border border-[var(--line)] bg-[var(--black)] flex items-center justify-center text-[var(--gold)] hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.1)] transition-all"
        whileHover={{ scale: 1.1 }}
        style={{
          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)'
        }}
      >
        <Trophy size={20} />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed top-24 right-8 z-40 w-80 border border-[var(--line)] bg-[var(--black)] overflow-hidden"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
        maxHeight: 'calc(100vh - 140px)'
      }}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[var(--gold)] opacity-50" />
      
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-6 text-[var(--warm-gray)] hover:text-[var(--gold)] transition-colors text-xs"
      >
        ✕
      </button>

      <div className="overflow-y-auto max-h-[calc(100vh-140px)] custom-scrollbar">
        {/* Header */}
        <div className="p-6 border-b border-[var(--line)]">
          <div className="flex items-center gap-3 mb-2">
            <CurrentIcon size={18} className="text-[var(--gold)]" />
            <h3 className="font-['Bebas_Neue'] text-[20px] text-[var(--off-white)] tracking-[1px]">
              {currentDetails.title} Quest
            </h3>
          </div>
          <p className="font-['Outfit'] text-[11px] text-[var(--warm-gray)] tracking-[1px]">
            Explore and earn XP rewards
          </p>
        </div>

        {/* Current XP */}
        <div className="p-6 border-b border-[var(--line)]">
          <div className="flex items-center justify-between mb-3">
            <span className="font-['DM_Mono'] text-[11px] tracking-[2px] uppercase text-[var(--warm-gray)]">
              Level {getLevel(totalPoints)}
            </span>
            <span className="font-['Bebas_Neue'] text-[28px] leading-none text-[var(--gold)]">
              {totalPoints.toLocaleString()} XP
            </span>
          </div>
          <div className="w-full h-2 bg-[var(--line)] overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]"
              initial={{ width: '0%' }}
              animate={{ width: `${getProgressInLevel(totalPoints)}%` }}
              transition={{ duration: 1 }}
            />
          </div>
          <p className="font-['DM_Mono'] text-[9px] text-[var(--warm-gray)] tracking-[1px] mt-2">
            Next: {((getLevel(totalPoints)) * 1000).toLocaleString()} XP
          </p>
        </div>

        {/* Pro Tips */}
        <div className="p-6 border-b border-[var(--line)]">
          <h4 className="font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-[var(--gold)] mb-4 flex items-center gap-2">
            💡 Pro Tips
          </h4>
          <ul className="space-y-2">
            <li className="font-['Outfit'] text-[11px] text-[var(--warm-gray)] leading-[1.6] flex items-start gap-2">
              <span className="text-[var(--gold)]">›</span>
              Click buttons and cards for XP
            </li>
            <li className="font-['Outfit'] text-[11px] text-[var(--warm-gray)] leading-[1.6] flex items-start gap-2">
              <span className="text-[var(--gold)]">›</span>
              Visit all sections to level up
            </li>
            <li className="font-['Outfit'] text-[11px] text-[var(--warm-gray)] leading-[1.6] flex items-start gap-2">
              <span className="text-[var(--gold)]">›</span>
              Interact with projects for bonus
            </li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="p-6">
          <h4 className="font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-[var(--gold)] mb-4 flex items-center gap-2">
            🏆 Achievements
          </h4>
          <div className="space-y-2">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-3 border transition-all ${
                  achievement.unlocked 
                    ? 'border-[var(--gold)] bg-[rgba(201,168,76,0.05)]' 
                    : 'border-[var(--line)] bg-transparent'
                }`}
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)'
                }}
              >
                {achievement.unlocked && (
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-[var(--gold)] opacity-60" />
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">
                      {achievement.unlocked ? '🏆' : '🔒'}
                    </span>
                    <div>
                      <span className={`font-['Outfit'] text-[11px] font-medium block ${
                        achievement.unlocked ? 'text-[var(--off-white)]' : 'text-[var(--warm-gray)]'
                      }`}>
                        {achievement.name}
                      </span>
                      <span className={`font-['DM_Mono'] text-[9px] ${
                        achievement.unlocked ? 'text-[var(--gold)]' : 'text-[var(--warm-gray)]'
                      }`}>
                        +{achievement.points} XP
                      </span>
                    </div>
                  </div>
                  {achievement.unlocked && (
                    <span className="text-[var(--gold)] text-sm">✓</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--black);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--line);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--gold);
        }
      `}</style>
    </motion.div>
  );
};

export default GameSidebar;