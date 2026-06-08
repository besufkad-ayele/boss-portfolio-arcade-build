import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

interface HeroSectionProps {
  onEarnPoints?: (points: number, message: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onEarnPoints }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleInteraction = (points: number, message: string) => {
    if (onEarnPoints) {
      onEarnPoints(points, message);
    }
  };

  return (
    <section className="relative w-full h-screen flex items-end overflow-hidden px-6 lg:px-0">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--black)]">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 60% at 70% 40%, rgba(45,90,39,0.18) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,168,76,0.08) 0%, transparent 60%)
            `
          }}
        />
        
        {/* Grid lines */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)'
          }}
        />
      </div>

      {/* Large Number Background - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="hidden lg:block absolute top-1/2 right-12 -translate-y-1/2 font-['Bebas_Neue'] text-[clamp(200px,25vw,380px)] leading-none tracking-[-10px] select-none"
        style={{
          color: 'transparent',
          WebkitTextStroke: '1px rgba(201,168,76,0.08)'
        }}
      >
        02
      </motion.div>

      {/* Profile Image with 3D effect - Responsive */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="hidden md:block absolute top-1/4 right-[10%] lg:right-[20%] w-[250px] h-[320px] md:w-[300px] md:h-[380px] lg:w-[400px] lg:h-[500px] z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, z: -100 }}
          animate={{ opacity: 1, scale: 1, z: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative w-full h-full"
          style={{
            transform: 'translateZ(50px)',
          }}
        >
          <img
            src="/portfolio_image.png"
            alt="Besufkad Ayele"
            className="w-full h-full object-cover"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)',
              filter: 'grayscale(20%) contrast(110%)',
            }}
          />
          
          {/* Gold border accent */}
          <div 
            className="absolute inset-0 border-2 border-[var(--gold)] opacity-40"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)',
            }}
          />
          
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-[var(--gold)] opacity-60" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-[900px] pb-16 lg:pb-20 lg:pl-48 mt-20 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-6 lg:mb-8"
        >
          <div className="w-6 lg:w-8 h-[1px] bg-[var(--gold)]" />
          <span className="font-['DM_Mono'] text-[9px] lg:text-[11px] tracking-[2px] lg:tracking-[3px] text-[var(--gold)] uppercase">
            Senior Software Engineer & Product Designer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-['Bebas_Neue'] text-[clamp(48px,10vw,160px)] leading-[0.9] tracking-[-2px] mb-6 lg:mb-8"
        >
          <span className="block">Besufkad</span>
          <span 
            className="block"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1.5px var(--off-white)'
            }}
          >
            Ayele
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-[520px] text-[13px] lg:text-[15px] leading-[1.8] text-[var(--warm-gray)] mb-8 lg:mb-12"
        >
          Full-Stack & Flutter Engineer based in Addis Ababa — architecting scalable systems across mobile, web, and cloud. 
          Product designer with a passion for creating intuitive user experiences. 2+ years delivering production-grade platforms for thousands of users.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:flex gap-6 lg:gap-12 mb-10 lg:mb-14"
        >
          {[
            { num: '10K+', label: 'Platform Users' },
            { num: '200+', label: 'Active Learners' },
            { num: '4+', label: 'Organizations' },
            { num: '3.77', label: 'GPA' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="font-['Bebas_Neue'] text-[36px] lg:text-[48px] leading-none text-[var(--gold)]">
                {stat.num}
              </div>
              <div className="font-['Outfit'] text-[9px] lg:text-[11px] tracking-[1px] lg:tracking-[2px] uppercase text-[var(--warm-gray)] font-medium mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 lg:gap-5 items-stretch sm:items-center mb-8 lg:mb-0"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleInteraction(100, 'Exploring projects!');
            }}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[var(--gold)] text-[var(--black)] py-3 lg:py-[14px] px-6 lg:px-9 font-['Outfit'] font-semibold text-[11px] lg:text-[12px] tracking-[2px] uppercase transition-all hover:bg-[var(--gold-light)] hover:shadow-lg hover:shadow-[var(--gold)]/30 text-center"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
            }}
          >
            View Work
          </motion.a>

          <motion.a
            href="mailto:ayebesufkad@gmail.com"
            onClick={() => handleInteraction(150, 'Initiating contact!')}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-[var(--line)] text-[var(--gold)] py-3 lg:py-[14px] px-6 lg:px-9 font-['Outfit'] font-medium text-[11px] lg:text-[12px] tracking-[2px] uppercase transition-all hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.08)] text-center"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links - Hidden on small mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden sm:flex gap-4 lg:gap-6 lg:mt-10"
        >
          {[
            { icon: Mail, href: 'mailto:ayebesufkad@gmail.com', label: 'Email' },
            { icon: Github, href: 'https://github.com/besufkad-ayele', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/besufkad-ayele', label: 'LinkedIn' },
            { icon: Phone, href: 'tel:+251976502575', label: 'Phone' },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleInteraction(50, `Connecting via ${social.label}!`)}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 border border-[var(--line)] flex items-center justify-center text-[var(--gold)] transition-all hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.1)]"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
              }}
            >
              <social.icon size={16} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
