"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "BYOC PaaS Platform",
    tech: ["FastAPI", "Python", "Next.js", "Docker"],
    description:
      "A Bring-Your-Own-Cloud deployment platform enabling users to orchestrate and provision custom virtual private servers. Engineered a high-performance, thread-safe REST API that resolves concurrent SSL socket collisions through isolated database client dependency injection.",
    link: "https://indepl.vercel.app",
    metric: "High-Concurrency Architecture",
    image: "/byoc.png", 
  },
  {
    id: "02",
    title: "Branded URL Engine",
    tech: ["Next.js", "Supabase", "Lemon Squeezy"],
    description:
      "Built a robust shortening service allowing users to generate and manage branded links with custom domains. Implemented secure authentication flows and seamless payment webhook processing for subscription tiers.",
    link: "https://shortliy.vercel.app",
    metric: "End-to-End SaaS",
    image: "/lowurl.png", 
  },
  {
    id: "03",
    title: "AI Translation Matrix",
    tech: ["Full-Stack", "AI Integrations", "Vercel"],
    description:
      "An AI-based translation application focused on low-latency processing and fluid state management to handle dynamic, real-time linguistic transitions.",
    link: "https://trmoof.vercel.app",
    metric: "Real-Time Processing",
    image: "/trmoof.png", 
  },
];

export default function Feature() {
  return (
    <section id="architecture" className="relative w-full md:w-5/6 mx-auto bg-neutral-950 text-neutral-50 py-[10vh] px-4 md:px-8">
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

        {/* The Stacking Card Deck */}
        <div className="flex flex-col gap-12 md:gap-24 pb-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sticky flex flex-col lg:flex-row items-center gap-8 lg:gap-12 rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 md:p-10 backdrop-blur-2xl shadow-2xl shadow-black/50 overflow-hidden"
              style={{
                // This creates the stacking effect. Each card stops a bit lower than the last one.
                top: `calc(12vh + ${index * 40}px)`, 
              }}
            >
              
              {/* Left Side: Technical Copy (Order 2 on mobile, Order 1 on desktop) */}
              <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1 z-10">
                <span className="text-5xl md:text-7xl font-black text-neutral-800 mb-4 md:mb-6">
                  {project.id}
                </span>
                <h4 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-100">
                  {project.title}
                </h4>

                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-xs font-medium rounded-full bg-neutral-950 border border-neutral-800 text-neutral-300 shadow-inner"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <Link
                  href={project.link}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 font-medium text-white transition-all hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-max shadow-lg shadow-blue-900/20"
                >
                  View Deployment
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Right Side: The Image (Order 1 on mobile, Order 2 on desktop) */}
              <div className="w-full lg:w-1/2 relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 group order-1 lg:order-2 shadow-2xl bg-neutral-950 shrink-0">
                
                {/* Subtle gradient overlay to make it blend into the dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent z-10 pointer-events-none" />

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] z-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0} 
                />
                
                <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 text-xs font-mono rounded bg-neutral-950/90 backdrop-blur-md border border-neutral-800 text-neutral-300 shadow-lg">
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