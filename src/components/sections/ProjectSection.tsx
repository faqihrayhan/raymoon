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
    <section id="project" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.06] overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="text-sm font-mono text-orange-500 mb-2 uppercase tracking-wider font-semibold">
            // 04. FEATURED BUILDS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#ededec]">
            Selected Projects & dApps
          </h2>
        </div>
      </div>

      {/* Wider Featured Build Carousel Container */}
      <div className="relative min-h-[440px] md:min-h-[460px] flex items-center justify-center">
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
              className={`absolute w-full max-w-[360px] sm:max-w-[580px] md:max-w-[760px] lg:max-w-[840px] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] cursor-pointer select-none ${
                isActive
                  ? "z-30 scale-100 opacity-100 translate-x-0 cursor-glass-active shadow-2xl"
                  : isPrev
                  ? "z-20 scale-[0.92] opacity-35 -translate-x-[65%] sm:-translate-x-[80%] md:-translate-x-[90%] cursor-glass"
                  : "z-20 scale-[0.92] opacity-35 translate-x-[65%] sm:translate-x-[80%] md:translate-x-[90%] cursor-glass"
              } p-7 md:p-10 rounded-2xl border border-white/[0.12]`}
            >
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-4 mb-4 border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono text-orange-400 uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
                <span className="text-xs font-mono text-[#9ca3af]">
                  0{idx + 1} / 0{PROJECTS.length}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#ededec] mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base font-mono text-[#9ca3af] leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Telemetry Stats Grid */}
              {item.stats && (
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {item.stats.map((st, i) => (
                    <div key={i} className="bg-white/[0.03] border border-white/[0.08] p-3 rounded-xl">
                      <div className="text-xs font-mono text-[#9ca3af] uppercase mb-0.5">{st.label}</div>
                      <div className="text-sm sm:text-base font-mono font-bold text-[#ededec]">{st.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags & Action Link */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-[#9ca3af] border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black text-xs font-mono font-semibold hover:bg-neutral-200 transition-colors shadow-sm"
                  >
                    <Code2 className="w-4 h-4" />
                    Source
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={prevSlide}
          aria-label="Previous Project"
          className="w-11 h-11 rounded-lg border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.1] text-white flex items-center justify-center transition-all hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? "w-8 bg-orange-500" : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next Project"
          className="w-11 h-11 rounded-lg border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.1] text-white flex items-center justify-center transition-all hover:scale-105"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
