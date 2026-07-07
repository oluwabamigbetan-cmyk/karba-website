import {
  MessageCircle,
  ClipboardCheck,
  Lightbulb,
  Handshake,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Initial Consultation",
    description:
      "We begin by understanding your property goals, financial objectives, and any concerns you may have.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment",
    description:
      "We review your requirements, discuss available options, and identify important considerations relevant to your situation.",
  },
  {
    icon: Lightbulb,
    title: "Professional Recommendation",
    description:
      "Based on the information provided, we offer practical guidance to support informed property decisions.",
  },
  {
    icon: Handshake,
    title: "Ongoing Support",
    description:
      "We remain available to answer questions and provide advisory support throughout your decision-making journey.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-yellow-600 font-semibold">
            OUR PROCESS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            How We Work With You
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Our structured advisory process is designed to help you make confident
            and informed real estate decisions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-[#D4AF37] text-slate-900 flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div className="mt-6 mb-6">
                  <Icon
                    size={42}
                    className="text-yellow-600"
                  />
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