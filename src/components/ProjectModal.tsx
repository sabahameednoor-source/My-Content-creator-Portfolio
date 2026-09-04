import React, { useState } from 'react';
import { Project } from '../types';
import { soundFX } from '../utils/sound';
import { 
  X, 
  ExternalLink, 
  Github, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  Calendar, 
  User, 
  Clock,
  Code2
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [deviceFrame, setDeviceFrame] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'preview' | 'casestudy' | 'architecture'>('preview');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#FAF9F6] border-2 border-[#1A1A1A] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A] bg-[#F2EFED]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#1A1A1A] text-[#FAF9F6] text-[10px] font-mono uppercase tracking-widest font-bold">
              {project.category}
            </span>
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A] truncate max-w-md">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 bg-[#D23D1F] hover:bg-[#1A1A1A] text-white font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-1.5 border border-[#1A1A1A] bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Sub-Header Tabs */}
        <div className="flex flex-wrap items-center justify-between px-6 py-3 bg-[#FAF9F6] border-b border-[#1A1A1A] gap-4 font-mono text-xs uppercase tracking-wider">
          <div className="flex items-center gap-2">
            {(['preview', 'casestudy', 'architecture'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  soundFX.playPop();
                  setActiveTab(tab);
                }}
                className={`px-3.5 py-1.5 border border-[#1A1A1A] transition-all ${
                  activeTab === tab
                    ? 'bg-[#1A1A1A] text-[#FAF9F6] font-bold'
                    : 'bg-[#F2EFED] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF9F6]'
                }`}
              >
                {tab === 'preview' && 'Device Preview'}
                {tab === 'casestudy' && 'Case Study'}
                {tab === 'architecture' && 'Tech Architecture'}
              </button>
            ))}
          </div>

          {/* Device Frame Switcher */}
          {activeTab === 'preview' && (
            <div className="flex items-center gap-1 bg-[#F2EFED] p-1 border border-[#1A1A1A]">
              <button
                onClick={() => { soundFX.playPop(); setDeviceFrame('desktop'); }}
                className={`p-1.5 ${deviceFrame === 'desktop' ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A] hover:bg-[#FAF9F6]'}`}
                title="Desktop View"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => { soundFX.playPop(); setDeviceFrame('tablet'); }}
                className={`p-1.5 ${deviceFrame === 'tablet' ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A] hover:bg-[#FAF9F6]'}`}
                title="Tablet View"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => { soundFX.playPop(); setDeviceFrame('mobile'); }}
                className={`p-1.5 ${deviceFrame === 'mobile' ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A] hover:bg-[#FAF9F6]'}`}
                title="Mobile Frame"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#FAF9F6]">
          
          {/* TAB 1: DEVICE PREVIEW SIMULATOR */}
          {activeTab === 'preview' && (
            <div className="flex flex-col items-center justify-center py-4 bg-[#F2EFED] p-4 border border-[#1A1A1A]">
              <div
                className={`transition-all duration-300 bg-[#1A1A1A] border-2 border-[#1A1A1A] shadow-xl overflow-hidden ${
                  deviceFrame === 'desktop'
                    ? 'w-full max-w-4xl aspect-[16/9]'
                    : deviceFrame === 'tablet'
                    ? 'w-[520px] aspect-[4/3]'
                    : 'w-[280px] aspect-[9/16]'
                }`}
              >
                {/* Simulated Top Browser Bar */}
                <div className="bg-[#1A1A1A] px-4 py-2 border-b border-white/20 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[10px] font-mono text-white/70 truncate max-w-[200px]">
                    https://{project.id}.sabahameed.dev
                  </span>
                  <div className="w-4" />
                </div>

                {/* Screenshot */}
                <div className="relative w-full h-[calc(100%-33px)] overflow-y-auto bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CASE STUDY & METRICS */}
          {activeTab === 'casestudy' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 bg-[#F2EFED] border border-[#1A1A1A] flex items-center gap-3">
                  <User className="w-5 h-5 text-[#D23D1F]" />
                  <div>
                    <span className="text-[10px] uppercase text-[#1A1A1A]/60 block font-bold">CLIENT / ORG</span>
                    <span className="text-xs font-bold text-[#1A1A1A]">{project.client || 'Client Project'}</span>
                  </div>
                </div>

                <div className="p-4 bg-[#F2EFED] border border-[#1A1A1A] flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#1A1A1A]" />
                  <div>
                    <span className="text-[10px] uppercase text-[#1A1A1A]/60 block font-bold">TIMELINE</span>
                    <span className="text-xs font-bold text-[#1A1A1A]">{project.duration || '2 Months'}</span>
                  </div>
                </div>

                <div className="p-4 bg-[#F2EFED] border border-[#1A1A1A] flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#D23D1F]" />
                  <div>
                    <span className="text-[10px] uppercase text-[#1A1A1A]/60 block font-bold">DELIVERY YEAR</span>
                    <span className="text-xs font-bold text-[#1A1A1A]">{project.completionYear}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-lg font-serif font-bold text-[#1A1A1A]">Project Overview</h4>
                <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#D23D1F]" />
                  <span>Key Features Delivered</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3 bg-[#F2EFED] border border-[#1A1A1A]/30 flex items-start gap-2 text-xs text-[#1A1A1A] font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#D23D1F] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="p-6 bg-[#1A1A1A] text-[#FAF9F6] border border-[#1A1A1A]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#D23D1F] font-bold mb-4">Measured Results & Impact</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-2xl font-serif font-bold text-white">{m.value}</span>
                      <span className="text-xs font-mono uppercase text-white/70">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TECH ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#D23D1F]" />
                  <span>Technical Breakdown</span>
                </h4>
                <div className="space-y-2">
                  {project.architecture.map((arch, idx) => (
                    <div key={idx} className="p-3.5 bg-[#F2EFED] border border-[#1A1A1A] font-mono text-xs text-[#1A1A1A] flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#D23D1F]" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-[#1A1A1A]/60 font-bold">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-mono uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F2EFED] border-t border-[#1A1A1A] flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#D23D1F] hover:bg-[#1A1A1A] text-white border border-[#1A1A1A] uppercase tracking-wider font-bold flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Site</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white border border-[#1A1A1A] text-[#1A1A1A] uppercase tracking-wider font-bold flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="px-5 py-2 bg-[#1A1A1A] text-white hover:bg-[#D23D1F] uppercase tracking-wider font-bold transition-colors"
          >
            Close Modal
          </button>
        </div>

      </div>
    </div>
  );
};
