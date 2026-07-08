"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  SearchCheck,
  FileCheck2,
  Handshake,
} from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    title: "Book a Consultation",
    description:
      "Schedule a convenient consultation to discuss your financial goals and needs.",
  },
  {
    icon: SearchCheck,
    title: "Needs Assessment",
    description:
      "We carefully evaluate your current situation, priorities and long-term objectives.",
  },
  {
    icon: FileCheck2,
    title: "Tailored Recommendations",
    description:
      "Receive practical, personalised insurance and real estate advisory solutions.",
  },
  {
    icon: Handshake,
    title: "Implementation & Support",
    description:
      "We guide you through implementation and remain available for ongoing support.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] uppercase tracking-widest font-bold">
            How We Work
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#071A3D]">
            A Simple Process.
            <br />
            Professional Results.
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            Our advisory process is straightforward, transparent and focused on
            helping you make informed financial decisions with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="relative bg-slate-50 rounded-2xl p-8 border border-gray-200 hover:border-[#D4AF37] hover:shadow-xl transition-all"
              >
                <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-[#D4AF37] text-[#071A3D] font-bold flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>

                <div className="mt-6 w-16 h-16 rounded-xl bg-[#071A3D] flex items-center justify-center">
                  <Icon size={30} className="text-[#D4AF37]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#071A3D]">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}