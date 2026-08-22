"use client";

import React, { useState } from "react";
import { TECH_STACK, TechItem } from "@/config/portfolio";
import { SafeImage } from "@/components/ui/SafeImage";
import { Cpu, Sparkles, Orbit } from "lucide-react";

export function OrbitalTechStack() {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Divide into inner and outer ring
  const innerRing = TECH_STACK.slice(0, 5);
  const outerRing = TECH_STACK.slice(5);

  return (
    <section id="stack" className="relative py-24 px-4 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
          <Orbit className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
          SYSTEM CAPABILITIES
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Orbital <span className="cosmic-gradient-text">Tech Stack</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Core languages, Web3 environments, and resilient infrastructure nodes in continuous planetary rotation.
        </p>
      </div>

      {/* Orbit Visualization Container */}
      <div className="relative w-full max-w-[700px] h-[580px] md:h-[650px] mx-auto flex items-center justify-center">
        {/* Outer Orbit Ring */}
        <div 
          className="absolute w-[460px] h-[460px] md:w-[560px] md:h-[560px] rounded-full border border-cyan-500/20 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 20px rgba(0, 212, 255, 0.05)",
          }}
        />

        {/* Inner Orbit Ring */}
        <div 
          className="absolute w-[290px] h-[290px] md:w-[350px] md:h-[350px] rounded-full border border-purple-500/20 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 20px rgba(168, 85, 247, 0.05)",
          }}
        />

        {/* Center Sun / Core Hub */}
        <div className="relative z-20 flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full glass-panel border border-cyan-400/40 shadow-[0_0_40px_rgba(0,212,255,0.25)] p-4 text-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 animate-pulse pointer-events-none" />
          <Cpu className="w-8 h-8 text-cyan-300 mb-1 animate-bounce" style={{ animationDuration: "3s" }} />
          <span className="font-mono text-xs font-bold text-white tracking-wider">CORE</span>
          <span className="text-[10px] text-cyan-400/80 font-mono">SYSTEM</span>
        </div>

        {/* Rotating Outer Ring Container */}
        <div 
          className="absolute w-[460px] h-[460px] md:w-[560px] md:h-[560px] rounded-full flex items-center justify-center transition-all"
          style={{
            animation: `spin 35s linear infinite ${isHovered ? "paused" : "running"}`,
          }}
        >
          {outerRing.map((tech, idx) => {
            const angle = (idx / outerRing.length) * 360;
            const radius = typeof window !== "undefined" && window.innerWidth < 768 ? 230 : 280;
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);

            return (
              <div
                key={tech.id}
                className="absolute"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setSelectedTech(tech);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
                onClick={() => setSelectedTech(tech)}
              >
                {/* Counter rotate to keep icon upright */}
                <div 
                  className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl glass-panel-glow border border-white/20 hover:scale-125 transition-transform duration-300 cursor-pointer shadow-lg group relative"
                  style={{
                    animation: `spin 35s linear infinite reverse ${isHovered ? "paused" : "running"}`,
                  }}
                >
                  <SafeImage
                    src={tech.image}
                    alt={tech.name}
                    width={26}
                    height={26}
                    className="w-6 h-6 object-contain"
                  />
                  <div className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300 pointer-events-none border border-cyan-500/30">
                    {tech.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rotating Inner Ring Container */}
        <div 
          className="absolute w-[290px] h-[290px] md:w-[350px] md:h-[350px] rounded-full flex items-center justify-center transition-all"
          style={{
            animation: `spin 22s linear infinite reverse ${isHovered ? "paused" : "running"}`,
          }}
        >
          {innerRing.map((tech, idx) => {
            const angle = (idx / innerRing.length) * 360;
            const radius = typeof window !== "undefined" && window.innerWidth < 768 ? 145 : 175;
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);

            return (
              <div
                key={tech.id}
                className="absolute"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setSelectedTech(tech);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
                onClick={() => setSelectedTech(tech)}
              >
                {/* Counter rotate */}
                <div 
                  className="flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-xl glass-panel border border-white/20 hover:scale-125 transition-transform duration-300 cursor-pointer shadow-lg group relative"
                  style={{
                    animation: `spin 22s linear infinite ${isHovered ? "paused" : "running"}`,
                  }}
                >
                  <SafeImage
                    src={tech.image}
                    alt={tech.name}
                    width={24}
                    height={24}
                    className="w-5 h-5 object-contain"
                  />
                  <div className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-purple-300 pointer-events-none border border-purple-500/30">
                    {tech.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Mini Detail Glass Card */}
      <div className="max-w-md mx-auto mt-8 min-h-[90px] relative z-20">
        {selectedTech ? (
          <div className="glass-panel p-4 rounded-2xl border border-cyan-500/40 animate-fade-in flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center border border-white/10 shrink-0">
              <SafeImage src={selectedTech.image} alt={selectedTech.name} width={28} height={28} className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base">{selectedTech.name}</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {selectedTech.category}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">{selectedTech.description}</p>
            </div>
          </div>
        ) : (
          <div className="glass-panel-subtle p-3 rounded-xl border border-white/5 text-center text-xs text-slate-400 font-mono flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            Hover over any planet node to inspect system telemetry
          </div>
        )}
      </div>
    </section>
  );
}
