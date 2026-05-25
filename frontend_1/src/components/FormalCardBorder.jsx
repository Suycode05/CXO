import React from 'react';

const FormalCardBorder = ({ className = 'text-[#134e40]/20' }) => {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden select-none">
      {/* Outer thin border */}
      <div className="absolute inset-2 border border-slate-700/10 rounded-[inherit]"></div>
      {/* Inner double border */}
      <div className="absolute inset-3.5 border border-double border-slate-700/5 rounded-[inherit]"></div>
      
      {/* Ornamental Corner Flourishes */}
      {/* Top Left */}
      <svg className={`absolute top-2 left-2 w-8 h-8 ${className}`} viewBox="0 0 32 32" fill="none">
        <path d="M2,2 L2,24 C2,16 8,10 16,8 C10,8 8,10 8,16 C8,6 18,2 24,2 L2,2 Z" fill="currentColor" opacity="0.08" />
        <path d="M2,2 C10,2 14,6 14,14 C14,6 22,2 30,2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M2,2 C2,10 6,14 14,14 C6,14 2,22 2,30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      </svg>

      {/* Top Right */}
      <svg className={`absolute top-2 right-2 w-8 h-8 rotate-90 ${className}`} viewBox="0 0 32 32" fill="none">
        <path d="M2,2 L2,24 C2,16 8,10 16,8 C10,8 8,10 8,16 C8,6 18,2 24,2 L2,2 Z" fill="currentColor" opacity="0.08" />
        <path d="M2,2 C10,2 14,6 14,14 C14,6 22,2 30,2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M2,2 C2,10 6,14 14,14 C6,14 2,22 2,30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      </svg>

      {/* Bottom Left */}
      <svg className={`absolute bottom-2 left-2 w-8 h-8 -rotate-90 ${className}`} viewBox="0 0 32 32" fill="none">
        <path d="M2,2 L2,24 C2,16 8,10 16,8 C10,8 8,10 8,16 C8,6 18,2 24,2 L2,2 Z" fill="currentColor" opacity="0.08" />
        <path d="M2,2 C10,2 14,6 14,14 C14,6 22,2 30,2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M2,2 C2,10 6,14 14,14 C6,14 2,22 2,30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      </svg>

      {/* Bottom Right */}
      <svg className={`absolute bottom-2 right-2 w-8 h-8 rotate-180 ${className}`} viewBox="0 0 32 32" fill="none">
        <path d="M2,2 L2,24 C2,16 8,10 16,8 C10,8 8,10 8,16 C8,6 18,2 24,2 L2,2 Z" fill="currentColor" opacity="0.08" />
        <path d="M2,2 C10,2 14,6 14,14 C14,6 22,2 30,2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M2,2 C2,10 6,14 14,14 C6,14 2,22 2,30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
};

export default FormalCardBorder;
