"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Terminal, Shield, Zap, Sparkles, MapPin, UserCheck, ShieldCheck } from "lucide-react";

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

    // Physics rotation & pendulum sway
    const rY = (deltaX / (rect.width / 2)) * 14;
    const rX = -(deltaY / (rect.height / 2)) * 14;
    const sX = (deltaX / (rect.width / 2)) * 12;

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
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Interactive Hanging Lanyard Card (5 cols) */}
        <div 
          className="lg:col-span-5 flex flex-col items-center justify-center relative select-none py-6"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Lanyard Top Ceiling Clip & Strap Anchor */}
          <div className="relative z-20 flex flex-col items-center pointer-events-none">
            {/* Metal Ceiling Pin */}
            <div className="w-10 h-3 rounded-full bg-gradient-to-r from-neutral-600 via-neutral-300 to-neutral-700 shadow-md border border-white/20" />
            
            {/* Lanyard Fabric Ribbon Strap (Woven Blue/White Ribbon matching the photo) */}
            <div 
              className="w-4 h-20 bg-gradient-to-b from-[#1d4ed8] via-[#2563eb] to-[#1e40af] border-x border-[#60a5fa]/60 shadow-lg relative transition-transform duration-200 ease-out origin-top"
              style={{
                transform: `rotate(${swayX * 0.7}deg)`,
              }}
            >
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-white/80" />
            </div>

            {/* Metal Swivel Hook / Keyring */}
            <div 
              className="w-6 h-6 rounded-full border-2 border-neutral-300 bg-neutral-800 -mt-1 shadow-md flex items-center justify-center transition-transform duration-200 ease-out"
              style={{
                transform: `rotate(${swayX * 0.9}deg)`,
              }}
            >
              <div className="w-2 h-3 bg-neutral-400 rounded-sm" />
            </div>
          </div>

          {/* Hanging Identity Badge Card with 3D Physics */}
          <div
            ref={cardRef}
            className="relative z-10 w-full max-w-[280px] sm:max-w-[310px] cursor-pointer transition-transform duration-200 ease-out"
            style={{
              perspective: "1000px",
              transform: `translateX(${swayX}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(${swayX * 0.3}deg)`,
              transformOrigin: "top center",
            }}
          >
            <div className="relative rounded-2xl cursor-glass border border-white/20 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl bg-[#14171d]/90 overflow-hidden">
              {/* Lanyard Clip Slot Hole at top of Card */}
              <div className="w-12 h-2.5 mx-auto bg-[#0a0c10] rounded-full border border-white/20 mb-4 shadow-inner" />

              {/* Holographic Specular Sheen on Card */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-white/[0.08] via-transparent to-orange-500/[0.08] pointer-events-none rounded-2xl transition-opacity duration-300"
                style={{ opacity: isHovering ? 1 : 0.4 }}
              />

              {/* Photo Frame Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 border border-white/15 bg-black/40 shadow-inner">
                <Image
                  src="/images/profile/avatar.png"
                  alt="Rayhan Portrait"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded bg-[#0c0d0e]/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white font-semibold">M. FAQIH RAIHAN</span>
                  <span className="text-orange-400">DEV / ARCH</span>
                </div>
              </div>

              {/* Badge Details */}
              <div className="space-y-1.5 text-center font-mono">
                <div className="text-xs text-white font-bold tracking-wider uppercase">
                  RAYMOON HQ · SYSTEM ID
                </div>
                <div className="text-[10px] text-[#9ca3af] flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AUTHENTICATED · ON-CHAIN DEV
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Core Focus Cards (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="text-sm font-mono text-orange-500 mb-2 uppercase tracking-wider font-semibold">
            // 01. ABOUT ME
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#ededec] mb-4 leading-tight">
            Architecting decentralized systems, smart contracts & modern digital experiences.
          </h2>
          <p className="text-base text-[#9ca3af] leading-relaxed mb-8 font-normal">
            Specializing in end-to-end engineering: from smart contract development & Foundry test suites, autonomous Python pipelines, to complete full-stack web applications designed with precision UI/UX standards in Figma and Canva.
          </p>

          {/* Grid of Key Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="cursor-glass p-5 rounded-xl border border-white/[0.1] cursor-glass-hover shadow-md">
              <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-orange-400 mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#ededec] mb-1">Autonomous Systems</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Building resilient multi-step autonomous AI execution loops and high-throughput background daemons.
              </p>
            </div>

            <div className="cursor-glass p-5 rounded-xl border border-white/[0.1] cursor-glass-hover shadow-md">
              <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-cyan-400 mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#ededec] mb-1">Foundry & Contracts</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Developing and fuzz-testing EVM smart contracts with strict security invariants and gas optimization.
              </p>
            </div>

            <div className="cursor-glass p-5 rounded-xl border border-white/[0.1] cursor-glass-hover shadow-md">
              <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-emerald-400 mb-3">
                <Terminal className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#ededec] mb-1">Python Automation</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Architecting async APIs, Telegram bots, media pipelines, and homelab server orchestration.
              </p>
            </div>

            <div className="cursor-glass p-5 rounded-xl border border-white/[0.1] cursor-glass-hover shadow-md">
              <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-purple-400 mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#ededec] mb-1">Fullstack & UI/UX</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Building responsive web apps (React, Next.js, Tailwind) and crafting design systems in Figma & Canva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
