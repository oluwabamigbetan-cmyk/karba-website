import {
  MessageCircle,
  ClipboardCheck,
  FileSearch,
  Handshake,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Consultation",
    description:
      "We begin by understanding your financial goals, family situation, or business needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Needs Assessment",
    description:
      "We evaluate your priorities and explain suitable insurance options in a clear and practical way.",
  },
  {
    icon: FileSearch,
    title: "Recommendation",
    description:
      "You receive professional guidance to help you choose appropriate insurance solutions.",
  },
  {
    icon: Handshake,
    title: "Ongoing Support",
    description:
      "We continue to support you with policy reviews, updates, and professional assistance when needed.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-widest text-yellow-600 font-semibold">
            OUR PROCESS
          </span>

          <h2 className="text-5xl font-bold mt-4">
            How We Work With You
          </h2>

          <p className="mt-6 text-slate-600">
            A straightforward process designed to help you make informed insurance decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-2xl bg-slate-50 p-8 hover:shadow-xl transition-all"
              >
                <div className="absolute -top-4 left-6 bg-yellow-500 text-slate-900 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div className="mt-6">
                  <Icon size={42} className="text-yellow-600 mb-6" />
                </div>

                <h3 className="text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
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