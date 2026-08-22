"use client";

import React from "react";
import Link from "next/link";
import { PROFILE_DATA } from "@/config/portfolio";
import { Code2, ArrowUpRight } from "lucide-react";

export function Footer() {
  const sitemaps = [
    { label: "Home", href: "#home" },
    { label: "About me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Project", href: "#project" },
  ];

  const socials = [
    { label: "Twitter / X", href: PROFILE_DATA.socials.x },
    { label: "LinkedIn", href: PROFILE_DATA.socials.linkedin },
    { label: "GitHub", href: PROFILE_DATA.socials.github },
    { label: "Instagram", href: PROFILE_DATA.socials.instagram },
  ];

  return (
    <footer className="py-16 px-6 max-w-7xl mx-auto border-t border-white/[0.08] text-sm font-mono text-[#9ca3af]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
        {/* Col 1: Brand Info (6 cols) */}
        <div className="md:col-span-6 space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="w-7 h-7 rounded bg-white/10 border border-white/20 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-orange-400" />
            </div>
            <span className="font-bold text-base tracking-tight">Raymoon</span>
          </div>
          <p className="text-xs text-[#9ca3af] leading-relaxed max-w-sm">
            Autonomous AI Agents, Smart Contracts, and modern full-stack web platforms built with rigorous engineering standards.
          </p>
          <div className="text-xs text-[#555861]">
            Contact: <span className="text-orange-400/90">{PROFILE_DATA.socials.email}</span>
          </div>
        </div>

        {/* Col 2: Sitemap (3 cols) */}
        <div className="md:col-span-3 space-y-3">
          <div className="text-xs font-bold text-white uppercase tracking-wider">
            Sitemap
          </div>
          <ul className="space-y-2 text-xs">
            {sitemaps.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-white transition-colors flex items-center gap-1 w-fit"
                >
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Socials (3 cols) */}
        <div className="md:col-span-3 space-y-3">
          <div className="text-xs font-bold text-white uppercase tracking-wider">
            Social
          </div>
          <ul className="space-y-2 text-xs">
            {socials.map((soc) => (
              <li key={soc.label}>
                <a
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 w-fit group"
                >
                  <span>{soc.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#555861] group-hover:text-white transition-colors" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div>
          © {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
        </div>
        <div className="text-[#555861]">
          Designed with Precision Glass Archetype.
        </div>
      </div>
    </footer>
  );
}
