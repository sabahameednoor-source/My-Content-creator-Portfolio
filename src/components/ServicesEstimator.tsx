import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { EstimatorState } from '../types';
import { soundFX } from '../utils/sound';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Clock, 
  Zap
} from 'lucide-react';

interface ServicesEstimatorProps {
  onSendEstimateToContact: (estimateData: EstimatorState) => void;
}

export const ServicesEstimator: React.FC<ServicesEstimatorProps> = ({ onSendEstimateToContact }) => {
  // Estimator Selection State
  const [projectType, setProjectType] = useState<'AI Product Suite' | 'AI Video Ad Campaign' | 'Brand Content Suite' | 'Prompt UX & Tools' | 'Generative UI Kit'>('AI Product Suite');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['User Auth & JWT', 'Admin Analytics Dashboard']);
  const [designLevel, setDesignLevel] = useState<'Standard' | 'Premium Design System'>('Premium Design System');
  const [timeline, setTimeline] = useState<'Standard (2-3 Weeks)' | 'Express (1 Week)'>('Standard (2-3 Weeks)');

  // Calculation Logic
  const calculateEstimate = (): EstimatorState => {
    let baseMin = 500;
    let baseMax = 900;
    let days = '14 - 21 Days';

    if (projectType === 'AI Product Suite') {
      baseMin = 800;
      baseMax = 1400;
    } else if (projectType === 'AI Video Ad Campaign') {
      baseMin = 900;
      baseMax = 1600;
    } else if (projectType === 'Brand Content Suite') {
      baseMin = 1000;
      baseMax = 1800;
    } else if (projectType === 'Prompt UX & Tools') {
      baseMin = 600;
      baseMax = 1100;
    } else if (projectType === 'Generative UI Kit') {
      baseMin = 400;
      baseMax = 700;
      days = '7 - 10 Days';
    }

    // Feature add-ons ($150 per feature)
    const featureAddon = selectedFeatures.length * 150;
    baseMin += featureAddon;
    baseMax += featureAddon + 100;

    // Design level
    if (designLevel === 'Premium Design System') {
      baseMin += 200;
      baseMax += 350;
    }

    // Express timeline speedup
    if (timeline === 'Express (1 Week)') {
      baseMin += 300;
      baseMax += 450;
      days = '5 - 7 Days (Express)';
    }

    return {
      projectType,
      features: selectedFeatures,
      designLevel,
      timeline,
      estimatedCostMin: baseMin,
      estimatedCostMax: baseMax,
      estimatedDays: days
    };
  };

  const currentEstimate = calculateEstimate();

  const toggleFeature = (feat: string) => {
    soundFX.playPop();
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#F2EFED] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#1A1A1A]/20">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D23D1F] font-bold block">
              [ 06 ] Scope & Estimator
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight">
              Services & Interactive <span className="italic font-normal text-[#D23D1F]">Cost Estimator</span>
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/60 max-w-xl">
              Transparent pricing, tailored scope, and clear project timelines
            </p>
          </div>
        </div>

        {/* Services Cards Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className={`p-6 bg-[#FAF9F6] border border-[#1A1A1A] hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                srv.popular ? 'border-2 border-[#D23D1F]' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-[#F2EFED] border border-[#1A1A1A] flex items-center justify-center text-[#D23D1F]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  {srv.popular && (
                    <span className="px-2 py-0.5 bg-[#D23D1F] text-white text-[9px] font-mono uppercase tracking-widest font-bold">
                      MOST REQUESTED
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-1">{srv.title}</h3>
                  <p className="text-xs text-[#1A1A1A]/80 leading-relaxed font-sans">{srv.description}</p>
                </div>

                <div className="pt-2 border-t border-[#1A1A1A]/20 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D23D1F] font-bold">Includes:</span>
                  <ul className="space-y-1.5 font-sans">
                    {srv.features.slice(0, 4).map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#1A1A1A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D23D1F] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1A1A1A]/20 flex items-center justify-between mt-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#1A1A1A]/60 block font-bold">STARTING FROM</span>
                  <span className="text-lg font-bold text-[#1A1A1A] font-serif">{srv.startingPrice}</span>
                </div>

                <button
                  onClick={() => {
                    soundFX.playPop();
                    const target = document.querySelector('#contact');
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3.5 py-2 border border-[#1A1A1A] bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors"
                >
                  Inquire
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* INTERACTIVE PROJECT COST ESTIMATOR WIDGET */}
        <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#1A1A1A]/20">
            <div className="p-3 border border-[#1A1A1A] bg-[#F2EFED] text-[#D23D1F]">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">Interactive Scope & Cost Estimator</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A]/60">Select project options to generate an instant investment estimate.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Options Configurator */}
            <div className="lg:col-span-8 space-y-6 font-mono text-xs">
              
              {/* Step 1: Project Type */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#D23D1F] font-bold block">
                  1. Select Project Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {(['AI Product Suite', 'AI Video Ad Campaign', 'Brand Content Suite', 'Prompt UX & Tools', 'Generative UI Kit'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        soundFX.playPop();
                        setProjectType(type);
                      }}
                      className={`p-3 border text-xs uppercase tracking-wider font-bold transition-all text-left ${
                        projectType === type
                          ? 'bg-[#1A1A1A] border-[#1A1A1A] text-[#FAF9F6]'
                          : 'bg-[#F2EFED] border-[#1A1A1A]/30 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Required Features */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#D23D1F] font-bold block">
                  2. Choose Required Features
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'User Auth & JWT',
                    'Stripe Payment Gateway',
                    'Gemini AI Assistant Integration',
                    'Admin Analytics Dashboard',
                    'Real-time WebSockets / Chat',
                    'Multi-language / i18n'
                  ].map((feat) => {
                    const isSelected = selectedFeatures.includes(feat);
                    return (
                      <button
                        key={feat}
                        onClick={() => toggleFeature(feat)}
                        className={`p-3 border text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#1A1A1A] border-[#1A1A1A] text-[#FAF9F6]'
                            : 'bg-[#F2EFED] border-[#1A1A1A]/30 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                        }`}
                      >
                        <span>{feat}</span>
                        <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-[#D23D1F]' : 'text-slate-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Timeline */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#D23D1F] font-bold block">
                  3. Delivery Pace & Timeline
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(['Standard (2-3 Weeks)', 'Express (1 Week)'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        soundFX.playPop();
                        setTimeline(t);
                      }}
                      className={`p-3 border text-xs uppercase tracking-wider font-bold transition-all ${
                        timeline === t
                          ? 'bg-[#1A1A1A] border-[#1A1A1A] text-[#FAF9F6]'
                          : 'bg-[#F2EFED] border-[#1A1A1A]/30 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Estimate Summary Box */}
            <div className="lg:col-span-4 bg-[#1A1A1A] text-[#FAF9F6] border border-[#1A1A1A] p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D23D1F] font-bold">
                  Estimated Summary
                </span>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-white/60">Estimated Investment Range</span>
                  <div className="text-3xl font-serif font-bold text-white">
                    ${currentEstimate.estimatedCostMin} - ${currentEstimate.estimatedCostMax}
                  </div>
                </div>

                <div className="space-y-1 pt-3 border-t border-white/20">
                  <span className="text-xs font-mono uppercase text-white/60">Estimated Timeline</span>
                  <div className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#D23D1F]" />
                    <span>{currentEstimate.estimatedDays}</span>
                  </div>
                </div>

                <div className="space-y-1 pt-3 border-t border-white/20 text-xs font-mono text-white/80">
                  <span className="font-bold text-white uppercase block mb-1">Scope Highlights:</span>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Type: {currentEstimate.projectType}</li>
                    <li>Features: {currentEstimate.features.length} Selected</li>
                    <li>Pace: {currentEstimate.timeline}</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => {
                  soundFX.playSuccess();
                  onSendEstimateToContact(currentEstimate);
                }}
                className="w-full py-4 bg-[#D23D1F] hover:bg-white hover:text-[#1A1A1A] text-white uppercase font-mono tracking-wider font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Send Pre-Filled Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
