
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface XPNotificationProps {
  message: string;
  points: number;
  isVisible: boolean;
  onHide: () => void;
}

const XPNotification: React.FC<XPNotificationProps> = ({ message, points, isVisible, onHide }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          className="fixed top-20 right-4 z-50 bg-gradient-to-r from-neon-green to-neon-teal text-white px-6 py-3 rounded-lg shadow-xl border border-neon-teal/50 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="font-bold text-sm">+{points} XP</div>
              <div className="text-xs opacity-90">{message}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default XPNotification;
