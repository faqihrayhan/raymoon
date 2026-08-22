"use client";

import React, { useEffect, useState, memo } from "react";
import { TECH_STACK, TechItem } from "@/config/portfolio";
import { Reveal } from "@/components/ui/Reveal";

type GlowColor = "cyan" | "purple" | "orange";

interface SkillConfig {
  id: string;
  orbitRadiusDesktop: number;
  orbitRadiusMobile: number;
  sizeDesktop: number;
  sizeMobile: number;
  speed: number;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
  deviconUrl: string;
  item: TechItem;
}

const innerList = TECH_STACK.slice(0, 6);
const outerList = TECH_STACK.slice(6);

const orbitalConfigs: SkillConfig[] = [
  ...innerList.map((tech, idx) => ({
    id: tech.id,
    orbitRadiusDesktop: 110,
    orbitRadiusMobile: 72,
    sizeDesktop: 38,
    sizeMobile: 28,
    speed: 0.35,
    phaseShift: (idx * 2 * Math.PI) / innerList.length,
    glowColor: (idx % 2 === 0 ? "orange" : "cyan") as GlowColor,
    label: tech.name,
    deviconUrl: tech.deviconUrl,
    item: tech,
  })),
  ...outerList.map((tech, idx) => ({
    id: tech.id,
    orbitRadiusDesktop: 180,
    orbitRadiusMobile: 120,
    sizeDesktop: 42,
    sizeMobile: 32,
    speed: -0.22,
    phaseShift: (idx * 2 * Math.PI) / outerList.length,
    glowColor: (idx % 2 === 0 ? "purple" : "cyan") as GlowColor,
    label: tech.name,
    deviconUrl: tech.deviconUrl,
    item: tech,
  })),
];

