import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-[#070A10] border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-3">
            <span className="font-black text-lg tracking-wider text-slate-900 dark:text-white">
              JOSEPH KN<span className="text-orange-500">.DEV</span>
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              Full-stack software engineer based in Windhoek, Namibia. Crafting fast, scalable, and responsive web applications.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li>
                <a href="#about" className="hover:text-orange-500 transition">About Me</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-500 transition">Featured Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500 transition">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech Stack & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800">Next.js 15</span>
              <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800">TypeScript</span>
              <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800">Tailwind CSS</span>
              <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800">Resend</span>
              <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800">Zod</span>
              <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800">Nest.js</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} Joseph KN. Built with Next.js & Tailwind CSS.</p>
          <div className="flex items-center gap-4 font-semibold">
            <a href="https://github.com/JosephK-N" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">
              GitHub
            </a>
            <span>•</span>
            <a href="#contact" className="hover:text-orange-500 transition">
              Windhoek, Namibia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}