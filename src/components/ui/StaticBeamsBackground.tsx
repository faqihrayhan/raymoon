"use client";

import React from "react";

export function StaticBeamsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0c0d0e]">
      {/* Static SVG Beams Vector (Zero CPU/GPU Overhead) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="orange-beam-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f54e00" stopOpacity="0" />
            <stop offset="30%" stopColor="#f54e00" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#f54e00" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#f54e00" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="cyan-beam-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
            <stop offset="35%" stopColor="#00d4ff" stopOpacity="0.2" />
            <stop offset="65%" stopColor="#00d4ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="purple-beam-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0" />
            <stop offset="40%" stopColor="#9333ea" stopOpacity="0.18" />
            <stop offset="80%" stopColor="#9333ea" stopOpacity="0" />
          </linearGradient>

          <filter id="static-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>

        <g filter="url(#static-blur)">
          {/* Beam 1 - Orange Main Ambient Diagonal */}
          <rect
            x="150"
            y="-200"
            width="160"
            height="1500"
            rx="80"
            transform="rotate(-32 150 -200)"
            fill="url(#orange-beam-1)"
          />

          {/* Beam 2 - Cyan Secondary Diagonal */}
          <rect
            x="650"
            y="-300"
            width="140"
            height="1600"
            rx="70"
            transform="rotate(-32 650 -300)"
            fill="url(#cyan-beam-1)"
          />

          {/* Beam 3 - Orange Right Accent Diagonal */}
          <rect
            x="1100"
            y="-100"
            width="180"
            height="1400"
            rx="90"
            transform="rotate(-32 1100 -100)"
            fill="url(#orange-beam-1)"
          />

          {/* Beam 4 - Purple Subtle Soft Background Glow */}
          <rect
            x="-100"
            y="200"
            width="220"
            height="1300"
            rx="110"
            transform="rotate(-32 -100 200)"
            fill="url(#purple-beam-1)"
          />
        </g>
      </svg>

      {/* Ambient Radial Mesh Glow overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 via-cyan-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
}
