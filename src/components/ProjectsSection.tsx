
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Award, Zap } from 'lucide-react';

interface ProjectsSectionProps {
  onEarnPoints: (points: number, message: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onEarnPoints }) => {
  const [visitedProjects, setVisitedProjects] = useState<Set<number>>(new Set());

const projects = [
  {
    title: "Code for Africa Volunteer Platform",
    description: "Developed a dynamic platform connecting developers and organizations for volunteer-driven solutions, addressing critical issues like childcare, cancer awareness, and children's health through impactful pro-bono tech initiatives.",
    technologies: ["Flutter", "Node.js", "Git"],
    image: "https://images.pexels.com/photos/33920044/pexels-photo-33920044.jpeg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/besufkad-ayele/code-for-africa",
    featured: true,
    points: 80
  },
  {
    title: "Tutor Link",
    description: "Created an innovative application to seamlessly connect tutors with parents in their local area, streamlining access to personalized educational support.",
    technologies: ["Flutter", "Node.js", "Firebase"],
    image: "https://images.pexels.com/photos/18286979/pexels-photo-18286979/free-photo-of-teacher-standing-by-whiteboard.jpeg?auto=compress&cs=tinysrgb&w=300",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/besufkad-ayele/tutor-link.git",
    featured: true,
    points: 70
  },
  {
    title: "Majeat Food Delivery Application",
    description: "Designed a user-centric e-commerce platform with distinctive features like group ordering, enhancing collaborative dining experiences and simplifying food delivery.",
    technologies: ["Flutter", "Firebase", "Node.js"],
    image: "https://images.pexels.com/photos/17224585/pexels-photo-17224585.jpeg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/besufkad-ayele/majeat_Flutter.git",
    featured: true,
    points: 75
  }
];

  const handleProjectClick = (index: number, project: any) => {
    if (!visitedProjects.has(index)) {
      setVisitedProjects(prev => new Set([...prev, index]));
      onEarnPoints(project.points, `+${project.points} XP - Explored ${project.title}!`);
    }
  };

  const handleLinkClick = (type: 'live' | 'github', projectTitle: string) => {
    const points = type === 'github' ? 25 : 15;
    onEarnPoints(points, `+${points} XP - Visited ${projectTitle} ${type === 'github' ? 'Repository' : 'Live Site'}!`);
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
            <span className="bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
              Projects Gallery
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my digital creations. Each project tells a story of innovation and craftsmanship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isVisited = visitedProjects.has(index);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleProjectClick(index, project)}
                className={`group relative bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border cursor-pointer transition-all duration-500 ${
                  isVisited 
                    ? 'border-neon-pink bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 scale-105' 
                    : 'border-border hover:border-neon-pink/50 hover:scale-105'
                } ${project.featured ? 'ring-2 ring-neon-teal/30' : ''}`}
                whileHover={{ y: -10 }}
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-neon-teal to-neon-blue text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star size={12} />
                    Featured
                  </div>
                )}

                {isVisited && (
                  <div className="absolute top-4 right-4 z-10 bg-neon-pink text- rounded-full p-2">
                    <Award size={16} />
                  </div>
                )}

                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${isVisited ? 'text-neon-pink' : 'text-foreground'}`}>
                    {project.title}
                    {isVisited && <span className="ml-2 text-neon-pink">✓</span>}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLinkClick('live', project.title);
                        }}
                        className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-neon-blue to-neon-teal text-white rounded-lg text-xs font-medium hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={12} />
                        Live
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLinkClick('github', project.title);
                        }}
                        className="flex items-center gap-1 px-3 py-1 bg-gray-800 text-white rounded-lg text-xs font-medium hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={12} />
                        Code
                      </motion.a>
                    </div>
                    <div className="flex items-center gap-1 text-neon-teal text-xs font-bold">
                      <Zap size={12} />
                      +{project.points} XP
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 backdrop-blur-sm rounded-xl p-8 border border-neon-pink/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Quest Completion Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-pink mb-2">{projects.length}</div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-teal mb-2">{projects.filter(p => p.featured).length}</div>
                <div className="text-sm text-muted-foreground">Featured</div>
              </div>
              <div className="text-center md:col-span-1 col-span-2">
                <div className="text-3xl font-bold text-neon-blue mb-2">{projects.reduce((sum, p) => sum + p.points, 0)}</div>
                <div className="text-sm text-muted-foreground">Total XP Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
