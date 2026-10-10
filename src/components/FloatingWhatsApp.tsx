"use client";

import React from "react";

// Replace with your actual WhatsApp phone number (country code + number, e.g. 26481xxxxxxx)
const WHATSAPP_NUMBER = "264818162308"; 
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Joseph, I saw your portfolio and would like to connect!");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Connect on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-4 py-3 rounded-full shadow-2xl shadow-emerald-600/40 border border-emerald-400/30 transition-all duration-300 hover:scale-105 active:scale-95 group"
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
      </svg>
      <span className="hidden sm:inline">Connect</span>
    </a>
  );
}