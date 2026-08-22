"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { Mail, Send, Globe, Code2, MessageSquareCode } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto glass-panel-glow rounded-3xl p-8 md:p-14 border border-cyan-500/30 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6">
          <MessageSquareCode className="w-3.5 h-3.5" />
          DIRECT TRANSMISSION CHANNEL
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Ready to Build the <span className="cosmic-gradient-text">Next System?</span>
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
          Open for autonomous AI agent pipelines, Web3 smart contract architectures, full-stack dApp engineering, and custom automation infrastructure.
        </p>

        {/* Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={`mailto:${PROFILE_DATA.socials.email}`}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm transition-all shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-105 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Send Email Transmission
            <Send className="w-4 h-4" />
          </a>
        </div>

        {/* Social Badges Grid */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={PROFILE_DATA.socials.x}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel hover:bg-white/10 text-slate-200 hover:text-cyan-300 text-xs font-mono transition-all border-white/10"
          >
            <Globe className="w-4 h-4" />
            X / Twitter
          </a>
          <a
            href={PROFILE_DATA.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel hover:bg-white/10 text-slate-200 hover:text-cyan-300 text-xs font-mono transition-all border-white/10"
          >
            <Globe className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={PROFILE_DATA.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel hover:bg-white/10 text-slate-200 hover:text-cyan-300 text-xs font-mono transition-all border-white/10"
          >
            <Code2 className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
