import React, { useEffect, useRef, useState } from 'react';

export const InteractiveIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-28 px-6 sm:px-8 border-y border-white/10 bg-[#07090C] overflow-hidden"
    >
      {/* Background Subtle Magazine Linework */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Magazine Editorial Kicker */}
        <div className="flex items-center justify-between font-mono text-xs text-[#8B949E] tracking-widest border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#5EE7F5]">VOL. 2026</span>
            <span>·</span>
            <span>MANUAL OF THOUGHT</span>
          </div>
          <span className="text-white/40">EDITORIAL PROLOGUE</span>
        </div>

        {/* First Statement: "THIS IS NOT JUST A PORTFOLIO." */}
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="font-mono text-sm sm:text-base tracking-[0.25em] text-[#5EE7F5] uppercase mb-4">
            THIS IS NOT JUST A PORTFOLIO.
          </p>
        </div>

        {/* Second Kinetic Typographic Reveal */}
        <div className="space-y-3 font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-[#F4F4F0]">
          <div className={`transition-all duration-700 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            IT'S A RECORD OF HOW I{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EE7F5] to-white underline decoration-[#5EE7F5]/40 underline-offset-8">
              LEARN
            </span>
            ,
          </div>

          <div className={`transition-all duration-700 delay-400 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6C63FF] underline decoration-[#6C63FF]/40 underline-offset-8">
              BUILD
            </span>
            ,
          </div>

          <div className={`transition-all duration-700 delay-600 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EE7F5] via-[#6C63FF] to-white underline decoration-white/30 underline-offset-8">
              EXPERIMENT
            </span>
            ,
          </div>

          <div className={`transition-all duration-700 delay-800 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            AND{' '}
            <span className="text-[#5EE7F5]">
              GROW.
            </span>
          </div>
        </div>

        {/* Bottom Editorial Caption */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#8B949E] leading-relaxed font-normal border-t border-white/10">
          <p>
            Di balik setiap baris antarmuka dan instruksi model kecerdasan buatan, terdapat upaya berkelanjutan untuk menyederhanakan interaksi manusia dengan perangkat lunak yang fungsional.
          </p>
          <div className="flex items-center justify-between md:justify-end gap-6 font-mono text-xs text-[#8B949E]">
            <div>
              <span className="text-white/40 block">FOCUS</span>
              <span className="text-[#F4F4F0]">AI ARCHITECTURE</span>
            </div>
            <div className="w-[1px] h-6 bg-white/10" />
            <div>
              <span className="text-white/40 block">OUTPUT</span>
              <span className="text-[#5EE7F5]">TANGIBLE SOLUTIONS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
