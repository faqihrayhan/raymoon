"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/config/portfolio";
import { ChevronLeft, ChevronRight, ExternalLink, Code2 } from "lucide-react";

export function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="project" className="py-24 px-4 sm:px-6 w-full max-w-[1400px] mx-auto border-t border-white/[0.06] overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-2">
        <div>
          <div className="text-sm font-mono text-orange-500 mb-2 uppercase tracking-wider font-semibold">
            // 04. FEATURED BUILDS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#ededec]">
            Selected Projects & dApps
          </h2>
        </div>
      </div>

      {/* Panoramic Full-Width Zoom Carousel Container */}
      <div className="relative min-h-[500px] sm:min-h-[520px] md:min-h-[560px] flex items-center justify-center w-full">
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
              className={`absolute w-full max-w-[94vw] sm:max-w-[85vw] md:max-w-[950px] lg:max-w-[1100px] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] cursor-pointer select-none ${
                isActive
                  ? "z-30 scale-100 opacity-100 translate-x-0 cursor-glass-active shadow-[0_30px_90px_rgba(0,0,0,0.8)] border-white/20"
                  : isPrev
                  ? "z-20 scale-[0.88] opacity-30 -translate-x-[70%] sm:-translate-x-[85%] md:-translate-x-[92%] cursor-glass blur-[0.5px]"
                  : "z-20 scale-[0.88] opacity-30 translate-x-[70%] sm:translate-x-[85%] md:translate-x-[92%] cursor-glass blur-[0.5px]"
              } p-6 sm:p-10 md:p-12 rounded-3xl border border-white/[0.12]`}
            >
              {/* Header inside Card */}
              <div className="flex items-center justify-between gap-4 mb-6 border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-mono text-orange-400 uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-mono text-[#9ca3af] px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                  0{idx + 1} / 0{PROJECTS.length}
                </span>
              </div>

              {/* Main Content Grid: Text & Telemetry side by side on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#ededec] tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-mono text-[#9ca3af] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Telemetry Stats Card */}
                {item.stats && (
                  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                    {item.stats.map((st, i) => (
                      <div key={i} className="bg-white/[0.03] border border-white/[0.08] p-4 rounded-2xl flex flex-col justify-center">
                        <div className="text-xs font-mono text-[#9ca3af] uppercase mb-1">{st.label}</div>
                        <div className="text-base sm:text-lg font-mono font-bold text-white">{st.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tags & Action Link */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-mono bg-white/[0.04] text-[#9ca3af] border border-white/[0.08]"
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-xs sm:text-sm font-mono font-semibold hover:bg-neutral-200 transition-all shadow-md hover:scale-105"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>View Repository</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-5 mt-12">
        <button
          onClick={prevSlide}
          aria-label="Previous Project"
          className="w-12 h-12 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.1] text-white flex items-center justify-center transition-all hover:scale-105 shadow-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2.5">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? "w-10 bg-orange-500" : "w-3 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next Project"
          className="w-12 h-12 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.1] text-white flex items-center justify-center transition-all hover:scale-105 shadow-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
