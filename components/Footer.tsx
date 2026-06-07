"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-neutral-600 border-t border-neutral-900">
      © {new Date().getFullYear()} Adetunji Samuel. 
    </footer>
  );
}
