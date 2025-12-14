import React from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 bg-bg/70 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className="font-display font-bold text-xl text-primary tracking-tight hover:text-accent transition-colors"
        >
          Nasif Sajjad<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['Capabilities', 'Work', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="font-sans text-sm text-secondary hover:text-primary transition-colors uppercase tracking-wider"
            >
              {item}
            </button>
          ))}
        </nav>
        
        <button 
             onClick={() => scrollToSection('contact')}
             className="md:hidden text-primary font-display font-medium"
        >
            Menu
        </button>
      </div>
    </motion.header>
  );
};