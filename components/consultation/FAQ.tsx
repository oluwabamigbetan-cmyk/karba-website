"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is the consultation free?",
    answer:
      "Your initial consultation is complimentary. It allows us to understand your needs, discuss your goals, and determine how KARBA can best support you. If specialised services requiring extensive analysis or additional work are needed, we will explain any applicable fees before proceeding.",
  },
  {
    question: "How long does a consultation take?",
    answer:
      "Most consultations last between 30 and 60 minutes depending on your needs and the complexity of your situation.",
  },
  {
    question: "Can the consultation be held online?",
    answer:
      "Yes. Consultations can be conducted online, by telephone, or in person where applicable.",
  },
  {
    question: "What should I prepare before the consultation?",
    answer:
      "If available, prepare any relevant information relating to your insurance, financial planning, investments or property needs. If you don't have everything, don't worry—we'll guide you through the process.",
  },
  {
    question: "What happens after the consultation?",
    answer:
      "Following our discussion, we assess your needs and provide practical recommendations tailored to your goals. Where appropriate, we also explain the next steps and available solutions.",
  },
  {
    question: "Will I receive professional recommendations?",
    answer:
      "Yes. Every consultation is designed to help you make informed decisions. Our recommendations are objective, transparent and tailored to your unique circumstances.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-[#D4AF37] font-bold">
            Before You Book
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#071A3D]">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know before scheduling your consultation.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-lg text-[#071A3D]">
                  {faq.question}
                </span>

                <div className="text-[#D4AF37]">
                  {openIndex === index ? (
                    <Minus size={22} />
                  ) : (
                    <Plus size={22} />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-8">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}