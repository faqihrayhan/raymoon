"use client";

import React, { useState } from "react";
import { EXPERIENCES } from "@/config/portfolio";
import { SafeImage } from "@/components/ui/SafeImage";
import { ChevronLeft, ChevronRight, ExternalLink, Code2, Terminal, Sparkles } from "lucide-react";

export function ExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? EXPERIENCES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === EXPERIENCES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
          <Terminal className="w-3.5 h-3.5" />
          MISSION LOGS & CASE STUDIES
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Experience & <span className="cosmic-gradient-text">Featured Builds</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Interactive carousel showcasing autonomous agents on Solana, smart contract test harnesses, and high-load web systems.
        </p>
      </div>

      {/* 3D Zoom In/Out Carousel Container */}
      <div className="max-w-6xl mx-auto relative px-4">
        <div className="flex items-center justify-center min-h-[460px] md:min-h-[500px] relative">
          {EXPERIENCES.map((item, idx) => {
            // Distance from active slide
            let offset = idx - currentIndex;
            if (offset < -Math.floor(EXPERIENCES.length / 2)) {
              offset += EXPERIENCES.length;
            } else if (offset > Math.floor(EXPERIENCES.length / 2)) {
              offset -= EXPERIENCES.length;
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
                className={`absolute w-full max-w-[340px] sm:max-w-[480px] md:max-w-[620px] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] cursor-pointer select-none ${
                  isActive
                    ? "z-30 scale-100 opacity-100 translate-x-0"
                    : isPrev
                    ? "z-20 scale-[0.88] opacity-40 -translate-x-[60%] sm:-translate-x-[75%] md:-translate-x-[85%] blur-[1px]"
                    : "z-20 scale-[0.88] opacity-40 translate-x-[60%] sm:translate-x-[75%] md:translate-x-[85%] blur-[1px]"
                }`}
              >
                <div className={`rounded-3xl p-6 md:p-8 transition-all duration-500 ${
                  isActive
                    ? "glass-panel-glow border-cyan-500/40 shadow-[0_0_50px_rgba(0,212,255,0.2)]"
                    : "glass-panel border-white/10"
                }`}>
                  {/* Top bar header */}
                  <div className="flex items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                      <span className="text-xs font-mono text-cyan-300 font-semibold tracking-wider uppercase">
                        {item.role}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-full bg-slate-800/80 border border-white/5">
                      {item.period}
                    </span>
                  </div>

                  {/* Project Image Banner / Preview */}
                  <div className="relative w-full h-44 md:h-56 rounded-2xl overflow-hidden mb-6 bg-slate-900/80 border border-white/10 flex items-center justify-center group">
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                      fallbackIcon={
                        <div className="flex flex-col items-center gap-2 text-cyan-400">
                          <Sparkles className="w-8 h-8 animate-pulse" />
                          <span className="font-mono text-xs">{item.title}</span>
                        </div>
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Telemetry Stats */}
                  {item.stats && (
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {item.stats.map((st, i) => (
                        <div key={i} className="glass-panel-subtle p-2.5 rounded-xl border border-white/5">
                          <div className="text-[10px] uppercase font-mono text-slate-400">{st.label}</div>
                          <div className="text-sm font-mono font-bold text-cyan-300">{st.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags & Action Links */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/10"
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel hover:bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs font-mono transition-colors"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        Source
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-12 h-12 rounded-full glass-panel hover:bg-white/10 border border-white/20 flex items-center justify-center text-white hover:text-cyan-400 transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {EXPERIENCES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentIndex === i
                    ? "w-8 bg-gradient-to-r from-cyan-400 to-purple-500"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-12 h-12 rounded-full glass-panel hover:bg-white/10 border border-white/20 flex items-center justify-center text-white hover:text-cyan-400 transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
