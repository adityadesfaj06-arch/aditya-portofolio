import React, { useState } from 'react';
import { THINK_STAGES } from '../data/portfolioData';
import { Eye, Compass, Layers, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';

export const HowIThinkSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const currentStage = THINK_STAGES[activeStageIndex];

  const getStageIcon = (iconName: string, active: boolean) => {
    const props = { className: `w-6 h-6 ${active ? 'text-[#5EE7F5]' : 'text-[#8B949E]'}` };
    switch (iconName) {
      case 'Eye':
        return <Eye {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'RefreshCw':
        return <RefreshCw {...props} />;
      default:
        return <Compass {...props} />;
    }
  };

  return (
    <section id="think" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-2">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs sm:text-sm text-[#5EE7F5] tracking-widest">
              02 /
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F4F4F0] tracking-tight">
              HOW I THINK
            </h2>
          </div>
          <p className="text-sm text-[#8B949E] font-normal max-w-lg">
            Bukan sekadar daftar perkakas teknis, melainkan arsitektur mental 4 tahap dalam menyelesaikan masalah dan mewujudkan ide menjadi solusi nyata.
          </p>
        </div>
        <span className="font-mono text-xs text-[#8B949E] tracking-widest uppercase">
          MENTAL MODEL // 4-STAGE FLOW
        </span>
      </div>

      {/* Interactive 4-Stage Stepper Track */}
      <div className="relative mb-12">
        {/* Animated Connecting Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
        <div 
          className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#5EE7F5] to-[#6C63FF] -translate-y-1/2 transition-all duration-500 z-0"
          style={{ width: `${(activeStageIndex / 3) * 100}%` }}
        />

        {/* 4 Interactive Node Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {THINK_STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStageIndex(idx)}
                onMouseEnter={() => setActiveStageIndex(idx)}
                className={`p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#11151A] border-[#5EE7F5] shadow-xl shadow-[#5EE7F5]/5 -translate-y-1'
                    : 'bg-[#11151A]/40 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs font-bold tracking-widest ${
                    isActive ? 'text-[#5EE7F5]' : 'text-[#8B949E]'
                  }`}>
                    {stage.step}
                  </span>
                  <div className={`p-2 rounded-lg transition-colors ${
                    isActive ? 'bg-[#5EE7F5]/10' : 'bg-white/[0.02]'
                  }`}>
                    {getStageIcon(stage.icon, isActive)}
                  </div>
                </div>

                <div className="font-display font-bold text-lg text-[#F4F4F0] tracking-tight">
                  {stage.title}
                </div>
                <div className="text-xs text-[#8B949E] line-clamp-1 mt-1 font-medium">
                  {stage.tagline}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stage Deep Dive Focus Panel */}
      <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#11151A] to-[#0E1217] border border-white/15 relative overflow-hidden transition-all duration-500">
        
        {/* Subtle Ambient Radial Backlight */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#5EE7F5]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Number, Title, Tagline & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono text-[#5EE7F5] tracking-widest">
              <span>STAGE {currentStage.step} OF 04</span>
              <span>—</span>
              <span className="text-white/60">SYSTEMATIC THINKING</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F4F4F0] tracking-tight">
                {currentStage.title}
              </h3>
              <p className="text-lg text-[#5EE7F5] font-medium font-display">
                "{currentStage.tagline}"
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed font-normal">
              {currentStage.description}
            </p>
          </div>

          {/* Right Column: Execution Checkpoints */}
          <div className="lg:col-span-5 p-6 rounded-xl bg-[#0B0D10]/80 border border-white/10 space-y-4">
            <div className="text-xs font-mono text-[#8B949E] tracking-widest uppercase">
              METRIC & PRINSIP EKSEKUSI
            </div>

            <div className="space-y-3">
              {currentStage.details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F4F4F0]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#5EE7F5] shrink-0 mt-0.5" />
                  <span className="leading-snug">{detail}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8B949E]">
              <span>NEXT PROGRESSION</span>
              <button
                onClick={() => setActiveStageIndex((activeStageIndex + 1) % THINK_STAGES.length)}
                className="inline-flex items-center gap-1 text-[#5EE7F5] hover:underline cursor-pointer"
              >
                <span>TAHAP BERIKUTNYA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
