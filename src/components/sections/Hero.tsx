"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { ASSETS } from "@/config/assets";
import { SafeImage } from "@/components/ui/SafeImage";
import { ArrowRight, Bot, ShieldCheck, Sparkles, Terminal, FileCode } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-4 overflow-hidden">
      {/* Background Starfield / Cosmic Gradient */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-500/20 via-purple-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 hover:scale-105 transition-transform cursor-default">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "8s" }} />
          <span>AUTONOMOUS AGENTS & WEB3 ARCHITECT</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Building Autonomous <br />
          <span className="cosmic-gradient-text">On-Chain Systems</span> & Web3
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {PROFILE_DATA.subheadline}
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#experience"
            className="px-7 py-3.5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:scale-105 flex items-center gap-2"
          >
            Explore Featured Work
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#stack"
            className="px-7 py-3.5 rounded-2xl glass-panel hover:bg-white/10 text-white font-semibold text-sm transition-all border-white/20 hover:scale-105"
          >
            View Orbital Stack
          </a>
        </div>

        {/* Quick Highlights / Spec Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
              <Bot className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Solana AI Agents</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Verifiable autonomous execution loops running fully on-chain.</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Arc & Foundry Audits</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Fuzz testing, smart contract security & high-performance EVM deployment.</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
              <Terminal className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Python Automation</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Asynchronous daemons, bot systems, and high-throughput pipelines.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
