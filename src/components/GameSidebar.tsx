
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Target, Clock, Users, Award, ChevronDown, ChevronUp } from 'lucide-react';

interface GameSidebarProps {
  totalPoints: number;
  currentSection: string;
}

const GameSidebar: React.FC<GameSidebarProps> = ({ totalPoints, currentSection }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showInitially, setShowInitially] = useState(true);

  // Auto-collapse after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitially(false);
      setIsExpanded(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const sectionDetails = {
    hero: {
      title: 'Command Center',
      description: 'Your gaming hub and main dashboard',
      tips: ['Click special actions for bonus XP', 'Watch for easter eggs', 'Explore all interactive elements'],
      icon: <Star className="text-neon-blue" size={18} />
    },
    about: {
      title: 'About Quest',
      description: 'Learn about the player\'s background and achievements',
      tips: ['Click achievement cards for XP', 'Hover over stats for animations', 'Complete your profile exploration'],
      icon: <Trophy className="text-neon-purple" size={18} />
    },
    skills: {
      title: 'Skills Dashboard', 
      description: 'View mastered technologies and current skill levels',
      tips: ['Click skill bars to unlock XP', 'Each skill gives different points', 'Master all categories for bonus'],
      icon: <Target className="text-neon-green" size={18} />
    },
    projects: {
      title: 'Projects Gallery',
      description: 'Showcase of completed quests and achievements',
      tips: ['Explore each project for XP', 'Visit live demos and GitHub', 'Featured projects give more points'],
      icon: <Award className="text-neon-pink" size={18} />
    },
    experience: {
      title: 'Adventure Timeline',
      description: 'Journey through the developer\'s career path',
      tips: ['Scroll to animate connections', 'Each milestone rewards XP', 'Watch for interactive elements'],
      icon: <Clock className="text-neon-teal" size={18} />
    },
    contact: {
      title: 'Contact Portal',
      description: 'Connect with the developer through various channels',
      tips: ['Fill the form for bonus XP', 'Click social links for points', 'Complete contact quest for rewards'],
      icon: <Users className="text-neon-blue" size={18} />
    }
  };

  const currentDetails = sectionDetails[currentSection as keyof typeof sectionDetails] || sectionDetails.hero;

  const achievements = [
    { name: 'First Visit', points: 1000, unlocked: true },
    { name: 'Explorer', points: 250, unlocked: totalPoints >= 1250 },
    { name: 'Social Butterfly', points: 500, unlocked: totalPoints >= 1500 },
    { name: 'Code Master', points: 1000, unlocked: totalPoints >= 2500 },
    { name: 'Ultimate Boss', points: 2000, unlocked: totalPoints >= 4000 },
  ];

  const getLevel = (points: number) => Math.floor(points / 1000) + 1;
  const getProgressInLevel = (points: number) => (points % 1000) / 1000 * 100;

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsExpanded(prev => !prev)}
        className="md:hidden fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-slate-900/90 border border-neon-purple/50 flex items-center justify-center shadow-xl"
      >
        <Trophy size={20} className="text-neon-teal" />
      </button>

      {/* Sidebar — hidden on mobile unless expanded */}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={`fixed right-4 top-20 bg-slate-900/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-xl border border-emerald-500/30 shadow-2xl z-40 max-h-[calc(100vh-120px)] overflow-hidden
          ${isExpanded ? 'hidden md:block' : 'hidden md:block'}
          md:block ${isExpanded ? 'w-80' : 'w-16'}`}
        style={{ 
          backdropFilter: 'blur(20px)', 
          WebkitBackdropFilter: 'blur(20px)',
          transition: 'width 0.3s ease-in-out'
        }}
      >
      {/* Collapse/Expand Toggle */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute top-4 right-4 p-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-sky-500/20 text-emerald-400 hover:scale-110 transition-transform z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </motion.button>

      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overflow-y-auto max-h-[calc(100vh-120px)]"
          >
            {/* Header */}
            <div className="p-4 border-b border-emerald-500/30">
              <div className="flex items-center gap-3 mb-2 pr-8">
                {currentDetails.icon}
                <h3 className="text-lg font-bold text-white">{currentDetails.title}</h3>
              </div>
              <p className="text-sm text-gray-300">{currentDetails.description}</p>
            </div>

            {/* Current XP */}
            <div className="p-4 border-b border-emerald-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">Level {getLevel(totalPoints)}</span>
                <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                  {totalPoints.toLocaleString()} XP
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                <motion.div
                  className="bg-gradient-to-r from-neon-purple to-neon-teal h-full rounded-full relative overflow-hidden"
                  initial={{ width: '0%' }}
                  animate={{ width: `${getProgressInLevel(totalPoints)}%` }}
                  transition={{ duration: 1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                </motion.div>
              </div>
              <p className="text-xs text-gray-400">
                Next level: {((getLevel(totalPoints)) * 1000).toLocaleString()} XP
              </p>
            </div>

            {/* Tips */}
            <div className="p-4 border-b border-emerald-500/30">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                💡 Pro Tips
              </h4>
              <ul className="space-y-2">
                {currentDetails.tips.map((tip, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-xs text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-neon-teal">•</span>
                    {tip}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="p-4">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                🏆 Achievements
              </h4>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.name}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                      achievement.unlocked 
                        ? 'bg-gradient-to-r from-neon-purple/20 to-neon-teal/20 border border-neon-teal/40' 
                        : 'bg-gray-800/50 border border-gray-600/30'
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      scale: achievement.unlocked ? 1.02 : 1 
                    }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: achievement.unlocked ? 1.05 : 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-lg ${achievement.unlocked ? 'text-neon-teal' : 'text-gray-500'}`}>
                        {achievement.unlocked ? '🏆' : '🔒'}
                      </span>
                      <div>
                        <span className={`text-xs font-medium block ${
                          achievement.unlocked ? 'text-white' : 'text-gray-500'
                        }`}>
                          {achievement.name}
                        </span>
                        <span className={`text-xs ${
                          achievement.unlocked ? 'text-neon-teal font-bold' : 'text-gray-500'
                        }`}>
                          +{achievement.points} XP
                        </span>
                      </div>
                    </div>
                    {achievement.unlocked && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-neon-teal text-lg"
                      >
                        ✓
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4 flex flex-col items-center gap-4"
          >
            <div className="text-center">
              {currentDetails.icon}
              <div className="text-xs font-bold text-neon-teal mt-2">
                {totalPoints.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">XP</div>
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-neon-purple to-neon-teal h-full rounded-full"
                animate={{ width: `${getProgressInLevel(totalPoints)}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            
            <div className="text-xs text-center text-gray-400">
              Lv.{getLevel(totalPoints)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>
    </>
  );
};

export default GameSidebar;
