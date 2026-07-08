import Link from "next/link";
import { ShieldCheck, Building2, ArrowRight } from "lucide-react";

export default function AdvisorySolutions() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-yellow-600 font-semibold">
            OUR ADVISORY SOLUTIONS
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Helping You Protect, Grow & Build Wealth
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We provide professional advisory services focused on financial protection
            and property decision-making, helping you make confident choices for today
            and tomorrow.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {/* Insurance */}

          <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition">

            <ShieldCheck
              size={60}
              className="text-yellow-600"
            />

            <h3 className="text-3xl font-bold mt-6">
              Insurance Advisory
            </h3>

            <p className="mt-6 text-slate-600 leading-8">

              We help individuals, families and businesses understand suitable
              insurance solutions for life protection, education planning,
              retirement planning, health and business continuity.

            </p>

            <Link
              href="/insurance-advisory"
              className="inline-flex items-center gap-2 mt-8 text-yellow-600 font-semibold"
            >
              Learn More
              <ArrowRight size={18}/>
            </Link>

          </div>

          {/* Real Estate */}

          <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition">

            <Building2
              size={60}
              className="text-yellow-600"
            />

            <h3 className="text-3xl font-bold mt-6">
              Real Estate Advisory
            </h3>

            <p className="mt-6 text-slate-600 leading-8">

              Receive professional guidance before buying,
              selling or investing in property, helping you make
              informed real estate decisions with confidence.

            </p>

            <Link
              href="/real-estate-advisory"
              className="inline-flex items-center gap-2 mt-8 text-yellow-600 font-semibold"
            >
              Learn More
              <ArrowRight size={18}/>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}