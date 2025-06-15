
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Star, Zap } from 'lucide-react';

interface HeroSectionProps {
  onEarnPoints: (points: number, message: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onEarnPoints }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentQuest, setCurrentQuest] = useState(0);

  const quests = [
    "Explore the About section to learn more",
    "Check out the Skills dashboard",
    "Browse through epic Projects",
    "Review the Adventure Timeline",
    "Connect through the Portal"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const questTimer = setInterval(() => {
      setCurrentQuest(prev => (prev + 1) % quests.length);
    }, 4000);

    return () => clearInterval(questTimer);
  }, []);

  const handleSpecialAction = () => {
    onEarnPoints(50, 'Special Action Completed!');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-dark-primary dark:via-green-900/20 dark:to-dark-secondary">
      {/* Game Grid Background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(78, 205, 196, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(78, 205, 196, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-neon-teal rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + (i * 6) % 80}%`,
              top: `${20 + (i * 8) % 60}%`,
            }}
          />
        ))}
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Profile Card */}
            <motion.div
              className="bg-card/80 dark:bg-card/40 backdrop-blur-lg rounded-2xl p-8 border border-neon-teal/30 shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              {/* Profile Image with Level Badge */}
              <div className="relative inline-block mb-6">
                <motion.div
                  className="w-32 h-32 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-neon-teal shadow-2xl"
                  animate={{ 
                    y: [0, -10, 0],
                    boxShadow: [
                      "0 0 20px rgba(78, 205, 196, 0.5)",
                      "0 0 40px rgba(78, 205, 196, 0.8)",
                      "0 0 20px rgba(78, 205, 196, 0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="First_name Last_name - Developer"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div
                  className="absolute -top-2 -right-2 level-badge flex items-center gap-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <Star size={16} />
                  <span>LV.5</span>
                </motion.div>
              </div>

              {/* Name and Title */}
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-neon-pink via-neon-blue to-neon-teal bg-clip-text text-transparent">
                    First_name Last_name
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                  Flutter & Fullstack Developer
                </p>
                <p className="text-lg text-neon-teal font-game">
                  {"<"} Boss Mode: Active {"/>"}
                </p>
              </div>

              {/* Action Button */}
              <motion.button
                onClick={handleSpecialAction}
                className="game-button flex items-center gap-2 text-lg px-6 py-3 neon-glow mx-auto lg:mx-0"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(78, 205, 196, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Gamepad2 size={20} />
                Initialize Game
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Game Stats & Quests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Stats Panel */}
            <div className="bg-card/80 dark:bg-card/40 backdrop-blur-lg rounded-xl p-6 border border-neon-blue/30">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="text-neon-blue" size={20} />
                Player Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'XP Points', value: '15,420', icon: <Zap className="text-neon-green" size={16} /> },
                  { label: 'Projects', value: '25+', icon: <Star className="text-neon-pink" size={16} /> },
                  { label: 'Skills', value: '12', icon: <Trophy className="text-neon-blue" size={16} /> },
                  { label: 'Clients', value: '10+', icon: <Gamepad2 className="text-neon-teal" size={16} /> },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-gray-100/50 dark:bg-gray-800/50 rounded-lg p-3 text-center"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {stat.icon}
                      <span className="text-xl font-bold text-foreground">{stat.value}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current Quest */}
            <div className="bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-xl p-6 border border-neon-purple/30">
              <h3 className="text-lg font-bold mb-3 text-foreground">Current Quest</h3>
              <motion.p
                key={currentQuest}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-gray-600 dark:text-gray-300"
              >
                {quests[currentQuest]}
              </motion.p>
              <div className="mt-3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-neon-purple to-neon-pink h-full rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '60%' }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="bg-card/80 dark:bg-card/40 backdrop-blur-lg rounded-xl p-6 border border-neon-green/30">
              <h3 className="text-lg font-bold mb-3 text-foreground">Recent Achievements</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  '🎯 Flutter Master',
                  '⚡ Next.js Ninja',
                  '🔥 Code Warrior',
                  '🏆 Project Hero',
                ].map((badge, index) => (
                  <motion.span
                    key={badge}
                    className="level-badge text-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-neon-teal rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-neon-teal rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
