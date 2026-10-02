import React, { useState, useEffect, useRef } from 'react';
import { Camera, Check, RefreshCw, UploadCloud, Sparkles } from 'lucide-react';

interface AdityaPortraitProps {
  className?: string;
  isEditorial?: boolean;
}

export const AdityaPortrait: React.FC<AdityaPortraitProps> = ({ className = '', isEditorial = true }) => {
  const [imgSrc, setImgSrc] = useState<string>('/aditya-photo.jpg.jpeg');
  const [loadError, setLoadError] = useState<boolean>(false);
  const [userUploadedSrc, setUserUploadedSrc] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check localStorage for any cached custom photo
  useEffect(() => {
    try {
      const saved = localStorage.getItem('aditya_custom_photo');
      if (saved) {
        setUserUploadedSrc(saved);
        setImgSrc(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleImageError = () => {
    // If aditya-photo.jpg.jpeg failed, fallback to the authentic SVG artwork
    if (imgSrc !== '/aditya-photo.svg') {
      setImgSrc('/aditya-photo.svg');
    } else {
      setLoadError(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          setUserUploadedSrc(base64);
          setImgSrc(base64);
          setLoadError(false);
          try {
            localStorage.setItem('aditya_custom_photo', base64);
          } catch {
            // storage limit
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem('aditya_custom_photo');
    } catch {
      // ignore
    }
    setUserUploadedSrc(null);
    setImgSrc('/aditya-photo.svg');
    setLoadError(false);
  };

  return (
    <div 
      className={`relative group select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Glow & Ambient Lighting */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#5EE7F5]/15 via-transparent to-[#6C63FF]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

      {/* Main Asymmetric Portrait Frame */}
      <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#11151A] shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
        
        {/* Top Technical Metadata Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0B0D10]/80 border-b border-white/10 backdrop-blur-md text-[11px] font-mono tracking-wider text-[#8B949E]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5EE7F5] animate-pulse" />
            <span className="text-[#F4F4F0] font-medium">ADITYA.IDENTITY // 2026</span>
          </div>
          <span className="text-[10px] text-white/50 tracking-widest hidden sm:inline">AUTHENTIC PROFILE</span>
        </div>

        {/* Visual Frame with Image Container */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0e1217]">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 z-10 pointer-events-none" />

          {/* Technical Corner Brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#5EE7F5] z-20 pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#5EE7F5] z-20 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#5EE7F5] z-20 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#5EE7F5] z-20 pointer-events-none" />

          {/* Image Display */}
          {!loadError ? (
            <img
              src={imgSrc}
              alt="Aditya Desfaj Ariya Dhamma - Digital Creator & Problem Solver"
              referrerPolicy="no-referrer"
              onError={handleImageError}
              className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[0.98] transition-all duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#11151A]">
              <div className="w-16 h-16 rounded-full bg-[#5EE7F5]/10 border border-[#5EE7F5]/30 flex items-center justify-center mb-4 text-[#5EE7F5]">
                <Camera className="w-8 h-8" />
              </div>
              <p className="font-display font-semibold text-lg text-[#F4F4F0] mb-1">Aditya Desfaj Ariya Dhamma</p>
              <p className="text-xs text-[#8B949E] font-mono mb-4">Portrait Identity · Indonesia</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 text-xs font-medium text-[#5EE7F5] bg-[#5EE7F5]/10 rounded border border-[#5EE7F5]/30 hover:bg-[#5EE7F5]/20 transition-colors"
              >
                Load Local Photo File
              </button>
            </div>
          )}

          {/* Vignette & Subtle Light Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-85 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/20 via-transparent to-[#5EE7F5]/5 z-10 pointer-events-none" />

          {/* In-Frame Status Badges (Bottom Left & Bottom Right) */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-end justify-between gap-2 pointer-events-none">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#5EE7F5] bg-[#0B0D10]/80 backdrop-blur px-2.5 py-1 rounded border border-[#5EE7F5]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5EE7F5]" />
                BASED IN INDONESIA
              </div>
              <div className="text-[10px] font-mono text-[#8B949E] tracking-wider block drop-shadow-md">
                AVAILABLE FOR COLLABORATION · 2026
              </div>
            </div>

            <div className="text-right hidden sm:block">
              <span className="text-[10px] font-mono text-white/50 tracking-tighter">
                6.2088° S · 106.8456° E
              </span>
            </div>
          </div>

          {/* Quick Photo Upload / Switch Floating Control (visible on hover) */}
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />
            <div className="flex items-center gap-1.5 bg-[#0B0D10]/90 backdrop-blur-md p-1 rounded-lg border border-white/20 shadow-xl">
              <button
                onClick={() => fileInputRef.current?.click()}
                title="Ganti / Muat Ulang File Foto Anda"
                className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-[#F4F4F0] hover:text-[#5EE7F5] hover:bg-white/5 rounded transition-colors"
              >
                <UploadCloud className="w-3.5 h-3.5" />
                <span>Upload Foto</span>
              </button>
              {userUploadedSrc && (
                <button
                  onClick={handleResetPhoto}
                  title="Reset ke Foto Asli Default"
                  className="p-1 text-white/60 hover:text-rose-400 hover:bg-white/5 rounded transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Technical Frame Detail */}
        <div className="px-4 py-2.5 bg-[#0e1217] border-t border-white/10 flex items-center justify-between text-[11px] text-[#8B949E] font-mono">
          <span>CREATOR ID: AD-2026</span>
          <span className="text-[#5EE7F5]">STUDIO VERIFIED</span>
        </div>
      </div>
    </div>
  );
};
