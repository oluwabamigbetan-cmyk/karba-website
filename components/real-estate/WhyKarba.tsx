import {
  ShieldCheck,
  TrendingUp,
  SearchCheck,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Independent Advisory",
    description:
      "Our recommendations are guided by your objectives, helping you evaluate options with confidence.",
  },
  {
    icon: TrendingUp,
    title: "Investment-Focused",
    description:
      "We help you assess property opportunities with a long-term wealth-building perspective.",
  },
  {
    icon: SearchCheck,
    title: "Due Diligence Guidance",
    description:
      "Understand the importance of reviewing available information before making major property decisions.",
  },
  {
    icon: Handshake,
    title: "Professional Support",
    description:
      "From your first consultation to your final decision, we provide practical guidance throughout the process.",
  },
];

export default function WhyKarba() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-yellow-600 font-semibold uppercase tracking-widest">
            Why KARBA
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">
            Professional Real Estate Guidance You Can Trust
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Whether you're buying your first property, planning an investment,
            or seeking professional advice, KARBA Financial Consultant Ltd is
            committed to helping you make informed and confident decisions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                  <Icon className="text-yellow-600" size={30} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}