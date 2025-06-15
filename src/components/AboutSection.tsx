
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const achievements = [
    { icon: '🎯', title: 'Flutter Master', desc: 'Cross-platform expert' },
    { icon: '⚡', title: 'Next.js Ninja', desc: 'Fullstack specialist' },
    { icon: '🔥', title: 'Code Warrior', desc: 'Problem solver' },
    { icon: '🏆', title: 'Project Hero', desc: 'Delivery champion' },
  ];

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-dark-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
              About Boss
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <motion.div
                  className="level-badge text-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎮 Level 5 Developer
                </motion.div>
                <div className="flex-1">
                  <div className="xp-bar">
                    <motion.div
                      className="xp-fill"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '85%' } : {}}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">8,500 / 10,000 XP</div>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Hey there! I'm <strong className="text-neon-blue">Besufkad "Boss" Ayele</strong>, 
                a passionate software engineer from the beautiful highlands of Ethiopia 🇪🇹. 
                With a love for crafting elegant code and building amazing user experiences, 
                I specialize in creating cross-platform mobile applications with Flutter and 
                scalable web applications with Next.js.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me diving deep into the Bible for wisdom, 
                exploring new music, or learning about the latest tech innovations. I believe 
                in writing clean, maintainable code and creating solutions that make a real 
                difference in people's lives.
              </p>

              <motion.div
                className="bg-gradient-to-r from-neon-teal/20 to-neon-blue/20 p-6 rounded-xl border border-neon-teal/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold mb-3 text-foreground">Current Quest</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building innovative mobile and web solutions while continuously 
                  leveling up my skills in cloud architecture and AI integration.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="skill-card text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(78, 205, 196, 0.3)"
                }}
              >
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {achievement.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {achievement.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '☕', text: 'Coffee consumed: 1,337 cups' },
              { emoji: '🎵', text: 'Coding playlists: 42' },
              { emoji: '📚', text: 'Bible verses memorized: 150+' },
            ].map((fact, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl mb-2">{fact.emoji}</div>
                <p className="text-gray-600 dark:text-gray-400">{fact.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
