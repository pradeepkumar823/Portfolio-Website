import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { GithubIcon } from "../components/SocialIcons";
import { ShieldCheck, UserCheck, Server, Database, ShoppingCart, BarChart3, Zap, Target } from "lucide-react";

export default function FoodFrenzyProject() {
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === "foodfrenzy");

  const features = [
    {
      icon: ShieldCheck,
      title: "Google OAuth2 Authentication",
      desc: "Secure user authentication using Google OAuth2 protocol, eliminating password management and providing a seamless login flow."
    },
    {
      icon: UserCheck,
      title: "Role-Based Access Control (RBAC)",
      desc: "Comprehensive RBAC system with Admin, User, and Vendor roles, ensuring proper authorization and data security across the platform."
    },
    {
      icon: Server,
      title: "Microservices Architecture",
      desc: "Modular design with independent services for users, orders, and products, enabling horizontal scaling and easier maintenance."
    },
    {
      icon: Database,
      title: "Optimized Database Schema",
      desc: "Normalized MySQL database with efficient indexing and query optimization, reducing data redundancy by 30%."
    },
    {
      icon: ShoppingCart,
      title: "Real-Time Order Management",
      desc: "Live order tracking, status updates, and notification system for seamless communication between customers and vendors."
    },
    {
      icon: BarChart3,
      title: "Admin Analytics Dashboard",
      desc: "Comprehensive analytics dashboard for monitoring orders, revenue, and user activity with real-time insights."
    }
  ];

  const challenges = [
    {
      title: "⚡ Challenge: OAuth2 Integration",
      desc: "Implementing Google OAuth2 with Spring Security required deep understanding of OAuth2 flow, token management, and session handling. Overcame this by studying OAuth2 specifications and implementing custom success handlers."
    },
    {
      title: "🎯 Learning: Microservices Communication",
      desc: "Learned to implement inter-service communication using REST APIs and handle distributed transactions. Implemented circuit breakers and fallback mechanisms for resilience."
    },
    {
      title: "⚡ Challenge: Database Optimization",
      desc: "Initial queries were slow with large datasets. Implemented proper indexing, query optimization, and caching strategies, reducing query time by 60%."
    },
    {
      title: "🎯 Learning: Deployment on Render",
      desc: "Gained hands-on experience with cloud deployment, environment variables management, database migrations, and continuous deployment workflows."
    }
  ];

  return (
    <div className="section-wrapper max-w-5xl mx-auto py-12">
      {/* Hero Banner */}
      <div className="glass-panel p-8 md:p-12 mb-12 relative overflow-hidden">
        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
          Full-Stack Application
        </span>
        <h1 className="text-4xl md:text-6xl font-black font-['Poppins'] text-white mb-4">
          FoodFrenzy
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl">
          Scalable Food Ordering Platform with Microservices Architecture & Google OAuth2
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["Java 17", "Spring Boot", "MySQL", "OAuth2", "RBAC", "REST API", "Render"].map((badge, i) => (
            <span key={i} className="tech-badge">{badge}</span>
          ))}
        </div>

        <a href="https://github.com/pradeepkumar823/FoodFrenzy-main" target="_blank" rel="noopener noreferrer" className="btn-primary">
          <GithubIcon size={18} /> View GitHub Repository
        </a>
      </div>

      {/* Overview & Problem Statement */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 glass-panel p-8">
          <h2 className="text-2xl font-bold font-['Poppins'] text-white mb-4">Project Overview</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            FoodFrenzy is a comprehensive food ordering platform built with a microservices architecture, designed to handle high traffic and provide a seamless user experience. The platform features Google OAuth2 authentication, role-based access control, and scalable RESTful APIs deployed on Render.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            The application implements modern software engineering practices including clean architecture, dependency injection, and comprehensive error handling. It reduces code complexity by 40% through efficient design patterns and modular structure.
          </p>
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-slate-200">
            <strong className="text-purple-300 block mb-1">Problem Statement:</strong>
            Traditional food ordering systems often struggle with scalability, security, and maintainability. FoodFrenzy addresses these challenges with a microservices approach, ensuring each component can scale independently while maintaining data consistency.
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="glass-panel p-5 text-center flex flex-col justify-center">
            <span className="text-xs text-slate-400 font-bold uppercase mb-1">Code Reduction</span>
            <span className="text-3xl font-black text-cyan-400">40%</span>
          </div>
          <div className="glass-panel p-5 text-center flex flex-col justify-center">
            <span className="text-xs text-slate-400 font-bold uppercase mb-1">API Endpoints</span>
            <span className="text-3xl font-black text-purple-400">25+</span>
          </div>
          <div className="glass-panel p-5 text-center flex flex-col justify-center">
            <span className="text-xs text-slate-400 font-bold uppercase mb-1">Response Time</span>
            <span className="text-3xl font-black text-pink-400">&lt;200ms</span>
          </div>
          <div className="glass-panel p-5 text-center flex flex-col justify-center">
            <span className="text-xs text-slate-400 font-bold uppercase mb-1">Target Uptime</span>
            <span className="text-3xl font-black text-emerald-400">99.9%</span>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold font-['Poppins'] text-white text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="glass-panel p-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Challenges & Learnings */}
      <div>
        <h2 className="text-3xl font-bold font-['Poppins'] text-white text-center mb-8">Challenges & Learnings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {challenges.map((item, i) => (
            <div key={i} className="glass-panel p-6 border-l-4 border-l-cyan-400">
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
