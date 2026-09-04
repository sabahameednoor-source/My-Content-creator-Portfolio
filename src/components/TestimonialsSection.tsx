import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-[#FAF9F6] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#1A1A1A]/20">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D23D1F] font-bold block">
              [ 07 ] Client Endorsements
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight">
              Trusted By Founders & <span className="italic font-normal text-[#D23D1F]">Tech Leaders</span>
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/60 max-w-xl">
              Read what international clients and engineering managers say about working with me
            </p>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 bg-[#FAF9F6] border border-[#1A1A1A] hover:bg-[#F2EFED] transition-colors shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D23D1F]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D23D1F]" />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 bg-[#1A1A1A] text-white text-[9px] font-mono uppercase tracking-widest flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#D23D1F]" />
                    VERIFIED
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-base text-[#1A1A1A]/90 font-serif leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-[#1A1A1A]/20 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 object-cover border border-[#1A1A1A]"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-serif font-bold text-[#1A1A1A]">{t.name}</span>
                  <span className="text-[10px] text-[#1A1A1A]/60 font-mono uppercase">
                    {t.role} • {t.company}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
