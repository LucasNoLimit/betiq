"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for the floating items
const floatAnimation = (duration: number, delay: number) => ({
  initial: { y: 0, opacity: 0.5 },
  animate: {
    y: [0, -15, 0],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      repeatType: "reverse" as const, 
      ease: "easeInOut"
    }
  }
});

// Rotate animation for some shapes
const rotateAnimation = (duration: number, delay: number) => ({
  initial: { rotate: 0, opacity: 0.5 },
  animate: {
    rotate: 360,
    opacity: [0.5, 0.7, 0.5],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "linear"
    }
  }
});

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mesh gradient background - very subtle */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 to-transparent"></div>
      
      {/* Floating circle 1 */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 blur-xl"
        initial="initial"
        animate="animate"
        variants={floatAnimation(10, 0.5)}
      />
      
      {/* Floating circle 2 */}
      <motion.div
        className="absolute bottom-[20%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-r from-sky-500/10 to-cyan-500/10 blur-xl"
        initial="initial"
        animate="animate"
        variants={floatAnimation(12, 1.5)}
      />
      
      {/* Floating square - rotates */}
      <motion.div
        className="absolute top-[30%] left-[20%] w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-lg"
        initial="initial"
        animate="animate"
        variants={rotateAnimation(20, 0)}
      />
      
      {/* Vertical bars (like chart bars) - betting concept */}
      <div className="absolute bottom-[5%] right-[5%] flex space-x-1">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 rounded-full bg-gradient-to-t from-cyan-400/20 to-sky-400/5"
            style={{ height: `${(i + 3) * 12}px` }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: [0.2, 0.4, 0.2],
              transition: { 
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "mirror" as const
              }
            }}
          />
        ))}
      </div>
      
      {/* Horizontal dotted line (like a trend line) */}
      <div className="absolute top-[65%] left-[5%] w-[30%]">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/20"
            style={{ left: `${i * 10}%` }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.7, 0],
              transition: { 
                duration: 3,
                delay: i * 0.15,
                repeat: Infinity,
                repeatType: "loop" as const
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBackground; 