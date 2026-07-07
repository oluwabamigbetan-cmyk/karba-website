import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Protect Your Future?
        </h2>

        <p className="mt-6 text-slate-300 text-lg max-w-3xl mx-auto">
          Let KARBA Financial Consultant Ltd help you make informed insurance
          decisions that support your personal, family, and business goals.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">

          <Link
            href="/book-consultation"
            className="bg-[#D4AF37] text-slate-900 font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
          >
            Book Consultation
          </Link>

          <Link
            href="/contact"
            className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}