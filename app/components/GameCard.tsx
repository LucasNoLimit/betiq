"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";

type GameCardProps = {
  sport: string;
  teamA: string;
  teamB: string;
  date: string;
  prediction: string;
  custom?: number;
};

const GameCard: FC<GameCardProps> = ({ sport, teamA, teamB, date, prediction, custom = 0 }) => {
  return (
    <motion.div
      className="bg-slate-800 rounded-xl shadow-xl p-5 mb-6 transition-all duration-300 ease-in-out transform hover:shadow-cyan-500/20 outline-none border border-slate-700 hover:border-cyan-500/70 relative overflow-hidden group"
      tabIndex={0}
      aria-label={`Game: ${teamA} vs ${teamB}, Prediction: ${prediction}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 0.5, 
          delay: custom * 0.1,
          ease: [0.22, 1, 0.36, 1]
        } 
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {/* Glow effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 pointer-events-none opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />

      <div className="flex items-center justify-between mb-3">
        <motion.span 
          className="text-xs uppercase tracking-wider font-semibold text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: custom * 0.1 + 0.2 }}
        >
          {sport}
        </motion.span>
        <span className="text-xs text-slate-400">{date}</span>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold text-slate-100 truncate" title={teamA}>{teamA}</span>
        <span className="text-sm text-slate-500 font-medium px-2">vs</span>
        <span className="text-lg font-bold text-slate-100 truncate text-right" title={teamB}>{teamB}</span>
      </div>
      
      <div className="mt-3 pt-3 border-t border-slate-700">
        <span className="block text-sm text-slate-400 mb-1">AI Prediction:</span>
        <motion.span 
          className="text-xl font-bold text-cyan-400 drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: custom * 0.1 + 0.4 }}
        >
          {prediction}
        </motion.span>
      </div>
    </motion.div>
  );
};

export default GameCard; 