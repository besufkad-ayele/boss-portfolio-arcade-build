
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Award, CheckCircle } from 'lucide-react';
import Footer from './Footer';

interface AboutSectionProps {
  onEarnPoints: (points: number, message: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onEarnPoints }) => {
  const [clickedAchievements, setClickedAchievements] = useState<Set<number>>(new Set());
  const awardedOnceRef = useRef(false);

  // Award a one-time visit bonus when the About section is visited (once per session)
  useEffect(() => {
    const key = 'visited_about_bonus';
    if (!awardedOnceRef.current) {
      awardedOnceRef.current = true; // Prevent StrictMode double-invoke
      if (typeof window !== 'undefined' && !sessionStorage.getItem(key)) {
        onEarnPoints(100, 'About Quest discovered! +100 XP');
        sessionStorage.setItem(key, '1');
      }
    }
  }, [onEarnPoints]);

  const achievements = [
    {
      icon: <Trophy className="text-neon-teal" size={24} />,
      title: "Code Warrior",
      description: "Mastered multiple programming languages",
      points: 50
    },
    {
      icon: <Star className="text-neon-blue" size={24} />,
      title: "Frontend Champion",
      description: "Expert in React, TypeScript, and modern web technologies",
      points: 50
    },
    {
      icon: <Target className="text-neon-green" size={24} />,
      title: "Problem Solver",
      description: "Delivered 100+ successful projects",
      points: 50
    },
    {
      icon: <Award className="text-neon-pink" size={24} />,
      title: "Team Leader",
      description: "Led development teams to victory",
      points: 50
    }
  ];

  const handleAchievementClick = (index: number, achievement: any) => {
    if (!clickedAchievements.has(index)) {
      setClickedAchievements(prev => new Set([...prev, index]));
      onEarnPoints(achievement.points, `+${achievement.points} XP - ${achievement.title} Achievement!`);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-purple-950 dark:to-indigo-950 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-game font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-teal bg-clip-text text-transparent">
                About Quest
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the journey of Besufkad Ayele, a passionate developer on a mission to create amazing digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-4">The Developer's Story</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Welcome to my digital realm! I'm Besufkad Ayele, a passionate full-stack developer 
                who transforms ideas into interactive experiences. With expertise in modern web technologies 
                and a love for clean, efficient code.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech started with curiosity and evolved into mastery. I specialize in 
                React, TypeScript, Node.js, and modern web frameworks, and mobile development using Flutter and always staying ahead of the curve 
                with the latest technologies and best practices. I'm the Boss at what I do.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-neon-purple/30">
                <h3 className="text-xl font-semibold text-white mb-4">Core Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-neon-teal" />
                    Quality code and best practices
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-neon-teal" />
                    User-centered design approach
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-neon-teal" />
                    Continuous learning and growth
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-neon-teal" />
                    Collaborative team spirit
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-2xl p-8 backdrop-blur-sm border border-neon-purple/30">
                <h3 className="text-2xl font-bold text-white mb-6">Developer Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Projects Completed</span>
                    <span className="text-2xl font-bold text-neon-teal">5+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Years Experience</span>
                    <span className="text-2xl font-bold text-neon-blue">2+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Technologies Mastered</span>
                    <span className="text-2xl font-bold text-neon-green">20+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Coffee Consumed</span>
                    <span className="text-2xl font-bold text-neon-pink">∞</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center text-white mb-12">Achievements Unlocked</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  onClick={() => handleAchievementClick(index, achievement)}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border cursor-pointer transition-all duration-300 ${
                    clickedAchievements.has(index) 
                      ? 'border-neon-teal bg-gradient-to-br from-neon-teal/20 to-neon-purple/20 scale-105' 
                      : 'border-neon-purple/30 hover:border-neon-teal/50 hover:scale-105'
                  }`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {clickedAchievements.has(index) && (
                    <div className="absolute -top-2 -right-2 bg-neon-teal text-white rounded-full p-1">
                      <CheckCircle size={16} />
                    </div>
                  )}
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      {achievement.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{achievement.description}</p>
                    <div className="text-xs font-bold text-neon-teal">+{achievement.points} XP</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutSection;
