
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Trophy, Target } from 'lucide-react';

interface HeroSectionProps {
  onEarnPoints: (points: number, message: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onEarnPoints }) => {
  const [clickCount, setClickCount] = useState(0);
  const [hasEarnedInitialPoints, setHasEarnedInitialPoints] = useState(false);

  useEffect(() => {
    if (!hasEarnedInitialPoints) {
      onEarnPoints(200, 'Welcome to the Command Center!');
      setHasEarnedInitialPoints(true);
    }
  }, [onEarnPoints, hasEarnedInitialPoints]);

  const handleSpecialAction = () => {
    if (clickCount < 5) {
      const points = 25 + (clickCount * 10);
      onEarnPoints(points, `Special Action +${points} XP!`);
      setClickCount(prev => prev + 1);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Gaming Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-teal/10 to-neon-purple/10" />
      
      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-game font-bold"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <span className="bg-gradient-to-r from-neon-blue via-neon-teal to-neon-purple bg-clip-text text-transparent">
              Command Center
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Welcome to Boss.dev - Where code meets creativity and innovation becomes reality
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            <motion.button
              onClick={handleSpecialAction}
              className="game-button neon-glow group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="inline mr-2" size={20} />
              Special Action
              <span className="ml-2 text-xs bg-neon-teal/20 px-2 py-1 rounded">
                {clickCount < 5 ? `+${25 + (clickCount * 10)} XP` : 'MAX'}
              </span>
            </motion.button>

            <motion.button
              onClick={() => onEarnPoints(15, 'Boss Mode Activated!')}
              className="bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Trophy className="inline mr-2" size={20} />
              Boss Mode
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded">+15 XP</span>
            </motion.button>

            <motion.button
              onClick={() => onEarnPoints(10, 'Explorer Bonus!')}
              className="bg-gradient-to-r from-neon-green to-neon-teal text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Target className="inline mr-2" size={20} />
              Explore
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded">+10 XP</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mt-16"
          >
            <ChevronDown className="mx-auto text-neon-teal" size={32} />
            <p className="text-sm text-gray-400 mt-2">Scroll to explore more sections</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
