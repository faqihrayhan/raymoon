"use client";

import React, { useState } from "react";
import { TECH_STACK, TechItem } from "@/config/portfolio";
import { Cpu, Terminal, ArrowUpRight } from "lucide-react";

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<TechItem | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Divide into inner and outer ring
  const innerRing = TECH_STACK.slice(0, 5);
  const outerRing = TECH_STACK.slice(5);

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.06] relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="text-xs font-mono text-orange-500 mb-2 uppercase tracking-wider">
            // 02. TECHNICAL SKILLS & ORBITAL MATRIX
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#ededec]">
            Core Skills & Ecosystem
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8b8e96] max-w-md mt-2 md:mt-0">
          Planetary tech orbit with genuine brand vectors. Hover on nodes to inspect telemetry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Orbital Visual (7 cols) */}
        <div className="lg:col-span-7 relative w-full h-[480px] sm:h-[540px] flex items-center justify-center cursor-glass rounded-xl border border-white/[0.08] overflow-hidden">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Outer Orbit Ring */}
          <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-white/[0.07] pointer-events-none" />

          {/* Inner Orbit Ring */}
          <div className="absolute w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] rounded-full border border-white/[0.07] pointer-events-none" />

          {/* Center Hub */}
          <div className="relative z-20 flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#121418] border border-white/[0.15] shadow-2xl p-2 text-center">
            <Cpu className="w-6 h-6 text-orange-400 mb-1" />
            <span className="font-mono text-[10px] font-bold text-[#ededec] tracking-wider">SKILLS</span>
          </div>

          {/* Outer Ring Orbit (Counter-clockwise or slow rotation) */}
          <div
            className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full flex items-center justify-center"
            style={{
              animation: `spin 45s linear infinite ${isHovered ? "paused" : "running"}`,
            }}
          >
            {outerRing.map((tech, idx) => {
              const angle = (idx / outerRing.length) * 360;
              const radius = typeof window !== "undefined" && window.innerWidth < 640 ? 180 : 220;
              const rad = (angle * Math.PI) / 180;
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);

              return (
                <div
                  key={tech.id}
                  className="absolute"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setSelectedSkill(tech);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => setSelectedSkill(tech)}
                >
                  <div
                    className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#14161a] border border-white/[0.12] hover:border-orange-500/60 transition-all hover:scale-125 cursor-pointer shadow-lg group relative p-2"
                    style={{
                      animation: `spin 45s linear infinite reverse ${isHovered ? "paused" : "running"}`,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tech.deviconUrl}
                      alt={tech.name}
                      className="w-6 h-6 object-contain filter drop-shadow"
                    />
                    <div className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/90 px-2 py-0.5 rounded text-[10px] font-mono text-white pointer-events-none border border-white/20">
                      {tech.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inner Ring Orbit */}
          <div
            className="absolute w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] rounded-full flex items-center justify-center"
            style={{
              animation: `spin 28s linear infinite reverse ${isHovered ? "paused" : "running"}`,
            }}
          >
            {innerRing.map((tech, idx) => {
              const angle = (idx / innerRing.length) * 360;
              const radius = typeof window !== "undefined" && window.innerWidth < 640 ? 110 : 135;
              const rad = (angle * Math.PI) / 180;
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);

              return (
                <div
                  key={tech.id}
                  className="absolute"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setSelectedSkill(tech);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => setSelectedSkill(tech)}
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#14161a] border border-white/[0.12] hover:border-orange-500/60 transition-all hover:scale-125 cursor-pointer shadow-lg group relative p-2"
                    style={{
                      animation: `spin 28s linear infinite ${isHovered ? "paused" : "running"}`,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tech.deviconUrl}
                      alt={tech.name}
                      className="w-5 h-5 object-contain filter drop-shadow"
                    />
                    <div className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/90 px-2 py-0.5 rounded text-[10px] font-mono text-white pointer-events-none border border-white/20">
                      {tech.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Grid List of All Skills + Detailed Inspector (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Active Inspector Card */}
          <div className="cursor-glass p-5 rounded-xl border border-white/[0.12] min-h-[140px] flex flex-col justify-center">
            {selectedSkill ? (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={selectedSkill.deviconUrl} alt={selectedSkill.name} className="w-6 h-6" />
                    <span className="font-bold text-base text-[#ededec]">{selectedSkill.name}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.06] text-[#8b8e96] border border-white/[0.08]">
                    {selectedSkill.category}
                  </span>
                </div>
                <p className="text-xs text-[#8b8e96] leading-relaxed font-mono mt-2">
                  {selectedSkill.description}
                </p>
              </div>
            ) : (
              <div className="text-center text-xs font-mono text-[#8b8e96]">
                Hover or click any planetary node in the orbit to inspect telemetry details.
              </div>
            )}
          </div>

          {/* All Skills Static Badges Matrix */}
          <div className="cursor-glass p-4 rounded-xl border border-white/[0.08]">
            <div className="text-[11px] font-mono text-[#8b8e96] mb-3 uppercase tracking-wider">
              All Indexed Technologies
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {TECH_STACK.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setSelectedSkill(tech)}
                  className={`flex items-center gap-2 p-2 rounded-md text-left transition-all border ${
                    selectedSkill?.id === tech.id
                      ? "bg-white/[0.1] border-white/20 text-white"
                      : "bg-white/[0.02] border-white/[0.06] text-[#8b8e96] hover:text-white hover:border-white/[0.12]"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tech.deviconUrl} alt={tech.name} className="w-4 h-4 object-contain" />
                  <span className="text-xs font-mono truncate">{tech.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
