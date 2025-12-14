import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Layers, Monitor, PenTool, FileText, Server, CreditCard, Share2, UserCheck } from 'lucide-react';

const icons = [Layers, Monitor, PenTool, Server, FileText, Share2, PenTool, UserCheck];

export const Services: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="capabilities" className="py-32 bg-bg relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-20 text-primary"
        >
          Capabilities
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = icons[index % icons.length];
            // Featured items span 2 columns
            const isFeatured = service.featured || index === 0;
            const spanClass = isFeatured ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1';
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  relative p-8 rounded-3xl border border-white/10 bg-surface 
                  hover:border-accent/50 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300 group
                  flex flex-col justify-between
                  ${spanClass}
                `}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-full ${isFeatured ? 'bg-accent text-white' : 'bg-white/5 text-secondary group-hover:text-accent'} transition-colors`}>
                    <Icon size={isFeatured ? 32 : 24} />
                  </div>
                  {service.price && (
                    <span className="font-mono text-sm text-secondary bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                      {service.price}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className={`${isFeatured ? 'text-3xl' : 'text-xl'} font-display font-bold text-primary mb-3`}>
                    {service.title}
                  </h3>
                  <p className="text-secondary font-sans mb-6 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-accent/80 border border-accent/20 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {isFeatured && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};