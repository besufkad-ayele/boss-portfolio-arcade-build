import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  onEarnPoints?: (points: number, message: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onEarnPoints }) => {
  const projects = [
    {
      tag: 'Hackathon Winner',
      year: 'Apr 2026',
      title: 'Ada — AI Hospitality Revenue Platform',
      desc: 'AI-driven hospitality platform designed to increase revenue by up to 45% using predictive pricing models, event-based forecasting, and Groq-powered conversational AI with WhatsApp bot workflows.',
      tech: ['Next.js', 'FastAPI', 'Groq API', 'WhatsApp Bot', 'ML'],
      link: 'https://ada-22xq-eosin.vercel.app/landing',
      featured: true,
      image: '/assets/ada.png'
    },
    {
      tag: 'Production',
      year: '2026',
      title: 'MasterBuilder Lab LMS',
      desc: 'Scalable Learning Management System supporting structured training programs used by 200+ fellows and 3+ organizations.',
      tech: ['Next.js', 'NestJS', 'Flutter', 'Firebase', 'GraphQL'],
      link: 'https://masterbuilderlab.com/',
      image: '/assets/master-builder.png'
    },
    {
      tag: 'Enterprise',
      year: 'Oct 2025 – Jul 2026',
      title: 'Strategize — Strategy Execution Platform',
      desc: 'Enterprise strategy platform enabling cascading objectives from organizational to individual levels with real-time progress tracking and notifications.',
      tech: ['Next.js', 'NestJS', 'GraphQL', 'Real-time'],
      link: 'https://strategize.frontiertech.org',
      image: '/assets/strategize.png'
    },
    {
      tag: 'Mobile App',
      year: 'Jun – Jul 2024',
      title: 'Majeat Food Delivery',
      desc: 'Production-ready food delivery app supporting 10K+ users with real-time order management, group ordering, and dynamic coordination.',
      tech: ['Flutter', 'Firebase', 'Node.js'],
      link: 'https://github.com/besufkad-ayele/majeat_Flutter',
      image: '/placeholder.svg'
    }
  ];

  return (
    <section className="relative w-full h-screen overflow-y-auto overflow-x-hidden bg-[var(--black)] py-20 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-12 lg:pl-48 flex items-center gap-3 md:gap-6 mb-8 md:mb-12 sticky top-0 bg-[var(--black)] pt-4 pb-4 z-20"
      >
        <span className="font-['DM_Mono'] text-[10px] md:text-[11px] text-[var(--gold)] tracking-[2px]">04 —</span>
        <h2 className="font-['Bebas_Neue'] text-[clamp(32px,6vw,72px)] tracking-[2px] leading-none">
          Projects
        </h2>
        <div className="w-16 md:w-48 h-[1px] bg-[var(--line)]" />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1100px] mx-auto px-6 md:px-12 lg:px-48 pb-20">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            whileHover={{ y: -8, scale: 1.01 }}
            onClick={() => onEarnPoints?.(200, `Explored ${project.title}!`)}
            className={`group relative border border-[var(--line)] p-0 overflow-hidden transition-all hover:border-[rgba(201,168,76,0.5)] cursor-pointer ${
              project.featured ? 'lg:col-span-2' : ''
            }`}
            style={{
              clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,168,76,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* Project Image - Full Width */}
            {project.image && (
              <div className="relative w-full overflow-hidden bg-[rgba(255,255,255,0.02)]">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-105"
                  style={{ 
                    filter: 'grayscale(20%) brightness(0.95)',
                    maxHeight: project.featured ? '300px md:400px' : '200px md:250px',
                    objectFit: 'contain'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-transparent opacity-80" />
                
                {/* Corner accent on image */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[var(--gold)] opacity-40" />
              </div>
            )}

            {/* Content */}
            <div className="relative z-10 p-6 md:p-8">
              {/* Meta */}
              <div className="flex justify-between items-center mb-4 md:mb-5">
                <span className="font-['DM_Mono'] text-[9px] md:text-[10px] tracking-[2px] uppercase text-[var(--gold)] py-1 px-2 md:px-3 border border-[rgba(201,168,76,0.3)]">
                  {project.tag}
                </span>
                <span className="font-['DM_Mono'] text-[10px] md:text-[11px] text-[var(--warm-gray)]">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-['DM_Serif_Display'] text-[20px] md:text-[24px] leading-[1.2] text-[var(--off-white)] mb-3 group-hover:text-[var(--gold-light)] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-[14px] leading-[1.7] md:leading-[1.8] text-[var(--warm-gray)] mb-5 md:mb-6">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="font-['DM_Mono'] text-[9px] md:text-[10px] py-1 px-[8px] md:px-[10px] bg-[rgba(201,168,76,0.08)] text-[var(--gold-light)] tracking-[1px] border border-[rgba(201,168,76,0.2)] hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.15)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  onEarnPoints?.(50, 'Visiting project!');
                }}
                whileHover={{ gap: '14px' }}
                className="inline-flex items-center gap-2 text-[10px] md:text-[11px] tracking-[2px] uppercase text-[var(--gold)] font-medium transition-all hover:text-[var(--gold-light)]"
              >
                View Live
                <ArrowRight size={14} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
