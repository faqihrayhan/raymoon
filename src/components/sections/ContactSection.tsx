"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { Mail, Send, Globe, Code2, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.06]">
      <div className="cursor-glass p-8 md:p-14 rounded-2xl border border-white/[0.1] max-w-3xl mx-auto text-center">
        <div className="text-xs font-mono text-orange-500 mb-2 uppercase tracking-wider">
          // 05. DIRECT TRANSMISSION
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#ededec] mb-4">
          Let’s build high-performance systems.
        </h2>
        <p className="text-xs font-mono text-[#8b8e96] max-w-md mx-auto mb-8 leading-relaxed">
          Open for autonomous AI agent pipelines, Web3 smart contract architectures, full-stack dApp engineering, and custom automation infrastructure.
        </p>

        {/* Email CTA */}
        <div className="mb-10">
          <a
            href={`mailto:${PROFILE_DATA.socials.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-black font-mono text-xs font-medium hover:bg-neutral-200 transition-all shadow-sm"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email ({PROFILE_DATA.socials.email})</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Social Links */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-3">
          <a
            href={PROFILE_DATA.socials.x}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-[#8b8e96] hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5"
          >
            <span>X / Twitter</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={PROFILE_DATA.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-[#8b8e96] hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={PROFILE_DATA.socials.github}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-[#8b8e96] hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
