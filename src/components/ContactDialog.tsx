import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Github, Linkedin, Phone, Send, MapPin, Briefcase } from 'lucide-react';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onEarnPoints?: (points: number, message: string) => void;
}

const ContactDialog: React.FC<ContactDialogProps> = ({ isOpen, onClose, onEarnPoints }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialProfiles = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ayebesufkad@gmail.com',
      link: 'mailto:ayebesufkad@gmail.com',
      description: 'Send me an email directly',
      color: 'var(--gold)'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@besufkad-ayele',
      link: 'https://github.com/besufkad-ayele',
      description: 'Check out my code & projects',
      color: 'var(--gold)'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'besufkad-ayele',
      link: 'https://www.linkedin.com/in/besufkad-ayele',
      description: 'Connect professionally',
      color: 'var(--gold)'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+251 976 502 575',
      link: 'tel:+251976502575',
      description: 'Give me a call',
      color: 'var(--gold)'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:ayebesufkad@gmail.com?subject=${subject}&body=${body}`;
    
    onEarnPoints?.(500, 'Message sent! Thank you!');
    
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleSocialClick = (label: string) => {
    onEarnPoints?.(150, `Connecting via ${label}!`);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[var(--black)] bg-opacity-95 backdrop-blur-sm"
        />

        {/* Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--black)] border border-[var(--line)]"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)'
          }}
        >
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-[var(--gold)] opacity-50" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-8 text-[var(--warm-gray)] hover:text-[var(--gold)] transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Header */}
          <div className="p-6 md:p-8 border-b border-[var(--line)]">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-['Bebas_Neue'] text-[clamp(28px,5vw,56px)] tracking-[2px] text-[var(--off-white)] mb-2"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-['Outfit'] text-[13px] md:text-[14px] text-[var(--warm-gray)] leading-[1.7]"
            >
              Choose your preferred way to get in touch. I'm always excited to discuss new opportunities and collaborations.
            </motion.p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[var(--line)]"
            >
              <h3 className="font-['DM_Mono'] text-[12px] tracking-[3px] uppercase text-[var(--gold)] mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-['Outfit'] text-[11px] tracking-[1px] uppercase text-[var(--warm-gray)] mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--off-white)] font-['Outfit'] text-[14px] focus:border-[var(--gold)] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="font-['Outfit'] text-[11px] tracking-[1px] uppercase text-[var(--warm-gray)] mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--off-white)] font-['Outfit'] text-[14px] focus:border-[var(--gold)] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="font-['Outfit'] text-[11px] tracking-[1px] uppercase text-[var(--warm-gray)] mb-2 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--off-white)] font-['Outfit'] text-[14px] focus:border-[var(--gold)] focus:outline-none transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="font-['Outfit'] text-[11px] tracking-[1px] uppercase text-[var(--warm-gray)] mb-2 block">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--off-white)] font-['Outfit'] text-[14px] focus:border-[var(--gold)] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[var(--gold)] text-[var(--black)] py-3 px-6 font-['Outfit'] text-[12px] font-semibold tracking-[2px] uppercase transition-all hover:bg-[var(--gold-light)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={14} />
                </motion.button>
              </form>
            </motion.div>

            {/* Right: Social Profiles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 md:p-8"
            >
              <h3 className="font-['DM_Mono'] text-[12px] tracking-[3px] uppercase text-[var(--gold)] mb-6">
                Connect With Me
              </h3>

              <div className="space-y-4 mb-8">
                {socialProfiles.map((profile, idx) => (
                  <motion.a
                    key={idx}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick(profile.label)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="group flex items-start gap-4 p-4 border border-[var(--line)] transition-all hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.05)]"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)'
                    }}
                  >
                    <div className="relative">
                      <div 
                        className="w-12 h-12 border border-[var(--line)] flex items-center justify-center group-hover:border-[var(--gold)] transition-colors"
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)'
                        }}
                      >
                        <profile.icon size={20} style={{ color: profile.color }} />
                      </div>
                      <div className="absolute top-0 right-0 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-[var(--gold)] opacity-0 group-hover:opacity-60 transition-opacity" />
                    </div>
                    <div className="flex-1">
                      <div className="font-['Outfit'] text-[13px] font-medium text-[var(--off-white)] mb-1">
                        {profile.label}
                      </div>
                      <div className="font-['DM_Mono'] text-[11px] text-[var(--gold)] mb-1">
                        {profile.value}
                      </div>
                      <div className="font-['Outfit'] text-[11px] text-[var(--warm-gray)]">
                        {profile.description}
                      </div>
                    </div>
                    <div className="text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="space-y-3 pt-6 border-t border-[var(--line)]">
                <div className="flex items-center gap-3 text-[var(--warm-gray)]">
                  <MapPin size={16} className="text-[var(--gold)]" />
                  <span className="font-['Outfit'] text-[12px]">Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--warm-gray)]">
                  <Briefcase size={16} className="text-[var(--gold)]" />
                  <span className="font-['Outfit'] text-[12px]">Available for freelance & full-time</span>
                </div>
              </div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 p-4 border border-[var(--line)] bg-[rgba(201,168,76,0.03)]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
                  <span className="font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-[var(--gold)]">
                    Quick Response
                  </span>
                </div>
                <p className="font-['Outfit'] text-[11px] text-[var(--warm-gray)] leading-[1.6]">
                  I typically respond within 24 hours on weekdays
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactDialog;
