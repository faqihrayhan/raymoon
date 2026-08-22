"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { ArrowRight, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 max-w-7xl mx-auto">
      {/* Subtle top ambient glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl">
        {/* Version/spec tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/[0.12] bg-white/[0.04] text-xs sm:text-sm font-mono text-[#9ca3af] mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span>v2026.08 · RAYMOON SYSTEM ARCHITECTURE</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#ededec] mb-6 leading-[1.06]">
          Building autonomous agents, <br />
          <span className="text-white">smart contracts & high-load systems.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#9ca3af] text-lg sm:text-xl md:text-2xl max-w-3xl mb-10 leading-relaxed font-normal">
          {PROFILE_DATA.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#project"
            className="px-6 py-3 rounded-lg bg-white text-black font-mono text-sm font-semibold hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-md hover:scale-105"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#skills"
            className="px-6 py-3 rounded-lg cursor-glass hover:border-white/30 text-[#ededec] font-mono text-sm font-medium transition-all border border-white/[0.12] hover:scale-105"
          >
            Inspect Skills
          </a>
          <a
            href={PROFILE_DATA.socials.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg cursor-glass hover:border-white/30 text-[#9ca3af] hover:text-white font-mono text-sm font-medium transition-all border border-white/[0.12] flex items-center gap-2 hover:scale-105"
          >
            <Code2 className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
