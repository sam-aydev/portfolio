"use client";

import { motion } from "framer-motion";

// Upgraded data structure with explicit icons from SimpleIcons CDN
const stackDomains = [
  {
    title: "Backend & APIs",
    description: "High-performance, thread-safe server architectures.",
    tech: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python/ffffff" },
      { name: "Golang", icon: "https://cdn.simpleicons.org/go/ffffff" },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/ffffff" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/ffffff" },
      { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/ffffff" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/ffffff" },
    ],
    colSpan: "lg:col-span-2",
    accent: "from-blue-500/20 to-cyan-500/5",
    borderHover: "hover:border-blue-500/50",
  },
  {
    title: "Data & Orchestration",
    description: "Scalable pipelines and database management.",
    tech: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/ffffff" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/ffffff" },
      { name: "Airflow", icon: "https://cdn.simpleicons.org/apacheairflow/ffffff" },
      { name: "dbt", icon: "https://cdn.simpleicons.org/dbt/ffffff" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/ffffff" },
      { name: "TypeORM", icon: "https://cdn.simpleicons.org/typeorm/ffffff" },
    ],
    colSpan: "lg:col-span-1",
    accent: "from-emerald-500/20 to-teal-500/5",
    borderHover: "hover:border-emerald-500/50",
  },
  {
    title: "Frontend & State",
    description: "Fluid, real-time user interfaces.",
    tech: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
      { name: "React 19", icon: "https://cdn.simpleicons.org/react/ffffff" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/ffffff" },
      { name: "Tailwind v4", icon: "https://cdn.simpleicons.org/tailwindcss/ffffff" },
      { name: "Framer", icon: "https://cdn.simpleicons.org/framer/ffffff" },
    ],
    colSpan: "lg:col-span-1",
    accent: "from-purple-500/20 to-pink-500/5",
    borderHover: "hover:border-purple-500/50",
  },
  {
    title: "DevOps & Cloud",
    description: "Automated deployment and cloud provisioning.",
    tech: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/ffffff" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/ffffff" },
      { name: "CI/CD", icon: "https://cdn.simpleicons.org/github/ffffff" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/ffffff" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/ffffff" },
    ],
    colSpan: "lg:col-span-2",
    accent: "from-orange-500/20 to-red-500/5",
    borderHover: "hover:border-orange-500/50",
  }
];

export default function TechStack() {
  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item:any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <section id="stack" className="relative md:w-5/6 mx-auto bg-neutral-950 py-[15vh] px-6 text-neutral-50 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-4">
            The Engine Room
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            Architectural Arsenal.
          </h3>
          <p className="mt-4 text-neutral-400 text-lg max-w-2xl">
            A comprehensive suite of tools selected for performance, scalability, and developer ergonomics.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {stackDomains.map((domain) => (
            <motion.div 
              key={domain.title}
              variants={item}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 backdrop-blur-md transition-all duration-500 ${domain.colSpan} ${domain.borderHover}`}
            >
              {/* Internal Gradient Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0`} />
              
              <div className="relative z-10 mb-8">
                <h4 className="text-2xl font-bold text-neutral-100 mb-2">
                  {domain.title}
                </h4>
                <p className="text-neutral-400">
                  {domain.description}
                </p>
              </div>

              {/* Continuous Sliding Marquee */}
              <div 
                className="relative z-10 mt-auto overflow-hidden flex w-full"
                style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
              >
                <motion.div 
                  className="flex gap-4 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ 
                    ease: "linear", 
                    duration: 15, 
                    repeat: Infinity 
                  }}
                >
                  {[...domain.tech, ...domain.tech].map((tech, idx) => (
                    <div 
                      key={idx} 
                      className="flex w-fit justify-center items-center gap-2 px-8 py-2 bg-neutral-950/80 border border-neutral-800/50 rounded-xl whitespace-nowrap shadow-inner"
                    >
                      {/* Using standard img tag here because these are tiny SVGs and don't need Next.js Image optimization overhead */}
                      <img src={tech.icon} alt={tech.name} className="size-4 opacity-80" loading="lazy" />
                      <span className="text-sm font-medium text-neutral-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}