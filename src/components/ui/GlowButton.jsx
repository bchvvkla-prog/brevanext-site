import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function GlowButton({ 
  children, 
  variant = 'primary', 
  size = 'default',
  href,
  onClick,
  className,
  icon: Icon
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#00c8ff] to-[#c724ff] text-white hover:shadow-[0_0_40px_rgba(0,200,255,0.5),0_0_60px_rgba(199,36,255,0.3)] hover:scale-105",
    secondary: "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:shadow-[0_0_30px_rgba(199,36,255,0.3)]",
    outline: "border-2 border-[#00c8ff] text-[#00c8ff] hover:bg-[#00c8ff]/10 hover:shadow-[0_0_30px_rgba(0,200,255,0.4)]"
  };

  const sizes = {
    small: "px-5 py-2 text-sm",
    default: "px-8 py-3.5 text-base",
    large: "px-10 py-4 text-lg"
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={cn(baseStyles, variants[variant], sizes[size], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {content}
    </button>
  );
}