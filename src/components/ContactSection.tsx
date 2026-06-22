import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import ContactDialog from './ContactDialog';

interface ContactSectionProps {
  onEarnPoints?: (points: number, message: string) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onEarnPoints }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:ayebesufkad@gmail.com',
      display: 'ayebesufkad@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/besufkad-ayele',
      display: 'besufkad-ayele'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/besufkad-ayele',
      display: 'besufkad-ayele'
    },
    {
      icon: Phone,
      label: 'Call',
      href: 'tel:+251976502575',
      display: '+251 976 502 575'
    }
  ];

  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-hidden overflow-y-auto">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="portfolio-inner relative z-10 text-center py-24 lg:py-0">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-['Bebas_Neue'] text-[clamp(40px,8vw,120px)] leading-[0.9] tracking-[-1px] mb-6 md:mb-8"
        >
          Let's Build
          <br />
          <span 
            className="inline-block"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1.5px var(--off-white)'
            }}
          >
            Together
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[14px] md:text-[16px] text-[var(--warm-gray)] leading-[1.8] mb-10 md:mb-14 max-w-[500px] mx-auto"
        >
          Open to senior roles, impactful freelance projects, and collaborations across Africa and globally. 
          Let's create something that scales.
        </motion.p>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-14 flex-wrap"
        >
          {contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onEarnPoints?.(100, `Connecting via ${contact.label}!`)}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-2 transition-all"
            >
              <div 
                className="w-14 h-14 border border-[var(--line)] flex items-center justify-center transition-all group-hover:border-[var(--gold)] group-hover:bg-[rgba(201,168,76,0.1)]"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                }}
              >
                <contact.icon size={20} className="text-[var(--gold)]" />
              </div>
              <span className="text-[10px] tracking-[2px] uppercase text-[var(--warm-gray)] font-medium group-hover:text-[var(--gold)] transition-colors">
                {contact.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={() => {
            setIsDialogOpen(true);
            onEarnPoints?.(100, 'Opening contact dialog!');
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[var(--gold)] text-[var(--black)] py-3 md:py-4 px-8 md:px-12 font-['Outfit'] text-[12px] md:text-[13px] font-semibold tracking-[2px] uppercase transition-all hover:bg-[var(--gold-light)] hover:shadow-xl hover:shadow-[var(--gold)]/30 w-full sm:w-auto"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
          }}
        >
          Start a Conversation
        </motion.button>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-20 pt-6 md:pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] md:text-[11px] text-[var(--warm-gray)] font-['DM_Mono'] tracking-[1px]"
        >
          <span>© 2026 Besufkad Ayele</span>
          <span>Addis Ababa, Ethiopia</span>
        </motion.div>
      </div>

      {/* Contact Dialog */}
      <ContactDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)}
        onEarnPoints={onEarnPoints}
      />

      {/* Decorative Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="hidden lg:block absolute top-20 left-20 font-['Bebas_Neue'] text-[250px] leading-none text-[var(--gold)] select-none pointer-events-none"
      >
        C
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 2, delay: 0.7 }}
        className="hidden lg:block absolute bottom-20 right-20 font-['Bebas_Neue'] text-[180px] leading-none text-[var(--gold)] select-none pointer-events-none"
      >
        06
      </motion.div>
    </section>
  );
};

export default ContactSection;
