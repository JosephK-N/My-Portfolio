"use client";

import React, { useState } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

// Replace with your actual WhatsApp phone number (country code + number, no '+' or spaces)
const WHATSAPP_NUMBER = "264818162308"; 
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Joseph, I saw your portfolio and would like to connect!");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

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
              sizes="40px"
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
          
          {/* WHATSAPP CONNECT BUTTON */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-lg shadow-emerald-600/20 transition active:scale-95"
          >
            {/* WhatsApp Icon */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            Connect
          </a>

          <ThemeToggle />
        </div>

        {/* MOBILE CONTROLS */}
        <div className="sm:hidden flex items-center gap-3">
          <ThemeToggle />
          
          <button
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-300 hover:text-white rounded-lg border border-slate-800 bg-slate-900/50 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
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
          <a href="#projects" onClick={closeMenu} className="text-slate-300 hover:text-orange-500 transition py-1">
            Projects
          </a>
          <a href="#about" onClick={closeMenu} className="text-slate-300 hover:text-orange-500 transition py-1">
            About
          </a>
          <a href="#contact" onClick={closeMenu} className="text-slate-300 hover:text-orange-500 transition py-1">
            Contact
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 rounded-xl shadow-lg shadow-emerald-600/20 transition mt-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            WhatsApp Me
          </a>
        </div>
      )}
    </header>
  );
}