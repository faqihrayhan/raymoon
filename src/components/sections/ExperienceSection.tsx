"use client";

import React from "react";
import { EXPERIENCES } from "@/config/portfolio";
import { ChevronRight } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
        <div>
          <div className="text-xs sm:text-sm font-mono text-orange-500 mb-2 uppercase tracking-wider font-semibold">
            // 03. MISSION HISTORY
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[#ededec]">
            Experience & Roles
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5">
        {EXPERIENCES.map((item) => (
          <div
            key={item.id}
            className="cursor-glass p-5 sm:p-7 md:p-8 rounded-2xl border border-white/[0.1] cursor-glass-hover shadow-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5 sm:mb-4 border-b border-white/[0.06] pb-3.5 sm:pb-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#ededec] tracking-tight">
                  {item.role}
                </h3>
              </div>
              <span className="text-[11px] sm:text-xs font-mono text-[#9ca3af] px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] w-fit">
                {item.period}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-mono text-[#9ca3af] leading-relaxed mb-4 sm:mb-5">
              {item.description}
            </p>

            {/* Highlights */}
            <div className="space-y-2 mb-5 sm:mb-6">
              {item.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#ededec]">
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono bg-white/[0.04] text-[#9ca3af] border border-white/[0.08]"
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
