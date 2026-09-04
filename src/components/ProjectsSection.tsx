import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { soundFX } from '../utils/sound';
import { 
  Search, 
  ExternalLink, 
  Github, 
  Eye, 
  ArrowUpRight
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI Product Design', 'Content Creation', 'Prompt UX & Tools', 'Brand & Content'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#F2EFED] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#1A1A1A]/20">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D23D1F] font-bold block">
              [ 04 ] Selected Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight">
              Featured Projects & <span className="italic font-normal text-[#D23D1F]">Case Studies</span>
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/60 max-w-xl">
              AI Product Showcase, Video Commercials & Generative Content Systems
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#1A1A1A]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F6] border border-[#1A1A1A] text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:bg-[#1A1A1A] focus:text-white transition-colors font-mono uppercase"
            />
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-xs uppercase tracking-wider">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFX.playPop();
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 border border-[#1A1A1A] transition-all ${
                activeCategory === cat
                  ? 'bg-[#1A1A1A] text-[#FAF9F6] font-bold'
                  : 'bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-[#FAF9F6] text-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#FAF9F6] border border-[#1A1A1A] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Image Thumbnail Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A] border-b border-[#1A1A1A]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1A1A1A] text-[#FAF9F6] border border-white/20 text-[10px] font-mono uppercase tracking-widest">
                  {project.category}
                </div>

                {/* Hover Quick View Button */}
                <div className="absolute inset-0 bg-[#1A1A1A]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <button
                    onClick={() => {
                      soundFX.playPop();
                      setSelectedProject(project);
                    }}
                    className="px-5 py-3 bg-[#D23D1F] hover:bg-[#FAF9F6] text-white hover:text-[#1A1A1A] font-mono uppercase tracking-widest text-xs border border-white font-bold flex items-center gap-2 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Case Study</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#D23D1F] transition-colors flex items-center justify-between">
                    <span className="truncate">{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D23D1F] shrink-0" />
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/80 line-clamp-2 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[10px]">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[#F2EFED] border border-[#1A1A1A]/30 text-[#1A1A1A] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 bg-[#F2EFED] border border-[#1A1A1A]/30 text-[#1A1A1A]/60 uppercase">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Footer Links */}
                <div className="pt-4 border-t border-[#1A1A1A]/20 flex items-center justify-between font-mono text-xs">
                  <button
                    onClick={() => {
                      soundFX.playPop();
                      setSelectedProject(project);
                    }}
                    className="text-[#D23D1F] font-bold uppercase tracking-wider hover:underline flex items-center gap-1"
                  >
                    <span>Details & Preview</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 border border-[#1A1A1A] bg-[#FAF9F6] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 border border-[#1A1A1A] bg-[#FAF9F6] text-[#1A1A1A] hover:bg-[#D23D1F] hover:text-white transition-colors"
                        title="Live Site"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
