import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, ExternalLink, Sparkles, Terminal, Activity, Bot, Shield, Globe, Layers, Cpu, CheckCircle } from 'lucide-react';

export const SelectedWorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Render high-fidelity realistic UI Mockup for each project
  const renderProjectVisual = (project: ProjectItem) => {
    if (project.previewType === 'hospitality') {
      return (
        <div className="w-full h-full min-h-[360px] p-6 rounded-xl bg-gradient-to-br from-[#0D1117] to-[#161B22] border border-[#5EE7F5]/25 flex flex-col justify-between relative overflow-hidden font-mono select-none">
          {/* Subtle Grid Backing */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Window Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-[#8B949E] z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[#5EE7F5] font-semibold text-[11px]">HOSPI.CORE // GUEST INTELLIGENCE</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold tracking-wider">LATENCY: 1.2s</span>
          </div>

          {/* Simulated Guest Interaction Panel */}
          <div className="py-4 space-y-3 z-10">
            <div className="p-3.5 rounded-lg bg-[#0B0D10]/80 border border-white/5 space-y-1">
              <div className="text-[10px] text-[#8B949E]">GUEST [VILLA 04 · EN/FR]:</div>
              <div className="text-xs text-[#F4F4F0]">
                "Hello, could we arrange a late check-out tomorrow at 2 PM and airport transfer?"
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#5EE7F5]/10 border border-[#5EE7F5]/30 space-y-1.5 text-left">
              <div className="flex items-center justify-between text-[10px] text-[#5EE7F5]">
                <span className="font-bold flex items-center gap-1">
                  <Bot className="w-3 h-3" /> HOSPI AI CONCIERGE:
                </span>
                <span>AUTO-VALIDATED</span>
              </div>
              <div className="text-xs text-[#F4F4F0] leading-relaxed">
                "Confirmed! Your late check-out for Villa 04 is scheduled for 2:00 PM without additional fee. Airport transfer sedan dispatched for 2:30 PM. Room key updated."
              </div>
            </div>
          </div>

          {/* Operational Metrics Ticker */}
          <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs z-10">
            <div className="p-2 rounded bg-black/40">
              <span className="text-[10px] text-[#8B949E] block">GUEST SATISFACTION</span>
              <span className="text-[#5EE7F5] font-bold text-sm">99.4%</span>
            </div>
            <div className="p-2 rounded bg-black/40">
              <span className="text-[10px] text-[#8B949E] block">RESPONSE TIME</span>
              <span className="text-white font-bold text-sm">&lt; 2s</span>
            </div>
            <div className="p-2 rounded bg-black/40">
              <span className="text-[10px] text-[#8B949E] block">MULTILINGUAL</span>
              <span className="text-[#6C63FF] font-bold text-sm">28 LANGS</span>
            </div>
          </div>
        </div>
      );
    }

    if (project.previewType === 'healthtech') {
      return (
        <div className="w-full h-full min-h-[360px] p-6 rounded-xl bg-gradient-to-br from-[#0F141C] to-[#131722] border border-[#6C63FF]/30 flex flex-col justify-between relative overflow-hidden font-mono select-none">
          <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

          {/* App Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-[#8B949E] z-10">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#6C63FF]" />
              <span className="text-[#F4F4F0] font-semibold text-[11px]">TIM SEHAT // PREVENTIVE TRIAGE</span>
            </div>
            <span className="text-[10px] text-[#6C63FF] font-semibold">VERIFIED PROTOCOL</span>
          </div>

          {/* Interactive Card Breakdown */}
          <div className="py-4 space-y-3 z-10 text-left">
            <div className="p-4 rounded-lg bg-[#0B0D10]/90 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#8B949E]">SYMPTOM CHECKER ASSESSMENT</span>
                <span className="text-emerald-400 font-semibold">NON-EMERGENCY</span>
              </div>
              <div className="text-sm text-[#F4F4F0] font-display font-medium">
                Pola Hidrasi & Manajemen Kelelahan Kerja
              </div>
              <p className="text-xs text-[#8B949E] leading-relaxed">
                Rekomendasi terstruktur: Asupan cairan 2.5L/hari, jeda layar berkala, dan verifikasi tanda vital jika gejala berlanjut lebih dari 48 jam.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#6C63FF]/10 border border-[#6C63FF]/20 space-y-1">
                <span className="text-[10px] text-[#8B949E] block">LITERASI MEDIS</span>
                <span className="text-[#F4F4F0] font-medium text-xs">Panduan Bahasa Awam</span>
              </div>
              <div className="p-3 rounded-lg bg-[#5EE7F5]/10 border border-[#5EE7F5]/20 space-y-1">
                <span className="text-[10px] text-[#8B949E] block">PRIVASI PASIEN</span>
                <span className="text-[#5EE7F5] font-medium text-xs">Client-Side Enkripsi</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] font-mono border-t border-white/10">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                className="text-[#6C63FF] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>BUKA PROTOKOL &amp; DETAIL TIM SEHAT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-emerald-400 font-semibold">VERIFIED</span>
            </div>
          </div>

          {/* Safety Disclaimer Line */}
          <div className="pt-2 text-[10px] text-white/50 text-center z-10">
            * Selalu sertakan konsultasi dengan tenaga medis berwenang untuk diagnosa resmi.
          </div>
        </div>
      );
    }

    // Google AI Studio Rapid Prototyping
    return (
      <div className="w-full h-full p-6 sm:p-8 rounded-xl bg-[#090C10] border border-white/15 flex flex-col justify-between relative overflow-hidden font-mono text-left">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-[#8B949E]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#5EE7F5]" />
            <span className="text-[#F4F4F0] font-semibold text-[11px]">3 LIVE GOOGLE AI STUDIO APPLICATIONS</span>
          </div>
          <span className="text-[10px] text-[#5EE7F5] bg-[#5EE7F5]/10 px-2 py-0.5 rounded border border-[#5EE7F5]/30">
            PROVEN WORKFLOWS
          </span>
        </div>

        {/* 3 Live Apps Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5 text-xs">
          <div className="p-4 rounded-xl bg-[#11151A] border border-white/10 hover:border-[#5EE7F5]/40 transition-all flex flex-col justify-between space-y-3 group">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#5EE7F5] font-semibold">APP // 01</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="font-display font-bold text-sm text-[#F4F4F0] group-hover:text-[#5EE7F5] transition-colors">
                LinguaPulse
              </div>
              <p className="text-[11px] text-[#8B949E] leading-relaxed">
                Asisten kecerdasan bahasa terintegrasi dengan pemahaman konteks mendalam dan nuansa linguistik.
              </p>
            </div>
            <a
              href="https://aistudio.google.com/apps/88bfcfec-af37-4ad9-916b-e313c8a78af5?showPreview=true&showAssistant=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full p-2.5 rounded bg-white/5 hover:bg-[#5EE7F5] hover:text-[#0B0D10] text-[#5EE7F5] text-[11px] font-bold transition-all"
            >
              <span>Buka LinguaPulse</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-4 rounded-xl bg-[#11151A] border border-white/10 hover:border-[#6C63FF]/40 transition-all flex flex-col justify-between space-y-3 group">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#6C63FF] font-semibold">APP // 02</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="font-display font-bold text-sm text-[#F4F4F0] group-hover:text-[#6C63FF] transition-colors">
                KAWAN LOKAL
              </div>
              <p className="text-[11px] text-[#8B949E] leading-relaxed">
                Panduan wisata hiperlokal dan kurasi budaya berbasis penalaran multimodal interaktif.
              </p>
            </div>
            <a
              href="https://aistudio.google.com/apps/3d0d59f6-6615-49a6-bfc9-41fd33c2ff10?showPreview=true&showAssistant=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full p-2.5 rounded bg-white/5 hover:bg-[#6C63FF] hover:text-white text-[#6C63FF] text-[11px] font-bold transition-all"
            >
              <span>Buka KAWAN LOKAL</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-4 rounded-xl bg-[#11151A] border border-white/10 hover:border-[#5EE7F5]/40 transition-all flex flex-col justify-between space-y-3 group">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#5EE7F5] font-semibold">APP // 03</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="font-display font-bold text-sm text-[#F4F4F0] group-hover:text-[#5EE7F5] transition-colors">
                GitarAkustik Pro - Studio Gitar &amp; Chord Virtual
              </div>
              <p className="text-[11px] text-[#8B949E] leading-relaxed">
                Studio simulator gitar akustik interaktif, akord, dan tablatur virtual berlatensi ultra-rendah.
              </p>
            </div>
            <a
              href="https://aistudio.google.com/apps/c11885c5-3fb8-4605-bd00-915e3be09b8f?showPreview=true&showAssistant=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full p-2.5 rounded bg-white/5 hover:bg-[#5EE7F5] hover:text-[#0B0D10] text-[#5EE7F5] text-[11px] font-bold transition-all"
            >
              <span>Buka GitarAkustik Pro</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-[#8B949E]">
          <span>PLATFORM: GOOGLE AI STUDIO &middot; GEMINI SDK</span>
          <span className="text-[#5EE7F5]">SEMUA TAUTAN TERVERIFIKASI LIVE</span>
        </div>
      </div>
    );
  };

  return (
    <section id="work" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div className="space-y-2">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs sm:text-sm text-[#5EE7F5] tracking-widest">
              03 /
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F4F4F0] tracking-tight">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-sm text-[#8B949E] font-normal max-w-xl">
            Studi kasus kurasi berskala editorial. Eksplorasi mendalam perpaduan kecerdasan buatan, desain produk, dan rekayasa perangkat lunak.
          </p>
        </div>
        <span className="font-mono text-xs text-[#8B949E] tracking-widest uppercase">
          EDITORIAL CASE STUDIES // 2026
        </span>
      </div>

      {/* Large Editorial Projects Container with Asymmetric Alternating Layout */}
      <div className="space-y-24">
        {PROJECTS_DATA.map((project, idx) => {
          const isLeftMedia = project.layout === 'left-media';
          const isFullMedia = project.layout === 'full-media';

          return (
            <article 
              key={project.id}
              data-cursor-project="true"
              className="p-8 sm:p-12 rounded-2xl bg-[#11151A]/60 border border-white/10 hover:border-white/20 transition-all duration-500 relative group overflow-hidden"
            >
              {/* Top Meta Line: Number, Category & Role */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10 text-xs font-mono text-[#8B949E]">
                <div className="flex items-center gap-3">
                  <span className="text-[#5EE7F5] font-bold text-sm">PROJECT {project.number}</span>
                  <span>·</span>
                  <span className="text-[#F4F4F0]">{project.category}</span>
                </div>
                <div>
                  <span className="text-white/40">ROLE: </span>
                  <span className="text-[#F4F4F0]">{project.role}</span>
                </div>
              </div>

              {/* Layout Variations */}
              {isFullMedia ? (
                /* Full Media Layout (Project 3) */
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F4F4F0] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-[#5EE7F5] font-display font-medium">
                      {project.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed max-w-3xl pt-2">
                      {project.overview}
                    </p>
                  </div>

                  <div className="w-full">
                    {renderProjectVisual(project)}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8B949E]">
                      <span className="text-white/40">TOOLS:</span>
                      {project.tools.map((tool, tIdx) => (
                        <React.Fragment key={tool}>
                          <span className="text-[#F4F4F0]">{tool}</span>
                          {tIdx < project.tools.length - 1 && <span>·</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0B0D10] hover:bg-[#5EE7F5] text-xs font-mono font-bold tracking-wider rounded transition-colors cursor-pointer"
                      >
                        <span>VIEW CASE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#5EE7F5]/40 hover:border-[#5EE7F5] bg-[#5EE7F5]/10 hover:bg-[#5EE7F5]/20 text-[#5EE7F5] text-xs font-mono font-bold tracking-wider rounded transition-all"
                        >
                          <span>LIVE VIEW</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ) : isLeftMedia ? (
                /* Image Left / Text Right (Project 1: HOSPI AI) */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-6 w-full">
                    {renderProjectVisual(project)}
                  </div>

                  <div className="lg:col-span-6 space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F4F4F0] tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-base sm:text-lg text-[#5EE7F5] font-display font-medium">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed">
                      {project.overview}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
                        CORE ARCHITECTURE
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-[#F4F4F0]/85">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5EE7F5]" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8B949E]">
                        <span className="text-white/40">STACK:</span>
                        <span>{project.tools.slice(0, 3).join(' · ')}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0B0D10] hover:bg-[#5EE7F5] text-xs font-mono font-bold tracking-wider rounded transition-colors cursor-pointer"
                        >
                          <span>VIEW CASE</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#5EE7F5]/40 hover:border-[#5EE7F5] bg-[#5EE7F5]/10 hover:bg-[#5EE7F5]/20 text-[#5EE7F5] text-xs font-mono font-bold tracking-wider rounded transition-all"
                          >
                            <span>LIVE VIEW</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Text Left / Image Right (Project 2: TIM SEHAT) */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F4F4F0] tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-base sm:text-lg text-[#6C63FF] font-display font-medium">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed">
                      {project.overview}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
                        CORE ARCHITECTURE
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-[#F4F4F0]/85">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF]" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8B949E]">
                        <span className="text-white/40">STACK:</span>
                        <span>{project.tools.slice(0, 3).join(' · ')}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0B0D10] hover:bg-[#6C63FF] hover:text-white text-xs font-mono font-bold tracking-wider rounded transition-colors cursor-pointer"
                        >
                          <span>VIEW CASE</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#6C63FF]/40 hover:border-[#6C63FF] bg-[#6C63FF]/10 hover:bg-[#6C63FF]/20 text-[#6C63FF] hover:text-white text-xs font-mono font-bold tracking-wider rounded transition-all"
                          >
                            <span>LIVE VIEW</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 w-full order-1 lg:order-2">
                    {renderProjectVisual(project)}
                  </div>
                </div>
              )}

            </article>
          );
        })}
      </div>

      {/* Fullscreen Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};
