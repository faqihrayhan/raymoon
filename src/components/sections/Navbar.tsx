"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROFILE_DATA } from "@/config/portfolio";
import { Orbit, Sparkles, Menu, X, Globe } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#hero" },
    { label: "Tech Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Stats", href: "#stats" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center">
      <div className="w-full max-w-5xl glass-panel rounded-full px-5 py-3 flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-2xl">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
            <Orbit className="w-5 h-5 text-white animate-spin" style={{ animationDuration: "18s" }} />
          </div>
          <span className="font-bold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            RAYMOON<span className="text-cyan-400">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-300 transition-colors relative hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Status Badge & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Active Signal
          </div>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:scale-105"
          >
            Connect
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 glass-panel-glow rounded-3xl p-6 border border-white/20 flex flex-col gap-4 text-center z-50 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-300 py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}
