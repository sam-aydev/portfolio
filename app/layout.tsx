import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adetunjisamuel.com"), 
  title: {
    default: "Adetunji Samuel | Senior Software Engineer",
    template: "%s | Adetunji Samuel",
  },
  description: "Senior Software & Aspiring Data Engineer architecting scalable systems and fluid interfaces.",
  openGraph: {
    title: "Adetunji Samuel | Senior Software Engineer",
    description: "Senior Software & Data Engineer architecting scalable systems and fluid interfaces.",
    url: "https://adetunjisamuel.com",
    siteName: "Adetunji Samuel Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: '/adetunji_samuel.png', width: 1200, height: 630 }], 
  },
  twitter: {
    card: "summary_large_image",
    title: "Adetunji Samuel | Senior Software Engineer",
    description: "Architecting scalable systems and fluid interfaces.",
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
