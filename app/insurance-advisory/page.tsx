import Link from "next/link";

const services = [
  {
    title: "Life Insurance",
    description:
      "Protect your loved ones by ensuring financial security in the event of life's uncertainties.",
  },
  {
    title: "Children's Education Planning",
    description:
      "Build a structured savings and protection plan to support your child's educational journey.",
  },
  {
    title: "Family Protection Planning",
    description:
      "Safeguard your family's lifestyle and future with comprehensive protection strategies.",
  },
  {
    title: "Retirement & Annuity Planning",
    description:
      "Prepare for retirement with solutions designed to provide long-term financial confidence.",
  },
  {
    title: "Business Protection",
    description:
      "Help protect your business, key people, and long-term continuity through appropriate insurance solutions.",
  },
];

export default function InsuranceAdvisoryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold">
            INSURANCE ADVISORY
          </p>

          <h1 className="text-5xl font-bold mt-6">
            Protect What Matters Most
          </h1>

          <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto">
            Professional insurance advisory designed to help individuals,
            families, and businesses reduce financial risks and plan confidently
            for the future.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-14">
            Our Insurance Advisory Services
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1F3A] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Discuss Your Protection Plan?
          </h2>

          <p className="mt-6 text-slate-300">
            Speak with KARBA Financial Consultant Ltd and receive professional
            guidance tailored to your financial goals.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-consultation"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-semibold"
            >
              Book Consultation
            </Link>

            <a
              href="https://wa.me/message/5RKGRI57IBIWG1"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-8 py-4 rounded-xl font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}  