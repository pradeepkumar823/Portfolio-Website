import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { GithubIcon } from "../components/SocialIcons";
import { Brain, FileText, Cpu, Database, ShieldCheck, Sparkles } from "lucide-react";

export default function ResumeIQProject() {
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === "resumeiq");

  const features = [
    {
      icon: FileText,
      title: "PDF Parsing & Storage Engine",
      desc: "Instant PDF text extraction and secure file storage powered by MinIO object storage."
    },
    {
      icon: Brain,
      title: "ATS Scoring & Feedback",
      desc: "AI-powered Applicant Tracking System (ATS) matching algorithm providing keyword analysis and format recommendations."
    },
    {
      icon: Sparkles,
      title: "AI Mock Interviewer",
      desc: "Interactive technical interview simulation asking job-specific questions and giving real-time feedback using local Ollama."
    },
    {
      icon: Cpu,
      title: "Private Local AI (CodeLlama)",
      desc: "Zero data leaks or API fees by utilizing local CodeLlama inference via Ollama AI engine."
    },
    {
      icon: Database,
      title: "Microservices Ecosystem",
      desc: "6 decoupled Java Spring Boot services: API Gateway, Auth, Profile, Resume, ATS Score, and Interview service."
    },
    {
      icon: ShieldCheck,
      title: "JWT Authentication",
      desc: "Stateless security authorization across microservices with Docker container orchestration."
    }
  ];

  return (
    <div className="section-wrapper max-w-5xl mx-auto py-12">
      <div className="glass-panel p-8 md:p-12 mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
          Full-Stack + AI Platform
        </span>
        <h1 className="text-4xl md:text-6xl font-black font-['Poppins'] text-white mb-4">
          ResumeIQ
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl">
          AI-Powered Resume Analyzer with ATS Scoring, Mock Interviews, & Microservices Architecture
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["Spring Boot", "React", "Docker", "Ollama AI", "MinIO", "MySQL", "JWT"].map((badge, i) => (
            <span key={i} className="tech-badge">{badge}</span>
          ))}
        </div>

        <a href="https://github.com/pradeepkumar823/ResumeIQ" target="_blank" rel="noopener noreferrer" className="btn-primary">
          <GithubIcon size={18} /> View GitHub Repository
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 glass-panel p-8">
          <h2 className="text-2xl font-bold font-['Poppins'] text-white mb-4">Project Overview</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            ResumeIQ is a smart web application designed to help job seekers stand out. It features resume storage & parsing (PDF upload with text extraction), AI-powered ATS analysis, and an AI mock interviewer.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Built using 6 Java microservices (API Gateway, Auth Service, Profile Service, Resume Service, ATS Service, Interview Service) communicating via MinIO object storage, MySQL, Docker, and local CodeLlama via Ollama.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="glass-panel p-6 text-center flex flex-col justify-center">
            <span className="text-xs text-slate-400 font-bold uppercase mb-1">Architecture</span>
            <span className="text-2xl font-black text-purple-400">Microservices</span>
          </div>
          <div className="glass-panel p-6 text-center flex flex-col justify-center">
            <span className="text-xs text-slate-400 font-bold uppercase mb-1">AI Engine</span>
            <span className="text-2xl font-black text-cyan-400">Ollama / CodeLlama</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold font-['Poppins'] text-white text-center mb-8">Core AI Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="glass-panel p-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
