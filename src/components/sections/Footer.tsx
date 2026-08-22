"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 max-w-7xl mx-auto border-t border-white/[0.06] text-sm font-mono text-[#9ca3af] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Code2 className="w-4 h-4 text-orange-400" />
        <span className="text-white font-semibold">RAYMOON // {PROFILE_DATA.name}</span>
      </div>
      <div>
        © {new Date().getFullYear()} All systems operational.
      </div>
    </footer>
  );
}
