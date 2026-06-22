import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { getSectionNumber } from '@/lib/section-config';
import { LEARN_PATH, LEARN_HABITS, BUILD_PRINCIPLES } from '@/data/path';

interface PathSectionProps {
  onEarnPoints?: (points: number, message: string) => void;
}

const PathSection: React.FC<PathSectionProps> = ({ onEarnPoints }) => {
  return (
    <section className="relative w-full h-full flex flex-col overflow-hidden bg-[var(--black)]">
      <div className="section-header-bar">
        <SectionHeader number={getSectionNumber('path')} title="Path" />
      </div>

      <div className="section-scroll-area">
        <div className="portfolio-inner pb-20 pt-6 space-y-12 md:space-y-16">
          {/* How I learn */}
          <div>
            <h3 className="font-['DM_Mono'] text-[11px] tracking-[3px] uppercase text-[var(--gold)] mb-6">
              How I Learn
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {LEARN_HABITS.map((habit, idx) => (
                <motion.div
                  key={habit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  onClick={() => onEarnPoints?.(50, `Principle: ${habit.title}`)}
                  className="border border-[var(--line)] p-5 hover:border-[var(--gold)] transition-colors cursor-pointer"
                >
                  <div className="font-['Outfit'] text-[14px] font-medium text-[var(--off-white)] mb-2">{habit.title}</div>
                  <p className="text-[13px] text-[var(--warm-gray)] leading-[1.7]">{habit.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="relative border-l border-[var(--line)] ml-3 space-y-8">
              {LEARN_PATH.map((step, idx) => (
                <motion.div
                  key={step.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--gold)] shadow-[0_0_12px_var(--gold)]" />
                  <div className="font-['DM_Mono'] text-[10px] tracking-[2px] text-[var(--gold)] mb-1">{step.period}</div>
                  <div className="font-['DM_Serif_Display'] text-[18px] text-[var(--off-white)] mb-2">{step.title}</div>
                  <p className="text-[13px] text-[var(--warm-gray)] leading-[1.7] mb-3">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.focus.map((f) => (
                      <span key={f} className="font-['DM_Mono'] text-[9px] py-1 px-2 border border-[rgba(201,168,76,0.25)] text-[var(--gold-light)]">
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How I build */}
          <div>
            <h3 className="font-['DM_Mono'] text-[11px] tracking-[3px] uppercase text-[var(--gold)] mb-6">
              How I Build
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BUILD_PRINCIPLES.map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.08 }}
                  className="border border-[var(--line)] p-5 md:p-6 hover:border-[rgba(201,168,76,0.4)] transition-all"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
                >
                  <span className="text-[var(--gold)] text-lg mb-3 block">{p.icon}</span>
                  <div className="font-['Outfit'] text-[14px] font-medium text-[var(--off-white)] mb-2">{p.title}</div>
                  <p className="text-[13px] text-[var(--warm-gray)] leading-[1.7]">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSection;
