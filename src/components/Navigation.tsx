import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'journey', label: '01 JOURNEY' },
    { id: 'think', label: '02 HOW I THINK' },
    { id: 'work', label: '03 WORK' },
    { id: 'lab', label: '04 LAB' },
    { id: 'philosophy', label: '05 PHILOSOPHY' },
    { id: 'contact', label: '06 CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#0B0D10]/85 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'py-5 bg-[#0B0D10]/40 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark (Single text element according to Top Bar Contract) */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="group flex items-center gap-2 text-left focus-visible:outline-none"
          >
            <span className="font-display font-bold tracking-tight text-base sm:text-lg text-[#F4F4F0] group-hover:text-[#5EE7F5] transition-colors">
              ADITYA
            </span>
            <span className="text-xs font-mono text-[#8B949E] tracking-wider">
              / 2026
            </span>
          </button>

          {/* Desktop Nav Items (Zero-Pill: Clean unboxed text with hover line) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#5EE7F5] font-medium'
                      : 'text-[#8B949E] hover:text-[#F4F4F0]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5EE7F5] rounded-full transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Let's Connect CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-[#0B0D10] bg-[#F4F4F0] hover:bg-[#5EE7F5] transition-all rounded duration-200"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 text-[#F4F4F0] hover:text-[#5EE7F5] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0D10]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-12 px-8 animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="text-xs font-mono text-[#8B949E] tracking-widest uppercase mb-4">
              INDEX // NAVIGATION
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`text-left text-lg font-display tracking-wide py-2 transition-colors flex items-center justify-between border-b border-white/5 ${
                      isActive ? 'text-[#5EE7F5]' : 'text-[#F4F4F0] hover:text-[#5EE7F5]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#5EE7F5]" />}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-3 font-mono text-xs text-[#8B949E]">
            <p className="text-[#F4F4F0] font-semibold">ADITYA DESFAJ ARIYA DHAMMA</p>
            <p>Digital Creator & Problem Solver · Indonesia</p>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full mt-2 py-3 text-center bg-[#5EE7F5] text-[#0B0D10] font-semibold rounded"
            >
              LET'S CONNECT →
            </button>
          </div>
        </div>
      )}
    </>
  );
};
