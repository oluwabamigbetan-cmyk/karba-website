import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/75"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        <span className="inline-flex items-center gap-2 bg-yellow-500 text-slate-900 px-4 py-2 rounded-full font-semibold">
          <ShieldCheck size={18} />
          INSURANCE ADVISORY
        </span>

        <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          Protect What Matters Most.
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-yellow-400">
          Plan Today. Live Confidently Tomorrow.
        </h2>

        <p className="mt-8 text-xl text-slate-200 max-w-3xl leading-8">
          KARBA Financial Consultant Ltd provides professional insurance
          advisory services that help individuals, families and businesses
          protect their future through informed financial planning.
        </p>

        <div className="flex flex-wrap gap-5 mt-12">

          <Link
            href="/book-consultation"
            className="bg-[#D4AF37] text-slate-900 font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
          >
            Book Consultation
          </Link>

          <Link
            href="/contact"
            className="border border-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white hover:text-slate-900 transition"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}