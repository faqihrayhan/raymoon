"use client";

import React from "react";
import { EXPERIENCES } from "@/config/portfolio";
import { CheckCircle2, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="text-xs font-mono text-orange-500 mb-2 uppercase tracking-wider">
            // 03. MISSION HISTORY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#ededec]">
            Experience & Roles
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8b8e96] max-w-md mt-2 md:mt-0">
          Chronological record of autonomous agent deployments, smart contract audits, and systems engineering.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {EXPERIENCES.map((item, idx) => (
          <div
            key={item.id}
            className="cursor-glass p-6 md:p-8 rounded-xl border border-white/[0.08] cursor-glass-hover"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-white/[0.06] pb-4">
              <div>
                <h3 className="text-lg font-bold text-[#ededec] tracking-tight flex items-center gap-2">
                  <span>{item.role}</span>
                  <span className="text-xs font-mono text-orange-400 font-normal">@ {item.company}</span>
                </h3>
              </div>
              <span className="text-xs font-mono text-[#8b8e96] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] w-fit">
                {item.period}
              </span>
            </div>

            <p className="text-xs font-mono text-[#8b8e96] leading-relaxed mb-5">
              {item.description}
            </p>

            {/* Highlights */}
            <div className="space-y-2 mb-6">
              {item.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#ededec]">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-[#8b8e96] border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
