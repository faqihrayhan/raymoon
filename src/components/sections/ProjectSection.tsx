"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/config/portfolio";
import { ChevronLeft, ChevronRight, ExternalLink, Code2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="project" className="py-14 sm:py-20 px-3 sm:px-6 w-full max-w-5xl mx-auto border-t border-white/[0.06] overflow-hidden">
      <Reveal direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 px-2">
          <div>
            <div className="text-xs sm:text-sm font-mono text-orange-500 mb-1.5 uppercase tracking-wider font-semibold">
              // 04. FEATURED BUILDS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#ededec]">
              Selected Projects & dApps
            </h2>
          </div>
        </div>
      </Reveal>

      {/* Compact Zoom Carousel Container */}
      <div className="relative min-h-[380px] sm:min-h-[400px] md:min-h-[420px] flex items-center justify-center w-full">
        {PROJECTS.map((item, idx) => {
          let offset = idx - currentIndex;
          if (offset < -Math.floor(PROJECTS.length / 2)) {
            offset += PROJECTS.length;
          } else if (offset > Math.floor(PROJECTS.length / 2)) {
            offset -= PROJECTS.length;
          }

          const isActive = offset === 0;
          const isPrev = offset === -1;
          const isNext = offset === 1;
          const isVisible = Math.abs(offset) <= 1;

          if (!isVisible) return null;

          return (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`absolute w-full max-w-[88vw] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[640px] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] cursor-pointer select-none ${
                isActive
                  ? "z-30 scale-100 opacity-100 translate-x-0 cursor-glass-active shadow-2xl border-white/20"
                  : isPrev
                  ? "z-20 scale-[0.88] opacity-35 -translate-x-[65%] sm:-translate-x-[75%] md:-translate-x-[85%] cursor-glass blur-[0.5px]"
                  : "z-20 scale-[0.88] opacity-35 translate-x-[65%] sm:translate-x-[75%] md:translate-x-[85%] cursor-glass blur-[0.5px]"
              } p-4 sm:p-6 md:p-7 rounded-2xl border border-white/[0.12]`}
            >
              {/* Header inside Card */}
              <div className="flex items-center justify-between gap-2 mb-3 border-b border-white/[0.08] pb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-mono text-orange-400 uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-[#9ca3af] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                  0{idx + 1} / 0{PROJECTS.length}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#ededec] mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#9ca3af] leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Telemetry Stats */}
              {item.stats && (
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {item.stats.map((st, i) => (
                    <div key={i} className="bg-white/[0.03] border border-white/[0.08] p-2.5 rounded-xl">
                      <div className="text-[9px] sm:text-[10px] font-mono text-[#9ca3af] uppercase mb-0.5">{st.label}</div>
                      <div className="text-xs sm:text-sm font-mono font-bold text-white truncate">{st.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags & Action Link */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-mono bg-white/[0.04] text-[#9ca3af] border border-white/[0.08]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black text-xs font-mono font-semibold hover:bg-neutral-200 transition-all shadow-sm hover:scale-105"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Source</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
        <button
          onClick={prevSlide}
          aria-label="Previous Project"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.1] text-white flex items-center justify-center transition-all hover:scale-105 shadow"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="flex items-center gap-1.5">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? "w-6 bg-orange-500" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next Project"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.1] text-white flex items-center justify-center transition-all hover:scale-105 shadow"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
}
