"use client";

import React from "react";
import { EXPERIENCES } from "@/config/portfolio";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
      <Reveal direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="text-xs sm:text-sm font-mono text-orange-500 mb-1.5 uppercase tracking-wider font-semibold">
              // 03. MISSION HISTORY
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#ededec]">
              Experience & Roles
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="flex flex-col gap-3.5 sm:gap-4">
        {EXPERIENCES.map((item, idx) => (
          <Reveal key={item.id} direction="up" delay={idx * 0.1}>
            <div className="cursor-glass p-4 sm:p-6 rounded-2xl border border-white/[0.1] cursor-glass-hover shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3 border-b border-white/[0.06] pb-3">
                <h3 className="text-base sm:text-lg font-bold text-[#ededec] tracking-tight">
                  {item.role}
                </h3>
                <span className="text-[10px] sm:text-xs font-mono text-[#9ca3af] px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] w-fit">
                  {item.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-mono text-[#9ca3af] leading-relaxed mb-3.5">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 mb-4">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#ededec]">
                    <ChevronRight className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-mono bg-white/[0.04] text-[#9ca3af] border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
