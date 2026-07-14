import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}

      <section className="bg-[#071A3D] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            Our Services
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Professional Financial
            <br />
            Advisory Services
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-slate-300">
            Helping individuals, families and businesses protect,
            grow and preserve wealth through trusted professional
            guidance.
          </p>

        </div>
      </section>

      {/* Services */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            {/* Insurance */}

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 transition">

              <h2 className="text-3xl font-bold text-[#071A3D]">
                Insurance Advisory
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Protect your income, family, business and future with
                professional insurance planning.
              </p>

              <ul className="mt-8 space-y-3 text-gray-700">

                <li>✔ Life Insurance</li>

                <li>✔ Children Education Planning</li>

                <li>✔ Family Protection Planning</li>

                <li>✔ Retirement & Annuity Planning</li>

                <li>✔ Business Insurance</li>

                <li>✔ Investment-Linked Insurance</li>

                <li>✔ Wealth Protection Strategies</li>

                <div className="mt-6">
  <Link
  href="/insurance-advisory"
  className="inline-block mt-6 rounded-lg bg-[#C89B3C] px-5 py-2 text-white font-medium hover:bg-[#B4882D] transition"
>
  Learn More
</Link>
</div>
              </ul>

            </div>

            {/* Real Estate */}

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 transition">

              <h2 className="text-3xl font-bold text-[#071A3D]">
                Real Estate Advisory
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Buy, sell, lease or invest confidently with professional
                property advisory services.
              </p>

              <ul className="mt-8 space-y-3 text-gray-700">

                <li>✔ Land Sales</li>

                <li>✔ House Sales</li>

                <li>✔ Apartment Sales</li>

                <li>✔ Apartment Rentals</li>

                <li>✔ Property Leasing</li>

                <li>✔ Commercial Properties</li>

                <li>✔ Property Investment Advisory</li>

                <li>✔ Property Due Diligence</li>

                <div className="mt-6">
  
  <Link
  href="/real-estate-advisory"
  className="inline-block mt-6 rounded-lg bg-[#C89B3C] px-5 py-2 text-white font-medium hover:bg-[#B4882D] transition"
>
  Learn More
</Link>
</div>

              </ul>

            </div>

            {/* Financial Advisory */}

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 transition">

              <h2 className="text-3xl font-bold text-[#071A3D]">
                Financial Advisory
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Build long-term financial confidence through personalised
                financial planning and wealth strategies.
              </p>

              <ul className="mt-8 space-y-3 text-gray-700">

                <li>✔ Financial Planning</li>

                <li>✔ Goal-Based Planning</li>

                <li>✔ Wealth Preservation</li>

                <li>✔ Investment Guidance</li>

                <li>✔ Risk Assessment</li>

                <li>✔ Financial Consultation</li>

              </ul>

            </div>

            {/* Consultation */}

            <div className="bg-[#071A3D] rounded-3xl shadow-lg p-10 text-white">

              <h2 className="text-3xl font-bold">
                Need Professional Advice?
              </h2>

              <p className="mt-6 text-slate-300 leading-8">
                Every financial decision deserves expert guidance.
                Let us discuss your goals and recommend the best
                solution for your situation.
              </p>

              <Link
                href="/book-consultation"
                className="inline-block mt-10 bg-[#D4AF37] text-[#071A3D] font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
              >
                Book Consultation
              </Link>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}