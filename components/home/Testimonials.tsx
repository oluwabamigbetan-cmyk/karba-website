"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Business Owner",
    text: "KARBA provided clear financial guidance that helped me choose the right protection for my business. The process was professional and transparent.",
  },
  {
    name: "Young Family",
    text: "We received excellent advice on family protection and children's education planning. Every recommendation was easy to understand.",
  },
  {
    name: "Property Investor",
    text: "The real estate advisory service gave me confidence to make informed investment decisions. I highly recommend KARBA.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] font-bold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#071A3D]">
            What Our Clients Say
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            Building trust through professional service and lasting client relationships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:border-[#D4AF37] hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 text-[#D4AF37]">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed italic">
                "{item.text}"
              </p>

              <h3 className="mt-6 font-bold text-[#071A3D]">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}