"use client";
import React from "react";
import SportSection from "./components/SportSection";
import { footballGames, tennisGames, basketballGames } from "./data/games";
import { motion } from "framer-motion";
import HeroBackground from "./components/HeroBackground";

const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + custom * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const statsData = [
  { label: "Accuracy", value: "94%", description: "Prediction success rate" },
  { label: "Sports", value: "3", description: "Football, Tennis, Basketball" },
  { label: "Daily Picks", value: "25+", description: "New predictions daily" }
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] py-20 md:py-24 flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <HeroBackground />
        
        <div className="relative z-10 container mx-auto text-center px-4">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-100 drop-shadow-xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 animate-pulse-slow">
              BetIQ
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.2, 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            Your <span className="text-cyan-300 font-semibold">AI-powered edge</span> in sports betting. <br /> 
            Get insights for <span className="font-semibold text-slate-100">Football</span>, <span className="font-semibold text-slate-100">Tennis</span>, and <span className="font-semibold text-slate-100">Basketball</span>.
            <br />Bet smarter, not harder.
          </motion.p>
          
          {/* Stats section */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            variants={statsVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            {statsData.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-cyan-500/20 flex flex-col items-center min-w-[160px]"
                variants={statsVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" 
                }}
              >
                <span className="text-4xl font-bold text-cyan-400 mb-1">{stat.value}</span>
                <span className="text-lg font-semibold text-slate-200">{stat.label}</span>
                <span className="text-xs text-slate-400">{stat.description}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow BetIQ on Twitter" 
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-lg shadow-xl transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.6 1.67 4.98c-.386.664-.608 1.437-.608 2.26 0 1.56.794 2.94 2.003 3.75-.737-.023-1.43-.226-2.037-.563v.057c0 2.18 1.55 4 3.61 4.42-.377.104-.775.16-1.185.16-.29 0-.568-.028-.84-.08.57 1.77 2.22 3.06 4.18 3.09A8.98 8.98 0 0 1 2 19.54c-.65 0-1.29-.038-1.92-.112A12.7 12.7 0 0 0 7.29 21.5c8.29 0 12.83-6.87 12.83-12.83 0-.196-.004-.392-.013-.586A9.22 9.22 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.698z"/>
              </svg>
              Follow on Twitter
            </motion.a>
            
            <motion.a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="BetIQ on GitHub" 
              className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-100 font-bold px-8 py-4 rounded-lg shadow-xl transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
              </svg>
              View on GitHub
            </motion.a>
          </motion.div>
          
          {/* Scroll indicator - now positioned after the buttons */}
          <motion.div
            className="mt-4 mb-4 z-10 relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1,
              duration: 1
            }}
          >
            <motion.div 
              className="w-8 h-12 rounded-full border-2 border-cyan-500/50 flex items-center justify-center mx-auto"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <motion.div 
                className="w-1.5 h-3 bg-cyan-500 rounded-full"
                animate={{ 
                  y: [0, 4, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <span className="block text-xs text-cyan-400 mt-2 text-center">Scroll</span>
          </motion.div>
        </div>
      </section>

      {/* Sport Sections */}
      <div className="container mx-auto px-4 py-8">
        <SportSection sport="Football" games={footballGames} />
        <SportSection sport="Tennis" games={tennisGames} />
        <SportSection sport="Basketball" games={basketballGames} />
      </div>
    </>
  );
};

export default Home;
