
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const experiences = [
    {
      id: 1,
      title: 'Senior Flutter Developer',
      company: 'TechFlow Solutions',
      period: '2023 - Present',
      location: 'Addis Ababa, Ethiopia',
      type: 'Full-time',
      description: 'Leading mobile app development team, architecting scalable Flutter applications for enterprise clients. Mentored junior developers and established best practices for cross-platform development.',
      achievements: [
        'Built 5+ production mobile apps serving 50K+ users',
        'Reduced app bundle size by 40% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Led team of 4 developers on flagship project'
      ],
      skills: ['Flutter', 'Dart', 'Firebase', 'GraphQL', 'Team Leadership'],
      xpGained: '3,500 XP',
      level: 'Expert',
      icon: '🚀'
    },
    {
      id: 2,
      title: 'Freelance Full-Stack Developer',
      company: 'Various Clients',
      period: '2022 - 2023',
      location: 'Remote',
      type: 'Freelance',
      description: 'Delivered custom web and mobile solutions for startups and small businesses. Specialized in rapid prototyping and MVP development using modern tech stacks.',
      achievements: [
        'Completed 12+ projects with 100% client satisfaction',
        'Generated $25K+ in revenue',
        'Built e-commerce platforms handling $100K+ in transactions',
        'Developed real-time chat applications'
      ],
      skills: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
      xpGained: '2,800 XP',
      level: 'Advanced',
      icon: '💼'
    },
    {
      id: 3,
      title: 'Junior Software Developer',
      company: 'InnovateTech Startup',
      period: '2021 - 2022',
      location: 'Addis Ababa, Ethiopia',
      type: 'Internship → Full-time',
      description: 'Started as an intern and quickly promoted to full-time developer. Contributed to the development of fintech solutions and learned industry best practices.',
      achievements: [
        'Developed admin dashboard used daily by 100+ users',
        'Optimized database queries improving performance by 50%',
        'Implemented responsive designs across 3 major projects',
        'Contributed to open-source libraries'
      ],
      skills: ['React', 'Express.js', 'MongoDB', 'Git', 'Agile'],
      xpGained: '1,900 XP',
      level: 'Intermediate',
      icon: '🌱'
    },
    {
      id: 4,
      title: 'Computer Science Student',
      company: 'Addis Ababa University',
      period: '2019 - 2023',
      location: 'Addis Ababa, Ethiopia',
      type: 'Education',
      description: 'Bachelor of Science in Computer Science with focus on software engineering and mobile application development. Active member of coding club and hackathon participant.',
      achievements: [
        'Graduated with First Class Honors (GPA: 3.8/4.0)',
        'Won 2nd place in National Coding Competition',
        'Published research paper on mobile app optimization',
        'Led university coding bootcamp teaching 50+ students'
      ],
      skills: ['Algorithms', 'Data Structures', 'Software Engineering', 'Research'],
      xpGained: '2,200 XP',
      level: 'Foundation',
      icon: '🎓'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'from-red-500 to-orange-500';
      case 'Advanced': return 'from-purple-500 to-pink-500';
      case 'Intermediate': return 'from-blue-500 to-teal-500';
      case 'Foundation': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

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
              Adventure Log
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            My coding journey through different realms and challenges
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-teal mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue to-neon-teal rounded-full hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`lg:flex lg:items-center lg:w-full ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="lg:w-5/12">
                  <motion.div
                    className="skill-card bg-white dark:bg-dark-primary border-2 border-transparent hover:border-neon-teal/30 h-full"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{exp.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <p className="text-neon-blue font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      <div className={`level-badge bg-gradient-to-r ${getLevelColor(exp.level)}`}>
                        {exp.level}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>📅 {exp.period}</span>
                      <span>📍 {exp.location}</span>
                      <span>💼 {exp.type}</span>
                      <span className="text-neon-teal font-bold">⭐ {exp.xpGained}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">🏆 Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + achIndex * 0.1 + 0.5 }}
                          >
                            <span className="text-neon-teal mr-2">•</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-neon-teal/20 to-neon-blue/20 text-neon-blue text-xs rounded-full font-medium border border-neon-teal/30"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.2 + skillIndex * 0.05 + 0.7 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Checkpoint */}
                <div className="hidden lg:flex lg:w-2/12 justify-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-neon-pink to-neon-blue rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white dark:border-dark-primary shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      delay: index * 0.2 + 0.3 
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    {exp.id}
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Total XP */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 rounded-2xl p-8 border border-neon-pink/30 inline-block">
            <div className="text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-teal bg-clip-text text-transparent mb-2">
              Total XP Earned: 10,400 points
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              🎮 Ready for the next adventure!
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
