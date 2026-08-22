"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Project", href: "#project" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full cursor-glass border-b border-white/[0.08] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Brand Name */}
        <Link href="#home" className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors">
          <div className="w-6 h-6 rounded bg-white/10 border border-white/20 flex items-center justify-center">
            <Terminal className="w-3.5 h-3.5 text-orange-400" />
          </div>
          <span className="font-mono font-bold text-sm tracking-tight">Raymoon</span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#8b8e96] hover:text-[#ededec] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[1px] hover:after:bg-orange-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Contact Me Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-mono font-medium rounded-md bg-white text-black hover:bg-neutral-200 transition-all shadow-sm"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-white p-1"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#0c0d0e]/95 backdrop-blur-2xl px-6 py-5 flex flex-col gap-4 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#8b8e96] hover:text-white py-1.5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full py-2.5 text-center rounded-md bg-white text-black font-semibold"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}
