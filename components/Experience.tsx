"use client";

import { motion } from "motion/react";

const experiences = [
  {
    id: "buildon",
    role: "Senior Fullstack Engineer",
    company: "Buildon Inc.",
    location: "Delaware, US",
    date: "April 2026 - Present",
    achievements: [
      "Architected RESTful APIs with Python (FastAPI/Django) and PostgreSQL, optimizing queries to cut server response time by 60%.",
      "Integrated high-performance Golang API endpoints into the frontend, drastically reducing latency for a highly responsive UX.",
      "Overhauled obsolete legacy source code of a production application, boosting usability and reducing runtime by 50%.",
      "Co-architected backend infrastructure, ensuring scalable data flow and robustness alongside the engineering team."
    ]
  },
  {
    id: "technophlix",
    role: "Software Engineer",
    company: "Technophlix",
    location: "India",
    date: "July 2024 - October 2024",
    achievements: [
      "Refactored Python (FastAPI) services and optimized PostgreSQL queries, achieving a 20% reduction in API response latency.",
      "Developed state-driven web applications using React.js and Tailwind CSS, improving user engagement by 30%.",
      "Implemented RESTful APIs using Node.js and Express to guarantee seamless frontend-backend data orchestration.",
      "Deployed applications ensuring 99.9% uptime across AWS (S3, EC2) and Vercel environments."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative  md:w-5/6 mx-auto bg-neutral-950 text-neutral-50 py-[15vh] px-6">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="text-sm font-semibold tracking-widest text-emerald-500 uppercase mb-4">
            Professional Experience
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            Engineering Impact.
          </h3>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-neutral-800 ml-3 md:ml-6">
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-16 relative pl-8 md:pl-12"
            >
              {/* Timeline Node (The glowing dot) */}
              <span className="absolute -left-[5px] top-1.5 flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-neutral-950" />
              
              {/* Date & Location */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2 text-sm text-neutral-400 font-mono">
                <span className="text-emerald-400">{exp.date}</span>
                <span className="hidden md:inline-block w-1 h-1 rounded-full bg-neutral-700" />
                <span>{exp.location}</span>
              </div>

              {/* Role & Company */}
              <h4 className="text-2xl font-bold text-neutral-100 mb-1">
                {exp.role}
              </h4>
              <h5 className="text-lg font-medium text-neutral-500 mb-6">
                {exp.company}
              </h5>

              {/* Achievements */}
              <ul className="flex flex-col gap-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-300 leading-relaxed group">
                    <svg 
                      className="w-5 h-5 text-neutral-700 mt-1 shrink-0 transition-colors group-hover:text-blue-500" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}