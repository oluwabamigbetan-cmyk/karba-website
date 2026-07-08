import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-yellow-600 font-semibold uppercase tracking-widest">
            KARBA Financial Consultant Ltd
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Protect Today.
            <br />
            Build Tomorrow.
            <br />
            Leave a Legacy.
          </h1>

          <p className="mt-6 text-xl text-slate-600 leading-9">
            Live Confidently. Invest Wisely. Leave a Legacy.
          </p>

          <p className="mt-8 text-lg text-slate-600 max-w-xl">
            Helping individuals, families and businesses make confident
            financial decisions through professional Insurance Advisory,
            Property Advisory and Wealth Planning.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/book-consultation"
              className="bg-yellow-500 hover:bg-yellow-400 px-7 py-4 rounded-xl font-semibold transition"
            >
              Book Consultation
            </a>

            <a
              href="https://wa.me/message/5RKGRI57IBIWG1"
              target="_blank"
              className="border border-slate-900 px-7 py-4 rounded-xl font-semibold hover:bg-slate-900 hover:text-white transition"
            >
              WhatsApp
            </a>

          </div>

        </div>

        <div className="flex justify-center">
          <Image
            src="/images/founder.jpg"
            alt="Founder"
            width={520}
            height={620}
            className="rounded-3xl shadow-2xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}