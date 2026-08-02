import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050508] py-8 sm:py-12 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        
        <div className="text-center md:text-left">
          <a href="#hero" onClick={scrollToTop} className="text-xl sm:text-2xl font-black font-['Poppins'] gradient-text">
            PK<span className="text-cyan-400">.</span>
          </a>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xs">
            Java Backend Developer specializing in scalable microservices architecture.
          </p>
        </div>

        <div className="text-slate-400 text-xs sm:text-sm text-center flex items-center gap-1.5">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with{" "}
          <Heart size={13} className="text-red-500 fill-red-500 inline" /> and Java.
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-purple-600/30 hover:border-purple-500 transition-all shadow-lg"
          title="Back to Top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
