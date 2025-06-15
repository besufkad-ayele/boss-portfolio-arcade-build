
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Show XP gained animation
      const xpNotification = document.createElement('div');
      xpNotification.innerHTML = '+100 XP - Message Sent! 🎉';
      xpNotification.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-neon-green to-neon-teal text-white px-6 py-3 rounded-lg font-bold text-lg z-50 animate-bounce';
      document.body.appendChild(xpNotification);
      setTimeout(() => document.body.removeChild(xpNotification), 3000);
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  const handleSocialClick = (socialName: string) => {
    const xpNotification = document.createElement('div');
    xpNotification.innerHTML = `+5 XP - ${socialName} Visited!`;
    xpNotification.className = 'fixed top-20 right-4 bg-gradient-to-r from-neon-purple to-neon-pink text-white px-4 py-2 rounded-lg font-bold text-sm z-50 animate-bounce';
    document.body.appendChild(xpNotification);
    setTimeout(() => document.body.removeChild(xpNotification), 2000);
  };

  const showXPNotification = () => {
    const notification = document.createElement('div');
    notification.innerHTML = '+20 XP - Contact Section Reached!';
    notification.className = 'fixed top-20 right-4 bg-gradient-to-r from-neon-green to-neon-teal text-white px-4 py-2 rounded-lg font-bold text-sm z-50 animate-bounce';
    document.body.appendChild(notification);
    setTimeout(() => document.body.removeChild(notification), 2000);
  };

  React.useEffect(() => {
    if (isInView) {
      showXPNotification();
    }
  }, [isInView]);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/boss-aye',
      icon: '💻',
      color: 'hover:text-gray-800 hover:bg-gray-100',
      description: 'View my code'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: '💼',
      color: 'hover:text-blue-600 hover:bg-blue-50',
      description: 'Professional network'
    },
    {
      name: 'Email',
      url: 'mailto:boss@example.com',
      icon: '📧',
      color: 'hover:text-red-600 hover:bg-red-50',
      description: 'Send me an email'
    },
    {
      name: 'Twitter',
      url: '#',
      icon: '🐦',
      color: 'hover:text-blue-400 hover:bg-blue-50',
      description: 'Follow my journey'
    }
  ];

  const quickContact = [
    { icon: '📍', label: 'Location', value: 'Addis Ababa, Ethiopia' },
    { icon: '🌐', label: 'Timezone', value: 'GMT+3 (EAT)' },
    { icon: '💬', label: 'Languages', value: 'English, Amharic' },
    { icon: '⚡', label: 'Response Time', value: '< 24 hours' }
  ];

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-dark-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
              Start a Quest Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ready to build something amazing? Let's connect and create magic! ✨
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Zoom instead of tilt */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark-secondary dark:to-dark-accent border-2 border-neon-teal/20 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <span className="mr-3">🎮</span>
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Player Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-primary text-foreground focus:border-neon-teal focus:outline-none transition-colors"
                    placeholder="Enter your name"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-primary text-foreground focus:border-neon-teal focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Quest Details *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-primary text-foreground focus:border-neon-teal focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project idea..."
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full game-button text-lg py-4 ${
                    submitted 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                      : isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : ''
                  }`}
                  whileHover={!isSubmitting && !submitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !submitted ? { scale: 0.98 } : {}}
                >
                  {submitted ? (
                    <>✅ Quest Request Sent!</>
                  ) : isSubmitting ? (
                    <>⏳ Sending Message...</>
                  ) : (
                    <>🚀 Launch Quest Request</>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Quick Contact Info */}
            <div className="skill-card">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <span className="mr-3">📋</span>
                Quick Info
              </h3>
              <div className="space-y-4">
                {quickContact.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-foreground">{item.label}</div>
                      <div className="text-gray-600 dark:text-gray-300">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links with XP notifications */}
            <div className="skill-card">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <span className="mr-3">🌐</span>
                Connect Online
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    onClick={() => handleSocialClick(social.name)}
                    className={`p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-center transition-all duration-300 group ${social.color}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-3xl mb-2 group-hover:animate-bounce">{social.icon}</div>
                    <div className="font-semibold text-foreground">{social.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{social.description}</div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              className="skill-card bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-700"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-4 h-4 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div>
                  <div className="font-bold text-green-700 dark:text-green-400">🟢 Available for Projects</div>
                  <div className="text-sm text-green-600 dark:text-green-300">Ready to take on new adventures!</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Fun Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          <p className="text-gray-600 dark:text-gray-300">
            Built with ❤️ and lots of ☕ by Boss | © 2024 Besufkad Ayele
          </p>
          <p className="text-sm text-neon-blue mt-2 font-game">
            {"<"} May your code compile and your bugs be few {"/>"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
