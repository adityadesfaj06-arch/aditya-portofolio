import React from 'react';
import { ArrowDownRight, Compass, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AdityaPortrait } from './AdityaPortrait';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#5EE7F5]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#6C63FF]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Asymmetric 2-Column Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Oversized Typography & Editorial Identity (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-8 z-10">
          
          {/* Micro Labels & Status Indicator */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 text-xs font-mono text-[#5EE7F5] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#5EE7F5] animate-ping" />
              <span>PERSONAL DIGITAL STUDIO // 2026</span>
            </div>

            {/* Labels unboxed with subtle typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-[#8B949E] tracking-wider">
              {PERSONAL_INFO.roleTitles.map((role, idx) => (
                <React.Fragment key={role}>
                  <span className="text-[#F4F4F0] font-medium">{role}</span>
                  {idx < PERSONAL_INFO.roleTitles.length - 1 && (
                    <span className="text-[#5EE7F5]" aria-hidden="true">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Academic Credential Line requested by user */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-[#8B949E]">
              <span className="text-[#F4F4F0] font-medium">Mahasiswa Politeknik Internasional Bali</span>
              <span className="text-[#5EE7F5]">/</span>
              <span className="text-[#5EE7F5] font-semibold">D4 Bisnis Digital</span>
              <span className="text-[#5EE7F5]">/</span>
              <span className="text-white/80">Semester 3</span>
            </div>
          </div>

          {/* Oversized Headline */}
          <div className="space-y-4">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tighter leading-[0.98] text-[#F4F4F0] text-balance">
              ADITYA <br />
              <span className="text-white/80">DESFAJ</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F4F0] via-[#5EE7F5] to-[#6C63FF]">
                ARIYA DHAMMA
              </span>
            </h1>

            {/* Primary Tagline */}
            <p className="text-xl sm:text-2xl text-[#8B949E] font-normal leading-relaxed max-w-xl text-balance pt-2">
              "{PERSONAL_INFO.mainTagline}"
            </p>
          </div>

          {/* Short Narrative Snapshot & Interactive CTAs */}
          <div className="pt-2 space-y-6">
            <p className="text-sm text-[#8B949E] leading-relaxed max-w-lg font-normal">
              Ruang digital personal yang merangkum eksplorasi kecerdasan buatan, arsitektur produk digital, pola pikir pemecahan masalah, dan dedikasi dalam membangun karya yang bermakna.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('work')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#F4F4F0] hover:bg-[#5EE7F5] text-[#0B0D10] text-xs font-mono font-bold tracking-wider rounded transition-all duration-300 shadow-lg cursor-pointer"
              >
                <span>EXPLORE WORK</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={() => onNavigate('think')}
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-white/20 hover:border-[#5EE7F5] bg-white/[0.02] hover:bg-white/[0.06] text-[#F4F4F0] hover:text-[#5EE7F5] text-xs font-mono tracking-wider rounded transition-all duration-300 cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5 text-[#5EE7F5]" />
                <span>HOW I THINK</span>
              </button>
            </div>
          </div>

          {/* Quick Real-Time Desk Stat Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-[#8B949E]">
            <div>
              <span className="block text-[10px] text-white/40 uppercase">STATUS</span>
              <span className="text-[#5EE7F5] font-medium">OPEN FOR COLLABORATION</span>
            </div>
            <div className="hidden sm:block w-[1px] h-6 bg-white/10" />
            <div>
              <span className="block text-[10px] text-white/40 uppercase">LOCATION</span>
              <span className="text-[#F4F4F0]">INDONESIA (GMT+7)</span>
            </div>
            <div className="hidden sm:block w-[1px] h-6 bg-white/10" />
            <div>
              <span className="block text-[10px] text-white/40 uppercase">EDUCATION</span>
              <span className="text-[#F4F4F0] font-medium">PIB · D4 BISNIS DIGITAL (SEM 3)</span>
            </div>
            <div className="hidden sm:block w-[1px] h-6 bg-white/10" />
            <div>
              <span className="block text-[10px] text-white/40 uppercase">DOMAIN FOCUS</span>
              <span className="text-[#F4F4F0]">AI &amp; DIGITAL PRODUCTS</span>
            </div>
          </div>

        </div>

        {/* Right Column: Authentic Large Asymmetric Portrait Frame (lg:col-span-5) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-none">
            <AdityaPortrait className="w-full" />
          </div>
        </div>

      </div>
    </section>
  );
};
