import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";
import { GithubIcon } from "./SocialIcons";
import { Search, ArrowRight, Brain, Baby, Server, Utensils, MessageSquare, Building2, Code, Mail, SunMedium, Gamepad2, Layers, Calendar } from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const iconComponents = {
    Brain, Baby, Server, Utensils, MessageSquare, Building2, Code, Mail, SunMedium, Gamepad2, Layers
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "backend", label: "Backend" },
    { id: "frontend", label: "Frontend" },
    { id: "game", label: "Games" },
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section-wrapper">
      <h2 className="section-title">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <p className="section-subtitle">
        A curated showcase of production-ready microservices, AI platforms, full-stack applications, and problem-solving archives with build timelines.
      </p>

      <div className="flex flex-col gap-4 mb-10 sm:mb-12">
        {/* Category filters — scrollable on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search bar — full width on mobile */}
        <div className="relative w-full sm:max-w-xs sm:self-end">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {filteredProjects.map((project) => {
          const IconComp = iconComponents[project.icon] || Layers;
          return (
            <div
              key={project.id}
              className="glass-panel p-4 sm:p-6 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-11 h-11 shrink-0 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComp size={22} />
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-end gap-1.5">
                    {project.date && (
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] font-semibold text-purple-300 flex items-center gap-1">
                        <Calendar size={11} className="text-purple-400" /> {project.date}
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                      {project.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-xl font-bold font-['Poppins'] text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-slate-400">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-slate-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    View Details <ArrowRight size={16} />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-purple-600/30 text-slate-300 hover:text-white border border-white/10 transition-all"
                    title="View GitHub Repository"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
