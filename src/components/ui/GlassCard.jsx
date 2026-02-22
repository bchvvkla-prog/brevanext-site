import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function GlassCard({ 
  children, 
  className, 
  hover = true,
  glow = 'cyan',
  delay = 0 
}) {
  const glowColors = {
    cyan: 'hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]',
    purple: 'hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]',
    blue: 'hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8",
        "transition-all duration-500",
        hover && "hover:bg-white/10 hover:border-white/20 hover:-translate-y-2",
        hover && glowColors[glow],
        className
      )}
    >
      {children}
    </motion.div>
  );
}