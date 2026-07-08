import {
  Shield,
  HeartHandshake,
  Users,
  BadgeCheck,
} from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Trusted Advice",
    description:
      "Receive guidance tailored to your financial goals and protection needs.",
  },
  {
    icon: HeartHandshake,
    title: "Client First",
    description:
      "Every recommendation begins with understanding your unique circumstances.",
  },
  {
    icon: Users,
    title: "Family & Business Focus",
    description:
      "Solutions for individuals, families, professionals and business owners.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Credentials",
    description:
      "Supported by recognized registrations and professional certifications.",
  },
];

export default function WhyKarba() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-yellow-600 font-semibold">
            WHY KARBA
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Professional Insurance Guidance
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We help you understand available insurance solutions so you can make
            confident decisions that support your long-term financial wellbeing.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border p-8 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                  <Icon className="text-yellow-600" size={32} />
                </div>

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}