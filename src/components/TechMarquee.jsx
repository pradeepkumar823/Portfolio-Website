import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Coffee, Leaf, Database, Code2, Container, Cloud, GitBranch, Globe, Boxes } from "lucide-react";

export default function TechMarquee() {
  const iconMap = {
    Coffee, Leaf, Database, Code2, Container, Cloud, GitBranch, Globe, Boxes
  };

  const marqueeItems = [...PORTFOLIO_DATA.skills, ...PORTFOLIO_DATA.skills];

  return (
    <section className="py-8 bg-white/[0.02] border-y border-white/10 overflow-hidden relative">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {marqueeItems.map((skill, index) => {
          const Icon = iconMap[skill.icon] || Code2;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-8 text-slate-300 font-semibold text-lg hover:text-white hover:scale-110 transition-all cursor-pointer group"
            >
              <Icon size={24} className="text-cyan-400 group-hover:text-purple-400 transition-colors" />
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
