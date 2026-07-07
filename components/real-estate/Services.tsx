import {
  Home,
  Building2,
  Landmark,
  FileCheck,
  Search,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Purchase Advisory",
    description:
      "Guidance to help you evaluate residential and commercial properties before purchase.",
  },
  {
    icon: Building2,
    title: "Property Sales Advisory",
    description:
      "Professional support for individuals and businesses planning to sell property.",
  },
  {
    icon: Landmark,
    title: "Property Investment Planning",
    description:
      "Helping clients identify opportunities that align with their financial objectives.",
  },
  {
    icon: FileCheck,
    title: "Documentation Guidance",
    description:
      "Helping you understand the documentation commonly involved in property transactions.",
  },
  {
    icon: Search,
    title: "Due Diligence Advisory",
    description:
      "Supporting informed decision-making through careful review of available information.",
  },
  {
    icon: Briefcase,
    title: "Property Consultation",
    description:
      "One-on-one advisory sessions tailored to your property goals and financial plans.",
  },
];

export default function RealEstateServices() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-yellow-600 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Comprehensive Real Estate Advisory
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition-all duration-300"
              >
                <Icon
                  size={40}
                  className="text-yellow-600 mb-6"
                />

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