const OrbitingSkillNode = memo(({
  config,
  angle,
  isMobile,
  onSelect,
}: {
  config: SkillConfig;
  angle: number;
  isMobile: boolean;
  onSelect: (item: TechItem) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadiusDesktop, orbitRadiusMobile, sizeDesktop, sizeMobile, label, deviconUrl, glowColor, item } = config;

  const orbitRadius = isMobile ? orbitRadiusMobile : orbitRadiusDesktop;
  const size = isMobile ? sizeMobile : sizeDesktop;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  const glowShadowMap = {
    cyan: "rgba(6, 182, 212, 0.55)",
    purple: "rgba(147, 51, 234, 0.55)",
    orange: "rgba(245, 78, 0, 0.55)",
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-100 ease-linear select-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 30 : 10,
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onSelect(item);
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(item)}
    >
      <div
        className={`
          relative w-full h-full p-1.5 bg-[#121418]/90 backdrop-blur-md
          rounded-full flex items-center justify-center border border-white/[0.15]
          transition-all duration-300 cursor-pointer
          ${isHovered ? "scale-125 border-orange-400" : "hover:border-white/30"}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 25px ${glowShadowMap[glowColor]}, 0 0 50px ${glowShadowMap[glowColor]}`
            : `0 4px 15px rgba(0,0,0,0.5)`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={deviconUrl} alt={label} className="w-full h-full object-contain filter drop-shadow" />
        {isHovered && (
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#0c0d0e]/95 border border-white/20 rounded text-[10px] font-mono text-white whitespace-nowrap pointer-events-none shadow-xl z-50">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkillNode.displayName = "OrbitingSkillNode";

const GlowingOrbitPath = memo(({ radius, glowColor = "cyan" }: { radius: number; glowColor?: GlowColor }) => {
  const glowColors = {
    cyan: {
      primary: "rgba(6, 182, 212, 0.35)",
      secondary: "rgba(6, 182, 212, 0.15)",
      border: "rgba(6, 182, 212, 0.25)",
    },
    purple: {
      primary: "rgba(147, 51, 234, 0.35)",
      secondary: "rgba(147, 51, 234, 0.15)",
      border: "rgba(147, 51, 234, 0.25)",
    },
    orange: {
      primary: "rgba(245, 78, 0, 0.35)",
      secondary: "rgba(245, 78, 0, 0.15)",
      border: "rgba(245, 78, 0, 0.25)",
    },
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, transparent 40%, ${colors.secondary} 75%, ${colors.primary} 100%)`,
          boxShadow: `0 0 25px ${colors.primary}, inset 0 0 15px ${colors.secondary}`,
        }}
      />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 8px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = "GlowingOrbitPath";

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<TechItem | null>(null);
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime((prevTime) => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section id="skills" className="py-14 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06] relative">
      <Reveal direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="text-xs sm:text-sm font-mono text-orange-500 mb-1.5 uppercase tracking-wider font-semibold">
              // 02. TECHNICAL SKILLS & ORBITAL MATRIX
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#ededec]">
              Core Skills & Ecosystem
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Left Column: Orbital Canvas Component */}
        <div className="lg:col-span-7">
          <Reveal direction="left" delay={0.1}>
            <div 
              className="relative w-full h-[320px] sm:h-[420px] flex items-center justify-center cursor-glass rounded-2xl border border-white/[0.1] overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none" />

              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1e222b] to-[#0f1115] rounded-full flex items-center justify-center z-20 relative shadow-xl border border-white/[0.2]">
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
                <div className="relative z-10 scale-75 sm:scale-90">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-hub)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="gradient-hub" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00d4ff" />
                        <stop offset="100%" stopColor="#f54e00" />
                      </linearGradient>
                    </defs>
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
              </div>

              <GlowingOrbitPath radius={isMobile ? 72 : 110} glowColor="orange" />
              <GlowingOrbitPath radius={isMobile ? 120 : 180} glowColor="cyan" />

              {orbitalConfigs.map((config) => {
                const angle = time * config.speed + (config.phaseShift || 0);
                return (
                  <OrbitingSkillNode
                    key={config.id}
                    config={config}
                    angle={angle}
                    isMobile={isMobile}
                    onSelect={(item) => setSelectedSkill(item)}
                  />
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Right Column: Grid List of All Skills + Inspector */}
        <div className="lg:col-span-5 flex flex-col gap-3.5">
          <Reveal direction="right" delay={0.2}>
            <div className="cursor-glass p-4 sm:p-5 rounded-2xl border border-white/[0.12] min-h-[120px] flex flex-col justify-center shadow-md">
              {selectedSkill ? (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={selectedSkill.deviconUrl} alt={selectedSkill.name} className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="font-bold text-sm sm:text-base text-[#ededec]">{selectedSkill.name}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.08] text-[#9ca3af] border border-white/[0.1]">
                      {selectedSkill.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#9ca3af] leading-relaxed font-mono">
                    {selectedSkill.description}
                  </p>
                </div>
              ) : (
                <div className="text-center text-xs font-mono text-[#9ca3af]">
                  Hover or click any node to view details.
                </div>
              )}
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.3}>
            <div className="cursor-glass p-4 sm:p-5 rounded-2xl border border-white/[0.08] shadow-sm">
              <div className="text-[11px] font-mono text-[#9ca3af] mb-2.5 uppercase tracking-wider font-semibold">
                All Indexed Technologies
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                {TECH_STACK.map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedSkill(tech)}
                    className={`flex items-center gap-2 p-1.5 sm:p-2 rounded-lg text-left transition-all border ${
                      selectedSkill?.id === tech.id
                        ? "bg-white/[0.12] border-white/30 text-white shadow"
                        : "bg-white/[0.02] border-white/[0.06] text-[#9ca3af] hover:text-white hover:border-white/[0.15]"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tech.deviconUrl} alt={tech.name} className="w-4 h-4 object-contain shrink-0" />
                    <span className="text-[10px] sm:text-xs font-mono font-medium truncate">{tech.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
