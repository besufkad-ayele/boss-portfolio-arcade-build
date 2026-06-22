import React from 'react';
import { motion } from 'framer-motion';
import { Download, Radio } from 'lucide-react';
import { SECTION_NAV } from '@/lib/section-config';

interface VerticalNavProps {
  sections: string[];
  activeSection: number;
  onNavigate: (index: number) => void;
  scrollProgress: number;
}

const VerticalNav: React.FC<VerticalNavProps> = ({
  activeSection,
  onNavigate,
  scrollProgress
}) => {
  const navItems = SECTION_NAV;

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Besufkad_Ayele_Resume.docx';
    link.download = 'Besufkad_Ayele_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block pointer-events-none">
      <div className="pointer-events-auto">
      {/* Suspension cables */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex gap-3">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[var(--gold)] to-[rgba(201,168,76,0.4)]" />
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[var(--gold)] to-[rgba(201,168,76,0.6)]" />
        <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-[var(--gold)] to-[rgba(201,168,76,0.3)]" />
      </div>

      <motion.nav
        initial={{ y: 40, opacity: 0, rotateX: 12 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 80 }}
        className="floating-nav-card relative w-[200px]"
        style={{ transformStyle: 'preserve-3d', perspective: '800px' }}
      >
        {/* Glow beneath */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-[var(--gold)] opacity-10 blur-2xl rounded-full pointer-events-none" />

        {/* Card body */}
        <div
          className="relative border border-[rgba(201,168,76,0.35)] bg-[rgba(10,10,8,0.85)] backdrop-blur-xl overflow-hidden"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
            boxShadow: '0 24px 48px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.08), inset 0 1px 0 rgba(201,168,76,0.15)',
          }}
        >
          {/* Scan line effect */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, var(--gold) 2px, var(--gold) 3px)',
            }}
          />

          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-[var(--gold)] opacity-70" />
          <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[16px] border-r-transparent border-b-[16px] border-b-[var(--gold)] opacity-30" />

          {/* Header strip */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)]">
            <div className="flex items-center gap-2">
              <Radio size={12} className="text-[var(--gold)] animate-pulse" />
              <span className="font-['DM_Mono'] text-[9px] tracking-[3px] uppercase text-[var(--gold)]">
                Nav Link
              </span>
            </div>
            <span className="font-['DM_Mono'] text-[8px] text-[var(--warm-gray)] tracking-[1px]">
              v2.0
            </span>
          </div>

          {/* Navigation Items */}
          <div className="p-2 flex flex-col gap-1 max-h-[42vh] overflow-y-auto custom-scrollbar">
            {navItems.map((item, idx) => (
              <motion.button
                key={idx}
                onClick={() => onNavigate(idx)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative flex items-center gap-3 py-2.5 px-3 transition-all duration-300 rounded-sm ${
                  idx === activeSection
                    ? 'bg-[var(--gold)] shadow-[0_0_20px_rgba(201,168,76,0.3)]'
                    : 'hover:bg-[rgba(201,168,76,0.06)]'
                }`}
              >
                <span
                  className={`font-['DM_Mono'] text-[10px] tracking-[2px] transition-colors ${
                    idx === activeSection ? 'text-[var(--black)]' : 'text-[var(--gold)] opacity-60 group-hover:opacity-100'
                  }`}
                >
                  {item.number}
                </span>
                <span
                  className={`font-['Outfit'] text-[11px] font-medium tracking-[1.5px] uppercase transition-colors ${
                    idx === activeSection ? 'text-[var(--black)] font-semibold' : 'text-[var(--warm-gray)] group-hover:text-[var(--off-white)]'
                  }`}
                >
                  {item.label}
                </span>
                {idx === activeSection && (
                  <motion.div
                    layoutId="navPulse"
                    className="absolute right-2 w-1.5 h-1.5 rounded-full bg-[var(--black)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Progress */}
          <div className="px-4 py-3 border-t border-[rgba(201,168,76,0.15)]">
            <div className="flex justify-between items-center mb-2">
              <span className="font-['DM_Mono'] text-[8px] tracking-[2px] uppercase text-[var(--warm-gray)]">
                Progress
              </span>
              <span className="font-['DM_Mono'] text-[9px] text-[var(--gold)]">
                {Math.round(scrollProgress)}%
              </span>
            </div>
            <div className="h-[3px] bg-[rgba(201,168,76,0.1)] overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]"
                style={{ width: `${scrollProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* CV Button */}
          <div className="p-3 pt-0">
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.3)] text-[var(--gold)] font-['Outfit'] text-[10px] font-semibold tracking-[2px] uppercase transition-all hover:bg-[var(--gold)] hover:text-[var(--black)] hover:border-[var(--gold)]"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
              }}
            >
              <Download size={12} />
              <span>CV</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>
      </div>
    </div>
  );
};

export default VerticalNav;
