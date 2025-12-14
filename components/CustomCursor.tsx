import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Changed hidden md:block to hidden lg:block to hide on tablets as well
  return (
    <div className="hidden lg:block fixed top-0 left-0 w-full h-full pointer-events-none z-[10000]">
      <motion.div
        className="fixed top-0 left-0 bg-white mix-blend-difference rounded-full"
        animate={{
          x: position.x - (isHovered ? 24 : 6),
          y: position.y - (isHovered ? 24 : 6),
          width: isHovered ? 48 : 12,
          height: isHovered ? 48 : 12,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </div>
  );
};
