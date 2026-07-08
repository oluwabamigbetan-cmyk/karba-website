import {
  Search,
  ClipboardCheck,
  TrendingUp,
  Handshake,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Discovery",
    description:
      "We begin by understanding your goals, family situation, business needs and financial priorities.",
  },
  {
    icon: ClipboardCheck,
    title: "2. Personalised Strategy",
    description:
      "We recommend practical insurance and property solutions tailored to your unique circumstances.",
  },
  {
    icon: TrendingUp,
    title: "3. Implementation",
    description:
      "We guide you through every step of implementing your financial plan with clarity and confidence.",
  },
  {
    icon: Handshake,
    title: "4. Ongoing Support",
    description:
      "Your financial journey continues after implementation. We review and adapt your plans as your needs evolve.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-yellow-600 font-semibold">
            OUR PROCESS
          </p>

          <h2 className="text-4xl font-bold mt-4 text-slate-900">
            How We Work With You
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            Every recommendation starts with understanding your goals before suggesting solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition"
              >
                <Icon className="text-yellow-500 mb-6" size={40} />

                <h3 className="text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}