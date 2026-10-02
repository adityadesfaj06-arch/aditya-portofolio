import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/portfolioData';
import { CategoryType, TimelineItem } from '../types/portfolio';
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'ALL'>('ALL');
  const [activeItem, setActiveItem] = useState<TimelineItem>(TIMELINE_DATA[0]);

  const categories: (CategoryType | 'ALL')[] = [
    'ALL',
    'PROJECTS',
    'EXPERIMENTS',
    'LEARNING',
    'COLLABORATION',
    'EDUCATION'
  ];

  const filteredItems = selectedCategory === 'ALL'
    ? TIMELINE_DATA
    : TIMELINE_DATA.filter(item => item.category === selectedCategory);

  return (
    <section id="journey" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs sm:text-sm text-[#5EE7F5] tracking-widest">
              01 /
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F4F4F0] tracking-tight">
              THE JOURNEY
            </h2>
          </div>
          <p className="text-sm text-[#8B949E] font-normal max-w-lg">
            Rekam jejak eksplorasi proyek nyata, riset AI di Google AI Studio, dan pengembangan solusi digital berkelanjutan.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#11151A] rounded-lg border border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono tracking-wider rounded transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-[#0B0D10] font-semibold shadow-sm'
                  : 'text-[#8B949E] hover:text-[#F4F4F0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Horizontal Scrollable / Grid Timeline */}
      <div className="hidden lg:block relative">
        {/* Horizontal Guide Axis */}
        <div className="absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-[#5EE7F5]/40 via-white/20 to-transparent z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10 pt-4">
          {filteredItems.map((item) => {
            const isCurrent = activeItem.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                onMouseEnter={() => setActiveItem(item)}
                className={`group cursor-pointer text-left transition-all duration-300 p-5 rounded-xl border flex flex-col justify-between ${
                  isCurrent 
                    ? 'bg-[#11151A] border-[#5EE7F5]/50 shadow-xl -translate-y-1.5' 
                    : 'bg-[#11151A]/40 border-white/5 hover:border-white/20 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Year Marker & Node Indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-xs font-bold tracking-wider ${
                      isCurrent ? 'text-[#5EE7F5]' : 'text-[#8B949E]'
                    }`}>
                      {item.year}
                    </span>
                    <div className={`w-3 h-3 rounded-full border-2 transition-all ${
                      isCurrent 
                        ? 'bg-[#5EE7F5] border-white scale-125' 
                        : 'bg-[#0B0D10] border-[#8B949E] group-hover:border-[#5EE7F5]'
                    }`} />
                  </div>

                  {/* Category kicker */}
                  <div className="text-[10px] font-mono text-[#5EE7F5] tracking-widest mb-1 uppercase font-semibold">
                    {item.category}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-sm text-[#F4F4F0] leading-snug mb-1 group-hover:text-[#5EE7F5] transition-colors">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <div className="text-[11px] text-[#8B949E] font-medium mb-2.5 line-clamp-1">
                    {item.subtitle}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-[#8B949E] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 space-y-2.5">
                  {/* Direct Live App Link Button (if item has liveUrl) */}
                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-[#5EE7F5] hover:text-white transition-colors"
                    >
                      <span>Buka Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-[#8B949E]">
                    {item.tags.slice(0, 2).map((tag, tIdx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {tIdx < Math.min(item.tags.length, 2) - 1 && <span>·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="lg:hidden space-y-6 relative pl-6 border-l border-white/15">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="relative p-6 rounded-xl bg-[#11151A] border border-white/10 space-y-3"
          >
            {/* Timeline bullet on axis */}
            <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-[#5EE7F5] ring-4 ring-[#0B0D10]" />

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#5EE7F5] tracking-widest font-semibold">{item.category}</span>
              <span className="text-[#8B949E]">{item.year}</span>
            </div>

            <h3 className="font-display font-bold text-base text-[#F4F4F0] leading-snug">
              {item.title}
            </h3>

            <div className="text-xs text-[#8B949E] font-medium">
              {item.subtitle}
            </div>

            <p className="text-xs text-[#8B949E] leading-relaxed">
              {item.description}
            </p>

            {item.liveUrl && (
              <div className="pt-1">
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#5EE7F5]/10 border border-[#5EE7F5]/30 text-xs font-mono font-medium text-[#5EE7F5] hover:bg-[#5EE7F5]/20 transition-colors"
                >
                  <span>Buka Live App Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#8B949E]">
              {item.tags.map((tag, tIdx) => (
                <React.Fragment key={tag}>
                  <span>{tag}</span>
                  {tIdx < item.tags.length - 1 && <span>·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
