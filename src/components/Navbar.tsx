
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sword, Code, User, Briefcase, Map, Mail, Home } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  totalPoints: number;
  onEarnPoints: (points: number, message: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, totalPoints, onEarnPoints }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [easterEggCount, setEasterEggCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About Quest', icon: User },
    { id: 'skills', label: 'Skills Dashboard', icon: Code },
    { id: 'projects', label: 'Projects Gallery', icon: Briefcase },
    { id: 'experience', label: 'Adventure Log', icon: Map },
    { id: 'contact', label: 'Contact Portal', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
    onEarnPoints(25, `+25 XP - Navigated to ${navItems.find(item => item.id === sectionId)?.label}!`);
  };

  const handleLogoClick = () => {
    setEasterEggCount(prev => prev + 1);
    if (easterEggCount >= 4) {
      const confetti = document.createElement('div');
      confetti.innerHTML = '🎉🎊✨🌟💫';
      confetti.className = 'fixed inset-0 flex items-center justify-center text-6xl z-50 pointer-events-none animate-bounce';
      document.body.appendChild(confetti);
      setTimeout(() => document.body.removeChild(confetti), 2000);
      setEasterEggCount(0);
      onEarnPoints(100, '+100 XP - Easter Egg Found!');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    onEarnPoints(15, '+15 XP - Theme Changed!');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/20 dark:bg-dark-primary/30 backdrop-blur-xl border-b border-white/30 dark:border-gray-700/30 shadow-lg' 
          : 'bg-white/10 dark:bg-dark-primary/20 backdrop-blur-md border-b border-white/20 dark:border-gray-700/20'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button
            onClick={handleLogoClick}
            className="text-2xl font-game font-bold bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent hover:scale-110 transition-transform duration-200 flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="text-neon-teal" size={24} />
            BOSS.dev
          </motion.button>

          {/* Points Display */}
          <div className="hidden md:flex items-center gap-4">
            <div className="bg-gradient-to-r from-neon-green/20 to-neon-teal/20 backdrop-blur-sm rounded-full px-4 py-2 border border-neon-teal/30">
              <span className="text-sm font-bold text-neon-teal">XP: {totalPoints.toLocaleString()}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden flex items-center gap-2 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-neon-blue/80 to-neon-teal/80 text-white shadow-lg backdrop-blur-sm'
                      : 'text-foreground hover:bg-white/20 dark:hover:bg-gray-800/30 backdrop-blur-sm'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={16} />
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-teal/20 rounded-lg -z-10 backdrop-blur-sm"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Points Display Mobile */}
            <div className="md:hidden bg-gradient-to-r from-neon-green/20 to-neon-teal/20 backdrop-blur-sm rounded-full px-3 py-1 border border-neon-teal/30">
              <span className="text-xs font-bold text-neon-teal">{totalPoints.toLocaleString()}</span>
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-green-800/50 dark:to-green-700/50 backdrop-blur-sm border border-gray-300/30 dark:border-green-600/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-xl">
                {isDarkMode ? '🥷🏻' : '🥷🏿'}
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gradient-to-r from-neon-pink to-neon-blue text-white backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Sword 
                size={20} 
                className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} 
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white/20 dark:bg-dark-primary/30 backdrop-blur-xl rounded-lg mt-2 border border-white/30 dark:border-gray-700/30"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-3 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-neon-blue/80 to-neon-teal/80 text-white'
                          : 'text-foreground hover:bg-white/20 dark:hover:bg-gray-800/30'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent size={18} />
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
