"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/config/portfolio";
import { ChevronLeft, ChevronRight, ExternalLink, Code2, Sparkles } from "lucide-react";

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
          <div className="text-xs font-mono text-orange-500 mb-2 uppercase tracking-wider">
            // 04. FEATURED BUILDS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#ededec]">
            Selected Projects & dApps
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8b8e96] max-w-md mt-2 md:mt-0">
          Carousel showcase with standard cubic-bezier zoom in/out dynamics.
        </p>
      </div>

      {/* Carousel Container */}
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
              className={`absolute w-full max-w-[340px] sm:max-w-[480px] md:max-w-[580px] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] cursor-pointer select-none ${
                isActive
                  ? "z-30 scale-100 opacity-100 translate-x-0 cursor-glass-active"
                  : isPrev
                  ? "z-20 scale-[0.90] opacity-40 -translate-x-[60%] sm:-translate-x-[75%] md:-translate-x-[85%] cursor-glass"
                  : "z-20 scale-[0.90] opacity-40 translate-x-[60%] sm:translate-x-[75%] md:translate-x-[85%] cursor-glass"
              } p-6 md:p-8 rounded-xl border border-white/[0.12]`}
            >
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-4 mb-4 border-b border-white/[0.06] pb-3">
                <span className="text-[11px] font-mono text-orange-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-[11px] font-mono text-[#8b8e96]">
                  0{idx + 1} / 0{PROJECTS.length}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-[#ededec] mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-[#8b8e96] leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Telemetry Stats Grid */}
              {item.stats && (
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {item.stats.map((st, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/[0.06] p-2.5 rounded">
                      <div className="text-[10px] font-mono text-[#8b8e96] uppercase">{st.label}</div>
                      <div className="text-xs font-mono font-bold text-[#ededec]">{st.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags & Action Link */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-[#8b8e96] border border-white/[0.06]"
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
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-white text-black text-xs font-mono font-medium hover:bg-neutral-200 transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    Source
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          aria-label="Previous Project"
          className="w-10 h-10 rounded border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-white flex items-center justify-center transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentIndex === i ? "w-6 bg-orange-500" : "w-2 bg-white/20"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next Project"
          className="w-10 h-10 rounded border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-white flex items-center justify-center transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
