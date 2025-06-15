
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="py-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container-custom">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Built with</span>
            <Heart className="text-red-500" size={16} />
            <span>and</span>
            <Code className="text-blue-500" size={16} />
            <span>by First_name Last_name</span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500">
            © 2024 Boss.dev - Turning ideas into interactive experiences
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
