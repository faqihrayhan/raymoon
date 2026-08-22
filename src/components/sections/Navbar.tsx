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
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 flex justify-center">
      <div className="w-full max-w-6xl cursor-glass rounded-xl sm:rounded-2xl px-6 py-3.5 flex items-center justify-between border border-white/[0.12] shadow-2xl backdrop-blur-2xl">
        {/* Left: Brand Name without </> logo, with orange dot */}
        <Link href="#home" className="flex items-center text-white hover:text-white transition-colors group">
          <span className="font-mono font-bold text-lg sm:text-xl tracking-tight">
            Raymoon<span className="inline-block w-2 h-2 rounded-full bg-orange-500 ml-0.5" />
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-mono font-medium">
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

        {/* Right: Contact Me Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-mono font-semibold rounded-lg bg-white text-black hover:bg-neutral-200 transition-all shadow-md hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white p-1"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 cursor-glass rounded-xl p-6 border border-white/20 flex flex-col gap-4 font-mono text-sm shadow-2xl z-50 bg-[#0c0d0e]/95 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#9ca3af] hover:text-white py-2 border-b border-white/[0.06]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full py-3 text-center rounded-lg bg-white text-black font-bold text-sm"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}
