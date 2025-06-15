
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Clock, Users, Award } from 'lucide-react';

interface GameSidebarProps {
  totalPoints: number;
  currentSection: string;
}

const GameSidebar: React.FC<GameSidebarProps> = ({ totalPoints, currentSection }) => {
  const sectionDetails = {
    hero: {
      title: 'Command Center',
      description: 'Your gaming hub and main dashboard',
      tips: ['Click special actions for bonus XP', 'Watch for easter eggs'],
      icon: <Star className="text-neon-blue" size={20} />
    },
    about: {
      title: 'About Quest',
      description: 'Learn about the player\'s background and achievements',
      tips: ['Hover over achievement cards', 'Check out the XP progress bar'],
      icon: <Trophy className="text-neon-teal" size={20} />
    },
    skills: {
      title: 'Skills Dashboard',
      description: 'View mastered technologies and current skill levels',
      tips: ['Click on skill cards for animations', 'Watch progress bars fill'],
      icon: <Target className="text-neon-green" size={20} />
    },
    projects: {
      title: 'Projects Gallery',
      description: 'Showcase of completed quests and achievements',
      tips: ['Hover over project cards', 'Click GitHub links for bonus XP'],
      icon: <Award className="text-neon-pink" size={20} />
    },
    experience: {
      title: 'Adventure Timeline',
      description: 'Journey through the developer\'s career path',
      tips: ['Scroll to see connection animations', 'Each milestone gives XP'],
      icon: <Clock className="text-neon-purple" size={20} />
    },
    contact: {
      title: 'Contact Portal',
      description: 'Connect with the developer through various channels',
      tips: ['Fill the form for XP', 'Click social links for bonus points'],
      icon: <Users className="text-neon-blue" size={20} />
    }
  };

  const currentDetails = sectionDetails[currentSection as keyof typeof sectionDetails] || sectionDetails.hero;

  const achievements = [
    { name: 'First Visit', points: 1000, unlocked: true },
    { name: 'Explorer', points: 250, unlocked: totalPoints >= 1250 },
    { name: 'Social Butterfly', points: 500, unlocked: totalPoints >= 1500 },
    { name: 'Code Master', points: 1000, unlocked: totalPoints >= 2000 },
    { name: 'Ultimate Boss', points: 2000, unlocked: totalPoints >= 3000 },
  ];

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed right-4 top-20 w-80 bg-card/90 dark:bg-card/70 backdrop-blur-xl rounded-xl border border-border shadow-xl z-40 max-h-[calc(100vh-120px)] overflow-y-auto"
    >
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          {currentDetails.icon}
          <h3 className="text-lg font-bold text-foreground">{currentDetails.title}</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{currentDetails.description}</p>
      </div>

      {/* Current XP */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Total XP</span>
          <span className="text-lg font-bold bg-gradient-to-r from-neon-green to-neon-teal bg-clip-text text-transparent">
            {totalPoints.toLocaleString()}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-neon-green to-neon-teal h-full rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${Math.min((totalPoints / 5000) * 100, 100)}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Next milestone: {(Math.ceil(totalPoints / 1000) * 1000).toLocaleString()} XP
        </p>
      </div>

      {/* Tips */}
      <div className="p-4 border-b border-border">
        <h4 className="text-sm font-semibold text-foreground mb-2">💡 Pro Tips</h4>
        <ul className="space-y-1">
          {currentDetails.tips.map((tip, index) => (
            <li key={index} className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-2">
              <span className="text-neon-teal">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      <div className="p-4">
        <h4 className="text-sm font-semibold text-foreground mb-3">🏆 Achievements</h4>
        <div className="space-y-2">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.name}
              className={`flex items-center justify-between p-2 rounded-lg ${
                achievement.unlocked 
                  ? 'bg-gradient-to-r from-neon-green/20 to-neon-teal/20 border border-neon-teal/30' 
                  : 'bg-gray-100/50 dark:bg-gray-800/50 border border-gray-300/30 dark:border-gray-600/30'
              }`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2">
                <span className={`text-sm ${achievement.unlocked ? 'text-neon-teal' : 'text-gray-400'}`}>
                  {achievement.unlocked ? '🏆' : '🔒'}
                </span>
                <span className={`text-xs font-medium ${
                  achievement.unlocked ? 'text-foreground' : 'text-gray-500'
                }`}>
                  {achievement.name}
                </span>
              </div>
              <span className={`text-xs ${
                achievement.unlocked ? 'text-neon-teal font-bold' : 'text-gray-400'
              }`}>
                +{achievement.points}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GameSidebar;
