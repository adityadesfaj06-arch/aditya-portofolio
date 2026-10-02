import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'project'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Determine element under cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor-project="true"]');
      if (projectEl) {
        setCursorType('project');
        return;
      }

      const interactive = target.closest('a, button, input, textarea, [role="button"]');
      if (interactive) {
        setCursorType('hover');
        return;
      }

      setCursorType('default');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      {cursorType === 'default' && (
        <div className="w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5EE7F5] shadow-[0_0_10px_rgba(94,231,245,0.8)]" />
      )}

      {cursorType === 'hover' && (
        <div className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5EE7F5] bg-[#5EE7F5]/15 backdrop-blur-[2px] transition-all duration-150" />
      )}

      {cursorType === 'project' && (
        <div className="px-3 py-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5EE7F5] text-[#0B0D10] font-mono text-[10px] font-bold tracking-widest whitespace-nowrap shadow-xl flex items-center gap-1">
          <span>VIEW PROJECT →</span>
        </div>
      )}
    </div>
  );
};
