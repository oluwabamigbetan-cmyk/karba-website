"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Why Every Family Needs Financial Protection",
    description:
      "Learn how proper financial planning and insurance can protect your family's future.",
    link: "/insights/family-financial-protection",
  },
  {
    title: "A Beginner's Guide to Property Investment",
    description:
      "Key considerations before investing in land or real estate in Nigeria.",
    link: "/insights/property-investment-guide",
  },
  {
    title: "Planning Your Child's Education Fund",
    description:
      "Practical strategies to prepare financially for your children's education.",
    link: "/insights/education-planning",
  },
];

export default function KnowledgeCenter() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] font-bold uppercase tracking-widest">
            Knowledge Centre
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#071A3D]">
            Insights That Help You
            <br />
            Make Better Financial Decisions
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            Explore expert articles, practical guides and financial insights
            designed to help you protect, grow and preserve your wealth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {articles.map((article, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-gray-200 p-8 hover:border-[#D4AF37] hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-[#071A3D]">
                {article.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {article.description}
              </p>

            </motion.div>
          ))}

        </div>

        <div className="text-center mt-14">
          <Link
            href="/insights"
            className="inline-block bg-[#071A3D] text-white px-8 py-4 rounded-xl hover:bg-[#0A275A] transition"
          >
            View All Articles
          </Link>
        </div>

      </div>
    </section>
  );
}