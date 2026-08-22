"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 max-w-7xl mx-auto border-t border-white/[0.06] text-xs font-mono text-[#8b8e96] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Terminal className="w-3.5 h-3.5 text-orange-400" />
        <span>RAYMOON // {PROFILE_DATA.name}</span>
      </div>
      <div>
        Engineered with Cursor Design System.
      </div>
      <div>
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
