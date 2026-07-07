import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">

        <span className="inline-block bg-yellow-500 text-slate-900 font-semibold px-4 py-2 rounded-full">
          REAL ESTATE ADVISORY
        </span>

        <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          Make Smarter Property Decisions with Confidence.
        </h1>

        <p className="mt-8 text-xl text-slate-200 max-w-3xl leading-8">
          KARBA Financial Consultant Ltd provides professional real estate
          advisory services to help individuals, families and investors make
          informed property decisions.
        </p>

        <div className="mt-12 flex flex-wrap gap-5">

          <Link
            href="/book-consultation"
            className="bg-[#D4AF37] text-slate-900 font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
          >
            Book Consultation
          </Link>

          <Link
            href="/contact"
            className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition flex items-center gap-2"
          >
            Contact Us

            <ArrowRight size={20} />
          </Link>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">

          <div>
            <h3 className="text-3xl font-bold text-yellow-400">CAC</h3>
            <p className="text-slate-300 mt-2">Registered Company</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-400">CIIN</h3>
            <p className="text-slate-300 mt-2">Certified Professional</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-400">SCUML</h3>
            <p className="text-slate-300 mt-2">Registered</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-400">LASRERA</h3>
            <p className="text-slate-300 mt-2">Enrolled</p>
          </div>

        </div>

      </div>
    </section>
  );
}