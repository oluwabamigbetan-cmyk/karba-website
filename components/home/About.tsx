"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Building2, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase">
            About KARBA
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#071A3D]">
            Building Confidence Through
            <span className="text-[#D4AF37]"> Financial Excellence</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            At KARBA Financial Consultant Ltd, we believe that sound financial decisions create lasting security and opportunities. Through our professional insurance, real estate, and financial advisory services, we help individuals, families, and businesses protect what matters most, grow their wealth, and achieve their financial goals with confidence.
          </p>
        </motion.div>

        {/* Three Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition"
          >
            <ShieldCheck className="text-[#D4AF37]" size={44} />

            <h3 className="mt-6 text-2xl font-bold text-[#071A3D]">
              Insurance Advisory
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Helping clients protect their income, family, education,
              retirement and business through carefully tailored insurance
              solutions.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition"
          >
            <Building2 className="text-[#D4AF37]" size={44} />

            <h3 className="mt-6 text-2xl font-bold text-[#071A3D]">
              Real Estate Advisory
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Guiding clients in making informed property investment
              decisions focused on long-term value, security and wealth
              creation.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition"
          >
            <TrendingUp className="text-[#D4AF37]" size={44} />

            <h3 className="mt-6 text-2xl font-bold text-[#071A3D]">
              Financial Advisory
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Delivering practical financial guidance that empowers clients
              to achieve their personal and business financial goals with
              confidence.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}