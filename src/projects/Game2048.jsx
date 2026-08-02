import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { GithubIcon } from "../components/SocialIcons";

export default function Game2048Project() {
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === "game2048");

  return (
    <div className="glass-panel p-8 max-w-4xl mx-auto my-8">
      <span className="px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider">
        {project?.badge || "Game"}
      </span>
      <h1 className="text-4xl font-black text-white my-4">{project?.title || "2048 Puzzle Game"}</h1>
      <p className="text-slate-300 text-lg leading-relaxed mb-6">{project?.longDescription}</p>
      {project?.metrics && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {project.metrics.map((m, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <span className="block text-xs text-slate-400 font-bold uppercase">{m.label}</span>
              <span className="text-lg font-extrabold text-cyan-400">{m.value}</span>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-4">
        <a href={project?.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <GithubIcon size={18} /> View on GitHub
        </a>
      </div>
    </div>
  );
}
