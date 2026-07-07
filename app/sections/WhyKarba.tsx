import { ShieldCheck, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Professional Credentials",
    description:
      "We operate with recognized registrations and industry credentials, giving clients confidence in our advice.",
  },
  {
    icon: Users,
    title: "Client-Focused Advice",
    description:
      "Every recommendation is tailored to your goals, family, business, and financial future.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Financial Partnership",
    description:
      "Our objective is not just selling products—it is helping you build lasting financial security and wealth.",
  },
];

export default function WhyKarba() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-yellow-600 text-sm font-semibold">
            WHY KARBA
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            A Trusted Partner for Your Financial Journey
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto mt-6">
            We combine professional knowledge, integrity, and practical advice
            to help individuals, families, and businesses make confident
            financial decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-lg transition"
              >
                <Icon className="text-yellow-500 mb-6" size={42} />
                <h3 className="text-2xl font-bold text-slate-900">
                  {reason.title}
                </h3>
                <p className="mt-4 text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}