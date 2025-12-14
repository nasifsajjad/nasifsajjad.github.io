import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './ui/MagneticButton';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-32 bg-bg relative overflow-hidden">
      {/* Background Gradient */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-primary mb-12 tracking-tight"
        >
          Ready to start?
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <MagneticButton 
            className="px-10 py-5 bg-accent text-white rounded-full font-display font-medium text-lg hover:bg-accent/90 transition-colors shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]"
            onClick={() => window.location.href = 'mailto:sajjadbd.nasif@gmail.com'}
          >
            Get in Touch
          </MagneticButton>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-20">
            {[
                { icon: Mail, label: 'Email', link: 'mailto:sajjadbd.nasif@gmail.com' },
                { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/nasif-sajjad-a14067387/' },
                { icon: Github, label: 'GitHub', link: 'https://github.com/nasifsajjad' },
                { icon: MessageCircle, label: 'WhatsApp', link: 'https://wa.me/+97366388203' }
            ].map((item, index) => (
                <motion.a 
                    key={index}
                    href={item.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex flex-col items-center gap-4 group"
                >
                    <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                        <item.icon size={24} className="text-secondary group-hover:text-accent transition-colors" />
                    </div>
                    <span className="font-mono text-xs text-secondary uppercase tracking-widest group-hover:text-primary transition-colors">{item.label}</span>
                </motion.a>
            ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-secondary/40 font-mono text-xs"
        >
          © {new Date().getFullYear()} Nasif Sajjad. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};