import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="consultation"
      className="scroll-mt-28 py-24 bg-[#071A3D] text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to Make Your Next Property Decision with Confidence?
        </h2>

        <p className="mt-8 text-xl text-slate-300 leading-relaxed">
          Whether you are buying, selling, investing, renting, leasing, or
          seeking professional real estate guidance, KARBA Financial
          Consultant Ltd is here to help you make informed decisions with
          confidence.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <Link
            href="/book-consultation"
            className="bg-[#D4AF37] text-[#071A3D] font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
          >
            Book Consultation
          </Link>

          <a
            href="https://wa.me/message/5RKGRI57IBIWG1"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#071A3D] transition"
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}