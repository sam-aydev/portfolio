"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const labs = [
  {
    id: "concurrency",
    title: "Resolving SSL Socket Collisions",
    category: "Backend Architecture",
    tags: ["FastAPI", "PostgreSQL", "Threading"],
    problem: "High-throughput APIs often face race conditions and SSL socket collisions when multiple async threads attempt to use a shared database client.",
    solution: "Implemented isolated database client dependency injection at the request level, ensuring each thread maintains a dedicated, thread-safe connection pool.",
    codeSnippet: `def get_db_session():\n  # Isolated connection pool per request\n  db = SessionLocal()\n  try:\n    yield db\n  finally:\n    db.close()`,
  },
  {
    id: "webhooks",
    title: "Idempotent Payment Webhooks",
    category: "System Design",
    tags: ["Next.js", "Lemon Squeezy", "Supabase"],
    problem: "Payment gateways often send duplicate webhook events. Processing these without idempotency can result in double-crediting user accounts.",
    solution: "Engineered a Redis-backed caching layer that validates a unique webhook signature and transaction ID before processing the database mutation.",
    codeSnippet: `// Check idempotency key\nconst isProcessed = await redis.get(txnId);\nif (isProcessed) return { status: 200 };\n\n// Mutate DB and lock key\nawait processSubscription(userId);\nawait redis.set(txnId, 'locked', 'EX', 86400);`,
  },
  {
    id: "medallion",
    title: "Medallion Data Architecture",
    category: "Data Engineering",
    tags: ["dbt", "PostgreSQL", "Pipelines"],
    problem: "Raw analytics queries were causing a 60% increase in database CPU load, slowing down user-facing API endpoints.",
    solution: "Orchestrated a Bronze-Silver-Gold data pipeline. Raw data is incrementally transformed offline, exposing only highly-indexed 'Gold' views to the application layer.",
    codeSnippet: `-- Silver to Gold Transformation (dbt)\nSELECT \n  user_id,\n  COUNT(txn_id) as total_txns,\n  SUM(amount) as ltv\nFROM {{ ref('silver_transactions') }}\nGROUP BY user_id;`,
  }
];

export default function ArchitectureLabs() {
  const [activeLab, setActiveLab] = useState(labs[0].id);

  const currentLab = labs.find((lab) => lab.id === activeLab);

  return (
    <section id="content" className="relative md:w-5/6 mx-auto bg-neutral-950 py-[15vh] px-6 text-neutral-50 border-t border-neutral-900">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-emerald-500 uppercase mb-4">
            Engineering Field Notes
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Architecture Labs.
          </h3>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Deep dives into complex system design challenges, architectural decision records (ADRs), and optimized code structures.
          </p>
        </div>

        {/* Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: The Ledger */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {labs.map((lab) => (
              <button
                key={lab.id}
                onClick={() => setActiveLab(lab.id)}
                className={`text-left px-6 py-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  activeLab === lab.id 
                    ? "bg-neutral-900 border-emerald-500/50 shadow-lg shadow-emerald-900/20" 
                    : "bg-neutral-900/30 border-neutral-800 hover:bg-neutral-900/60 hover:border-neutral-700"
                }`}
              >
                {/* Active Indicator Line */}
                {activeLab === lab.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"
                  />
                )}
                
                <span className="block text-xs font-mono text-emerald-400 mb-2">
                  {lab.category}
                </span>
                <h4 className={`text-xl font-bold transition-colors ${activeLab === lab.id ? "text-neutral-100" : "text-neutral-300"}`}>
                  {lab.title}
                </h4>
              </button>
            ))}
          </div>

          {/* Right Column: The Terminal / Blueprint */}
          <div className="lg:col-span-7 relative h-[600px] rounded-3xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl flex flex-col">
            
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto text-xs font-mono text-neutral-500">
                system_architecture.md
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="relative flex p-6 md:p-8 overflow-auto">
              <AnimatePresence mode="wait">
                {currentLab && (
                  <motion.div
                    key={currentLab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full"
                  >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentLab.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Problem Statement */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold tracking-widest text-red-400 uppercase mb-3">
                        The Problem
                      </h5>
                      <p className="text-neutral-300 leading-relaxed">
                        {currentLab.problem}
                      </p>
                    </div>

                    {/* Solution Statement */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold tracking-widest text-emerald-400 uppercase mb-3">
                        The Architecture Solution
                      </h5>
                      <p className="text-neutral-300 leading-relaxed">
                        {currentLab.solution}
                      </p>
                    </div>

                    {/* Code / Logic Block */}
                    <div className="mt-auto">
                      <h5 className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
                        Implementation Logic
                      </h5>
                      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 overflow-x-auto">
                        <pre className="text-sm font-mono text-neutral-400 whitespace-pre-wrap">
                          <code>{currentLab.codeSnippet}</code>
                        </pre>
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}