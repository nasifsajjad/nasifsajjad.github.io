import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

// Using the thumbnail endpoint with a large size (sz=w1000) is a more reliable way
// to embed Google Drive images than the export=view link.
const SLIDER_IMAGES = [
  'https://drive.google.com/thumbnail?id=1cUkGVv767B_4QQtRxLmNCN-aiNkohk7M&sz=w1000',
  'https://drive.google.com/thumbnail?id=1DAatwztqJ0VN25cF9uyzg7TD3QOIaebV&sz=w1000',
  'https://drive.google.com/thumbnail?id=1-1cR3XwtcGBbrN04cOqKzRX3ACpfhZlL&sz=w1000',
  'https://drive.google.com/thumbnail?id=1pvUMa4Q8gLeAZ2-ckPj4Xytiwn0JhY4p&sz=w1000',
  'https://drive.google.com/thumbnail?id=1TlmaRbG_rxhUoa6vEn_43shkgdczSW_P&sz=w1000',
  'https://drive.google.com/thumbnail?id=10oa6QR7uqIvUckr0qvbJc4V-nk3GsCx6&sz=w1000',
  'https://drive.google.com/thumbnail?id=1BaqYQW7QDyagxdX7AbAWZa_mQDJNaB5W&sz=w1000',
  'https://drive.google.com/thumbnail?id=1xnLAHy41jZ2aNAQJhkVx0zvn6HYQLPL7&sz=w1000',
  'https://drive.google.com/thumbnail?id=1dXnMvIZ80l45hWDjt7hS1AmIxaayCKx4&sz=w1000'
];

export const Portfolio: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="work" className="bg-bg py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-20 text-primary"
        >
          Selected Works
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col"
        >
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-t border-white/10 hover:bg-white/[0.02] transition-colors cursor-pointer px-4"
            >
              <div className="flex flex-col gap-2 z-10">
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent w-6 h-6 md:w-10 md:h-10" />
                </div>
                <p className="text-secondary max-w-xl group-hover:text-primary/80 transition-colors delay-75 mt-2">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 md:mt-0 z-10">
                 <span className="font-mono text-xs md:text-sm text-secondary uppercase tracking-widest border border-white/10 rounded-full px-4 py-2 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                    {project.category}
                  </span>
              </div>
            </motion.a>
          ))}
          {/* Bottom border for the last item */}
          <div className="w-full h-[1px] bg-white/10" />
        </motion.div>
      </div>

      {/* Graphic Design Slider */}
      <div className="w-full py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">Graphic Design Gallery</h3>
            <p className="text-secondary mt-2">A showcase of print media, branding assets, and visual compositions.</p>
        </div>
        
        <div className="relative flex overflow-hidden w-full">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
            
            <motion.div 
                className="flex gap-8 px-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                    duration: 30, 
                    ease: "linear", 
                    repeat: Infinity 
                }}
            >
                {[...SLIDER_IMAGES, ...SLIDER_IMAGES].map((src, index) => (
                    <div 
                        key={index} 
                        className="relative flex-shrink-0 w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-xl overflow-hidden bg-white/5 border border-white/10"
                    >
                        <img 
                            src={src} 
                            alt={`Graphic Design Sample ${index}`} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};
