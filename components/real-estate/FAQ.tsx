"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you sell properties directly?",
    answer:
      "Yes. Through our network of trusted real estate partners and developers, we help clients purchase verified lands, houses, apartments, commercial properties, and other real estate opportunities. Our role is to understand your needs, recommend suitable options, and guide you through the process while maintaining professional advisory standards.",
  },
  {
    question: "What makes KARBA different from a typical real estate agent?",
    answer:
      "Our priority is not simply selling property. We begin by understanding your objectives, budget, preferred location, and long-term plans before recommending suitable options. Our goal is to help you make informed decisions that align with your financial goals.",
  },
  {
    question: "Can you help first-time property buyers?",
    answer:
      "Absolutely. We guide first-time buyers through every stage of the process, helping them understand the different property options, documentation requirements, financing considerations, and important factors to evaluate before making a purchase.",
  },
  {
    question: "Can you help me buy land, houses, or apartments?",
    answer:
      "Yes. Whether you are looking for residential land, completed homes, apartments, commercial properties, or investment opportunities, we can recommend suitable options through our trusted partner network.",
  },
  {
    question: "Do you assist with property investment?",
    answer:
      "Yes. We help clients evaluate investment opportunities, compare available options, assess potential risks, and identify properties that align with their investment objectives.",
  },
  {
    question: "Can you help with renting or leasing properties?",
    answer:
      "Yes. We also assist clients looking to rent or lease residential and commercial properties by helping them identify suitable options based on their requirements and budget.",
  },
  {
    question: "How do you verify the properties you recommend?",
    answer:
      "We work with reputable developers, property owners, and trusted partners. Where appropriate, we also encourage clients to carry out proper legal verification and due diligence before completing any transaction.",
  },
  {
    question: "Do you guarantee investment returns or property appreciation?",
    answer:
      "No. Property values and investment performance depend on market conditions and several external factors. Our role is to provide professional guidance that helps you make well-informed decisions while understanding the associated opportunities and risks.",
  },
  {
    question: "Can I consult KARBA before making a property decision?",
    answer:
      "Yes. In fact, we encourage prospective buyers and investors to seek professional advice before committing to any property transaction. Early guidance can help you avoid costly mistakes and identify better opportunities.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      "Your initial consultation is complimentary. If your request requires extensive research, property inspections, specialised advisory work, or additional professional services, any applicable fees will be discussed with you in advance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-28 bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-[#D4AF37] font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#071A3D]">
            Before You Buy, Invest, Rent or Lease
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Here are answers to some of the most common questions we receive.
            If you need further clarification, we would be happy to discuss
            your specific situation during a consultation.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition"
              >
                <span className="font-semibold text-lg text-[#071A3D]">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-8">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}