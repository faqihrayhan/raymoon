"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Terminal, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

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
    <section id="about" className="py-14 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
        {/* Left Column: Interactive 3D Card (Compact) */}
        <div 
          className="lg:col-span-5 flex flex-col items-center justify-center relative select-none"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          <Reveal direction="left" duration={0.6}>
            <div
              ref={cardRef}
              className="relative z-10 w-full max-w-[230px] sm:max-w-[270px] cursor-pointer transition-transform duration-200 ease-out"
              style={{
                perspective: "1000px",
                transform: `translateX(${swayX}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                transformOrigin: "center center",
              }}
            >
              <div className="relative rounded-2xl cursor-glass border border-white/20 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl bg-[#14171d]/90 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-white/[0.08] via-transparent to-orange-500/[0.08] pointer-events-none rounded-2xl transition-opacity duration-300"
                  style={{ opacity: isHovering ? 1 : 0.35 }}
                />

                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-3 border border-white/15 bg-black/40 shadow-inner">
                  <Image
                    src="/images/profile/avatar.png"
                    alt="Rayhan Portrait"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="text-center font-mono">
                  <div className="text-xs sm:text-sm text-white font-bold tracking-wider">
                    M. FAQIH RAIHAN
                  </div>
                  <div className="text-[11px] text-orange-400 mt-0.5">
                    Fullstack & Web3 Developer
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Bio & Core Focus Cards (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <Reveal direction="up" delay={0.1}>
            <div className="text-xs sm:text-sm font-mono text-orange-500 mb-1.5 uppercase tracking-wider font-semibold">
              // 01. ABOUT ME
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#ededec] mb-3 leading-tight">
              Building reliable web platforms, smart contracts & user-centric digital products.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#9ca3af] leading-relaxed mb-6 font-normal">
              Specializing in end-to-end web and Web3 engineering: from modern frontend interfaces in React & Next.js, backend APIs, to smart contract logic on EVM chains, and UI/UX design workflows in Figma & Canva.
            </p>
          </Reveal>

          {/* Grid of Key Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Reveal direction="up" delay={0.2}>
              <div className="cursor-glass p-3.5 sm:p-4 rounded-xl border border-white/[0.08] cursor-glass-hover shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-orange-400 mb-2">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#ededec] mb-0.5">Fullstack Engineering</h3>
                <p className="text-[11px] sm:text-xs text-[#9ca3af] leading-relaxed">
                  Building responsive, type-safe Next.js & React web applications with robust backend APIs.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <div className="cursor-glass p-3.5 sm:p-4 rounded-xl border border-white/[0.08] cursor-glass-hover shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-cyan-400 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#ededec] mb-0.5">Web3 & Smart Contracts</h3>
                <p className="text-[11px] sm:text-xs text-[#9ca3af] leading-relaxed">
                  Developing and testing EVM smart contracts with Foundry test harnesses and secure dApp architectures.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="cursor-glass p-3.5 sm:p-4 rounded-xl border border-white/[0.08] cursor-glass-hover shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-emerald-400 mb-2">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#ededec] mb-0.5">Backend & Automation</h3>
                <p className="text-[11px] sm:text-xs text-[#9ca3af] leading-relaxed">
                  Architecting Python async APIs, Telegram integrations, and Dockerized microservices.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <div className="cursor-glass p-3.5 sm:p-4 rounded-xl border border-white/[0.08] cursor-glass-hover shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-purple-400 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#ededec] mb-0.5">UI/UX & Design Systems</h3>
                <p className="text-[11px] sm:text-xs text-[#9ca3af] leading-relaxed">
                  Crafting refined design tokens, interactive mockups, and assets in Figma & Canva.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
