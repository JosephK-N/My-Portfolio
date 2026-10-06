"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface ProjectSlide {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

interface ProjectCarouselProps {
  projects: ProjectSlide[];
  autoPlayInterval?: number; // In milliseconds (default: 5000ms)
}

export default function ProjectCarousel({
  projects,
  autoPlayInterval = 5000,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Touch gesture state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, [projects.length]);

  // Live Auto-play Timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, autoPlayInterval, nextSlide]);

  // Keyboard navigation (Left/Right Arrow keys)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPlaying(false);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    setIsPlaying(true);
  };

  const activeProject = projects[currentIndex];

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm dark:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
    >
      {/* Slide Image Frame */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative h-64 sm:h-96 bg-slate-900 border-b border-slate-200 dark:border-slate-800 group overflow-hidden select-none"
      >
        {/* Render Image or Animated Fallback */}
        <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
          {activeProject.image ? (
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-blue-950 via-slate-900 to-slate-950 text-slate-400">
              <div className="text-center space-y-3 p-6 max-w-md">
                <span className="text-5xl block animate-bounce">🚀</span>
                <p className="text-lg font-bold text-white tracking-wide">
                  {activeProject.title}
                </p>
                <p className="text-xs text-slate-400">
                  Interactive screenshot preview loaded directly from deployment.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Live Indicator Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-slate-700/80 shadow-md">
          <span
            className={`w-2 h-2 rounded-full ${
              isPlaying ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
            }`}
          />
          <span className="font-medium text-[11px] text-slate-300">
            {isPlaying ? "Live Auto-Advance" : "Paused"}
          </span>
        </div>

        {/* Slide Counter Badge */}
        <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-slate-700/80 font-mono font-semibold">
          {currentIndex + 1} / {projects.length}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-200 cursor-pointer border border-slate-700 backdrop-blur-sm shadow-xl"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-200 cursor-pointer border border-slate-700 backdrop-blur-sm shadow-xl"
        >
          &#10095;
        </button>
      </div>

      {/* Slide Metadata */}
      <div className="p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {activeProject.title}
          </h3>
          <a
            href={activeProject.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-orange-500 hover:text-orange-600 font-semibold transition"
          >
            <span>View Live Project</span>
            <span>&rarr;</span>
          </a>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {activeProject.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {activeProject.tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-100 dark:bg-[#0B0F19] text-slate-700 dark:text-slate-300 text-xs font-medium px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Live Progress Bar & Dot Navigation */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 space-y-3">
          <div className="flex justify-center items-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}