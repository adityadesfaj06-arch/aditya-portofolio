import React, { useState } from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';
import { Sparkles, ArrowRight } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section id="philosophy" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-2">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs sm:text-sm text-[#5EE7F5] tracking-widest">
              05 /
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F4F4F0] tracking-tight">
              PHILOSOPHY
            </h2>
          </div>
          <p className="text-sm text-[#8B949E] font-normal max-w-lg">
            Prinsip pemikiran yang mengarahkan setiap keputusan teknis dan desain dalam berkarya.
          </p>
        </div>
        <span className="font-mono text-xs text-[#8B949E] tracking-widest uppercase">
          OPERATIONAL ETHOS // 3 LAWS
        </span>
      </div>

      {/* Oversized Interactive Typography Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PHILOSOPHY_PRINCIPLES.map((principle, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div
              key={principle.keyword}
              onMouseEnter={() => setHoveredIdx(idx)}
              className={`p-8 sm:p-10 rounded-2xl border transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[380px] relative overflow-hidden group ${
                isHovered
                  ? 'bg-[#11151A] border-[#5EE7F5]/50 shadow-2xl -translate-y-2'
                  : 'bg-[#11151A]/40 border-white/10 hover:border-white/20'
              }`}
            >
              {/* Subtle Ambient Backlight when hovered */}
              {isHovered && (
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#5EE7F5]/10 rounded-full blur-2xl pointer-events-none" />
              )}

              {/* Number & Hover Hint */}
              <div className="flex items-center justify-between text-xs font-mono mb-8 relative z-10">
                <span className={`font-bold tracking-widest ${
                  isHovered ? 'text-[#5EE7F5]' : 'text-white/40'
                }`}>
                  0{idx + 1}
                </span>
                <span className="text-[11px] text-[#8B949E] tracking-wider group-hover:text-[#5EE7F5] transition-colors">
                  {principle.hoverText}
                </span>
              </div>

              {/* Massive Typographic Pair */}
              <div className="space-y-1 relative z-10">
                <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F4F4F0] tracking-tighter leading-none group-hover:text-white transition-colors">
                  {principle.keyword}
                </div>
                <div className={`font-display font-extrabold text-2xl sm:text-3xl tracking-tight transition-colors ${
                  isHovered ? 'text-[#5EE7F5]' : 'text-[#8B949E]'
                }`}>
                  {principle.subword}.
                </div>
              </div>

              {/* Rich Narrative Explanation */}
              <div className="pt-8 border-t border-white/10 space-y-3 relative z-10">
                <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed">
                  {principle.description}
                </p>
                <div className="text-[11px] font-mono text-[#F4F4F0]/75 italic">
                  "{principle.manifesto}"
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
