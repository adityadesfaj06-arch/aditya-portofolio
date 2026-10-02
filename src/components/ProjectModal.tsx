import React, { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, ArrowRight, ExternalLink, CheckCircle, ShieldCheck, Terminal, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#11151A] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0B0D10]/90 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3 font-mono text-xs text-[#8B949E]">
            <span className="text-[#5EE7F5] font-semibold">CASE STUDY // {project.number}</span>
            <span>·</span>
            <span>{project.category}</span>
          </div>
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#5EE7F5] text-[#0B0D10] text-xs font-mono font-bold hover:bg-white transition-colors"
              >
                <span>LIVE VIEW</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-[#8B949E] hover:text-[#F4F4F0] hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-10 space-y-10 overflow-y-auto">
          
          {/* Header Title & Tagline */}
          <div className="space-y-3">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F4F4F0] tracking-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#5EE7F5] font-medium font-display">
              {project.tagline}
            </p>
          </div>

          {/* Quick Metadata Bar (Role, Category, Tools) - Zero Pill Text */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-5 rounded-xl bg-[#0B0D10] border border-white/10 font-mono text-xs">
            <div>
              <span className="text-white/40 block mb-1">ROLE</span>
              <span className="text-[#F4F4F0] font-medium">{project.role}</span>
            </div>
            <div>
              <span className="text-white/40 block mb-1">CATEGORY</span>
              <span className="text-[#F4F4F0] font-medium">{project.category}</span>
            </div>
            <div>
              <span className="text-white/40 block mb-1">CORE TOOLS</span>
              <span className="text-[#5EE7F5] font-medium">{project.tools.join(' · ')}</span>
            </div>
          </div>

          {/* 1. OVERVIEW */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-[#5EE7F5] tracking-widest uppercase">
              01 // OVERVIEW
            </div>
            <p className="text-sm sm:text-base text-[#F4F4F0]/90 leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          {/* 2. THE PROBLEM */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-rose-400 tracking-widest uppercase">
              02 // THE PROBLEM
            </div>
            <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* 3. APPROACH & ARCHITECTURE */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-[#5EE7F5] tracking-widest uppercase">
              03 // APPROACH & ARCHITECTURE
            </div>
            <p className="text-sm sm:text-base text-[#F4F4F0]/90 leading-relaxed">
              {project.approach}
            </p>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0B0D10]/50 border border-white/5 text-xs text-[#8B949E]">
                  <CheckCircle className="w-4 h-4 text-[#5EE7F5] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. RESULT & OUTPUT */}
          <div className="space-y-3 p-6 rounded-xl bg-gradient-to-br from-[#11151A] to-[#0A0D12] border border-[#5EE7F5]/20">
            <div className="font-mono text-xs text-[#5EE7F5] tracking-widest uppercase">
              04 // RESULT & SYSTEM OUTPUT
            </div>
            <p className="text-sm sm:text-base text-[#F4F4F0] leading-relaxed">
              {project.result}
            </p>
          </div>

          {/* 5. LIVE APPLICATION ACCESS (IF AVAILABLE) */}
          {project.studioLinks && project.studioLinks.length > 0 ? (
            <div className="space-y-4 p-6 rounded-xl bg-[#0B0D10] border border-white/10">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#5EE7F5] font-semibold tracking-wider">
                  LIVE DEPLOYED GOOGLE AI STUDIO APPLICATIONS ({project.studioLinks.length})
                </span>
                <span className="text-[#8B949E]">PUBLIC PREVIEW</span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {project.studioLinks.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-lg bg-[#11151A] hover:bg-[#161C24] border border-white/10 hover:border-[#5EE7F5]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div>
                      <div className="font-display font-semibold text-sm text-[#F4F4F0] group-hover:text-[#5EE7F5] transition-colors flex items-center gap-2">
                        <span>{link.name}</span>
                      </div>
                      <div className="text-xs text-[#8B949E] font-mono mt-0.5">
                        {link.note}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#5EE7F5] text-[#0B0D10] text-xs font-mono font-bold group-hover:bg-white transition-colors shrink-0">
                      <span>Buka Aplikasi</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : project.liveUrl ? (
            <div className="p-6 rounded-xl bg-[#0B0D10] border border-[#5EE7F5]/30 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#5EE7F5] font-semibold tracking-wider">
                  LIVE APPLICATION ACCESS // INTERACTIVE DEMO
                </span>
                <span className="text-emerald-400 font-semibold">DEPLOYED LIVE</span>
              </div>
              <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed">
                Aplikasi ini telah dideploy dan dapat diakses publik secara interaktif dengan alur penalaran AI dan performa berkecepatan tinggi.
              </p>
              <div className="pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#5EE7F5] hover:bg-white text-[#0B0D10] text-xs font-mono font-bold transition-all"
                >
                  <span>BUKA LIVE APPLICATION SEKARANG</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : null}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0B0D10] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#8B949E] shrink-0">
          <span>PROJECT ARCHIVE // ADITYA DESFAJ</span>
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#5EE7F5] hover:bg-white text-[#0B0D10] font-bold transition-colors"
              >
                <span>BUKA LIVE APP</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-[#F4F4F0] rounded font-medium transition-colors cursor-pointer"
            >
              TUTUP DETAIL
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
