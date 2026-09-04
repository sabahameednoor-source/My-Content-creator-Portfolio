import React, { useState } from 'react';
import { ThemeMode, EstimatorState } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesEstimator } from './components/ServicesEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { AIChatBot } from './components/AIChatBot';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark-neon');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [prefilledEstimate, setPrefilledEstimate] = useState<EstimatorState | null>(null);

  const handleOpenEstimator = () => {
    const el = document.querySelector('#services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendEstimateToContact = (estimateData: EstimatorState) => {
    setPrefilledEstimate(estimateData);
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dynamic Theme Class mapping
  const getThemeClass = () => {
    switch (theme) {
      case 'dark-slate':
        return 'bg-slate-950 text-slate-100 selection:bg-slate-700 selection:text-white';
      case 'emerald-glow':
        return 'bg-[#041410] text-emerald-50 selection:bg-emerald-500 selection:text-slate-950';
      case 'light-minimal':
        return 'bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950'; // Styled dark slate canvas with high contrast
      case 'dark-neon':
      default:
        return 'bg-[#090d16] text-slate-100 selection:bg-cyan-500 selection:text-slate-950';
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${getThemeClass()}`}>
      
      {/* Fixed Top Navbar */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenResume={() => setResumeOpen(true)}
        onOpenEstimator={handleOpenEstimator}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenEstimator={handleOpenEstimator}
          onOpenResume={() => setResumeOpen(true)}
        />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ServicesEstimator
          onSendEstimateToContact={handleSendEstimateToContact}
        />
        <TestimonialsSection />
        <ContactSection prefilledEstimate={prefilledEstimate} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Concierge Assistant */}
      <AIChatBot />

      {/* Resume Document Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

    </div>
  );
}
