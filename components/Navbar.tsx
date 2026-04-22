"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f5f5]/90 backdrop-blur-md shadow-sm border-b border-[#e0dbd4]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-[#2d2d2d] font-semibold text-lg tracking-tight">
          creatopia<span className="text-[#7aad7a]">.</span>
        </span>
        <a
          href="#pricing"
          className="hidden sm:inline-flex items-center gap-2 bg-[#7aad7a] hover:bg-[#5a9a5a] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
        >
          Join the Community →
        </a>
      </div>
    </nav>
  );
}
