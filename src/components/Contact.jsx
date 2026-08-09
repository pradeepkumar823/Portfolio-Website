import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./SocialIcons";
import confetti from "canvas-confetti";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: "error", msg: "Please fill in all fields!" });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // Direct Email Dispatch API (Delivers message directly to pksinghgolu76310@gmail.com)
      const response = await fetch(`https://formsubmit.co/ajax/${PORTFOLIO_DATA.email}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject}`,
          message: formData.message
        })
      });

      if (response.ok) {
        setLoading(false);
        setStatus({ type: "success", msg: "🎉 Message sent directly to Pradeep's inbox! Thank you for reaching out." });
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (err) {}

        setTimeout(() => setStatus(null), 6000);
      } else {
        throw new Error("API dispatch failed");
      }
    } catch (err) {
      // Fallback: Opens user's default email app (Outlook, Gmail, Apple Mail) with prefilled details
      setLoading(false);
      window.location.href = `mailto:${PORTFOLIO_DATA.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setStatus({ type: "success", msg: "Opening mail client to send email directly to pksinghgolu76310@gmail.com..." });
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <h2 className="section-title">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <p className="section-subtitle">
        Have a question or want to discuss software development opportunities? Send a message directly to my inbox!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="glass-panel p-5 sm:p-6 flex items-center gap-4 sm:gap-5">
            <div className="p-3 sm:p-4 rounded-2xl bg-emerald-500/20 text-emerald-400 shrink-0">
              <Phone size={26} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Mobile Number</h4>
              <a href={`tel:${PORTFOLIO_DATA.phone}`} className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                {PORTFOLIO_DATA.phone}
              </a>
            </div>
          </div>
          <div className="glass-panel p-5 sm:p-6 flex items-center gap-4 sm:gap-5">
            <div className="p-3 sm:p-4 rounded-2xl bg-purple-500/20 text-purple-400 shrink-0">
              <Mail size={26} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email Address</h4>
              <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                {PORTFOLIO_DATA.email}
              </a>
            </div>
          </div>

          <div className="glass-panel p-5 sm:p-6 flex items-center gap-4 sm:gap-5">
            <div className="p-3 sm:p-4 rounded-2xl bg-cyan-500/20 text-cyan-400 shrink-0">
              <MapPin size={26} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Location</h4>
              <p className="text-lg font-semibold text-white">{PORTFOLIO_DATA.location}</p>
            </div>
          </div>

          <div className="glass-panel p-6">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Connect Across Platforms</h4>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-purple-600/30 transition-all font-medium text-sm"
              >
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-cyan-600/30 transition-all font-medium text-sm"
              >
                <GithubIcon size={18} /> GitHub
              </a>
              <a
                href={PORTFOLIO_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-pink-600/30 transition-all font-medium text-sm"
              >
                <InstagramIcon size={18} /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="glass-panel p-5 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Subject</label>
              <input
                type="text"
                placeholder="Project discussion / Hiring inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                required
              ></textarea>
            </div>

            {status && (
              <div
                className={`p-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 ${
                  status.type === "success"
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                    : "bg-red-500/10 border border-red-500/30 text-red-400"
                }`}
              >
                {status.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                {status.msg}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center !py-3.5"
            >
              {loading ? "Sending Email..." : <>Send Message <Send size={16} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
