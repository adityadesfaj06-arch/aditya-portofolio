import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoaded: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // 1.1s display, 0.4s fade out
    const timer = setTimeout(() => {
      setFading(true);
    }, 1100);

    const finishTimer = setTimeout(() => {
      onLoaded();
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#0B0D10] flex flex-col justify-between p-8 sm:p-14 transition-opacity duration-400 ease-out select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between text-xs font-mono text-[#8B949E] tracking-widest">
        <span className="text-[#5EE7F5]">INITIALIZING STUDIO SPACE</span>
        <span>ID // 2026</span>
      </div>

      {/* Center Big Typography */}
      <div className="space-y-1 sm:space-y-2 font-display font-extrabold text-4xl sm:text-7xl lg:text-8xl tracking-tighter text-[#F4F4F0] leading-none">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          ADITYA
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-400 delay-100 text-white/80">
          DESFAJ
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200 text-white/60">
          ARIYA
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-600 delay-300 text-transparent bg-clip-text bg-gradient-to-r from-[#5EE7F5] to-[#6C63FF]">
          DHAMMA
        </div>
      </div>

      {/* Bottom Loading Bar & Year */}
      <div className="space-y-4">
        <div className="w-full h-[2px] bg-white/10 overflow-hidden rounded-full">
          <div className="h-full bg-gradient-to-r from-[#5EE7F5] to-[#6C63FF] w-full animate-in slide-in-from-left duration-1000" />
        </div>
        <div className="flex items-center justify-between text-xs font-mono text-[#8B949E]">
          <span>DIGITAL CREATOR &middot; PROBLEM SOLVER</span>
          <span className="text-[#F4F4F0] font-bold">2026</span>
        </div>
      </div>
    </div>
  );
};
