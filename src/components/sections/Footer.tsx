"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { Orbit, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-mono font-bold text-xs">
            <Orbit className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-white font-mono">RAYMOON.DEV</div>
            <div className="text-[11px] text-slate-400">Autonomous AI Agents & Web3 Systems</div>
          </div>
        </div>

        {/* Status Line */}
        <p className="text-xs text-slate-400 font-mono">
          Architected with Cosmic Glass Theme. All systems nominal.
        </p>

        {/* Copyright */}
        <div className="text-xs text-slate-400 font-mono flex items-center gap-1">
          © {new Date().getFullYear()} {PROFILE_DATA.name}. Built on WSL homelab.
        </div>
      </div>
    </footer>
  );
}
