import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFX.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#1A1A1A] py-12 relative text-[#1A1A1A] text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#1A1A1A]/20">
          
          {/* Brand info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#F2EFED] border border-[#1A1A1A] flex items-center justify-center text-[#D23D1F]">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xl font-serif font-bold text-[#1A1A1A] tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-[#1A1A1A]/70 text-xs max-w-md font-sans">
              AI Product Designer & Content Creator specializing in generative UI/UX design, prompt engineering, multi-modal design systems, and visual storytelling.
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#FAF9F6] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#1A1A1A] transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#FAF9F6] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#1A1A1A] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 bg-[#FAF9F6] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#1A1A1A] transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-[#D23D1F] text-white hover:bg-[#1A1A1A] font-mono uppercase font-bold text-xs tracking-wider transition-colors flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#1A1A1A]/60 text-[10px] font-mono uppercase tracking-widest">
          <span>
            © {new Date().getFullYear()} Saba Hameed. All rights reserved.
          </span>

          <span className="flex items-center gap-1">
            Editorial Edition • Built with React 19, TypeScript & Tailwind CSS
          </span>
        </div>

      </div>
    </footer>
  );
};
