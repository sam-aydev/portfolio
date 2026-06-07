import { Metadata } from "next";
import Contact from "@/components/Contact";
import TechnicalContent from "@/components/Architecture"; // Note: Make sure you don't have duplicate imports
import Experience from "@/components/Experience";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import ArchitectureLabs from "@/components/Architecture";

// 1. STANDARD METADATA API
export const metadata: Metadata = {
  title: "Adetunji Samuel | Full Stack Software Engineer",
  description:
    "Portfolio of Adetunji Samuel, a Full Stack Engineer specializing in scalable backend architectures, high-concurrency APIs, and fluid Next.js interfaces.",
  keywords: [
    "Full Stack Engineer",
    "Backend Developer",
    "Next.js",
    "Python",
    "FastAPI",
    "Golang",
    "Software Architect",
  ],
  authors: [{ name: "Adetunji Samuel" }],
  creator: "Adetunji Samuel",
  
  // 2. OPEN GRAPH (For LinkedIn, Slack, Discord)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com", // TODO: Replace with your actual domain
    title: "Adetunji Samuel | Software Engineer",
    description: "Architecting scalable systems and engineering fluid interfaces.",
    siteName: "Adetunji Samuel Portfolio",
    images: [
      {
        url: "/images/og-image.png", // TODO: Create a 1200x630 image and put it in /public/images/
        width: 1200,
        height: 630,
        alt: "Adetunji Samuel - Full Stack Engineer",
      },
    ],
  },
  
  // 3. TWITTER CARDS (For X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Adetunji Samuel | Software Engineer",
    description: "Architecting scalable systems and engineering fluid interfaces.",
    images: ["/images/og-image.png"],
    creator: "@yourtwitterhandle", // TODO: Add your handle or remove this line
  },
  
  // Canonical URLs prevent duplicate content penalties from Google
  alternates: {
    canonical: "https://yourdomain.com", 
  },
};

// 4. STRUCTURED DATA (JSON-LD)
// This explicitly tells Google who you are, what you do, and where to find you.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adetunji Samuel",
  jobTitle: "Full Stack Software Engineer",
  url: "https://yourdomain.com",
  sameAs: [
    "https://github.com/YOUR_GITHUB",
    "https://linkedin.com/in/YOUR_LINKEDIN",
  ],
  knowsAbout: [
    "Software Engineering",
    "Backend Architecture",
    "Next.js",
    "Python",
    "Golang",
    "PostgreSQL"
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Injecting Structured Data into the DOM invisibly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <Hero />
      <Feature />
      <Experience />
      <TechStack />
      <ArchitectureLabs />
      <Contact />
      <Footer />
    </main>
  );
}