import { ShieldCheck, GraduationCap, Landmark, Building2 } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Life Insurance",
    description:
      "Protect your loved ones with tailored life insurance solutions.",
  },
  {
    icon: GraduationCap,
    title: "Education Planning",
    description:
      "Plan today to secure your children's education tomorrow.",
  },
  {
    icon: Landmark,
    title: "Retirement Planning",
    description:
      "Build long-term financial security and retirement income.",
  },
  {
    icon: Building2,
    title: "Real Estate Advisory",
    description:
      "Professional guidance for property investment and wealth creation.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Our Services
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Helping individuals, families and businesses make informed
            financial decisions with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-slate-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <Icon
                  className="text-yellow-600 mb-6"
                  size={48}
                />

                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600">
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