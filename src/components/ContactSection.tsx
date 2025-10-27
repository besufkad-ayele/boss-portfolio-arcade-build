
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone, Star, Trophy } from 'lucide-react';
import Footer from './Footer';

interface ContactSectionProps {
  onEarnPoints: (points: number, message: string) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onEarnPoints }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [interactionCount, setInteractionCount] = useState(0);
  const [hasEarnedPortalAccess, setHasEarnedPortalAccess] = useState(false);

  React.useEffect(() => {
    if (isInView && !hasEarnedPortalAccess) {
      onEarnPoints(75, 'Contact Portal Accessed!');
      setHasEarnedPortalAccess(true);
    }
  }, [isInView, onEarnPoints, hasEarnedPortalAccess]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Award points for form interaction
    if (interactionCount < 3) {
      setInteractionCount(prev => prev + 1);
      onEarnPoints(10, `Form Field Updated! +10 XP`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEarnPoints(150, 'Message Sent! Portal Communication Successful!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSocialClick = (platform: string, points: number) => {
    onEarnPoints(points, `${platform} Portal Accessed! +${points} XP`);
  };

  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/besufkad-ayele',
      color: 'from-neutral-900 to-neutral-700',
      bgColor: 'from-neutral-900/20 to-neutral-700/20',
      points: 30
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/besufkad-ayele',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'from-blue-500/20 to-blue-700/20',
      points: 30
    },
    { 
      icon: Twitter, 
      label: 'Twitter', 
      href: 'https://x.com/ayele_besufkad',
      color: 'from-sky-400 to-sky-600',
      bgColor: 'from-sky-400/20 to-sky-600/20',
      points: 30
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:ayebesufkad@gmail.com',
      color: 'from-red-500 to-red-700',
      bgColor: 'from-red-500/20 to-red-700/20',
      points: 35
    }
  ];

  return (
    <>
      <section ref={ref} className="section-padding bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-red-900/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Contact Portal
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-red-600 mx-auto rounded-full" />
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              Ready to start your next quest? Let's connect!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 dark:bg-card/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-200/50 dark:border-purple-500/30 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Player Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Portal
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Quest Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Describe your project or question..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={20} />
                  Launch Message
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.button>
              </form>

              {/* XP Counter for Contact Form */}
              <motion.div
                className="mt-6 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center justify-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                  <Star size={16} />
                  <span>Form interactions: +{interactionCount * 10} XP earned</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="bg-white/80 dark:bg-card/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-200/50 dark:border-purple-500/30 shadow-xl">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Direct Communication
                </h3>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">Addis Ababa, Ethiopia 🇪🇹</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Email</p>
                      <p className="text-gray-600 dark:text-gray-400">ayebesufkad@gmail.com</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links with Enhanced Motion */}
              <div className="bg-white/80 dark:bg-card/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-200/50 dark:border-purple-500/30 shadow-xl">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2">
                  Social Portals
                  <Trophy className="text-yellow-500" size={20} />
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleSocialClick(social.label, social.points)}
                        className={`group flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r ${social.bgColor} border border-gray-200/50 dark:border-gray-600/50 transition-all duration-300 relative overflow-hidden`}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                          rotateY: 5
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <IconComponent className={`text-xl bg-gradient-to-r ${social.color} bg-clip-text text-transparent`} size={24} />
                        </motion.div>
                        <div className="flex-1">
                          <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-purple-600 transition-colors">
                            {social.label}
                          </span>
                          <div className="text-xs text-purple-600 font-bold">+{social.points} XP</div>
                        </div>
                        
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Game Stats */}
              <motion.div
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-300/50 dark:border-purple-500/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-bold mb-3 text-center text-purple-600 dark:text-purple-400 flex items-center justify-center gap-2">
                  🎮 Contact Achievement
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="text-yellow-500" size={20} />
                  </motion.div>
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                  Complete all contact interactions to unlock the "Social Butterfly" achievement!
                </p>
                <div className="mt-3 text-center">
                  <span className="text-xs bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-purple-700 dark:text-purple-300">
                    Max XP Available: 345 points
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactSection;
