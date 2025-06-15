
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette, Zap, Trophy } from 'lucide-react';

interface SkillsSectionProps {
  onEarnPoints: (points: number, message: string) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ onEarnPoints }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [clickedSkills, setClickedSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isInView) {
      onEarnPoints(100, 'Skills Portal Accessed!');
    }
  }, [isInView, onEarnPoints]);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="text-neon-blue" size={24} />,
      skills: [
        { name: "React", level: 95, points: 30 },
        { name: "TypeScript", level: 90, points: 30 },
        { name: "JavaScript", level: 95, points: 25 },
        { name: "Tailwind CSS", level: 85, points: 25 },
        { name: "HTML/CSS", level: 98, points: 20 }
      ]
    },
    {
      title: "Backend Development", 
      icon: <Server className="text-neon-green" size={24} />,
      skills: [
        { name: "Node.js", level: 85, points: 30 },
        { name: "Express", level: 80, points: 25 },
        { name: "Python", level: 75, points: 25 },
        { name: "REST APIs", level: 90, points: 30 },
        { name: "GraphQL", level: 70, points: 25 }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="text-neon-teal" size={24} />,
      skills: [
        { name: "MongoDB", level: 85, points: 25 },
        { name: "PostgreSQL", level: 80, points: 25 },
        { name: "Git", level: 95, points: 20 },
        { name: "Docker", level: 75, points: 30 },
        { name: "AWS", level: 70, points: 30 }
      ]
    },
    {
      title: "Design & Mobile",
      icon: <Palette className="text-neon-pink" size={24} />,
      skills: [
        { name: "Figma", level: 80, points: 25 },
        { name: "UI/UX Design", level: 75, points: 25 },
        { name: "React Native", level: 70, points: 30 },
        { name: "Flutter", level: 65, points: 30 },
        { name: "Adobe XD", level: 70, points: 20 }
      ]
    }
  ];

  const handleSkillClick = (categoryIndex: number, skillIndex: number, skill: any) => {
    const skillKey = `${categoryIndex}-${skillIndex}`;
    if (!clickedSkills.has(skillKey)) {
      setClickedSkills(prev => new Set([...prev, skillKey]));
      onEarnPoints(skill.points, `+${skill.points} XP - ${skill.name} Skill Mastered!`);
    }
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 dark:from-blue-900/20 dark:via-teal-900/20 dark:to-green-900/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
              Skills Dashboard
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Master these technologies to level up your development skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white/80 dark:bg-card/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-200/50 dark:border-blue-500/30 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const skillKey = `${categoryIndex}-${skillIndex}`;
                  const isClicked = clickedSkills.has(skillKey);
                  
                  return (
                    <motion.div
                      key={skill.name}
                      className={`cursor-pointer transition-all duration-300 ${
                        isClicked ? 'scale-105' : 'hover:scale-102'
                      }`}
                      onClick={() => handleSkillClick(categoryIndex, skillIndex, skill)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-medium transition-colors ${
                          isClicked 
                            ? 'text-teal-600 dark:text-teal-400' 
                            : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {skill.name}
                          {isClicked && <span className="ml-2">✓</span>}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                          <span className="text-xs font-bold text-teal-600">+{skill.points} XP</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isClicked 
                              ? 'bg-gradient-to-r from-teal-500 to-green-500' 
                              : 'bg-gradient-to-r from-blue-500 to-teal-500'
                          }`}
                          initial={{ width: '0%' }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-300/50 dark:border-blue-500/30"
        >
          <Trophy className="text-yellow-500 mx-auto mb-3" size={32} />
          <h3 className="text-lg font-bold mb-2 text-blue-600 dark:text-blue-400">
            🎮 Skills Achievement
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Click on each skill bar to master it and earn XP! Complete all categories for bonus rewards.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
