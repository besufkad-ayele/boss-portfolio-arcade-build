
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.classList.contains('cursor-pointer') ||
                           window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
          isPointer 
            ? 'border-neon-pink bg-neon-pink/20' 
            : 'border-neon-teal bg-neon-teal/20'
        }`} />
      </motion.div>

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
      >
        <div className={`w-10 h-10 rounded-full transition-all duration-300 ${
          isPointer 
            ? 'bg-neon-pink/10 border border-neon-pink/30' 
            : 'bg-neon-teal/10 border border-neon-teal/30'
        }`} />
      </motion.div>

      {/* Cursor particles */}
      {isPointer && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed top-0 left-0 pointer-events-none z-45"
              animate={{
                x: mousePosition.x - 2 + Math.cos(i * 72 * Math.PI / 180) * 15,
                y: mousePosition.y - 2 + Math.sin(i * 72 * Math.PI / 180) * 15,
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            >
              <div className="w-1 h-1 bg-neon-pink rounded-full" />
            </motion.div>
          ))}
        </>
      )}
    </>
  );
};

export default CustomCursor;
