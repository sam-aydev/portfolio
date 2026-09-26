"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Agentic Micro-SaaS Orchestrator",
    tech: ["Next.js", "Python", "LLM Agents"],
    description:
      "Engineered an autonomous orchestration platform that leverages multi-agent workflows to dynamically architect, configure, and deploy micro-SaaS infrastructure and deployment pipelines with minimal human intervention.",
    link: "https://agorchestrator.vercel.app/",
    metric: "Agentic Automation",
    image: "/agorchestrator.png",
  },
  {
    id: "02",
    title: "Autonomous Interview Scraper",
    tech: ["Python", "Playwright", "LangChain"],
    description:
      "Developed an intelligent data extraction engine utilizing autonomous AI agents to navigate complex job portals, interpret dynamic DOM structures, and extract, clean, and structure technical interview data at scale.",
    link: "https://ai-interview-kit-alpha.vercel.app/",
    metric: "Intelligent Extraction",
    image: "/ai-interview-kit.png",
  },
  {
    id: "03",
    title: "BYOC PaaS Platform",
    tech: ["FastAPI", "Python", "Next.js", "Docker"],
    description:
      "A Bring-Your-Own-Cloud deployment platform enabling users to orchestrate and provision custom virtual private servers. Engineered a high-performance, thread-safe REST API that resolves concurrent SSL socket collisions through isolated database client dependency injection.",
    link: "https://indepl.vercel.app",
    metric: "High-Concurrency Architecture",
    image: "/byoc.png",
  },
];

export default function Feature() {
  return (
    <section
      id="architecture"
      className="relative w-full md:w-5/6 mx-auto bg-neutral-950 text-neutral-50 py-[10vh] px-4 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16 md:mb-32 text-center md:text-left">
          <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-4">
            Featured Architecture
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
            Systems built for scale.
          </h3>
        </div>

        <div className="flex flex-col gap-12 md:gap-16 pb-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              // Re-enabled 'sticky' for all devices
              // Added cross-browser classes to hide the scrollbar if it needs to scroll internally
              className="sticky flex flex-col lg:flex-row items-center gap-6 lg:gap-8 rounded-3xl border border-neutral-800 bg-neutral-900/80 p-5 md:p-10 backdrop-blur-2xl shadow-2xl shadow-black/50 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] "
              style={{
                // Tighter top spacing so cards don't push too far down
                top: `calc(5vh + ${index * 16}px)`,
                //  Force the card to never extend below the bottom of the screen.
                // Viewport (100vh) - Top Spacing (5vh) = 95vh max height available.
                maxHeight: `calc(105vh - ${index * 16}px)`,
              }}
            >
              {/* Technical Copy (Order 2 on mobile, Order 1 on desktop) */}
              <div className="w-full lg:w-1/2 flex flex-col order-3 lg:order-1 z-10 shrink-3">
                <span className="text-4xl md:text-7xl font-black text-neutral-800  mb-2 md:mb-6">
                  {project.id}
                </span>
                <h4 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-neutral-100">
                  {project.title}
                </h4>

                <div className="flex flex-wrap gap-2 mb-4 md:mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 md:px-4 md:py-1.5 text-xs font-medium rounded-full bg-neutral-950 border border-neutral-800 text-neutral-300 shadow-inner"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Made text slightly smaller on mobile to save vertical space */}
                <p className="text-neutral-400 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                  {project.description}
                </p>

                <Link
                  href={project.link}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-max shadow-lg shadow-blue-900/20 shrink-0"
                >
                  View Project
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
                </Link>
              </div>

              {/* Right Side: The Image (Order 1 on mobile, Order 2 on desktop) */}
              {/* Fixed height on mobile (h-48) instead of aspect ratio prevents it from taking up the entire screen */}
              <div className="w-full lg:w-1/2 relative h-48 md:h-64 lg:h-auto lg:aspect-4/3 rounded-2xl overflow-hidden border border-neutral-800 group order-1 lg:order-2 shadow-2xl bg-neutral-950 shrink-0">
                {/* Subtle gradient overlay to make it blend into the dark theme */}
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/60 to-transparent z-10 pointer-events-none" />

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] z-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />

                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-20 px-3 py-1.5 text-xs font-mono rounded bg-neutral-950/90 backdrop-blur-md border border-neutral-800 text-neutral-300 shadow-lg">
                  {project.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
