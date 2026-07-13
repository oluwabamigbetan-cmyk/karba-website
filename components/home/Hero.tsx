"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-center bg-[center_30%]"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
        }}
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D]/95 via-[#071A3D]/70 to-black/35" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">

        <motion.div
  initial={{ opacity: 0, y: -15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="inline-flex items-center rounded-full border border-[#D4AF37] bg-white/5 backdrop-blur-sm px-5 py-2 text-sm md:text-base font-semibold tracking-[0.15em] text-[#D4AF37]"
>
  KARBA Financial Consultant Ltd
</motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Live Confidently.
          <br />
          Invest Wisely.
          <br />
          <span className="text-yellow-400">
            Leave a Legacy.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 text-xl max-w-3xl text-slate-200 leading-relaxed"
        >
          Professional Insurance, Real Estate and Financial Advisory services that help individuals, families and businesses make informed financial decisions with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap gap-5 mt-12"
        >
          <Link
            href="/book-consultation"
            className="bg-[#D4AF37] hover:bg-[#E7C14D] text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Book Consultation
          </Link>

          <Link
  href="/contact"
            className="border border-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>

    </section>
  );
}