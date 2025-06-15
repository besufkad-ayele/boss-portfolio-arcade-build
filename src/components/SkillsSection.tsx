import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: 'Flutter', level: 95, icon: '📱', color: 'from-blue-500 to-cyan-500' },
    { name: 'Dart', level: 90, icon: '🎯', color: 'from-green-500 to-teal-500' },
    { name: 'Next.js', level: 88, icon: '⚛️', color: 'from-purple-500 to-pink-500' },
    { name: 'Node.js', level: 85, icon: '🟢', color: 'from-green-600 to-emerald-600' },
    { name: 'Firebase', level: 82, icon: '🔥', color: 'from-orange-500 to-red-500' },
    { name: 'PostgreSQL', level: 80, icon: '🐘', color: 'from-blue-600 to-indigo-600' },
    { name: 'REST APIs', level: 92, icon: '🔗', color: 'from-teal-500 to-cyan-500' },
    { name: 'Git', level: 88, icon: '📚', color: 'from-gray-600 to-gray-800' },
  ];

  const categories = [
    {
      title: 'Frontend Magic',
      skills: skills.slice(0, 3),
      icon: '✨',
    },
    {
      title: 'Backend Power',
      skills: skills.slice(3, 6),
      icon: '⚡',
    },
    {
      title: 'Tools & APIs',
      skills: skills.slice(6),
      icon: '🛠️',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gray-50 dark:bg-dark-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-teal bg-clip-text text-transparent">
              Power Stats
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            My arsenal of development superpowers
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-teal mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="skill-card bg-white dark:bg-dark-primary border-2 border-transparent hover:border-neon-teal/30"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-neon-blue">{skill.level}%</span>
                    </div>
                    
                    <div className="xp-bar bg-gray-200 dark:bg-gray-700">
                      <motion.div
                        className={`xp-fill bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 rounded-2xl p-8 border border-neon-pink/30">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              📊 Overall Developer Stats
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: 'Total XP', value: '15,420', suffix: 'pts' },
                { label: 'Skill Level', value: '87', suffix: '%' },
                { label: 'Learning Streak', value: '365', suffix: 'days' },
                { label: 'Code Quality', value: 'S+', suffix: 'rank' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-teal bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: 1 + index * 0.1
                    }}
                  >
                    {stat.value}
                    <span className="text-lg">{stat.suffix}</span>
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
