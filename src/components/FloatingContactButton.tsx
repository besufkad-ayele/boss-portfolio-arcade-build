import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface FloatingContactButtonProps {
  onClick: () => void;
}

const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-[360px] z-50 w-12 h-12 md:w-14 md:h-14 bg-[var(--gold)] text-[var(--black)] flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-[var(--gold)]/30 transition-all group"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
      }}
      aria-label="Open contact dialog"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[var(--gold)] opacity-20" 
        style={{
          clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
        }}
      />
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-[var(--black)] opacity-20" />

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-[var(--black)] border border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        <span className="font-['Outfit'] text-[11px] text-[var(--gold)] tracking-[1px]">
          Get In Touch
        </span>
      </div>
    </motion.button>
  );
};

export default FloatingContactButton;
