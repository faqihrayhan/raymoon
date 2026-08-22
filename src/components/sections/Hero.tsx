"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { ArrowRight, Terminal, Shield, Cpu, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 max-w-7xl mx-auto">
      {/* Subtle top ambient glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl">
        {/* Cursor-style version/spec tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/[0.1] bg-white/[0.03] text-xs font-mono text-[#8b8e96] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span>v2026.08 · RAYMOON SYSTEM ARCHITECTURE</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#ededec] mb-6 leading-[1.08]">
          Building autonomous agents, <br />
          <span className="text-white">smart contracts & high-load systems.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#8b8e96] text-base sm:text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-normal">
          {PROFILE_DATA.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#project"
            className="px-5 py-2.5 rounded-md bg-white text-black font-mono text-xs font-medium hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-sm"
          >
            Explore Projects
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#skills"
            className="px-5 py-2.5 rounded-md cursor-glass hover:border-white/20 text-[#ededec] font-mono text-xs transition-all border border-white/[0.1]"
          >
            Inspect Skills
          </a>
          <a
            href={PROFILE_DATA.socials.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-md cursor-glass hover:border-white/20 text-[#8b8e96] hover:text-white font-mono text-xs transition-all border border-white/[0.1] flex items-center gap-2"
          >
            <Code2 className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
