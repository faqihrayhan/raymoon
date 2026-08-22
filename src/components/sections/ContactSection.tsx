"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { Mail, ArrowUpRight, Code2 } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.06]">
      <div className="cursor-glass p-8 md:p-14 rounded-2xl border border-white/[0.12] max-w-3xl mx-auto text-center shadow-xl">
        <div className="text-sm font-mono text-orange-500 mb-2 uppercase tracking-wider font-semibold">
          // 05. DIRECT TRANSMISSION
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#ededec] mb-4">
          Let’s build high-performance systems.
        </h2>
        <p className="text-sm font-mono text-[#9ca3af] max-w-lg mx-auto mb-8 leading-relaxed">
          Open for autonomous AI agent pipelines, Web3 smart contract architectures, full-stack dApp engineering, and custom automation infrastructure.
        </p>

        {/* Email CTA */}
        <div className="mb-10">
          <a
            href={`mailto:${PROFILE_DATA.socials.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-black font-mono text-sm font-semibold hover:bg-neutral-200 transition-all shadow-md hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email ({PROFILE_DATA.socials.email})</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Social Links */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-3">
          <a
            href={PROFILE_DATA.socials.x}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-[#9ca3af] hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5 hover:scale-105"
          >
            <span>X / Twitter</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={PROFILE_DATA.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-[#9ca3af] hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5 hover:scale-105"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={PROFILE_DATA.socials.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-[#9ca3af] hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5 hover:scale-105"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
