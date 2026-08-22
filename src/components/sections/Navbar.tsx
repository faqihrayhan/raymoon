"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6 flex justify-center">
      <div className="w-full max-w-5xl cursor-glass rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between border border-white/[0.12] shadow-xl backdrop-blur-2xl bg-[#0c0d0e]/80">
        {/* Left: Brand Name with orange dot */}
        <Link href="#home" className="flex items-center text-white hover:text-white transition-colors">
          <span className="font-mono font-bold text-sm sm:text-base tracking-tight flex items-center">
            Raymoon<span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 ml-1" />
          </span>
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#9ca3af] hover:text-white transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-orange-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Contact Me Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-4 py-1.5 text-xs font-mono font-semibold rounded-full bg-white text-black hover:bg-neutral-200 transition-all shadow-sm hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-1 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed top-14 left-3 right-3 cursor-glass rounded-2xl p-4 border border-white/20 flex flex-col gap-2 font-mono text-xs shadow-2xl z-50 bg-[#0c0d0e]/95 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#9ca3af] hover:text-white py-2 border-b border-white/[0.06] text-center"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-1 w-full py-2.5 text-center rounded-xl bg-white text-black font-bold text-xs shadow"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}
