import React from 'react';
import { PRICING_TABLE } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-bg">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="border-t border-white/10">
          {PRICING_TABLE.map((item, index) => (
            <div 
              key={index}
              className="group flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-white/10 hover:bg-white/[0.02] px-4 transition-colors"
            >
              <span className="font-sans text-lg text-secondary group-hover:text-primary transition-colors">
                {item.service}
              </span>
              
              {/* Dotted line for desktop */}
              <div className="hidden sm:block flex-grow mx-6 border-b border-dotted border-white/20 h-1 translate-y-1" />
              
              <span className="font-mono text-accent mt-2 sm:mt-0">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};