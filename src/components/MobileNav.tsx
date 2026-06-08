import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

interface MobileNavProps {
  sections: string[];
  activeSection: number;
  onNavigate: (index: number) => void;
  scrollProgress: number;
}

const MobileNav: React.FC<MobileNavProps> = ({
  sections,
  activeSection,
  onNavigate,
  scrollProgress
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', icon: '01' },
    { label: 'About', icon: '02' },
    { label: 'Skills', icon: '03' },
    { label: 'Projects', icon: '04' },
    { label: 'Experience', icon: '05' },
    { label: 'Contact', icon: '06' },
  ];

  const handleNavigate = (index: number) => {
    onNavigate(index);
    setIsOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Besufkad_Ayele_Resume.docx';
    link.download = 'Besufkad_Ayele_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--black)] border-b border-[var(--line)] lg:hidden"
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="font-['Bebas_Neue'] text-[24px] text-[var(--gold)] tracking-[3px]">
            BA
          </div>

          {/* Progress */}
          <div className="flex items-center gap-3">
            <span className="font-['DM_Mono'] text-[10px] text-[var(--warm-gray)] tracking-[1px]">
              {Math.round(scrollProgress)}%
            </span>
            
            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 border border-[var(--line)] flex items-center justify-center text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)'
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-[var(--line)]">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[var(--black)] bg-opacity-95 z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[var(--black)] border-l border-[var(--line)] z-50 overflow-y-auto lg:hidden"
              style={{
                clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)'
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-[var(--warm-gray)] hover:text-[var(--gold)]"
              >
                <X size={24} />
              </button>

              {/* Logo */}
              <div className="p-6 border-b border-[var(--line)]">
                <div className="font-['Bebas_Neue'] text-[28px] text-[var(--gold)] tracking-[4px]">
                  BA
                </div>
                <div className="font-['DM_Mono'] text-[10px] text-[var(--warm-gray)] tracking-[2px] mt-1">
                  Portfolio
                </div>
              </div>

              {/* Navigation Items */}
              <div className="p-4">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleNavigate(idx)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`w-full flex items-center gap-4 py-4 px-4 transition-all ${
                      idx === activeSection
                        ? 'bg-[var(--gold)] bg-opacity-10 border-l-2 border-[var(--gold)]'
                        : 'border-l-2 border-transparent hover:border-[var(--warm-gray)]'
                    }`}
                  >
                    <span
                      className={`font-['DM_Mono'] text-[11px] tracking-[2px] ${
                        idx === activeSection ? 'text-[var(--gold)]' : 'text-[var(--warm-gray)]'
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`font-['Outfit'] text-[14px] font-medium tracking-[1px] uppercase ${
                        idx === activeSection ? 'text-[var(--gold)]' : 'text-[var(--off-white)]'
                      }`}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Download CV */}
              <div className="p-4 border-t border-[var(--line)]">
                <button
                  onClick={handleDownloadCV}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[var(--gold)] text-[var(--black)] font-['Outfit'] text-[12px] font-semibold tracking-[2px] uppercase transition-all hover:bg-[var(--gold-light)]"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                  }}
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
