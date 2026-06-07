"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState } from "react";

const navLinks = [
  { name: "Architecture", href: "#architecture" },
  { name: "Experience", href: "#experience" },
  { name: "Engine Room", href: "#stack" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Intelligently hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 150 && latest > previous) {
      setHidden(true);
      setIsMobileMenuOpen(false); // Force close mobile menu if scrolling down
    } else {
      setHidden(false);
    }
  });

  // Custom Smooth Scroll Interceptor
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close the mobile menu automatically after clicking a link
      setIsMobileMenuOpen(false); 
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 inset-x-0 z-50 flex flex-col items-center px-4"
    >
      {/* Primary Floating Pill */}
      <div className="flex items-center justify-between gap-2 rounded-full border border-neutral-800 bg-neutral-950/80 px-4 py-2 backdrop-blur-md shadow-2xl w-full max-w-max">
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="px-4 py-2 text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-50 rounded-full hover:bg-neutral-800/50"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Separator (Desktop Only) */}
        <div className="hidden md:block w-px h-6 bg-neutral-800 mx-2" />

        {/* Right Side: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          <a 
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="group relative inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 rounded-full bg-blue-400 opacity-0 blur transition-opacity duration-300 group-hover:opacity-40"></span>
            <span className="relative flex items-center gap-2">
              Let's Build
              <span className="flex h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex items-center justify-center p-2 text-neutral-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              style={{ transform: isMobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Premium Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full max-w-xs flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/90 backdrop-blur-xl shadow-2xl mt-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="flex items-center px-6 py-4 text-sm font-medium text-neutral-300 hover:bg-neutral-800/50 hover:text-white transition-colors border-b border-neutral-800/50 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}