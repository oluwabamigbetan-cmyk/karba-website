"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-[#071A3D] text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D] via-[#0A275A] to-[#071A3D]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          Ready to Build a
          <span className="text-[#D4AF37]">
            {" "}Secure Financial Future?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mt-8 text-xl leading-relaxed text-slate-200 max-w-3xl mx-auto"
        >
          Whether you are protecting your family, planning for retirement,
          investing in real estate or growing your wealth, KARBA Financial
          Consultant Ltd is ready to guide you with trusted professional advice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >

          <Link
            href="/book-consultation"
            className="bg-[#D4AF37] hover:bg-[#E8C75A] text-[#071A3D] font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Book Consultation
          </Link>

          <Link
            href="/contact"
            className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#071A3D] transition-all duration-300"
          >
            Contact Us
          </Link>

        </motion.div>

      </div>

    </section>
  );
}