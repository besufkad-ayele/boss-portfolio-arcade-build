
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, Trophy, Target } from 'lucide-react';
import Footer from './Footer';

interface HeroSectionProps {
  onEarnPoints: (points: number, message: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onEarnPoints }) => {
  const [clickCount, setClickCount] = useState(0);
  const [hasEarnedInitialPoints, setHasEarnedInitialPoints] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showActionModal, setShowActionModal] = useState(false);
  
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
    // Open the action modal instead of immediately awarding XP
    setShowActionModal(true);
    if (clickCount < 5) {
      setClickCount(prev => prev + 1);
    }
  };

  const handleHireMe = () => {
    onEarnPoints(10000, 'Ultimate Contract Secured! +10000 XP');
    setShowActionModal(false);
    // Redirect to a new page (update to your real hire page URL)
    window.open('/hire', '_blank');
  };

  const handleContactMe = () => {
    onEarnPoints(100, 'Contact Initiated! +100 XP');
    setShowActionModal(false);
    // Navigate to contact section via custom event consumed in Index.tsx
    const evt = new CustomEvent<string>('go-to-section', { detail: 'contact' });
    window.dispatchEvent(evt);
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
                  src="./public/portfolio_image.png"
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
                Besufkad Ayele
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
                Unleashing Creativity, One Line at a Time
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
                  <div className="text-2xl font-bold text-emerald-300">1+ Years</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-800/30 rounded-lg">
                  <div className="text-2xl font-bold text-green-300">5+ </div>
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1.2, type: "spring", bounce: 0.4 }}
          className="mt-16 text-center flex flex-col items-center gap-4"
        >
          <motion.h2
            className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_#f43f5e] animate-pulse"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8, type: "spring" }}
          >
            Welcome to the <span className="text-emerald-400">Shinobi.dev</span>
          </motion.h2>
          <div className="flex justify-center gap-6 mt-2">
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10, boxShadow: '0 0 16px #22d3ee' }}
              whileTap={{ scale: 0.95 }}
              className="text-3xl text-gray-400 hover:text-emerald-400 transition-all duration-200"
            >
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </motion.a>
            <motion.a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -10, boxShadow: '0 0 16px #a855f7' }}
              whileTap={{ scale: 0.95 }}
              className="text-3xl text-gray-400 hover:text-purple-400 transition-all duration-200"
            >
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z"/></svg>
            </motion.a>
            <motion.a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 8, boxShadow: '0 0 16px #22d3ee' }}
              whileTap={{ scale: 0.95 }}
              className="text-3xl text-gray-400 hover:text-emerald-400 transition-all duration-200"
            >
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
            </motion.a>
            <motion.a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -8, boxShadow: '0 0 16px #f43f5e' }}
              whileTap={{ scale: 0.95 }}
              className="text-3xl text-gray-400 hover:text-red-400 transition-all duration-200"
            >
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.163-.393-.405-.874-.617-1.249a.07.07 0 0 0-.073-.035 19.736 19.736 0 0 0-4.885 1.515.064.064 0 0 0-.03.027C.533 7.045-.32 9.579.099 12.057c.002.01.01.02.021.025a19.9 19.9 0 0 0 5.993 3.036.07.07 0 0 0 .076-.027c.461-.63.873-1.295 1.226-1.994a.07.07 0 0 0-.038-.098 13.087 13.087 0 0 1-1.872-.893.07.07 0 0 1-.007-.117c.126-.094.252-.192.371-.291a.07.07 0 0 1 .073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 0 1 .074.009c.12.099.245.198.372.292a.07.07 0 0 1-.006.117 12.64 12.64 0 0 1-1.873.893.07.07 0 0 0-.037.098c.36.699.772 1.364 1.225 1.994a.07.07 0 0 0 .076.028 19.876 19.876 0 0 0 6.002-3.036.07.07 0 0 0 .021-.025c.5-3.177-.838-5.673-2.548-7.661a.061.061 0 0 0-.03-.027z"/></svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Action Modal */}
        <AnimatePresence>
          {showActionModal && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowActionModal(false)}
              />
              {/* Cards Container */}
              <motion.div
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full"
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              >
                {/* Hire Me Card */}
                <motion.button
                  onClick={handleHireMe}
                  className="text-left p-6 rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-900/60 to-green-900/60 hover:from-emerald-800/70 hover:to-green-800/70 shadow-xl hover:shadow-emerald-500/30 transition-all group"
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-300">Hire Me</h3>
                      <p className="text-gray-300 mt-1">Summon the Shinobi Developer</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-300 border border-emerald-400/40">+10000 XP</span>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-emerald-900/50 overflow-hidden border border-emerald-500/30">
                    <motion.div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400" initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 1.2 }} />
                  </div>
                </motion.button>

                {/* Contact Me Card */}
                <motion.button
                  onClick={handleContactMe}
                  className="text-left p-6 rounded-2xl border-2 border-teal-500/40 bg-gradient-to-br from-teal-900/60 to-emerald-900/60 hover:from-teal-800/70 hover:to-emerald-800/70 shadow-xl hover:shadow-teal-500/30 transition-all group"
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-teal-300">Contact Me</h3>
                      <p className="text-gray-300 mt-1">Send a message to the dojo</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-teal-300 border border-teal-400/40">+100 XP</span>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-teal-900/50 overflow-hidden border border-teal-500/30">
                    <motion.div className="h-full bg-gradient-to-r from-teal-400 to-emerald-400" initial={{ width: '0%' }} animate={{ width: '72%' }} transition={{ duration: 1.2 }} />
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
