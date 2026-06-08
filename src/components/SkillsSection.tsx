import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-32 left-48 flex items-center gap-6"
      >
        <span className="font-['DM_Mono'] text-[11px] text-[var(--gold)] tracking-[2px]">02 —</span>
        <h2 className="font-['Bebas_Neue'] text-[clamp(42px,6vw,72px)] tracking-[2px] leading-none">
          Skills
        </h2>
        <div className="w-48 h-[1px] bg-[var(--line)]" />
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 grid grid-cols-3 gap-[2px] bg-[var(--line)] border border-[var(--line)] max-w-[1200px] mx-auto mt-20"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            whileHover={{ backgroundColor: 'rgba(201,168,76,0.04)' }}
            className="bg-[var(--black)] p-10 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-['DM_Mono'] text-[10px] tracking-[3px] uppercase text-[var(--gold)]">
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
                  className={`py-[6px] px-[14px] border text-[12px] font-['DM_Mono'] font-light transition-all cursor-default ${
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

      {/* Decorative Background */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.03, rotate: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-[300px] leading-none text-[var(--gold)]"
      >
        S
      </motion.div>
    </section>
  );
};

export default SkillsSection;
