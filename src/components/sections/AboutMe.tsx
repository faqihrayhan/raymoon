"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { Terminal, Shield, Zap, Sparkles } from "lucide-react";

export function AboutMe() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        {/* Left column: Header info */}
        <div className="max-w-md">
          <div className="text-xs font-mono text-orange-500 mb-2 uppercase tracking-wider">
            // 01. ABOUT ME
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#ededec] mb-4">
            Engineering decentralized agents & robust backend pipelines.
          </h2>
          <p className="text-xs font-mono text-[#8b8e96] leading-relaxed mb-6">
            Focused on end-to-end execution: from EVM/Solana contracts and autonomous AI loops down to Linux homelab orchestration.
          </p>
        </div>

        {/* Right column: Engineered Glass Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
          <div className="cursor-glass p-5 rounded-lg border border-white/[0.08] cursor-glass-hover">
            <div className="w-7 h-7 rounded bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-orange-400 mb-3">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-[#ededec] mb-1">On-Chain Autonomy</h3>
            <p className="text-xs text-[#8b8e96] leading-relaxed">
              Shipping autonomous agents executing verified multi-step transactions on Solana with asynchronous runtime loops.
            </p>
          </div>

          <div className="cursor-glass p-5 rounded-lg border border-white/[0.08] cursor-glass-hover">
            <div className="w-7 h-7 rounded bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-cyan-400 mb-3">
              <Shield className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-[#ededec] mb-1">Foundry & Smart Contracts</h3>
            <p className="text-xs text-[#8b8e96] leading-relaxed">
              Writing fuzz-tested EVM contracts deployed on Arc testnet with strict invariants and gas efficiency audits.
            </p>
          </div>

          <div className="cursor-glass p-5 rounded-lg border border-white/[0.08] cursor-glass-hover">
            <div className="w-7 h-7 rounded bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-emerald-400 mb-3">
              <Terminal className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-[#ededec] mb-1">Python Automation</h3>
            <p className="text-xs text-[#8b8e96] leading-relaxed">
              Architecting daemon services, Telegram stream bots, task schedulers, and high-throughput background workers.
            </p>
          </div>

          <div className="cursor-glass p-5 rounded-lg border border-white/[0.08] cursor-glass-hover">
            <div className="w-7 h-7 rounded bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-purple-400 mb-3">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-[#ededec] mb-1">Modern Web Applications</h3>
            <p className="text-xs text-[#8b8e96] leading-relaxed">
              Developing type-safe fullstack dApps (Next.js, Tailwind, Supabase RLS, i18n) with precision UI design systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
