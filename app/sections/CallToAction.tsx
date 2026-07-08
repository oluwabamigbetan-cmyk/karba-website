export default function CallToAction() {
  return (
    <section className="bg-[#0B1F3A] py-24 text-white">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold">
          Ready to Secure Your Financial Future?
        </h2>

        <p className="mt-8 text-xl text-slate-300">
          Book a consultation today and discover how KARBA Financial Consultant Ltd
          can help protect your family, grow your wealth and build your legacy.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <a
            href="/book-consultation"
            className="rounded-xl bg-[#D4AF37] px-8 py-4 font-bold text-black"
          >
            Book Consultation
          </a>

          <a
            href="https://wa.me/message/5RKGRI57IBIWG1"
            className="rounded-xl border border-white px-8 py-4 font-bold"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}