import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { soundFX } from '../utils/sound';
import { 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Download,
  Code2,
  Palette,
  ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  onOpenResume: () => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  setTheme,
  soundEnabled,
  setSoundEnabled,
  onOpenResume,
  onOpenEstimator
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Selected Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Estimator', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundFX.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const themes: { id: ThemeMode; label: string; color: string }[] = [
    { id: 'dark-neon', label: 'Editorial Warm', color: 'bg-[#D23D1F]' },
    { id: 'dark-slate', label: 'Charcoal Noir', color: 'bg-[#1A1A1A]' },
    { id: 'emerald-glow', label: 'Vintage Forest', color: 'bg-[#1e3a2b]' },
    { id: 'light-minimal', label: 'Paper Clean', color: 'bg-[#FAF9F6]' },
  ];

  return (
    <header
      id="top-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#1A1A1A] shadow-sm'
          : 'py-5 bg-[#FAF9F6] border-b border-[#1A1A1A]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Editorial Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group"
          id="brand-logo"
        >
          <div className="w-9 h-9 border-2 border-[#1A1A1A] bg-[#1A1A1A] text-[#FAF9F6] flex items-center justify-center font-serif font-black text-lg group-hover:bg-[#D23D1F] group-hover:border-[#D23D1F] transition-colors">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-black text-xl text-[#1A1A1A] uppercase leading-none tracking-tight">
              SABA HAMEED
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/60 mt-0.5">
              AI Product Designer & Content Creator
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (Editorial Serif Italic) */}
        <nav className="hidden md:flex items-center gap-6 px-6 py-1.5 border-x border-[#1A1A1A]/20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-base font-serif italic text-[#1A1A1A] hover:text-[#D23D1F] hover:underline decoration-1 underline-offset-4 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              soundFX.enabled = next;
              soundFX.playPop();
            }}
            title={soundEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
            className="p-2 border border-[#1A1A1A] bg-[#FAF9F6] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-all"
            id="sound-toggle-btn"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-40" />}
          </button>

          {/* Theme Selector */}
          <div className="relative">
            <button
              onClick={() => {
                soundFX.playClick();
                setThemeDropdownOpen(!themeDropdownOpen);
              }}
              className="p-2 border border-[#1A1A1A] bg-[#FAF9F6] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-all flex items-center gap-1.5 text-xs font-mono"
              title="Change Theme Palette"
              id="theme-selector-btn"
            >
              <Palette className="w-4 h-4" />
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#FAF9F6] border-2 border-[#1A1A1A] p-2 shadow-xl z-50 flex flex-col gap-1 font-mono">
                <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/60 px-2 py-1 border-b border-[#1A1A1A]/10">
                  Palette Selection
                </span>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      soundFX.playPop();
                      setTheme(t.id);
                      setThemeDropdownOpen(false);
                    }}
                    className={`flex items-center justify-between w-full px-3 py-2 text-xs transition-all ${
                      theme === t.id
                        ? 'bg-[#1A1A1A] text-[#FAF9F6] font-bold'
                        : 'text-[#1A1A1A] hover:bg-[#F2EFED]'
                    }`}
                  >
                    <span>{t.label}</span>
                    <span className={`w-3 h-3 border border-[#1A1A1A] ${t.color}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Resume Button */}
          <button
            onClick={() => {
              soundFX.playPop();
              onOpenResume();
            }}
            className="px-3.5 py-2 border border-[#1A1A1A] bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-[#FAF9F6] text-xs font-mono uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5 transition-all"
            id="cv-resume-btn"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Cost Estimator CTA (Editorial Terracotta Accent Button) */}
          <button
            onClick={() => {
              soundFX.playPop();
              onOpenEstimator();
            }}
            className="px-4 py-2 bg-[#D23D1F] hover:bg-[#1A1A1A] text-white font-mono text-xs uppercase tracking-widest transition-all border border-[#1A1A1A] flex items-center gap-1"
            id="hire-me-cta-btn"
          >
            <span>Estimator</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              soundFX.playPop();
              onOpenEstimator();
            }}
            className="px-2.5 py-1.5 bg-[#D23D1F] text-white text-xs font-mono uppercase tracking-wider border border-[#1A1A1A]"
          >
            Estimate
          </button>
          <button
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 border border-[#1A1A1A] bg-[#FAF9F6] text-[#1A1A1A]"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b-2 border-[#1A1A1A] px-6 py-6 flex flex-col gap-4">
          <nav className="flex flex-col gap-3 font-serif italic text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-1 text-[#1A1A1A] hover:text-[#D23D1F] border-b border-[#1A1A1A]/10 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs not-italic">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#1A1A1A] flex flex-col gap-3 font-mono text-xs uppercase">
            <button
              onClick={() => {
                soundFX.playPop();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 border border-[#1A1A1A] bg-[#FAF9F6] text-[#1A1A1A] flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#D23D1F]" />
              <span>Download Resume (PDF)</span>
            </button>
            <button
              onClick={() => {
                soundFX.playPop();
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full py-3 bg-[#D23D1F] text-white border border-[#1A1A1A] flex items-center justify-center gap-2 font-bold"
            >
              <span>Project Cost Estimator →</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
