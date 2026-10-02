import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Instagram, ArrowUpRight, Copy, Check, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Collaboration Inquiry // Aditya Desfaj'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-2">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs sm:text-sm text-[#5EE7F5] tracking-widest">
              06 /
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F4F4F0] tracking-tight">
              LET'S CONNECT
            </h2>
          </div>
          <p className="text-sm text-[#8B949E] font-normal max-w-lg">
            Membuka pintu kolaborasi untuk eksplorasi AI, pengembangan produk digital, dan inovasi teknologi.
          </p>
        </div>
        <span className="font-mono text-xs text-[#8B949E] tracking-widest uppercase">
          COMMUNICATION DISPATCH // 2026
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Big Invitation & Direct Channels (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-4">
            <h3 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F4F4F0] tracking-tight leading-[1.05] text-balance">
              Have an idea? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EE7F5] to-[#6C63FF]">
                Let's build something meaningful.
              </span>
            </h3>
            <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed max-w-xl font-normal pt-2">
              Apakah Anda memiliki tantangan seputar otomatisasi AI, ide produk digital yang ingin diwujudkan, atau sekadar ingin bertukar wawasan seputar teknologi?
            </p>
          </div>

          {/* Direct Contact Buttons (Email, LinkedIn, Instagram) */}
          <div className="space-y-4 pt-4">
            
            {/* 1. Primary Email Row with Copy Button */}
            <div className="p-5 rounded-xl bg-[#11151A] border border-white/10 hover:border-[#5EE7F5]/40 transition-colors flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#5EE7F5]/10 text-[#5EE7F5]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#8B949E] block">DIRECT EMAIL</span>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm sm:text-base text-[#F4F4F0] hover:text-[#5EE7F5] font-semibold transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#F4F4F0] bg-white/5 hover:bg-white/10 rounded border border-white/10 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8B949E]" />
                      <span>COPY</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 text-[#0B0D10] bg-[#5EE7F5] hover:bg-white rounded transition-colors"
                  title="Open mail app"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* 2. Social Links: LinkedIn & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#11151A] border border-white/10 hover:border-[#5EE7F5]/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white/5 text-[#5EE7F5] group-hover:bg-[#5EE7F5]/10 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#8B949E] block">PROFESSIONAL</span>
                    <span className="font-display font-semibold text-sm text-[#F4F4F0] group-hover:text-[#5EE7F5] transition-colors">
                      LINKEDIN
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8B949E] group-hover:text-[#5EE7F5] transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#11151A] border border-white/10 hover:border-[#6C63FF]/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white/5 text-[#6C63FF] group-hover:bg-[#6C63FF]/10 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#8B949E] block">SOCIAL / VISUAL</span>
                    <span className="font-display font-semibold text-sm text-[#F4F4F0] group-hover:text-[#6C63FF] transition-colors">
                      INSTAGRAM
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8B949E] group-hover:text-[#6C63FF] transition-colors" />
              </a>
            </div>

          </div>

        </div>

        {/* Right Column: Quick Dispatch Form (lg:col-span-5) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#11151A] border border-white/10 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-[#8B949E]">
            <span className="text-[#5EE7F5] font-semibold">QUICK DISPATCH FORM</span>
            <span>SEND TO INBOX</span>
          </div>

          <form onSubmit={handleSendMail} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-[#8B949E] block">
                TOPIK / PROYEK
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Contoh: Eksplorasi Proyek AI / Diskusi Produk"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0D10] border border-white/10 text-xs text-[#F4F4F0] placeholder:text-[#8B949E]/50 focus:outline-none focus:border-[#5EE7F5] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-[#8B949E] block">
                PESAN SINGKAT
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Tuliskan gambaran ide, kebutuhan, atau pesan Anda..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0D10] border border-white/10 text-xs text-[#F4F4F0] placeholder:text-[#8B949E]/50 focus:outline-none focus:border-[#5EE7F5] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#F4F4F0] hover:bg-[#5EE7F5] text-[#0B0D10] font-mono font-bold text-xs tracking-wider rounded flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <span>KIRIM PESAN SEKARANG</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          <p className="text-[11px] font-mono text-[#8B949E]/70 text-center">
            Membuka klien email Anda secara otomatis dengan tujuan resmi ke {PERSONAL_INFO.email}
          </p>
        </div>

      </div>

    </section>
  );
};
