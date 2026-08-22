"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Terminal, ShieldCheck, Zap, Sparkles } from "lucide-react";

export function AboutMe() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [swayX, setSwayX] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Physics 3D tilt & rotation
    const rY = (deltaX / (rect.width / 2)) * 12;
    const rX = -(deltaY / (rect.height / 2)) * 12;
    const sX = (deltaX / (rect.width / 2)) * 6;

    setRotateX(rX);
    setRotateY(rY);
    setSwayX(sX);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
    setSwayX(0);
  };

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Left Column: Interactive 3D Card (Compact on mobile) */}
        <div 
          className="lg:col-span-5 flex flex-col items-center justify-center relative select-none py-2 sm:py-4"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* 3D Tilt Card */}
          <div
            ref={cardRef}
            className="relative z-10 w-full max-w-[240px] sm:max-w-[290px] md:max-w-[320px] cursor-pointer transition-transform duration-200 ease-out"
            style={{
              perspective: "1000px",
              transform: `translateX(${swayX}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
              transformOrigin: "center center",
            }}
          >
            <div className="relative rounded-2xl cursor-glass border border-white/20 p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl bg-[#14171d]/90 overflow-hidden">
              {/* Holographic Specular Highlight */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-white/[0.08] via-transparent to-orange-500/[0.08] pointer-events-none rounded-2xl transition-opacity duration-300"
                style={{ opacity: isHovering ? 1 : 0.35 }}
              />

              {/* Photo Frame */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-3 sm:mb-4 border border-white/15 bg-black/40 shadow-inner">
                <Image
                  src="/images/profile/avatar.png"
                  alt="Rayhan Portrait"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Label */}
              <div className="text-center font-mono">
                <div className="text-xs sm:text-sm text-white font-bold tracking-wider">
                  M. FAQIH RAIHAN
                </div>
                <div className="text-[11px] sm:text-xs text-orange-400 mt-0.5">
                  Autonomous AI Agent & Web3 Developer
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Core Focus Cards (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="text-xs sm:text-sm font-mono text-orange-500 mb-2 uppercase tracking-wider font-semibold">
            // 01. ABOUT ME
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[#ededec] mb-3 sm:mb-4 leading-tight">
            Architecting decentralized systems, smart contracts & modern digital experiences.
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed mb-6 sm:mb-8 font-normal">
            Specializing in end-to-end engineering: from smart contract development & Foundry test suites, autonomous Python pipelines, to complete full-stack web applications designed with precision UI/UX standards in Figma and Canva.
          </p>

          {/* Grid of Key Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="cursor-glass p-4 sm:p-5 rounded-xl border border-white/[0.1] cursor-glass-hover shadow-md">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-orange-400 mb-2.5 sm:mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#ededec] mb-1">Autonomous Systems</h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                Building resilient multi-step autonomous AI execution loops and high-throughput background daemons.
              </p>
            </div>

            <div className="cursor-glass p-4 sm:p-5 rounded-xl border border-white/[0.1] cursor-glass-hover shadow-md">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-cyan-400 mb-2.5 sm:mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#ededec] mb-1">Foundry & Contracts</h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                Developing and fuzz-testing EVM smart contracts with strict security invariants and gas optimization.
              </p>
            </div>

            <div className="cursor-glass p-4 sm:p-5 rounded-xl border border-white/[0.1] cursor-glass-hover shadow-md">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-emerald-400 mb-2.5 sm:mb-3">
                <Terminal className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#ededec] mb-1">Python Automation</h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                Architecting async APIs, Telegram bots, media pipelines, and homelab server orchestration.
              </p>
            </div>

            <div className="cursor-glass p-4 sm:p-5 rounded-xl border border-white/[0.1] cursor-glass-hover shadow-md">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-purple-400 mb-2.5 sm:mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#ededec] mb-1">Fullstack & UI/UX</h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                Building responsive web apps (React, Next.js, Tailwind) and crafting design systems in Figma & Canva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
