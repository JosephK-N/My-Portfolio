import React from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/80 dark:bg-[#0B0F19]/80 backdrop-blur-md border-b border-slate-800/80 transition-colors duration-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-blue-500/10">
            <Image
              src="/projects/hero.jpg"
              alt="Hero Image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <a href="#" className="text-lg font-black tracking-tight text-white hover:text-orange-500 transition">
              JOSEPH KN<span className="text-orange-500">.</span>
            </a>
            <p className="text-[11px] text-slate-400 font-medium tracking-wide">
              SOFTWARE ENGINEER
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium">
          <a
            href="#projects"
            className="text-slate-300 hover:text-orange-500 transition duration-150"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-slate-300 hover:text-orange-500 transition duration-150"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-slate-300 hover:text-orange-500 transition duration-150"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}