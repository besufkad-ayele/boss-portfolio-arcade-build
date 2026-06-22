import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="portfolio-inner section-header-row !mb-0"
  >
    <span className="font-['DM_Mono'] text-[10px] md:text-[11px] text-[var(--gold)] tracking-[2px] shrink-0">
      {number} —
    </span>
    <h2 className="font-['Bebas_Neue'] text-[clamp(32px,6vw,72px)] tracking-[2px] leading-none shrink-0">
      {title}
    </h2>
    <div className="section-header-line" />
  </motion.div>
);

export default SectionHeader;
