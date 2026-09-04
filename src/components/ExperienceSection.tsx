import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import { Calendar, MapPin, ChevronRight, CheckCircle2, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full-time' | 'Freelance'>('All');
  const [expandedId, setExpandedId] = useState<string | null>('exp-1');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeFilter === 'All') return true;
    return exp.type === activeFilter;
  });

  return (
    <section id="experience" className="py-24 relative bg-[#FAF9F6] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#1A1A1A]/20">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D23D1F] font-bold block mb-2">
              [ 03 ] Career Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight">
              Work Experience & <span className="italic font-normal text-[#D23D1F]">Milestones</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-1.5 bg-[#F2EFED] p-1 border border-[#1A1A1A]">
            {(['All', 'Freelance', 'Full-time'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  soundFX.playPop();
                  setActiveFilter(filter);
                }}
                className={`px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
                  activeFilter === filter
                    ? 'bg-[#1A1A1A] text-[#FAF9F6] font-bold'
                    : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-[#1A1A1A] ml-4 md:ml-8 space-y-8 pl-6 md:pl-10">
          {filteredExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Node Point */}
                <span className="absolute -left-[31px] md:-left-[47px] top-3 w-4 h-4 bg-[#1A1A1A] border-2 border-[#FAF9F6] group-hover:bg-[#D23D1F] transition-colors" />

                {/* Card Container */}
                <div
                  onClick={() => {
                    soundFX.playClick();
                    setExpandedId(isExpanded ? null : exp.id);
                  }}
                  className="cursor-pointer bg-[#FAF9F6] border border-[#1A1A1A] p-6 sm:p-8 hover:bg-[#F2EFED] transition-all shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                        <span>{exp.role}</span>
                        <span className="px-2 py-0.5 bg-[#1A1A1A] text-white text-[10px] font-mono uppercase tracking-widest">
                          {exp.type}
                        </span>
                      </h3>
                      <p className="text-sm font-mono uppercase tracking-wider text-[#D23D1F] font-bold mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-[#1A1A1A]/70">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#D23D1F]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#1A1A1A]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#1A1A1A]/80 text-sm leading-relaxed mb-4 font-sans">
                    {exp.description}
                  </p>

                  {/* Achievements List */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#1A1A1A]/20 space-y-3 animate-fadeIn">
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D23D1F] flex items-center gap-1.5 font-bold">
                        <Award className="w-4 h-4 text-[#D23D1F]" />
                        <span>Key Impact & Achievements</span>
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-[#1A1A1A]/90 leading-relaxed font-sans">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D23D1F] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="mt-4 pt-4 border-t border-[#1A1A1A]/10 flex flex-wrap gap-2 items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-[#F2EFED] text-[#1A1A1A] text-[11px] font-mono uppercase tracking-wider border border-[#1A1A1A]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-mono uppercase tracking-wider text-[#D23D1F] flex items-center gap-1 font-bold group-hover:underline">
                      {isExpanded ? 'Less details' : 'More details'}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
