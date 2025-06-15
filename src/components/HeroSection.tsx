
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark-primary dark:to-dark-secondary">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-teal rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + (i * 4) % 80}%`,
              top: `${20 + (i * 6) % 60}%`,
            }}
          />
        ))}
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <div className="relative inline-block">
              <motion.div
                className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-neon-teal shadow-2xl"
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
                  alt="Besufkad Ayele - Boss"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Level badge */}
              <motion.div
                className="absolute -top-2 -right-2 level-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                LV.5
              </motion.div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-pink via-neon-blue to-neon-teal bg-clip-text text-transparent">
                Besufkad Ayele
              </span>
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Flutter & Fullstack Developer
            </motion.p>
            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 font-game"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {"<"} Boss Mode: ON {"/>"}
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex justify-center space-x-8 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { label: 'XP Points', value: '15,420' },
              { label: 'Projects', value: '25+' },
              { label: 'Clients', value: '10+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-teal bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="game-button text-lg px-8 py-4 neon-glow"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(78, 205, 196, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              🎮 Start Game
            </motion.button>
          </motion.div>

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
      </div>
    </section>
  );
};

export default HeroSection;
