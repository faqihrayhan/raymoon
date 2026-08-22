"use client";

import React from "react";
import { Terminal, Shield, Zap, Sparkles } from "lucide-react";

export function AboutMe() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        {/* Left column: Header info */}
        <div className="max-w-md">
          <div className="text-sm font-mono text-orange-500 mb-2 uppercase tracking-wider font-semibold">
            // 01. ABOUT ME
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#ededec] mb-4">
            Engineering decentralized agents & robust backend pipelines.
          </h2>
          <p className="text-sm font-mono text-[#9ca3af] leading-relaxed mb-6">
            Focused on end-to-end execution: from EVM/Solana contracts and autonomous AI loops down to Linux homelab orchestration.
          </p>
        </div>

        {/* Right column: Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
          <div className="cursor-glass p-6 rounded-xl border border-white/[0.1] cursor-glass-hover shadow-md">
            <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-orange-400 mb-3.5">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#ededec] mb-1.5">On-Chain Autonomy</h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Shipping autonomous agents executing verified multi-step transactions on Solana with asynchronous runtime loops.
            </p>
          </div>

          <div className="cursor-glass p-6 rounded-xl border border-white/[0.1] cursor-glass-hover shadow-md">
            <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-cyan-400 mb-3.5">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#ededec] mb-1.5">Foundry & Smart Contracts</h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Writing fuzz-tested EVM contracts deployed on Arc testnet with strict invariants and gas efficiency audits.
            </p>
          </div>

          <div className="cursor-glass p-6 rounded-xl border border-white/[0.1] cursor-glass-hover shadow-md">
            <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-emerald-400 mb-3.5">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#ededec] mb-1.5">Python Automation</h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Architecting daemon services, Telegram stream bots, task schedulers, and high-throughput background workers.
            </p>
          </div>

          <div className="cursor-glass p-6 rounded-xl border border-white/[0.1] cursor-glass-hover shadow-md">
            <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-purple-400 mb-3.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#ededec] mb-1.5">Modern Web Applications</h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Developing type-safe fullstack dApps (Next.js, Tailwind, Supabase RLS, i18n) with precision UI design systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
