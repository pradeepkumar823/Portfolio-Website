import React from "react";
import { X, Calendar } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xl animate-fadeIn"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-[#0e0e17] border border-white/10 rounded-2xl sm:rounded-3xl max-w-2xl w-full p-5 sm:p-8 relative shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4 pr-10">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider">
            {project.badge}
          </span>
          {project.date && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
              <Calendar size={12} className="text-cyan-400" /> Built: {project.date}
            </span>
          )}
        </div>
        
        {/* Title */}
        <h2 className="text-xl sm:text-3xl font-black font-['Poppins'] text-white mb-3 leading-tight">
          {project.title}
        </h2>

        {/* Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-3 my-4 sm:my-6">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-center flex sm:flex-col items-center sm:justify-center gap-2 sm:gap-0">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{metric.label}</span>
                <span className="text-base sm:text-lg font-black text-cyan-400 sm:mt-1">{metric.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Description */}
        <div className="mb-5 sm:mb-6">
          <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Project Overview</h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="mb-6 sm:mb-8">
          <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-cyan-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center text-sm"
          >
            <GithubIcon size={16} /> View on GitHub
          </a>
          <button
            onClick={onClose}
            className="btn-glass justify-center text-sm"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
