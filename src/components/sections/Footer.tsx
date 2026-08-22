"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { ArrowUpRight } from "lucide-react";

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
    <footer className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.08] text-sm sm:text-base font-mono text-[#9ca3af]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/[0.06]">
        {/* Col 1: Brand Info (6 cols) */}
        <div className="md:col-span-6 space-y-3 sm:space-y-4">
          <div className="flex items-center text-white">
            <span className="font-bold text-lg sm:text-2xl tracking-tight">
              Raymoon<span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500 ml-0.5" />
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed max-w-md">
            Autonomous AI Agents, Smart Contracts, and modern full-stack web platforms built with rigorous engineering standards.
          </p>
        </div>

        {/* Col 2: Sitemap (3 cols) */}
        <div className="md:col-span-3 space-y-2.5 sm:space-y-3">
          <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
            Sitemap
          </div>
          <ul className="space-y-2 text-xs sm:text-sm">
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
        <div className="md:col-span-3 space-y-2.5 sm:space-y-3">
          <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
            Social
          </div>
          <ul className="space-y-2 text-xs sm:text-sm">
            {socials.map((soc) => (
              <li key={soc.label}>
                <a
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 w-fit group"
                >
                  <span>{soc.label}</span>
                  <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#555861] group-hover:text-white transition-colors" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <div>
          © {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
        </div>
        <div className="text-[#555861]">
          All systems operational.
        </div>
      </div>
    </footer>
  );
}
