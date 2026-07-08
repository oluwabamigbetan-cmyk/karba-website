"use client";

import Link from "next/link";
import {
  Shield,
  Home,
  GraduationCap,
  HeartHandshake,
  Landmark,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Insurance Advisory",
    description:
      "Protect your income, family, business and future with tailored insurance solutions.",
    href: "/insurance-advisory",
  },
  {
    icon: Home,
    title: "Property Advisory",
    description:
      "Professional guidance for buying, selling and investing in real estate.",
    href: "/real-estate-advisory",
  },
  {
    icon: GraduationCap,
    title: "Children's Education Planning",
    description:
      "Prepare today for your child's educational future with structured financial planning.",
    href: "/insurance-advisory",
  },
  {
    icon: HeartHandshake,
    title: "Family Protection",
    description:
      "Secure your loved ones against life's unexpected events with the right protection plans.",
    href: "/insurance-advisory",
  },
  {
    icon: Landmark,
    title: "Retirement & Annuity",
    description:
      "Build a retirement income strategy that gives peace of mind for the future.",
    href: "/insurance-advisory",
  },
  {
    icon: TrendingUp,
    title: "Wealth Planning",
    description:
      "Create long-term financial strategies designed to preserve and grow wealth responsibly.",
    href: "/insurance-advisory",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-yellow-600 text-sm font-semibold">
            OUR SERVICES
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Helping You Make Better Financial Decisions
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto mt-6">
            Every stage of life requires different financial decisions. KARBA
            provides practical guidance to help you protect what matters, build
            wealth responsibly and prepare confidently for the future.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition duration-300"
              >
                <Icon size={42} className="text-yellow-500 mb-6" />

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="text-slate-600 mt-4">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="inline-block mt-8 font-semibold text-yellow-600 hover:text-yellow-700"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}