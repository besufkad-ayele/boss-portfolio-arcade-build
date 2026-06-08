import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface ExperienceSectionProps {
  onEarnPoints?: (points: number, message: string) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onEarnPoints }) => {
  const experiences = [
    {
      period: 'Oct 2025 — Present',
      type: 'Full-time · Onsite',
      role: 'Full-Stack Developer',
      company: 'i-Capital Africa Institute',
      bullets: [
        'Led development of MasterBuilderLab LMS — a production platform serving 200+ active fellows across 3+ organizations using Next.js, NestJS, and Flutter.',
        'Architected GraphQL APIs for efficient data fetching across web and mobile clients, reducing data-retrieval latency significantly.',
        'Contributed to a driver\'s platform, Tele-birr mini-app, and Investify investment platform with full-stack Flutter/Next.js/NestJS architecture.',
        'Designed microservices-based backend systems in NestJS, improving modularity and scalability across multiple products.',
      ]
    },
    {
      period: 'Feb 2025 — Present',
      type: 'Freelance · Remote',
      role: 'Full-Stack Laravel Developer',
      company: 'Church Management System',
      bullets: [
        'Designed and built a full-stack Church Management System using Laravel and Filament with modular architecture.',
        'Implemented role-based access control, relational database design (MySQL/PostgreSQL), and dynamic admin dashboards.',
        'Ensured data integrity and security across sensitive organizational workflows.',
      ]
    },
    {
      period: 'Mar 2024 — Sep 2024',
      type: 'Internship · Onsite',
      role: 'Flutter Developer Intern',
      company: 'Quadrant Innovations',
      bullets: [
        'Developed and maintained Flutter mobile applications using Provider state management and Git version control.',
        'Built core features, resolved complex bugs, improving app stability and reducing crash rates during testing.',
      ]
    },
    {
      period: 'Jul 2023 — Aug 2023',
      type: 'Internship · Onsite',
      role: 'Flutter Developer Intern',
      company: 'Quantum Technologies',
      bullets: [
        'Applied clean code principles and modular architecture to build reusable Flutter widgets with Dart.',
        'Organized app logic with Provider and clear separation of concerns, enabling scalable and testable codebase.',
      ]
    }
  ];

  return (
    <section className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden bg-[rgba(255,255,255,0.01)] border-t border-b border-[var(--line)] py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-12 lg:pl-48 flex items-center gap-3 md:gap-6 mb-12 sticky top-0 bg-[rgba(10,10,8,0.98)] pt-4 pb-4 z-20 backdrop-blur-sm"
      >
        <span className="font-['DM_Mono'] text-[10px] md:text-[11px] text-[var(--gold)] tracking-[2px]">03 —</span>
        <h2 className="font-['Bebas_Neue'] text-[clamp(32px,6vw,72px)] tracking-[2px] leading-none">
          Experience
        </h2>
        <div className="w-16 md:w-48 h-[1px] bg-[var(--line)]" />
      </motion.div>

      {/* Experience List */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-48 pb-20">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            whileHover={{ x: 8, backgroundColor: 'rgba(201,168,76,0.02)' }}
            className="group relative grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-12 py-8 md:py-10 lg:py-12 border-b border-[var(--line)] transition-all"
          >
            {/* Left Border Indicator - Desktop only */}
            <div className="hidden lg:block absolute left-[-48px] top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-[var(--gold)] transition-all" />

            {/* Left Column */}
            <div className="space-y-2">
              <div className="font-['DM_Mono'] text-[10px] md:text-[11px] text-[var(--gold)] tracking-[1px]">
                {exp.period}
              </div>
              <div className="text-[10px] md:text-[11px] tracking-[1px] md:tracking-[2px] uppercase text-[var(--warm-gray)] font-medium">
                {exp.type}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="font-['DM_Serif_Display'] text-[18px] md:text-[20px] lg:text-[22px] text-[var(--off-white)] mb-1">
                {exp.role}
              </h3>
              <div className="text-[12px] md:text-[13px] text-[var(--gold)] tracking-[1px] mb-4 md:mb-5">
                {exp.company}
              </div>

              <ul className="space-y-2 md:space-y-[10px]">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <motion.li
                    key={bulletIdx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (bulletIdx * 0.1) }}
                    className="relative pl-5 text-[13px] md:text-[14px] text-[var(--warm-gray)] leading-[1.6] md:leading-[1.7]"
                  >
                    <span className="absolute left-0 text-[var(--gold)] text-[14px] md:text-[16px]">›</span>
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Icon - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="hidden lg:block absolute bottom-20 right-40"
      >
        <Briefcase size={200} className="text-[var(--gold)]" />
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
