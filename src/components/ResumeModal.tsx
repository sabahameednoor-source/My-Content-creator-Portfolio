import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import { X, Download, Printer, Mail, MapPin, Globe, Briefcase, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    soundFX.playSuccess();
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handlePrint = () => {
    soundFX.playPop();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#FAF9F6] border-2 border-[#1A1A1A] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A] bg-[#F2EFED]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#D23D1F]" />
            <h3 className="text-xs font-bold text-[#1A1A1A] font-mono uppercase tracking-widest">
              Saba Hameed — Official Curriculum Vitae
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 border border-[#1A1A1A] bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] transition-colors"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 bg-[#D23D1F] hover:bg-[#1A1A1A] text-white font-mono uppercase tracking-wider font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Download PDF'}</span>
            </button>
            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-2 border border-[#1A1A1A] bg-[#FAF9F6] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Printable Body */}
        <div className="p-8 overflow-y-auto space-y-8 bg-[#FAF9F6] text-[#1A1A1A] font-sans text-xs">
          
          {/* Header Contact Block */}
          <div className="border-b border-[#1A1A1A]/20 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xs font-mono uppercase tracking-widest font-bold text-[#D23D1F] mt-1">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <div className="space-y-1 font-mono text-[#1A1A1A]/70 text-[11px] uppercase">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D23D1F]" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D23D1F]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#D23D1F]" />
                <span>sabahameed.com</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-[#D23D1F] uppercase font-mono tracking-widest border-b border-[#1A1A1A]/20 pb-1">
              Executive Summary
            </h2>
            <p className="text-[#1A1A1A]/90 font-serif leading-relaxed text-sm">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Core Technical Expertise */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-[#D23D1F] uppercase font-mono tracking-widest border-b border-[#1A1A1A]/20 pb-1">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-4 bg-[#F2EFED] border border-[#1A1A1A]/30">
                  <span className="font-serif font-bold text-[#1A1A1A] text-sm block mb-1">{cat.title}</span>
                  <span className="text-[11px] text-[#1A1A1A]/70 font-mono uppercase">
                    {cat.skills.map((s) => s.name).join(' • ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-[#D23D1F] uppercase font-mono tracking-widest border-b border-[#1A1A1A]/20 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Career Experience</span>
            </h2>
            
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-5 bg-[#FAF9F6] border border-[#1A1A1A] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-serif font-bold text-[#1A1A1A] text-base">{exp.role}</span>
                    <span className="font-mono text-[11px] font-bold text-[#D23D1F] uppercase">{exp.period}</span>
                  </div>
                  <div className="text-xs font-mono uppercase text-[#1A1A1A]/60">{exp.company} • {exp.location} ({exp.type})</div>
                  <ul className="space-y-1 pt-2 font-sans">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[#1A1A1A]/90">
                        <span className="text-[#D23D1F] font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-[#D23D1F] uppercase font-mono tracking-widest border-b border-[#1A1A1A]/20 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education & Certifications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 bg-[#F2EFED] border border-[#1A1A1A]/30">
                <span className="font-serif font-bold text-[#1A1A1A] text-sm block">Bachelor of Science in Interactive Media & Product Design</span>
                <span className="text-[11px] text-[#1A1A1A]/70 font-mono uppercase">Design & Technology Focus • Graduated 2021</span>
              </div>
              <div className="p-4 bg-[#F2EFED] border border-[#1A1A1A]/30">
                <span className="font-serif font-bold text-[#1A1A1A] text-sm block">AI Product Design & Generative UI Certification</span>
                <span className="text-[11px] text-[#1A1A1A]/70 font-mono uppercase">Advanced Prompt Engineering & UX Systems • 2022</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
