"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const item: any = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  return (
    <section className="relative  md:w-5/6 mx-auto flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-950 text-neutral-50 px-6">
      {/* Background Ambience / Schematic Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute inset-0 z-0 flex items-center justify-center scale-110 pointer-events-none opacity-20"
      >
        <div className="relative w-[1200px] h-[800px] rounded-2xl border border-neutral-900 grid grid-cols-5 grid-rows-5 gap-2 p-12 overflow-hidden bg-neutral-950/80 shadow-inner">
          <div className="col-start-1 row-start-2 border-2 border-dashed border-neutral-800 rounded-lg flex items-center justify-center text-neutral-800 font-mono text-xs">
            Gin API
          </div>
          <div className="col-start-3 row-start-1 border-2 border-dashed border-neutral-800 rounded-lg flex items-center justify-center text-neutral-800 font-mono text-xs">
            DB Primary (PG)
          </div>
          <div className="col-start-5 row-start-2 border-2 border-dashed border-neutral-800 rounded-lg flex items-center justify-center text-neutral-800 font-mono text-xs">
            Worker: Python
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-neutral-950/0 z-10" />
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl  md:mt-32 text-center flex flex-col items-center"
      >
        {/* Availability Badge */}
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-sm font-medium text-neutral-400 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Full Stack Software Engineer
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
        >
          Adetunji{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Samuel
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-lg md:text-2xl text-neutral-400 max-w-2xl mb-10 leading-relaxed"
        >
          Architecting Scalable Systems. <br className="hidden md:block" />
          Engineering Fluid Interfaces.
        </motion.p>

        {/* Primary CTA */}
        <motion.div variants={item} className="mb-8">
          <Link
            href="#architecture"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-neutral-100 px-8 py-4 font-medium text-neutral-950 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/20"
          >
            <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
            <span className="relative flex items-center gap-3">
              View Architecture
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* SECONDARY ACTION BAR: Socials & CV */}
        <motion.div variants={item} className="flex items-center gap-4">
          {/* Download CV Button */}
          <a
            href="ADETUNJI_SAMUEL_CV.pdf"
            download="ADETUNJI_SAMUEL_CV.pdf"
            className="flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/50 px-5 py-2 text-sm font-medium text-neutral-300 backdrop-blur transition-all hover:border-blue-500 hover:text-white hover:bg-neutral-800"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV
          </a>

          <div className="h-4 w-px bg-neutral-700"></div>

          {/* GitHub Icon */}
          <a
            href="https://github.com/sam-aydev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/sam-aydev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
