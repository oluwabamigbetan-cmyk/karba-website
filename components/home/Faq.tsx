"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does KARBA Financial Consultant Ltd provide?",
    answer:
      "We provide professional Insurance, Real Estate and Financial Advisory services for individuals, families and businesses.",
  },
  {
    question: "Why should I use a financial consultant?",
    answer:
      "Professional financial advice helps you make informed decisions, avoid costly mistakes and achieve your financial goals with confidence.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Simply click the Book Consultation button or contact us directly by phone or email to schedule a convenient appointment.",
  },
  {
    question: "Can KARBA help with property investment?",
    answer:
      "Yes. We provide advisory services on property investment, land acquisition, due diligence and long-term real estate planning.",
  },
  {
    question: "Are your services available across Nigeria?",
    answer:
      "Yes. We provide both virtual and physical consultations, allowing us to serve clients across Nigeria.",
  },
  {
    question: "Is my information confidential?",
    answer:
      "Absolutely. Client confidentiality, professionalism and ethical practice are fundamental to our services.",
  },
];
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-[#D4AF37] uppercase tracking-widest font-bold">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#071A3D] mt-4">
            Have Questions?
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Here are answers to some of the most common questions about KARBA Financial Consultant Ltd.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="font-semibold text-[#071A3D]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {openIndex === index && (

                <div className="px-6 pb-6 text-gray-600 leading-relaxed">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}