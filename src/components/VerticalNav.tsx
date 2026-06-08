import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface VerticalNavProps {
  sections: string[];
  activeSection: number;
  onNavigate: (index: number) => void;
  scrollProgress: number;
}

const VerticalNav: React.FC<VerticalNavProps> = ({
  sections,
  activeSection,
  onNavigate,
  scrollProgress
}) => {
  const navItems = [
    { label: 'Home', icon: '01' },
    { label: 'About', icon: '02' },
    { label: 'Skills', icon: '03' },
    { label: 'Projects', icon: '04' },
    { label: 'Experience', icon: '05' },
    { label: 'Contact', icon: '06' },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Besufkad_Ayele_Resume.docx';
    link.download = 'Besufkad_Ayele_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed left-8 top-24 z-50 flex flex-col gap-0"
    >
      {/* Logo */}
      <div className="mb-8 font-['Bebas_Neue'] text-[28px] text-[var(--gold)] tracking-[4px] pb-6 border-b border-[var(--line)]">
        BA
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-2">
        {navItems.map((item, idx) => (
          <motion.button
            key={idx}
            onClick={() => onNavigate(idx)}
            whileHover={{ x: 8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative flex items-center gap-4 py-3 px-4 transition-all duration-300 ${
              idx === activeSection
                ? 'bg-[var(--gold)] bg-opacity-10 border-l-2 border-[var(--gold)]'
                : 'border-l-2 border-transparent hover:border-[var(--warm-gray)]'
            }`}
          >
            {/* Number */}
            <span
              className={`font-['DM_Mono'] text-[11px] tracking-[2px] transition-colors ${
                idx === activeSection ? 'text-[var(--gold)]' : 'text-[var(--warm-gray)] group-hover:text-[var(--off-white)]'
              }`}
            >
              {item.icon}
            </span>

            {/* Label */}
            <span
              className={`font-['Outfit'] text-[12px] font-medium tracking-[2px] uppercase transition-colors whitespace-nowrap ${
                idx === activeSection ? 'text-[var(--gold)]' : 'text-[var(--warm-gray)] group-hover:text-[var(--off-white)]'
              }`}
            >
              {item.label}
            </span>

            {/* Active Indicator */}
            {idx === activeSection && (
              <motion.div
                layoutId="activeNav"
                className="absolute left-0 top-0 w-full h-full bg-[var(--gold)] bg-opacity-5 -z-10"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-8 pt-6 border-t border-[var(--line)]">
        <div className="w-full h-1 bg-[var(--line)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="mt-2 font-['DM_Mono'] text-[10px] text-[var(--warm-gray)] tracking-[2px]">
          {Math.round(scrollProgress)}% Complete
        </div>
      </div>

      {/* Download CV Button */}
      <motion.button
        onClick={handleDownloadCV}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 flex items-center justify-center gap-2 py-3 px-4 bg-[var(--gold)] text-[var(--black)] font-['Outfit'] text-[11px] font-semibold tracking-[2px] uppercase transition-all duration-300 hover:bg-[var(--gold-light)] hover:shadow-lg hover:shadow-[var(--gold)]/20"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
        }}
      >
        <Download size={14} />
        <span>CV</span>
      </motion.button>
    </motion.nav>
  );
};

export default VerticalNav;
