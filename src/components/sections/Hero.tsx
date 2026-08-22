"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section id="home" className="pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center text-center relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Status Pill Badge */}
      <Reveal direction="down" duration={0.4}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-[11px] sm:text-xs font-mono text-[#9ca3af] mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-white font-medium">FULLSTACK & WEB3 DEVELOPER</span>
        </div>
      </Reveal>

      {/* Main Headline */}
      <Reveal direction="up" delay={0.1} duration={0.5}>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#ededec] max-w-4xl leading-[1.15] mb-5">
          Building full-stack apps, smart contracts & modern web systems.
        </h1>
      </Reveal>

      {/* Subheadline / Bio Description */}
      <Reveal direction="up" delay={0.2} duration={0.5}>
        <p className="text-sm sm:text-base md:text-lg font-mono text-[#9ca3af] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
          Hi, I&apos;m <span className="text-white font-semibold">{PROFILE_DATA.name}</span>. Crafting responsive web applications, decentralized protocols, smart contracts on EVM testnets, and scalable backend services.
        </p>
      </Reveal>

      {/* CTA Buttons */}
      <Reveal direction="up" delay={0.3} duration={0.5}>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a
            href="#project"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="#skills"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.1] text-[#ededec] font-mono text-xs sm:text-sm hover:bg-white/[0.08] transition-all flex items-center justify-center gap-2"
            >
              <span>Inspect Skills</span>
            </a>

            <a
              href={PROFILE_DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.1] text-[#ededec] font-mono text-xs sm:text-sm hover:bg-white/[0.08] transition-all flex items-center justify-center gap-2"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
