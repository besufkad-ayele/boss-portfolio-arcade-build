import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      id: 1,
      title: 'EthioShop Mobile App',
      description: 'A comprehensive e-commerce mobile application built with Flutter for local Ethiopian businesses. Features include real-time inventory, secure payment integration, and multi-language support.',
      tech: ['Flutter', 'Dart', 'Firebase', 'Stripe API'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      github: 'https://github.com/boss-aye',
      demo: '#',
      status: 'Live',
      category: 'Mobile',
      difficulty: 'Expert',
      xpReward: '1,500 XP'
    },
    {
      id: 2,
      title: 'TechHub Dashboard',
      description: 'A modern admin dashboard built with Next.js and PostgreSQL for managing tech startup operations. Includes analytics, user management, and real-time notifications.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      github: 'https://github.com/boss-aye',
      demo: '#',
      status: 'In Progress',
      category: 'Web',
      difficulty: 'Advanced',
      xpReward: '1,200 XP'
    },
    {
      id: 3,
      title: 'ChatFlow Real-time App',
      description: 'A real-time messaging application with video calling capabilities built using Node.js, Socket.io, and React. Features end-to-end encryption and file sharing.',
      tech: ['Node.js', 'Socket.io', 'React', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      github: 'https://github.com/boss-aye',
      demo: '#',
      status: 'Completed',
      category: 'Full Stack',
      difficulty: 'Expert',
      xpReward: '1,800 XP'
    },
    {
      id: 4,
      title: 'BibleVerse API',
      description: 'A RESTful API service providing Bible verses in multiple languages including Amharic. Built with Node.js and MongoDB, serving thousands of daily requests.',
      tech: ['Node.js', 'Express', 'MongoDB', 'Redis'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      github: 'https://github.com/boss-aye',
      demo: '#',
      status: 'Live',
      category: 'Backend',
      difficulty: 'Intermediate',
      xpReward: '900 XP'
    },
    {
      id: 5,
      title: 'TaskMaster Flutter App',
      description: 'A productivity app with gamification elements, habit tracking, and team collaboration features. Includes offline sync and beautiful animations.',
      tech: ['Flutter', 'Hive', 'Provider', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      github: 'https://github.com/boss-aye',
      demo: '#',
      status: 'Beta',
      category: 'Mobile',
      difficulty: 'Advanced',
      xpReward: '1,300 XP'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'Completed': return 'bg-blue-500';
      case 'In Progress': return 'bg-yellow-500';
      case 'Beta': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Expert': return 'text-red-500 border-red-500';
      case 'Advanced': return 'text-orange-500 border-orange-500';
      case 'Intermediate': return 'text-blue-500 border-blue-500';
      default: return 'text-gray-500 border-gray-500';
    }
  };

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
              Epic Quests
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Legendary projects that showcase my coding adventures
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="project-card group"
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* XP Reward */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-neon-teal text-white">
                    {project.xpReward}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex space-x-2">
                  <motion.a
                    href={project.github}
                    className="game-button py-2 px-4 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🔗 Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="game-button py-2 px-4 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🚀 Demo
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-neon-blue">
                    {project.category}
                  </span>
                  <span className={`text-xs px-2 py-1 border rounded-full ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.3 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(78, 205, 196, 0.2)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/boss-aye"
            className="game-button text-lg px-8 py-4"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 107, 107, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            🎮 View All Quests on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
