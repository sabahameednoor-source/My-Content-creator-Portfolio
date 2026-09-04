import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Layout, 
  Code2, 
  Zap, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const corePrinciples = [
    {
      icon: <Layout className="w-5 h-5 text-[#D23D1F]" />,
      title: 'Generative UI & Prompt UX',
      description: 'Designing intuitive multi-modal prompt layouts, canvas controls, and generative UI component systems for AI products.'
    },
    {
      icon: <Code2 className="w-5 h-5 text-[#1A1A1A]" />,
      title: 'Multi-Modal Content Systems',
      description: 'Creating comprehensive brand content strategies, UGC video scripts, and visual brand kits powered by generative AI.'
    },
    {
      icon: <Zap className="w-5 h-5 text-[#D23D1F]" />,
      title: '3D & Cinematic Product Ads',
      description: 'Converting standard product photography into luxury 3D commercial animations, storyboards, and high-converting video ads.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#1A1A1A]" />,
      title: 'Scalable Brand Architecture',
      description: 'Building cohesive visual design systems, typography standards, and cross-platform brand guidelines.'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#F2EFED] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-[#1A1A1A]/20">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D23D1F] font-bold block mb-2">
              [ 02 ] Expertise & Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight">
              Crafting Digital Solutions That <span className="italic font-normal text-[#D23D1F]">Drive Impact</span>
            </h2>
          </div>
          <p className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/60 max-w-xs">
            Bridging Creative Visual Design & Complex Systems Architecture
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Story Card */}
          <div className="lg:col-span-7 bg-[#FAF9F6] border border-[#1A1A1A] p-8 sm:p-10 space-y-6 shadow-sm">
            <h3 className="text-2xl font-serif italic text-[#1A1A1A]">
              My Journey in AI Product Design & Content Creation
            </h3>
            
            <p className="text-[#1A1A1A]/80 text-base leading-relaxed font-sans">
              Over the past 4+ years, I have worked with international startups, creative agencies, and global brands to design AI-driven user experiences, multi-modal prompt systems, and high-converting video product ads.
            </p>

            <p className="text-[#1A1A1A]/80 text-base leading-relaxed font-sans">
              Whether transforming simple product photos into cinematic 3D advertisements, creating brand content strategies, or designing intuitive generative UI systems, my goal is always the same: <strong className="text-[#D23D1F]">unrivaled visual craft, human-centered clarity, and measurable brand growth</strong>.
            </p>

            {/* Editorial Checklist */}
            <div className="pt-6 border-t border-[#1A1A1A]/20 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'AI Product & UGC Ads',
                '3D Product Animation',
                'AI Design Tokens & Systems',
                'Multi-Modal Prompt UX',
                'Content & Copy Strategy',
                'Script to Final Video Ad'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[#1A1A1A]">
                  <CheckCircle2 className="w-4 h-4 text-[#D23D1F] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Core Engineering Principles Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {corePrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FAF9F6] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 border border-[#1A1A1A] group-hover:border-white/40 flex items-center justify-center bg-[#F2EFED] group-hover:bg-[#1A1A1A] transition-colors">
                    {principle.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D23D1F] group-hover:text-white">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="text-lg font-serif font-bold text-[#1A1A1A] group-hover:text-[#FAF9F6] mb-1">
                  {principle.title}
                </h4>
                <p className="text-xs text-[#1A1A1A]/70 group-hover:text-white/80 leading-relaxed font-sans">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
