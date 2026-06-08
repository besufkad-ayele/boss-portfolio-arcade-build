import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[rgba(255,255,255,0.015)] border-t border-b border-[var(--line)]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-32 left-48 flex items-center gap-6"
      >
        <span className="font-['DM_Mono'] text-[11px] text-[var(--gold)] tracking-[2px]">01 —</span>
        <h2 className="font-['Bebas_Neue'] text-[clamp(42px,6vw,72px)] tracking-[2px] leading-none">
          About
        </h2>
        <div className="w-48 h-[1px] bg-[var(--line)]" />
      </motion.div>

      {/* Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid grid-cols-2 gap-20 max-w-[1200px] mx-auto px-48 mt-20"
      >
        {/* Left Column - Text */}
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-[16px] leading-[1.9] text-[var(--warm-gray)]">
            I'm an <strong className="text-[var(--off-white)] font-medium">Intermediate-to-Senior Flutter and Full-Stack Developer</strong> with a track record of shipping products that scale. My work spans SaaS, LMS, fintech, and hospitality — always with a focus on clean architecture and performance.
          </p>
          <p className="text-[16px] leading-[1.9] text-[var(--warm-gray)]">
            Specialized in <strong className="text-[var(--off-white)] font-medium">Flutter (Riverpod), Next.js, NestJS, and Python (AI/ML)</strong>, with production deployments across AWS, Vercel, and Google Cloud. I bring engineering discipline and creative problem-solving to every system I build.
          </p>
          <p className="text-[16px] leading-[1.9] text-[var(--warm-gray)]">
            As a <strong className="text-[var(--off-white)] font-medium">Product Designer</strong>, I craft intuitive user experiences that bridge the gap between complex functionality and delightful interaction. My design philosophy centers on user-centric solutions backed by data and iterative testing.
          </p>
          <p className="text-[16px] leading-[1.9] text-[var(--warm-gray)]">
            Currently a Full-Stack Developer at <strong className="text-[var(--off-white)] font-medium">i-Capital Africa Institute</strong>, where I lead development of multi-platform products used by 200+ active fellows across 4+ organizations.
          </p>
        </motion.div>

        {/* Right Column - Highlights */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          {[
            { num: '10K+', label: 'Users on Majeat food delivery platform' },
            { num: '200+', label: 'Active learners on MasterBuilderLab LMS' },
            { num: '45%', label: 'Revenue increase — Ada AI Hospitality platform' },
          ].map((highlight, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, x: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative border border-[var(--line)] p-7 transition-all hover:border-[var(--gold)]"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)'
              }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-[var(--gold)] opacity-50" />
              
              <div className="font-['Bebas_Neue'] text-[40px] leading-none text-[var(--gold)] mb-1">
                {highlight.num}
              </div>
              <div className="font-['Outfit'] text-[11px] tracking-[2px] uppercase text-[var(--warm-gray)] font-medium">
                {highlight.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-20 right-40 font-['Bebas_Neue'] text-[200px] leading-none text-[var(--gold)]"
      >
        A
      </motion.div>
    </section>
  );
};

export default AboutSection;
