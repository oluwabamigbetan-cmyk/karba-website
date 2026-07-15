"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why is insurance important?",
    answer:
      "Insurance helps protect you, your family, your business, and your assets against unexpected financial losses. It provides peace of mind and supports long-term financial security.",
  },
  {
    question: "What types of insurance do you advise on?",
    answer:
      "We provide professional advisory services on Life Insurance and General (Non-Life) Insurance, including Children's Education Plans, Family Protection, Term Life Insurance, Annuities, Retirement Plans, Health Insurance, Motor Insurance, Property Insurance, Business Insurance, Fire Insurance, Marine Insurance, and other insurance solutions.",
  },
  {
    question: "Why should I have life insurance?",
    answer:
      "Life insurance helps provide financial security for your loved ones if the unexpected happens. Depending on the plan, it can also help you save towards future goals such as education or retirement.",
  },
  {
    question: "Can I plan for my children's education?",
    answer:
      "Yes. Children's Education Plans help parents prepare financially for future educational expenses while providing insurance protection throughout the saving period.",
  },
  {
    question: "What is an annuity?",
    answer:
      "An annuity is a financial solution designed to provide a regular income, particularly during retirement, helping you maintain financial stability after your working years.",
  },
  {
    question: "Do you advise businesses on insurance?",
    answer:
      "Yes. We help businesses identify suitable insurance solutions to protect their employees, assets, operations, liabilities, and long-term continuity.",
  },
  {
    question: "How do I know which insurance policy is right for me?",
    answer:
      "We begin by understanding your financial goals, responsibilities, budget, and priorities before recommending insurance solutions that are appropriate for your unique circumstances.",
  },
  {
    question: "Can I consult KARBA before buying an insurance policy?",
    answer:
      "Absolutely. Our advisory service is designed to help you understand your options and make informed decisions before purchasing any insurance policy.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      "Your initial consultation is complimentary. Where additional professional services or extensive advisory work are required, any applicable fees will be discussed with you in advance.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes. We work with reputable insurance providers to help clients access suitable insurance solutions while providing professional guidance throughout the decision-making process.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-[#D4AF37] font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#071A3D]">
            Before You Choose an Insurance Solution
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Here are answers to some of the most common questions we receive.
            If you need further clarification, we would be delighted to discuss
            your specific needs during a consultation.
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