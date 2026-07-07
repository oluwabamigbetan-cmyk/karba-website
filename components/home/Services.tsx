import Link from "next/link";

const services = [
  {
    title: "Insurance Advisory",
    description:
      "Professional guidance on life insurance, family protection, children's education planning, retirement planning and wealth preservation.",
    link: "/insurance-advisory",
  },
  {
    title: "Real Estate Advisory",
    description:
      "Helping clients make informed property investment decisions through trusted professional advisory services.",
    link: "/real-estate-advisory",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Our Advisory Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            KARBA Financial Consultant Ltd provides professional advisory
            services designed to help individuals, families and businesses
            make informed financial and property decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border p-8 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="inline-block mt-8 bg-yellow-500 px-6 py-3 rounded-lg font-semibold"
              >
                Learn More →
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}