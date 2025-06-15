
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sword } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [easterEggCount, setEasterEggCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'skills', label: 'Stats', icon: '⚡' },
    { id: 'projects', label: 'Quests', icon: '🎯' },
    { id: 'experience', label: 'Journey', icon: '🗺️' },
    { id: 'contact', label: 'Connect', icon: '📬' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    showXPNotification('+10 XP - Navigation!');
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
      showXPNotification('+100 XP - Easter Egg Found!');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    showXPNotification('+15 XP - Theme Changed!');
  };

  const showXPNotification = (message: string) => {
    const notification = document.createElement('div');
    notification.innerHTML = message;
    notification.className = 'fixed top-20 right-4 bg-gradient-to-r from-neon-green to-neon-teal text-white px-4 py-2 rounded-lg font-bold text-sm z-50 animate-bounce';
    document.body.appendChild(notification);
    setTimeout(() => document.body.removeChild(notification), 2000);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 dark:bg-dark-primary/10 backdrop-blur-lg border-b border-white/20 dark:border-gray-700/20' 
          : 'bg-white/90 dark:bg-dark-primary/90 backdrop-blur-md border-b border-border'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button
            onClick={handleLogoClick}
            className="text-2xl font-game font-bold bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent hover:scale-110 transition-transform duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            BOSS.dev
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-neon-blue to-neon-teal text-white shadow-lg'
                    : 'text-foreground hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-teal rounded-lg -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200"
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
              className="md:hidden p-2 rounded-lg bg-gradient-to-r from-neon-pink to-neon-blue text-white"
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
              className="md:hidden overflow-hidden bg-white/10 dark:bg-dark-primary/10 backdrop-blur-lg rounded-lg mt-2 border border-white/20 dark:border-gray-700/20"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-neon-blue to-neon-teal text-white'
                        : 'text-foreground hover:bg-gray-100/20 dark:hover:bg-gray-800/20'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
