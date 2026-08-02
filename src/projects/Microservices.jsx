import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { GithubIcon } from "../components/SocialIcons";
import { Boxes, Zap, RefreshCw, Container, Cpu, ShieldCheck } from "lucide-react";

export default function MicroservicesProject() {
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === "microservices");

  const features = [
    {
      icon: Boxes,
      title: "Service Decomposition",
      desc: "Modular architecture with independent services for high scalability, fault isolation, and maintainability."
    },
    {
      icon: Zap,
      title: "Reactive Programming",
      desc: "Non-blocking asynchronous operations using Spring WebFlux for handling high concurrent loads efficiently."
    },
    {
      icon: RefreshCw,
      title: "Inter-Service Communication",
      desc: "RESTful APIs and reactive web clients for seamless asynchronous communication between microservices."
    },
    {
      icon: Container,
      title: "Docker Containerization",
      desc: "Docker Compose integration for consistent, containerized deployment across development and production environments."
    },
    {
      icon: Cpu,
      title: "Horizontal Scalability",
      desc: "Architected for dynamic horizontal scaling to handle peak traffic demands without service degradation."
    },
    {
      icon: ShieldCheck,
      title: "Fault Tolerance",
      desc: "Circuit breakers and fallback mechanisms for building resilient, high-availability microservices."
    }
  ];

  return (
    <div className="section-wrapper max-w-5xl mx-auto py-12">
      <div className="glass-panel p-8 md:p-12 mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
          Backend Development
        </span>
        <h1 className="text-4xl md:text-6xl font-black font-['Poppins'] text-white mb-4">
          Microservices Projects
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl">
          Scalable Microservices Architecture & Reactive Programming with Spring WebFlux
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["Spring Boot", "Microservices", "Spring WebFlux", "Reactive", "REST API", "Docker"].map((badge, i) => (
            <span key={i} className="tech-badge">{badge}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="https://github.com/pradeepkumar823/Microservice" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <GithubIcon size={18} /> Microservice Repo
          </a>
          <a href="https://github.com/pradeepkumar823/reactive-app-with-asynchronous-api" target="_blank" rel="noopener noreferrer" className="btn-glass">
            <GithubIcon size={18} /> Reactive App Repo
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 glass-panel p-8">
          <h2 className="text-2xl font-bold font-['Poppins'] text-white mb-4">Project Overview</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            A collection of microservices projects demonstrating modern backend architecture patterns. Includes a microservices API implementation and a reactive application with asynchronous operations for high-performance scenarios.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The microservices project showcases service decomposition, inter-service communication, and independent deployment. The reactive app demonstrates non-blocking I/O operations using Spring WebFlux for handling high concurrent loads efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="glass-panel p-6 text-center flex flex-col justify-center">
            <span className="text-xs text-slate-400 font-bold uppercase mb-1">Architecture</span>
            <span className="text-2xl font-black text-cyan-400">Microservices</span>
          </div>
          <div className="glass-panel p-6 text-center flex flex-col justify-center">
            <span className="text-xs text-slate-400 font-bold uppercase mb-1">Programming</span>
            <span className="text-2xl font-black text-purple-400">Reactive WebFlux</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold font-['Poppins'] text-white text-center mb-8">Key Architectural Features</h2>
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
