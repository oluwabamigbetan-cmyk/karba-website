"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Users,
  Handshake,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed & Certified",
    description:
      "CAC incorporated, NAICOM licensed, CIIN certified, SCUML registered and LASRERA enrolled.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Expertise",
    description:
      "Professional guidance backed by industry knowledge and ethical standards.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "Every recommendation is tailored to your unique financial goals and priorities.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "Honest, transparent and professional advice you can rely on.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    description:
      "Helping you protect today's income while building tomorrow's wealth.",
  },
  {
    icon: HeartHandshake,
    title: "Lifetime Partnership",
    description:
      "We believe in building lasting relationships, not one-time transactions.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] font-bold uppercase tracking-widest">
            Why Choose KARBA
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#071A3D]">
            Trusted Advice.
            <br />
            Lasting Confidence.
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We combine professional expertise, integrity and personalised
            financial guidance to help you make confident decisions for today
            and tomorrow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: .3 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:border-[#D4AF37] hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#071A3D] flex items-center justify-center">
                  <Icon size={28} className="text-[#D4AF37]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#071A3D]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}