"use client";
import React, { FC } from "react";
import GameCard from "./GameCard";
import { motion } from "framer-motion";

type Game = {
  teamA: string;
  teamB: string;
  date: string;
  prediction: string;
};

type SportSectionProps = {
  sport: string;
  games: Game[];
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const SportSection: FC<SportSectionProps> = ({ sport, games }) => {
  if (!games.length) return null;
  return (
    <motion.section 
      className="mb-16" 
      aria-label={`${sport} predictions`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-8 drop-shadow-md border-l-4 border-cyan-400 pl-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {sport}
      </motion.h2>
      
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {games.map((game, idx) => (
          <GameCard key={idx} sport={sport} {...game} custom={idx} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SportSection; 