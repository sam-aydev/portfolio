"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Contact() {
  const [currentTime, setCurrentTime] = useState("");
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset(); 
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center bg-neutral-950 py-[15vh] px-6 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto md:w-5/6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Context & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 w-max mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for new opportunities
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-100 mb-6">
              Let's build <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                something great.
              </span>
            </h2>
            
            <p className="text-lg text-neutral-400 mb-12 max-w-md leading-relaxed">
              Whether you have a complex architectural problem to solve, a full-stack role, or just want to connect, my inbox is always open.
            </p>

            {/* Premium Info Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:samueladetunji000@gmail.com" className="group flex flex-col justify-center rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-blue-500/50 hover:bg-neutral-800/80">
                <span className="text-neutral-500 text-sm font-medium mb-2 uppercase tracking-wider">Direct Email</span>
                <span className="text-neutral-200 font-semibold group-hover:text-blue-400 transition-colors">samueladetunji000@gmail.com</span>
              </a>
              
              <div className="flex flex-col justify-center rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
                <span className="text-neutral-500 text-sm font-medium mb-2 uppercase tracking-wider">Local Time (Lagos)</span>
                <span className="text-neutral-200 font-mono font-semibold text-lg">{currentTime || "Loading..."}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glassmorphic Form Container */}
            <form 
              onSubmit={handleSubmit}
              className="relative flex flex-col gap-6 rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 md:p-10 backdrop-blur-xl shadow-2xl"
            >
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-400 ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" // REQUIRED for Formspree
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3 text-neutral-200 placeholder:text-neutral-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" // REQUIRED for Formspree
                    required
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3 text-neutral-200 placeholder:text-neutral-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-400 ml-1">Message</label>
                <textarea 
                  id="message"
                  name="message" // REQUIRED for Formspree
                  required
                  rows={5}
                  placeholder="Tell me about your project or the role you are hiring for..."
                  className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-950/50 px-4 py-3 text-neutral-200 placeholder:text-neutral-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "loading" || status === "success"}
                className={`group relative mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-xl px-8 py-4 font-semibold text-white transition-all disabled:cursor-not-allowed ${
                  status === "success" 
                    ? "bg-emerald-600 hover:bg-emerald-500" 
                    : status === "error"
                    ? "bg-red-600 hover:bg-red-500"
                    : "bg-blue-600 hover:bg-blue-500 active:scale-[0.98]"
                }`}
              >
                <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
                <span className="relative flex items-center gap-2">
                  {status === "idle" && (
                    <>
                      Send Message
                      <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                  {status === "loading" && (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  )}
                  {status === "success" && "Message Sent Successfully!"}
                  {status === "error" && "Error sending. Try again."}
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}