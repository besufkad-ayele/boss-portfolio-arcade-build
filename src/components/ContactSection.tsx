
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from 'lucide-react';

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

  React.useEffect(() => {
    if (isInView) {
      onEarnPoints(50, 'Contact Portal Accessed!');
    }
  }, [isInView, onEarnPoints]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEarnPoints(100, 'Message Sent! Portal Communication Successful!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSocialClick = (platform: string) => {
    onEarnPoints(25, `${platform} Portal Accessed!`);
  };

  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/boss-aye',
      color: 'from-gray-500 to-gray-700',
      bgColor: 'from-gray-500/20 to-gray-700/20'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: '#',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'from-blue-500/20 to-blue-700/20'
    },
    { 
      icon: Twitter, 
      label: 'Twitter', 
      href: '#',
      color: 'from-sky-400 to-sky-600',
      bgColor: 'from-sky-400/20 to-sky-600/20'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:boss@example.com',
      color: 'from-red-500 to-red-700',
      bgColor: 'from-red-500/20 to-red-700/20'
    }
  ];

  return (
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
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Launch Message
              </motion.button>
            </form>
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">Addis Ababa, Ethiopia 🇪🇹</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">boss@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-200/50 dark:border-purple-500/30 shadow-xl">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Social Portals
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
                      onClick={() => handleSocialClick(social.label)}
                      className={`flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r ${social.bgColor} border border-gray-200/50 dark:border-gray-600/50 transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <IconComponent className={`text-xl bg-gradient-to-r ${social.color} bg-clip-text text-transparent`} size={24} />
                      <span className="font-medium text-gray-800 dark:text-gray-200">{social.label}</span>
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
            >
              <h3 className="text-lg font-bold mb-3 text-center text-purple-600 dark:text-purple-400">
                🎮 Contact Achievement
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                Complete all contact interactions to unlock the "Social Butterfly" achievement!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
