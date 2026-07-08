import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-slate-900 text-white py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Secure Your Financial Future?
        </h2>

        <p className="mt-6 text-xl text-slate-300">

          Whether you need insurance guidance, real estate advisory,
          or long-term financial planning, KARBA Financial Consultant Ltd
          is ready to help.

        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <Link
            href="/book-consultation"
            className="bg-[#D4AF37] text-slate-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Book Consultation
          </Link>

          <a
            href="https://wa.me/message/5RKGRI57IBIWG1"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition"
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}