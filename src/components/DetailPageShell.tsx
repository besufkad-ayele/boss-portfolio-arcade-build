import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface DetailPageShellProps {
  tag: string;
  title: string;
  subtitle?: string;
  meta?: string;
  image?: string;
  liveLink?: string;
  backSection?: string;
  backToSection?: string;
  children: React.ReactNode;
}

const DetailPageShell: React.FC<DetailPageShellProps> = ({
  tag,
  title,
  subtitle,
  meta,
  image,
  liveLink,
  backSection = 'portfolio',
  backToSection,
  children,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backToSection) {
      navigate(`/?section=${backToSection}`);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--off-white)] overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 py-10 md:py-16">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleBack}
          className="flex items-center gap-2 mb-8 md:mb-12 font-['DM_Mono'] text-[11px] tracking-[2px] uppercase text-[var(--warm-gray)] hover:text-[var(--gold)] transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to {backSection}
        </motion.button>

        {image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-8 md:mb-10 border border-[var(--line)] overflow-hidden"
            style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)' }}
          >
            <img src={image} alt={title} className="w-full max-h-[320px] md:max-h-[400px] object-contain bg-[rgba(255,255,255,0.02)]" />
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[24px] border-l-transparent border-t-[24px] border-t-[var(--gold)] opacity-50" />
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-[var(--gold)] py-1 px-3 border border-[rgba(201,168,76,0.3)]">
              {tag}
            </span>
            {meta && (
              <span className="font-['DM_Mono'] text-[11px] text-[var(--warm-gray)]">{meta}</span>
            )}
          </div>

          <h1 className="font-['Bebas_Neue'] text-[clamp(36px,6vw,64px)] tracking-[1px] leading-none mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="font-['DM_Serif_Display'] text-[18px] md:text-[22px] text-[var(--gold)] mb-6">
              {subtitle}
            </p>
          )}

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-8 md:mb-10 font-['Outfit'] text-[12px] tracking-[2px] uppercase text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
            >
              View Live <ExternalLink size={14} />
            </a>
          )}
        </motion.div>

        {children}
      </div>
    </div>
  );
};

export default DetailPageShell;
