"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
        }}
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D]/95 via-[#071A3D]/70 to-black/35" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        <motion.span
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-yellow-500 text-slate-900 px-4 py-2 rounded-full font-semibold"
        >
          KARBA FINANCIAL CONSULTANT LTD
        </motion.span>

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
          Professional Insurance Advisory and Real Estate Advisory helping
          individuals, families and businesses make informed financial
          decisions with confidence.
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
            href="/about"
            className="border border-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            Learn More
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>

    </section>
  );
}