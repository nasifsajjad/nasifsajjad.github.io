import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

export const Hero: React.FC = () => {
  const fullText = "Architecting Digital Excellence.";
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    },
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-accent/20 rounded-full blur-[100px]" 
        />
        <motion.div 
           animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[40%] right-[0%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px]" 
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10 flex flex-col items-start md:items-center text-left md:text-center"
      >
        <motion.div className="min-h-[1.5em] md:min-h-[1.1em] mb-6">
            <h1 className="font-display font-bold text-5xl md:text-8xl lg:text-9xl tracking-tighter text-primary leading-[1.1]">
            {text}
            <span className="animate-blink text-accent">_</span>
            </h1>
        </motion.div>
        
        <motion.p 
          variants={itemVariants}
          className="font-sans text-secondary text-lg md:text-xl max-w-2xl mb-12"
        >
          I am Nasif Sajjad. I build high-performance websites and brands for businesses that refuse to compromise.
        </motion.p>

        <motion.div variants={itemVariants}>
          <MagneticButton 
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-primary font-sans font-medium hover:bg-white/10 transition-colors"
          >
            <span className="mr-2">View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary text-xs font-mono uppercase tracking-widest"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
};