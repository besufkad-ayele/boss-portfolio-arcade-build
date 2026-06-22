import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { getSectionNumber } from '@/lib/section-config';
import { EXPERIENCES } from '@/data/experiences';

interface ExperienceSectionProps {
  onEarnPoints?: (points: number, message: string) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onEarnPoints }) => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-full flex flex-col overflow-hidden bg-[rgba(255,255,255,0.01)] border-t border-b border-[var(--line)]">
      <div className="section-header-bar bg-[rgba(10,10,8,0.98)] backdrop-blur-sm">
        <SectionHeader number={getSectionNumber('experience')} title="Experience" />
      </div>

      <div className="section-scroll-area">
        <div className="portfolio-inner pb-20 pt-6">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.slug}
              role="button"
              tabIndex={0}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              whileHover={{ x: 8, backgroundColor: 'rgba(201,168,76,0.02)' }}
              onClick={() => {
                onEarnPoints?.(150, `Viewing ${exp.company}!`);
                navigate(`/experience/${exp.slug}`);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(`/experience/${exp.slug}`);
                }
              }}
              className="group relative grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-12 py-8 md:py-10 lg:py-12 border-b border-[var(--line)] transition-all cursor-pointer"
            >
              <div className="hidden lg:block absolute -left-6 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-[var(--gold)] transition-all" />

              <div className="space-y-2">
                <div className="font-['DM_Mono'] text-[10px] md:text-[11px] text-[var(--gold)] tracking-[1px]">
                  {exp.period}
                </div>
                <div className="text-[10px] md:text-[11px] tracking-[1px] md:tracking-[2px] uppercase text-[var(--warm-gray)] font-medium">
                  {exp.type}
                </div>
              </div>

              <div>
                <h3 className="font-['DM_Serif_Display'] text-[18px] md:text-[20px] lg:text-[22px] text-[var(--off-white)] mb-1 group-hover:text-[var(--gold-light)] transition-colors">
                  {exp.role}
                </h3>
                <div className="text-[12px] md:text-[13px] text-[var(--gold)] tracking-[1px] mb-4 md:mb-5">
                  {exp.company}
                </div>

                <p className="text-[13px] md:text-[14px] text-[var(--warm-gray)] leading-[1.7] mb-4 line-clamp-2">
                  {exp.overview}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.bullets.slice(0, 2).map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="relative pl-5 text-[13px] text-[var(--warm-gray)] leading-[1.6] line-clamp-2"
                    >
                      <span className="absolute left-0 text-[var(--gold)]">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-2 text-[10px] md:text-[11px] tracking-[2px] uppercase text-[var(--gold)] font-medium opacity-70 group-hover:opacity-100 transition-all">
                  View Full Details
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="hidden lg:block absolute bottom-20 right-40 pointer-events-none"
      >
        <Briefcase size={200} className="text-[var(--gold)]" />
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
