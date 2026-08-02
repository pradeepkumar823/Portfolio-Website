import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { GraduationCap, Award, ExternalLink, Code2, Heart, Briefcase, Trophy, CheckCircle2, Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <h2 className="section-title">
        About <span className="gradient-text">Me & Experience</span>
      </h2>
      <p className="section-subtitle">
        Driven by engineering discipline, clean architecture, and continuous backend innovation.
      </p>

      {/* Main Philosophy & Background Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-12 sm:mb-16">
        <div className="glass-panel p-5 sm:p-8 border-l-4 border-l-purple-500 hover:border-l-cyan-400 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 sm:p-3 rounded-2xl bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/20 shrink-0">
              <Code2 size={22} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Poppins'] text-white">Who I Am</h3>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            I'm a fresher by title, but I've built my skills through hands-on development. From academic projects to self-driven backend applications, I've focused on writing production-quality code with <strong className="text-cyan-300 font-semibold">Java, Spring Boot, REST APIs, MySQL, Spring Security, and JWT</strong>. I'm currently building <strong className="text-purple-300 font-semibold">Microservices</strong> and exploring <strong className="text-pink-300 font-semibold">Spring AI & Kafka</strong> to stay aligned with the next generation of backend software development.
          </p>
        </div>

        <div className="glass-panel p-5 sm:p-8 border-l-4 border-l-cyan-500 hover:border-l-purple-400 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 sm:p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20 shrink-0">
              <Heart size={22} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Poppins'] text-white">My Engineering Philosophy</h3>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            I believe software engineering is both art and discipline. Whether optimizing database queries to reduce latency by 30%, designing event-driven microservices with Kafka, or building SLA complaint portals, I prioritize code clarity, scalability, and maintainability.
          </p>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="mb-14 sm:mb-20">
        <h3 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-white text-center mb-8 sm:mb-10 flex items-center justify-center gap-3">
          <Briefcase className="text-cyan-400" size={28} /> Work Experience
        </h3>

        <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6">
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <div key={index} className="glass-panel p-5 sm:p-8 border-l-4 border-l-cyan-400 hover:border-l-purple-500 transition-all duration-300 shadow-xl">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                    {exp.type}
                  </span>
                  <h4 className="text-lg sm:text-2xl font-bold text-white">{exp.role}</h4>
                  <p className="text-purple-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                </div>
                <span className="text-xs text-slate-400 font-semibold bg-white/5 px-3 sm:px-4 py-2 rounded-full border border-white/10 shrink-0">
                  📅 {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mb-5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1 shrink-0">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="text-xs px-2.5 sm:px-3 py-1 rounded-full bg-white/5 text-cyan-300 font-mono border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Vertical Education Timeline */}
      <div className="mb-14 sm:mb-20">
        <h3 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-white text-center mb-8 sm:mb-10 flex items-center justify-center gap-3">
          <GraduationCap className="text-purple-400" size={28} /> Education Journey
        </h3>

        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 relative pl-5 sm:pl-8 border-l-2 border-purple-500/30">
          {PORTFOLIO_DATA.education.map((edu, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-[27px] sm:-left-[39px] top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-950 border-4 border-purple-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-lg shadow-purple-500/50"></div>
              
              <div className="glass-panel p-5 sm:p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-wide">
                    {edu.period}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-emerald-400" /> Completed
                  </span>
                </div>
                <h4 className="text-base sm:text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{edu.title}</h4>
                <p className="text-cyan-400 font-medium text-xs sm:text-sm mb-2 sm:mb-3">{edu.institution}</p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Showcase with Images & Verification Links */}
      <div className="mb-14 sm:mb-20">
        <h3 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-white text-center mb-8 sm:mb-10 flex items-center justify-center gap-3">
          <Award className="text-yellow-400" size={28} /> Certifications & Verified Credentials
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {PORTFOLIO_DATA.certifications.map((cert, index) => (
            <div key={index} className="glass-panel overflow-hidden hover:border-yellow-500/40 transition-all flex flex-col justify-between group shadow-xl">
              
              {/* Certificate Image Thumbnail */}
              <div className="relative h-36 sm:h-44 overflow-hidden border-b border-white/10">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-yellow-400 border border-yellow-500/30 text-xs font-bold">
                  {cert.year}
                </span>
              </div>

              {/* Certificate Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={16} className="text-yellow-400 shrink-0" />
                    <span className="text-xs text-cyan-400 font-semibold">{cert.issuer}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed mb-3 sm:mb-4">
                    {cert.details}
                  </p>
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-yellow-500/20 hover:border-yellow-500/40 text-yellow-400 text-xs font-bold transition-all shadow-md"
                  >
                    Verify Credential <ExternalLink size={13} />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Extracurriculars & Leadership Grid */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-white text-center mb-8 sm:mb-10 flex items-center justify-center gap-3">
          <Trophy className="text-pink-400" size={28} /> Extracurriculars & Leadership
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {PORTFOLIO_DATA.extracurriculars.map((item, index) => (
            <div key={index} className="glass-panel p-5 sm:p-6 border-l-4 border-l-pink-500 hover:border-l-cyan-400 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 shrink-0">
                  <Star size={16} />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">{item.title}</h4>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.details}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
