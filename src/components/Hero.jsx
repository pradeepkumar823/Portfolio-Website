import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";
import { Download, Mail, Code, Trophy, Boxes, Sparkles, Coffee, Leaf, Brain, Zap, Container, Cloud } from "lucide-react";
import HeroCanvas from "./HeroCanvas";

export default function Hero({ onContactClick }) {
  const roles = ["Java Software Developer", "Backend & Microservices Specialist", "Spring AI & Kafka Engineer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
      
      {/* 🌌 High-Quality Interactive HTML5 Canvas Constellation Mesh */}
      <HeroCanvas />

      {/* 🔮 Morphing Glowing Orbs Background System */}
      <div className="hero-grid-bg absolute inset-0 pointer-events-none z-0"></div>
      <div className="orb-animated-1"></div>
      <div className="orb-animated-2"></div>
      <div className="orb-animated-3"></div>

      {/* 🚀 Floating Tech Pills — Desktop Only */}
      <div className="floating-tech-pill top-36 left-12 hidden lg:flex" style={{ animationDelay: '0s' }}>
        <Coffee size={16} className="text-amber-400" /> Java 17
      </div>
      <div className="floating-tech-pill top-48 right-16 hidden lg:flex" style={{ animationDelay: '1.5s' }}>
        <Leaf size={16} className="text-emerald-400" /> Spring Boot
      </div>
      <div className="floating-tech-pill top-[480px] left-16 hidden lg:flex" style={{ animationDelay: '3s' }}>
        <Brain size={16} className="text-pink-400" /> Spring AI
      </div>
      <div className="floating-tech-pill top-[520px] right-20 hidden lg:flex" style={{ animationDelay: '2s' }}>
        <Zap size={16} className="text-yellow-400" /> Kafka
      </div>
      <div className="floating-tech-pill top-96 left-8 hidden lg:flex" style={{ animationDelay: '4s' }}>
        <Boxes size={16} className="text-cyan-400" /> Microservices
      </div>
      <div className="floating-tech-pill top-[320px] right-12 hidden lg:flex" style={{ animationDelay: '2.5s' }}>
        <Container size={16} className="text-blue-400" /> Docker
      </div>

      <div className="max-w-4xl w-full mx-auto flex flex-col items-center z-10 relative pointer-events-none">
        
        {/* Availability Status Badge */}
        <div className="pointer-events-auto inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-md shadow-lg shadow-emerald-500/10">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-center leading-tight">{PORTFOLIO_DATA.status}</span>
        </div>

        {/* Profile Picture with Conic Gradient Rotating Ring */}
        <div className="pointer-events-auto relative mb-6 sm:mb-8 group">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600 via-cyan-400 to-pink-500 blur-md opacity-75 group-hover:opacity-100 transition duration-700 animate-spin-slow"></div>
          <img
            src={PORTFOLIO_DATA.profileImage}
            alt={PORTFOLIO_DATA.name}
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full object-cover border-4 border-slate-900 shadow-2xl z-10"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
            }}
          />
        </div>

        {/* Title */}
        <h1 className="pointer-events-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-['Poppins'] tracking-tight mb-3 sm:mb-4 text-white drop-shadow-md px-2">
          Hi, I'm <span className="gradient-text">{PORTFOLIO_DATA.name}</span>
        </h1>

        {/* Dynamic Typing Subtitle */}
        <p className="pointer-events-auto text-base sm:text-xl md:text-2xl text-slate-300 font-medium mb-5 sm:mb-6 h-8 sm:h-10 flex items-center justify-center px-4">
          I am a&nbsp;<span className="text-cyan-400 font-semibold border-r-2 border-cyan-400 pr-1 animate-pulse">{displayedText}</span>
        </p>

        {/* Mindset Statement Card */}
        <div className="pointer-events-auto glass-panel p-5 sm:p-6 md:p-8 w-full max-w-3xl mx-auto mb-6 sm:mb-8 border-l-4 border-l-purple-500 text-left relative shadow-2xl">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} /> Engineering Mindset & Vision
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">
            <strong className="text-cyan-300 font-bold">"I may be a fresher by experience, but not by mindset."</strong> I've spent my time building backend applications with <span className="text-purple-400 font-semibold">Java, Spring Boot, Spring AI & MySQL</span>, and I'm currently expanding my expertise in <span className="text-pink-400 font-semibold">Microservices, Cloud Services, Kafka & more</span>. I enjoy learning, adapting quickly, and turning ideas into reliable software.
          </p>
        </div>

        {/* Social Links */}
        <div className="pointer-events-auto flex items-center gap-3 sm:gap-5 mb-7 sm:mb-10">
          <a
            href={PORTFOLIO_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-3.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-purple-600/30 hover:border-purple-500 hover:scale-110 transition-all shadow-lg"
            title="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={PORTFOLIO_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-3.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-cyan-600/30 hover:border-cyan-500 hover:scale-110 transition-all shadow-lg"
            title="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={PORTFOLIO_DATA.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-3.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-pink-600/30 hover:border-pink-500 hover:scale-110 transition-all shadow-lg"
            title="Instagram"
          >
            <InstagramIcon size={20} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="pointer-events-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-10 sm:mb-14 w-full px-4 sm:px-0">
          <a
            href={PORTFOLIO_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <Download size={16} /> Download Resume
          </a>
          <button
            onClick={onContactClick}
            className="btn-glass text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <Mail size={16} /> Contact Me
          </button>
        </div>

        {/* Quick Hero Highlights */}
        <div className="pointer-events-auto grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl px-0">
          <div className="glass-panel py-3 px-4 sm:px-5 flex items-center justify-center gap-2 sm:gap-3 text-slate-300 text-xs sm:text-sm font-semibold">
            <Code className="text-cyan-400 shrink-0" size={16} /> 15+ Projects Completed
          </div>
          <div className="glass-panel py-3 px-4 sm:px-5 flex items-center justify-center gap-2 sm:gap-3 text-slate-300 text-xs sm:text-sm font-semibold">
            <Trophy className="text-yellow-400 shrink-0" size={16} /> 450+ LeetCode Solved
          </div>
          <div className="glass-panel py-3 px-4 sm:px-5 flex items-center justify-center gap-2 sm:gap-3 text-slate-300 text-xs sm:text-sm font-semibold">
            <Boxes className="text-purple-400 shrink-0" size={16} /> Microservices & Spring AI
          </div>
        </div>

      </div>
    </section>
  );
}
