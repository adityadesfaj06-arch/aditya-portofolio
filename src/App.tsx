/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { InteractiveIntro } from './components/InteractiveIntro';
import { JourneySection } from './components/JourneySection';
import { HowIThinkSection } from './components/HowIThinkSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { TheLabSection } from './components/TheLabSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sectionIds = ['hero', 'journey', 'think', 'work', 'lab', 'philosophy', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0D10] text-[#F4F4F0] antialiased selection:bg-[#5EE7F5]/20 selection:text-[#5EE7F5]">
      
      {/* Short 1.2s Typographic Loading Experience */}
      {loading && <LoadingScreen onLoaded={() => setLoading(false)} />}

      {/* Minimal Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Blurred Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        <InteractiveIntro />
        <JourneySection />
        <HowIThinkSection />
        <SelectedWorkSection />
        <TheLabSection />
        <PhilosophySection />
        <ContactSection />
      </main>

      {/* Minimalist Studio Footer */}
      <Footer />
    </div>
  );
}
