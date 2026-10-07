"use client";

import React, { useState } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors duration-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        
        {/* BRAND & AVATAR */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-blue-500/10 flex-shrink-0">
            <Image
              src="/hero.jpg"
              alt="Joseph KN"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <a href="#" className="text-base sm:text-lg font-black tracking-tight text-white hover:text-orange-500 transition">
              JOSEPH KN<span className="text-orange-500">.</span>
            </a>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-wide">
              SOFTWARE ENGINEER
            </p>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
          <a href="#projects" className="text-slate-300 hover:text-orange-500 transition">
            Projects
          </a>
          <a href="#about" className="text-slate-300 hover:text-orange-500 transition">
            About
          </a>
          <a href="#contact" className="text-slate-300 hover:text-orange-500 transition">
            Contact
          </a>
          <ThemeToggle />
        </div>

        {/* MOBILE CONTROLS (THEME TOGGLE + HAMBURGER BUTTON) */}
        <div className="sm:hidden flex items-center gap-3">
          <ThemeToggle />
          
          <button
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-300 hover:text-white rounded-lg border border-slate-800 bg-slate-900/50 focus:outline-none"
          >
            {isMenuOpen ? (
              // CLOSE (X) ICON
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // HAMBURGER ICON
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {isMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-[#0B0F19] px-6 py-4 flex flex-col gap-4 text-sm font-medium animate-in slide-in-from-top-2 duration-200">
          <a
            href="#projects"
            onClick={closeMenu}
            className="text-slate-300 hover:text-orange-500 transition py-1"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="text-slate-300 hover:text-orange-500 transition py-1"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-slate-300 hover:text-orange-500 transition py-1"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}