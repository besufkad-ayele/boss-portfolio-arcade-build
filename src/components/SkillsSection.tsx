import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { getSectionNumber } from '@/lib/section-config';

interface SkillsSectionProps {
  onEarnPoints?: (points: number, message: string) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ onEarnPoints }) => {
  const skills = [
    {
      category: 'Mobile',
      tags: ['Flutter', 'Dart', 'Riverpod', 'Provider', 'iOS', 'Android'],
      featured: ['Flutter', 'Dart']
    },
    {
      category: 'Frontend',
      tags: ['Next.js', 'React.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Figma'],
      featured: ['Next.js', 'React.js']
    },
    {
      category: 'Backend',
      tags: ['NestJS', 'Node.js', 'FastAPI', 'Laravel', 'Python', 'GraphQL', 'REST APIs'],
      featured: ['NestJS', 'Node.js']
    },
    {
      category: 'Databases',
      tags: ['PostgreSQL', 'Firebase', 'MongoDB', 'MySQL', 'Supabase', 'Redis'],
      featured: ['PostgreSQL', 'Firebase']
    },
    {
      category: 'Cloud & DevOps',
      tags: ['AWS', 'Vercel', 'GCP', 'Git / GitHub', 'Microservices', 'Bull Queue'],
      featured: ['AWS', 'Vercel']
    },
    {
      category: 'Design & AI',
      tags: ['UI/UX Design', 'Figma', 'Adobe XD', 'AI/ML', 'Groq API', 'WhatsApp Bots', 'Product Design'],
      featured: ['UI/UX Design', 'AI/ML']
    }
  ];

  return (
    <section className="relative w-full h-full flex flex-col overflow-hidden bg-[var(--black)]">
      <div className="section-header-bar">
        <SectionHeader number={getSectionNumber('skills')} title="Skills" />
      </div>

      <div className="section-scroll-area">
      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="portfolio-inner relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[var(--line)] border border-[var(--line)] mb-20 pt-6 pb-8"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            whileHover={{ backgroundColor: 'rgba(201,168,76,0.04)' }}
            className="bg-[var(--black)] p-6 md:p-8 lg:p-10 transition-all"
          >
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <span className="font-['DM_Mono'] text-[9px] md:text-[10px] tracking-[2px] md:tracking-[3px] uppercase text-[var(--gold)]">
                {skill.category}
              </span>
              <div className="flex-1 h-[1px] bg-[var(--line)]" />
            </div>

            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag, tagIdx) => (
                <motion.span
                  key={tagIdx}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: 'var(--gold)', 
                    color: 'var(--gold)',
                    backgroundColor: 'rgba(201,168,76,0.06)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onEarnPoints?.(25, `Skill unlocked: ${tag}!`)}
                  className={`py-[5px] md:py-[6px] px-[12px] md:px-[14px] border text-[11px] md:text-[12px] font-['DM_Mono'] font-light transition-all cursor-pointer ${
                    skill.featured.includes(tag)
                      ? 'border-[rgba(201,168,76,0.5)] text-[var(--off-white)]'
                      : 'border-[rgba(201,168,76,0.2)] text-[var(--warm-gray)]'
                  }`}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>

      {/* Decorative Background - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.03, rotate: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-[300px] leading-none text-[var(--gold)] select-none pointer-events-none"
      >
        S
      </motion.div>
    </section>
  );
};

export default SkillsSection;
