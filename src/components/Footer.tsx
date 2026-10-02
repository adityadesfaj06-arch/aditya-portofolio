import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 sm:px-8 border-t border-white/10 bg-[#07090C] text-xs font-mono text-[#8B949E]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Identity Lockup */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-display font-bold text-sm sm:text-base text-[#F4F4F0] tracking-tight">
            {PERSONAL_INFO.fullName}
          </div>
          <div className="text-[11px] text-[#5EE7F5] tracking-widest">
            DIGITAL CREATOR / PROBLEM SOLVER
          </div>
        </div>

        {/* Center: Statement */}
        <div className="text-center text-[11px] text-[#8B949E]">
          Designed &amp; built as a personal digital space. · © {PERSONAL_INFO.year}
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11151A] hover:bg-white/10 text-[#F4F4F0] hover:text-[#5EE7F5] border border-white/10 transition-colors cursor-pointer"
          title="Scroll to top"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
