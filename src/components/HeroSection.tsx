
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Trophy, Target } from 'lucide-react';

interface HeroSectionProps {
  onEarnPoints: (points: number, message: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onEarnPoints }) => {
  const [clickCount, setClickCount] = useState(0);
  const [hasEarnedInitialPoints, setHasEarnedInitialPoints] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const aboutText = "I'm a passionate full-stack developer who transforms ideas into digital reality. With expertise in React, TypeScript, Node.js, and modern web technologies, I create seamless user experiences that matter. Every line of code I write tells a story of innovation and craftsmanship.";

  useEffect(() => {
    if (!hasEarnedInitialPoints) {
      onEarnPoints(200, 'Welcome to the Command Center!');
      setHasEarnedInitialPoints(true);
    }
  }, [onEarnPoints, hasEarnedInitialPoints]);

  useEffect(() => {
    if (currentIndex < aboutText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + aboutText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, aboutText]);

  const handleSpecialAction = () => {
    if (clickCount < 5) {
      const points = 25 + (clickCount * 10);
      onEarnPoints(points, `Special Action +${points} XP!`);
      setClickCount(prev => prev + 1);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 dark:from-gray-900 dark:via-emerald-950 dark:to-green-950">
      {/* Gaming Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-teal-500/10" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-emerald-500/50 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=500&fit=crop&crop=face"
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent" />
              </motion.div>
            </div>

            <motion.h1 
              className="text-4xl md:text-6xl font-game font-bold text-center lg:text-left"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                Command Center
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.button
                onClick={handleSpecialAction}
                className="bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl neon-glow group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="inline mr-2" size={20} />
                Special Action
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded">
                  {clickCount < 5 ? `+${25 + (clickCount * 10)} XP` : 'MAX'}
                </span>
              </motion.button>

              <motion.button
                onClick={() => onEarnPoints(15, 'Boss Mode Activated!')}
                className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Trophy className="inline mr-2" size={20} />
                Boss Mode
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded">+15 XP</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Typing Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-emerald-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                About The Developer
              </motion.h2>
              
              <div className="relative">
                <p className="text-lg text-gray-300 leading-relaxed font-mono">
                  {displayedText}
                  <motion.span
                    className="inline-block w-0.5 h-6 bg-emerald-400 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  />
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="mt-6 grid grid-cols-2 gap-4"
              >
                <div className="text-center p-4 bg-emerald-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-300">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-green-300">100+</div>
                  <div className="text-sm text-gray-400">Projects Done</div>
                </div>
              </motion.div>

              <motion.button
                onClick={() => onEarnPoints(10, 'Explorer Bonus!')}
                className="w-full mt-6 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
              >
                <Target className="inline mr-2" size={20} />
                Explore More
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded">+10 XP</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="mt-16 text-center"
        >
          <ChevronDown className="mx-auto text-emerald-400" size={32} />
          <p className="text-sm text-gray-400 mt-2">Scroll to explore more sections</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
