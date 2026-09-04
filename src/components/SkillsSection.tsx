import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import { 
  Terminal, 
  Layers, 
  Zap
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'visual' | 'terminal'>('visual');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'Saba Hameed CLI v2.5.0 [Type "help" for available commands]',
    'System status: Ready for AI Product Design & Content Creation projects.'
  ]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    soundFX.playClick();
    const cmd = terminalInput.trim().toLowerCase();
    const newLogs = [...terminalLogs, `$ ${terminalInput}`];

    if (cmd === 'help') {
      newLogs.push('Available commands:');
      newLogs.push('  skills      - List core design & content competencies');
      newLogs.push('  design      - Show AI Product Design, Generative UI, Prompt Engineering proficiency');
      newLogs.push('  content     - Show Content Strategy, Copywriting & Branding details');
      newLogs.push('  top         - Display highest rated creative skills');
      newLogs.push('  whoami      - Display Saba Hameed bio');
      newLogs.push('  clear       - Clear terminal output');
    } else if (cmd === 'skills') {
      newLogs.push('→ Core Stack: AI Product Design, Generative UI, Prompt Engineering, Content Strategy, Gemini API');
    } else if (cmd === 'design') {
      newLogs.push('→ Design Expertise: AI Product Design (98%), Generative UI (96%), Multi-Modal Prompt UX (94%)');
    } else if (cmd === 'content') {
      newLogs.push('→ Content Strategy: Visual Storytelling (96%), Copywriting & Strategy (95%), Multi-Modal Prompts (92%)');
    } else if (cmd === 'top') {
      newLogs.push('★ Top Core Skills: AI Product Design (98%), Generative UI (96%), Content Strategy (95%)');
    } else if (cmd === 'whoami') {
      newLogs.push('Saba Hameed | AI Product Designer & Content Creator specializing in generative AI user experiences.');
    } else if (cmd === 'clear') {
      setTerminalLogs(['Terminal output cleared. Type "help" for commands.']);
      setTerminalInput('');
      return;
    } else {
      newLogs.push(`Command not recognized: "${terminalInput}". Type "help" for available commands.`);
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  return (
    <section id="skills" className="py-24 relative bg-[#FAF9F6] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#1A1A1A]/20">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D23D1F] font-bold block">
              [ 05 ] Technical Mastery
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight">
              Skills & Tech <span className="italic font-normal text-[#D23D1F]">Proficiency</span>
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/60 max-w-xl">
              Engineered for high performance, modern web standards, and robust security
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#F2EFED] p-1 border border-[#1A1A1A] font-mono text-xs uppercase tracking-wider">
            <button
              onClick={() => {
                soundFX.playPop();
                setViewMode('visual');
              }}
              className={`px-4 py-2 flex items-center gap-2 transition-all ${
                viewMode === 'visual'
                  ? 'bg-[#1A1A1A] text-[#FAF9F6] font-bold'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Visual Matrix</span>
            </button>
            <button
              onClick={() => {
                soundFX.playPop();
                setViewMode('terminal');
              }}
              className={`px-4 py-2 flex items-center gap-2 transition-all ${
                viewMode === 'terminal'
                  ? 'bg-[#1A1A1A] text-[#FAF9F6] font-bold'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Developer CLI</span>
            </button>
          </div>
        </div>

        {/* MODE 1: VISUAL CARDS & PROGRESS MATRIX */}
        {viewMode === 'visual' && (
          <div className="space-y-8">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-[#1A1A1A]/20 pb-4 font-mono text-xs uppercase tracking-wider">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <button
                  key={cat.title}
                  onClick={() => {
                    soundFX.playPop();
                    setActiveCategoryIndex(idx);
                  }}
                  className={`px-4 py-2 border border-[#1A1A1A] transition-all ${
                    activeCategoryIndex === idx
                      ? 'bg-[#1A1A1A] text-[#FAF9F6] font-bold'
                      : 'bg-[#F2EFED] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF9F6]'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Active Category Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-6 bg-[#FAF9F6] border border-[#1A1A1A] hover:bg-[#F2EFED] transition-colors space-y-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 border border-[#1A1A1A] bg-[#F2EFED] flex items-center justify-center text-[#D23D1F]">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-lg font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                          <span>{skill.name}</span>
                          {skill.featured && (
                            <span className="px-2 py-0.5 bg-[#D23D1F] text-white text-[9px] font-mono uppercase tracking-widest">
                              Core
                            </span>
                          )}
                        </h4>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/60">
                          {skill.tag} • {skill.experience} Exp
                        </span>
                      </div>
                    </div>

                    <span className="text-sm font-mono font-bold text-[#D23D1F]">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-[#F2EFED] border border-[#1A1A1A]/40 overflow-hidden">
                    <div
                      className="h-full bg-[#1A1A1A] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* MODE 2: INTERACTIVE CLI TERMINAL */}
        {viewMode === 'terminal' && (
          <div className="bg-[#1A1A1A] border-2 border-[#1A1A1A] text-[#FAF9F6] shadow-2xl font-mono text-xs">
            
            {/* Terminal Window Top Bar */}
            <div className="bg-[#1A1A1A] px-5 py-3 border-b border-white/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500" />
                <span className="w-3 h-3 bg-yellow-500" />
                <span className="w-3 h-3 bg-green-500" />
                <span className="text-white/60 text-[11px] ml-2 uppercase">bash - saba@editorial:~</span>
              </div>
              <span className="text-[#D23D1F] font-bold text-[11px]">ONLINE</span>
            </div>

            {/* Quick Command Chips */}
            <div className="p-3 bg-white/5 border-b border-white/10 flex flex-wrap gap-2 text-[11px]">
              <span className="text-white/50 py-1 uppercase tracking-wider">Quick Commands:</span>
              {['help', 'skills', 'frontend', 'backend', 'top', 'whoami', 'clear'].map((chip) => (
                <button
                  key={chip}
                  onClick={() => {
                    setTerminalInput(chip);
                  }}
                  className="px-2.5 py-1 bg-white/10 hover:bg-[#D23D1F] hover:text-white text-white font-mono uppercase tracking-wider transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Terminal Body Log Screen */}
            <div className="p-6 h-80 overflow-y-auto space-y-2 text-white/80 bg-black/40">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className={log.startsWith('$') ? 'text-[#D23D1F] font-bold' : ''}>
                  {log}
                </div>
              ))}
            </div>

            {/* Command Line Input */}
            <form onSubmit={handleTerminalSubmit} className="p-4 bg-[#1A1A1A] border-t border-white/20 flex items-center gap-2">
              <span className="text-[#D23D1F] font-bold">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help' or click a command..."
                className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none uppercase"
              />
              <button type="submit" className="px-4 py-1.5 bg-[#D23D1F] text-white uppercase font-bold text-xs tracking-wider">
                Run
              </button>
            </form>

          </div>
        )}

      </div>
    </section>
  );
};
