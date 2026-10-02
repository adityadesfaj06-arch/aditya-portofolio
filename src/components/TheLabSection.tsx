import React, { useState, useEffect } from 'react';
import { LAB_NODES, DIGITAL_DESK } from '../data/portfolioData';
import { LabNode } from '../types/portfolio';
import { Sparkles, Terminal, Clock, Cpu, Compass, Wifi, Radio, Code2 } from 'lucide-react';

export const TheLabSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<LabNode>(LAB_NODES[2]); // Default Google AI Studio
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to WIB (GMT+7 Jakarta/Indonesia)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now) + ' WIB');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="lab" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-2">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs sm:text-sm text-[#5EE7F5] tracking-widest">
              04 /
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F4F4F0] tracking-tight">
              THE LAB
            </h2>
          </div>
          <p className="text-sm text-[#8B949E] font-normal max-w-xl">
            "Things I'm exploring." Area eksperimentasi dan sintesis teknologi masa depan tanpa metrik persentase artifisial.
          </p>
        </div>
        <span className="font-mono text-xs text-[#8B949E] tracking-widest uppercase">
          CONSTELLATION // EXPERIMENTAL NODES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Constellation Network Canvas (lg:col-span-7) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#090C10] border border-white/10 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
          
          {/* Constellation Canvas Grid */}
          <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

          {/* SVG Connecting Lines between nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0">
            <line x1="25%" y1="30%" x2="50%" y2="15%" stroke="#5EE7F5" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50%" y1="15%" x2="80%" y2="28%" stroke="#5EE7F5" strokeWidth="1.2" />
            <line x1="25%" y1="30%" x2="30%" y2="70%" stroke="#6C63FF" strokeWidth="1" />
            <line x1="80%" y1="28%" x2="85%" y2="50%" stroke="#5EE7F5" strokeWidth="1" />
            <line x1="85%" y1="50%" x2="70%" y2="65%" stroke="#6C63FF" strokeWidth="1" />
            <line x1="30%" y1="70%" x2="50%" y2="85%" stroke="#5EE7F5" strokeWidth="1" />
            <line x1="70%" y1="65%" x2="50%" y2="85%" stroke="#5EE7F5" strokeWidth="1" />
            <line x1="15%" y1="55%" x2="25%" y2="30%" stroke="#8B949E" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="15%" y1="55%" x2="30%" y2="70%" stroke="#8B949E" strokeWidth="1" strokeDasharray="3 3" />
          </svg>

          {/* Interactive Constellation Nodes Grid */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 py-6">
            {LAB_NODES.map((node) => {
              const isSelected = activeNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  onMouseEnter={() => setActiveNode(node)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#11161F] border-[#5EE7F5] shadow-lg shadow-[#5EE7F5]/10 scale-105'
                      : 'bg-[#11151A]/60 border-white/10 hover:border-white/25 hover:bg-[#11151A]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-2 h-2 rounded-full transition-colors" style={{
                      backgroundColor: isSelected ? '#5EE7F5' : '#8B949E'
                    }} />
                    <span className="text-[9px] font-mono text-white/40">{node.status}</span>
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm text-[#F4F4F0] tracking-tight">
                    {node.label}
                  </div>
                  <div className="text-[10px] font-mono text-[#8B949E] tracking-wider mt-1">
                    {node.category}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card Box */}
          <div className="relative z-10 p-5 rounded-xl bg-[#11151A]/90 border border-[#5EE7F5]/30 backdrop-blur-md space-y-2 mt-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#5EE7F5] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                EXPLORATION NOTE // {activeNode.label}
              </span>
              <span className="text-[#8B949E]">{activeNode.category}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F4F4F0] leading-relaxed">
              {activeNode.description}
            </p>
          </div>

        </div>

        {/* ADITYA'S DIGITAL DESK (lg:col-span-5) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#11151A] border border-white/10 space-y-6 relative overflow-hidden">
          
          {/* Desk Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#5EE7F5]" />
              <span className="text-[#F4F4F0] font-bold tracking-wider">ADITYA'S DIGITAL DESK</span>
            </div>
            <span className="text-[#5EE7F5] animate-pulse">LIVE</span>
          </div>

          {/* Mini Dashboard Panels */}
          <div className="space-y-4">
            
            {/* CURRENTLY EXPLORING */}
            <div className="p-4 rounded-xl bg-[#0B0D10] border border-white/5 space-y-1">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                CURRENTLY EXPLORING
              </span>
              <span className="font-display font-bold text-base text-[#5EE7F5]">
                {DIGITAL_DESK.exploring}
              </span>
            </div>

            {/* CURRENT FOCUS */}
            <div className="p-4 rounded-xl bg-[#0B0D10] border border-white/5 space-y-1">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                CURRENT FOCUS
              </span>
              <span className="font-display font-medium text-sm text-[#F4F4F0]">
                {DIGITAL_DESK.currentFocus}
              </span>
            </div>

            {/* MINDSET */}
            <div className="p-4 rounded-xl bg-[#0B0D10] border border-white/5 space-y-1">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                MINDSET
              </span>
              <div className="flex items-center gap-2 font-mono text-xs text-[#F4F4F0]">
                <span className="text-[#5EE7F5] font-semibold">Learn</span>
                <span>→</span>
                <span className="text-white font-semibold">Build</span>
                <span>→</span>
                <span className="text-[#6C63FF] font-semibold">Improve</span>
              </div>
            </div>

            {/* ACADEMIC / INSTITUTION */}
            <div className="p-4 rounded-xl bg-[#0B0D10] border border-white/5 space-y-1">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                EDUCATION &amp; BACKGROUND
              </span>
              <div className="font-display font-medium text-xs text-[#F4F4F0] flex flex-wrap items-center gap-1.5">
                <span>Politeknik Internasional Bali</span>
                <span className="text-[#5EE7F5]">/</span>
                <span className="text-[#5EE7F5] font-semibold">D4 Bisnis Digital</span>
                <span className="text-[#5EE7F5]">/</span>
                <span className="text-white/60">Semester 3</span>
              </div>
            </div>

            {/* STATUS */}
            <div className="p-4 rounded-xl bg-[#0B0D10] border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                  STATUS
                </span>
                <span className="font-display font-medium text-xs text-emerald-400">
                  {DIGITAL_DESK.status}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                  TIMEZONE
                </span>
                <span className="font-mono text-xs text-[#8B949E]">
                  {currentTime || 'JAKARTA (WIB)'}
                </span>
              </div>
            </div>

          </div>

          {/* Active Toolchain Chips (Unboxed text with separators) */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
              PRIMARY TOOLCHAIN
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8B949E]">
              {DIGITAL_DESK.toolchain.map((tool, idx) => (
                <React.Fragment key={tool}>
                  <span className="text-[#F4F4F0]">{tool}</span>
                  {idx < DIGITAL_DESK.toolchain.length - 1 && (
                    <span className="text-white/20">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
