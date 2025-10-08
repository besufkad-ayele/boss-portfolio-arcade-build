
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
    { id: 'hero', label: 'Command Center', icon: Home, shortLabel: 'Home' },
    { id: 'about', label: 'About Quest', icon: User, shortLabel: 'About' },
    { id: 'skills', label: 'Skills Dashboard', icon: Code, shortLabel: 'Skills' },
    { id: 'projects', label: 'Projects Gallery', icon: Briefcase, shortLabel: 'Projects' },
    // { id: 'experience', label: 'Adventure Log', icon: Map, shortLabel: 'Journey' },
    { id: 'contact', label: 'Contact Portal', icon: Mail, shortLabel: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
    const section = navItems.find(item => item.id === sectionId);
    onEarnPoints(25, `+25 XP - Navigated to ${section?.shortLabel}!`);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/10 dark:bg-dark-primary/10 backdrop-blur-2xl border-b border-white/20 dark:border-green-700/20 shadow-2xl' 
          : 'bg-white/5 dark:bg-dark-primary/5 backdrop-blur-xl border-b border-white/10 dark:border-green-700/10'
      }`}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="container-custom px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button
            onClick={handleLogoClick}
            className="text-xl sm:text-2xl font-game font-bold bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent hover:scale-110 transition-transform duration-200 flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="text-neon-teal" size={20} />
            <span className="hidden sm:inline">Shinobi.dev</span>
            <span className="sm:hidden">Boss</span>
          </motion.button>

          {/* Desktop Navigation - Icons Only */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`p-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-neon-blue/60 to-neon-teal/60 text-white shadow-lg backdrop-blur-sm scale-110' 
                      : 'text-foreground hover:bg-white/20 dark:hover:bg-green-800/30 backdrop-blur-sm hover:scale-105'
                  }`}
                  whileHover={{ scale: activeSection === item.id ? 1.1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={item.label}
                >
                  <IconComponent size={18} />
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-teal/20 rounded-xl -z-10 backdrop-blur-sm"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {item.shortLabel}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Points Display */}
            <div className="bg-gradient-to-r from-neon-green/20 to-neon-teal/20 backdrop-blur-sm rounded-full px-3 py-1 border border-neon-teal/30">
              <span className="text-xs sm:text-sm font-bold text-neon-teal">
                <span className="hidden sm:inline">XP: </span>
                {totalPoints.toLocaleString()}
              </span>
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-green-800/50 dark:to-green-700/50 backdrop-blur-sm border border-gray-300/30 dark:border-green-600/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Toggle Theme"
            >
              <span className="text-lg">
                {isDarkMode ? '🥷' : '🥷'}
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl bg-gradient-to-r from-neon-pink to-neon-blue text-white backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Sword 
                size={18} 
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
              className="md:hidden overflow-hidden bg-white/10 dark:bg-dark-primary/10 backdrop-blur-2xl rounded-lg mt-2 border border-white/20 dark:border-green-700/20"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <div className="py-4 space-y-2 px-4">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-neon-blue/60 to-neon-teal/60 text-white scale-105'
                          : 'text-foreground hover:bg-white/20 dark:hover:bg-green-800/30'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent size={18} />
                      <span className="text-sm">{item.label}</span>
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
