
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

interface SkillsSectionProps {
  onEarnPoints: (points: number, message: string) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ onEarnPoints }) => {
  const [clickedSkills, setClickedSkills] = useState<Set<number>>(new Set());

  const skillCategories = [
    {
      title: "Frontend Mastery",
      icon: <Globe className="text-neon-blue" size={24} />,
      skills: [
        { name: "React", level: 95, points: 30 },
        { name: "TypeScript", level: 90, points: 30 },
        { name: "Next.js", level: 88, points: 25 },
        { name: "Tailwind CSS", level: 92, points: 25 }
      ]
    },
    {
      title: "Backend Power",
      icon: <Server className="text-neon-teal" size={24} />,
      skills: [
        { name: "Node.js", level: 85, points: 30 },
        { name: "Python", level: 80, points: 25 },
        { name: "Express", level: 83, points: 25 },
        { name: "GraphQL", level: 75, points: 20 }
      ]
    },
    {
      title: "Database Expertise",
      icon: <Database className="text-neon-green" size={24} />,
      skills: [
        { name: "PostgreSQL", level: 88, points: 25 },
        { name: "MongoDB", level: 82, points: 25 },
        { name: "Redis", level: 70, points: 20 },
        { name: "Supabase", level: 85, points: 25 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-neon-pink" size={24} />,
      skills: [
        { name: "React Native", level: 78, points: 25 },
        { name: "Flutter", level: 65, points: 20 },
        { name: "Expo", level: 80, points: 20 },
        { name: "PWA", level: 85, points: 25 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Code className="text-neon-purple" size={24} />,
      skills: [
        { name: "Docker", level: 75, points: 25 },
        { name: "AWS", level: 70, points: 25 },
        { name: "Git", level: 95, points: 20 },
        { name: "CI/CD", level: 72, points: 25 }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="text-neon-orange" size={24} />,
      skills: [
        { name: "Figma", level: 85, points: 20 },
        { name: "Adobe XD", level: 75, points: 20 },
        { name: "Framer Motion", level: 88, points: 25 },
        { name: "UI Design", level: 82, points: 25 }
      ]
    }
  ];

  const handleSkillClick = (categoryIndex: number, skillIndex: number, skill: any) => {
    const skillId = categoryIndex * 100 + skillIndex;
    if (!clickedSkills.has(skillId)) {
      setClickedSkills(prev => new Set([...prev, skillId]));
      onEarnPoints(skill.points, `+${skill.points} XP - ${skill.name} Skill Mastered!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 dark:from-dark-primary dark:via-green-900/20 dark:to-green-800/30 section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-game font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Skills Dashboard
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my technical arsenal. Click on skills to unlock XP and see mastery levels!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-neon-teal/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const skillId = categoryIndex * 100 + skillIndex;
                  const isClicked = clickedSkills.has(skillId);
                  
                  return (
                    <motion.div
                      key={skillIndex}
                      onClick={() => handleSkillClick(categoryIndex, skillIndex, skill)}
                      className={`cursor-pointer p-3 rounded-lg transition-all duration-300 ${
                        isClicked 
                          ? 'bg-gradient-to-r from-neon-teal/20 to-neon-blue/20 border border-neon-teal/50' 
                          : 'hover:bg-white/10 dark:hover:bg-green-900/20'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-medium ${isClicked ? 'text-neon-teal' : 'text-foreground'}`}>
                          {skill.name} {isClicked && '✓'}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-full rounded-full ${
                            isClicked 
                              ? 'bg-gradient-to-r from-neon-teal to-neon-blue' 
                              : 'bg-gradient-to-r from-gray-400 to-gray-500'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                      {isClicked && (
                        <div className="text-xs text-neon-teal font-bold mt-1">
                          +{skill.points} XP Earned!
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-neon-blue/20 to-neon-teal/20 backdrop-blur-sm rounded-xl p-8 border border-neon-teal/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Skill Level Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="w-4 h-4 bg-gradient-to-r from-red-400 to-red-600 rounded mx-auto mb-1"></div>
                <span className="text-muted-foreground">0-25% Novice</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded mx-auto mb-1"></div>
                <span className="text-muted-foreground">26-50% Learning</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded mx-auto mb-1"></div>
                <span className="text-muted-foreground">51-75% Proficient</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-gradient-to-r from-neon-teal to-neon-blue rounded mx-auto mb-1"></div>
                <span className="text-muted-foreground">76-100% Expert</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
