import {
  Shield,
  GraduationCap,
  HeartPulse,
  Briefcase,
  PiggyBank,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Life Insurance Planning",
    description:
      "Protect your loved ones with solutions designed to provide financial security and peace of mind.",
  },
  {
    icon: GraduationCap,
    title: "Children's Education Planning",
    description:
      "Plan ahead to help secure your children's educational future through disciplined financial planning.",
  },
  {
    icon: HeartPulse,
    title: "Health Insurance Advisory",
    description:
      "Understand suitable health insurance options that support your healthcare needs and financial wellbeing.",
  },
  {
    icon: Briefcase,
    title: "Business Protection",
    description:
      "Help protect your business against unforeseen events with appropriate insurance guidance.",
  },
  {
    icon: PiggyBank,
    title: "Retirement & Annuity Planning",
    description:
      "Build long-term financial confidence with retirement and annuity planning strategies.",
  },
  {
    icon: Building2,
    title: "General Insurance Advisory",
    description:
      "Guidance on motor, home, travel, and other general insurance solutions based on your needs.",
  },
];

export default function InsuranceServices() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-yellow-600 font-semibold">
            OUR SERVICES
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Insurance Solutions That Put You First
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            Every recommendation is tailored to your goals, helping you make informed decisions with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Icon className="text-yellow-600 mb-6" size={42} />

                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}