"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { Activity, GitCommit, Flame, Code } from "lucide-react";

export function StatsSection() {
  return (
    <section id="stats" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Activity className="w-3.5 h-3.5" />
          SYSTEM TELEMETRY & ACTIVITY
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          GitHub & <span className="cosmic-gradient-text">Activity Metrics</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm">
          Live stream data directly from open source repositories, commit history, and ongoing contribution streaks.
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-6 relative z-10">
        {/* Top Two Stats in Glass Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center min-h-[190px]">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-3">
              <GitCommit className="w-4 h-4" />
              OVERVIEW TELEMETRY
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PROFILE_DATA.stats.githubStatsUrl}
              alt="GitHub Stats"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center min-h-[190px]">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-xs mb-3">
              <Code className="w-4 h-4" />
              PRIMARY LANGUAGES
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PROFILE_DATA.stats.topLangsUrl}
              alt="Top Languages"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Streak Stats */}
        <div className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs mb-4">
            <Flame className="w-4 h-4" />
            CONTRIBUTION STREAK MATRIX
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PROFILE_DATA.stats.streakUrl}
            alt="Streak Stats"
            className="w-full max-w-2xl h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
