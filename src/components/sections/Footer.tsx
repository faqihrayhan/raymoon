"use client";

import React from "react";
import { PROFILE_DATA } from "@/config/portfolio";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

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
    <footer className="py-10 sm:py-14 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/[0.08] text-xs sm:text-sm font-mono text-[#9ca3af]">
      <Reveal direction="up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pb-8 border-b border-white/[0.06]">
          {/* Col 1: Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-2.5">
            <div className="flex items-center text-white">
              <span className="font-bold text-base sm:text-xl tracking-tight">
                Raymoon<span className="inline-block w-2 h-2 rounded-full bg-orange-500 ml-0.5" />
              </span>
            </div>
            <p className="text-xs text-[#9ca3af] leading-relaxed max-w-sm">
              Fullstack & Web3 Developer crafting modern web applications, EVM smart contracts, and responsive UI systems.
            </p>
          </div>

          {/* Col 2: Sitemap (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Sitemap
            </div>
            <ul className="space-y-1.5 text-xs">
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
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Social
            </div>
            <ul className="space-y-1.5 text-xs">
              {socials.map((soc) => (
                <li key={soc.label}>
                  <a
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1 w-fit group"
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
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div>
            © {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
          </div>
          <div className="text-[#555861]">
            All systems operational.
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
