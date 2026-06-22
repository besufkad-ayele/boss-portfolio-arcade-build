import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { getSectionNumber } from '@/lib/section-config';

interface AboutSectionProps {
  onEarnPoints?: (points: number, message: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onEarnPoints }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative w-full h-full flex flex-col overflow-hidden bg-[rgba(255,255,255,0.015)] border-t border-b border-[var(--line)]">
      <div className="section-scroll-area">
        <div className="portfolio-inner relative z-10 py-20 md:py-16 lg:py-10 pb-32 lg:pb-24">
          <SectionHeader number={getSectionNumber('about')} title="About" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16"
          >
        {/* Left Column - Text */}
        <motion.div variants={itemVariants} className="space-y-4 lg:space-y-5 flex flex-col justify-center">
          <p className="text-[14px] md:text-[15px] leading-[1.7] lg:leading-[1.8] text-[var(--warm-gray)]">
            I'm an <strong className="text-[var(--off-white)] font-medium">Intermediate-to-Senior Flutter and Full-Stack Developer</strong> with a track record of shipping products that scale. My work spans SaaS, LMS, fintech, and hospitality — always with a focus on clean architecture and performance.
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.7] lg:leading-[1.8] text-[var(--warm-gray)]">
            Specialized in <strong className="text-[var(--off-white)] font-medium">Flutter (Riverpod), Next.js, NestJS, and Python (AI/ML)</strong>, with production deployments across AWS, Vercel, and Google Cloud. I bring engineering discipline and creative problem-solving to every system I build.
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.7] lg:leading-[1.8] text-[var(--warm-gray)]">
            As a <strong className="text-[var(--off-white)] font-medium">Product Designer</strong>, I craft intuitive user experiences that bridge the gap between complex functionality and delightful interaction. My design philosophy centers on user-centric solutions backed by data and iterative testing.
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.7] lg:leading-[1.8] text-[var(--warm-gray)]">
            Currently a Full-Stack Developer at <strong className="text-[var(--off-white)] font-medium">i-Capital Africa Institute</strong>, where I lead development of multi-platform products used by 200+ active fellows across 4+ organizations.
          </p>
        </motion.div>

        {/* Right Column - Highlights */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4 lg:gap-5 justify-center">
          {[
            { num: '10K+', label: 'Users on Majeat food delivery platform' },
            { num: '200+', label: 'Active learners on MasterBuilderLab LMS' },
            { num: '45%', label: 'Revenue increase — Ada AI Hospitality platform' },
          ].map((highlight, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, x: 10 }}
              onClick={() => onEarnPoints?.(100, `Achievement discovered: ${highlight.num}!`)}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative border border-[var(--line)] p-5 md:p-6 transition-all hover:border-[var(--gold)] cursor-pointer"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)'
              }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-[var(--gold)] opacity-50" />
              
              <div className="font-['Bebas_Neue'] text-[32px] md:text-[36px] leading-none text-[var(--gold)] mb-1">
                {highlight.num}
              </div>
              <div className="font-['Outfit'] text-[10px] md:text-[11px] tracking-[1px] uppercase text-[var(--warm-gray)] font-medium leading-[1.5]">
                {highlight.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Decorative Elements - Hidden when space is tight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="hidden 2xl:block absolute bottom-16 right-[400px] font-['Bebas_Neue'] text-[180px] leading-none text-[var(--gold)] select-none pointer-events-none"
      >
        A
      </motion.div>
    </section>
  );
};

export default AboutSection;
