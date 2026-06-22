import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { getSectionNumber } from '@/lib/section-config';
import { PROJECTS } from '@/data/projects';

interface ProjectsSectionProps {
  onEarnPoints?: (points: number, message: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onEarnPoints }) => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-full flex flex-col overflow-hidden bg-[var(--black)]">
      <div className="section-header-bar">
        <SectionHeader number={getSectionNumber('projects')} title="Projects" />
      </div>

      <div className="section-scroll-area">
        <div className="portfolio-inner grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20 pt-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.slug}
              role="button"
              tabIndex={0}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              whileHover={{ y: -8, scale: 1.01 }}
              onClick={() => {
                onEarnPoints?.(200, `Explored ${project.title}!`);
                navigate(`/projects/${project.slug}`);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(`/projects/${project.slug}`);
                }
              }}
              className={`group relative border border-[var(--line)] p-0 overflow-hidden transition-all hover:border-[rgba(201,168,76,0.5)] cursor-pointer ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,168,76,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {project.image && (
                <div className="relative w-full overflow-hidden bg-[rgba(255,255,255,0.02)]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-auto object-contain transition-all duration-500 group-hover:scale-105 ${
                      project.featured
                        ? 'max-h-[200px] sm:max-h-[250px] md:max-h-[350px] lg:max-h-[400px]'
                        : 'max-h-[160px] sm:max-h-[200px] md:max-h-[250px]'
                    }`}
                    style={{
                      filter: 'grayscale(20%) brightness(0.95)',
                      objectFit: 'contain',
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[var(--black)] to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[var(--gold)] opacity-40" />
                </div>
              )}

              <div className="relative z-10 p-6 md:p-8">
                <div className="flex justify-between items-center mb-4 md:mb-5">
                  <span className="font-['DM_Mono'] text-[9px] md:text-[10px] tracking-[2px] uppercase text-[var(--gold)] py-1 px-2 md:px-3 border border-[rgba(201,168,76,0.3)]">
                    {project.tag}
                  </span>
                  <span className="font-['DM_Mono'] text-[10px] md:text-[11px] text-[var(--warm-gray)]">
                    {project.year}
                  </span>
                </div>

                <h3 className="font-['DM_Serif_Display'] text-[20px] md:text-[24px] leading-[1.2] text-[var(--off-white)] mb-3 group-hover:text-[var(--gold-light)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[13px] md:text-[14px] leading-[1.7] md:leading-[1.8] text-[var(--warm-gray)] mb-5 md:mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="font-['DM_Mono'] text-[9px] md:text-[10px] py-1 px-[8px] md:px-[10px] bg-[rgba(201,168,76,0.08)] text-[var(--gold-light)] tracking-[1px] border border-[rgba(201,168,76,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-2 text-[10px] md:text-[11px] tracking-[2px] uppercase text-[var(--gold)] font-medium group-hover:text-[var(--gold-light)] transition-colors">
                    View Details
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEarnPoints?.(50, 'Visiting project!');
                    }}
                    className="text-[10px] tracking-[2px] uppercase text-[var(--warm-gray)] hover:text-[var(--gold)] transition-colors"
                  >
                    Live Site ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
