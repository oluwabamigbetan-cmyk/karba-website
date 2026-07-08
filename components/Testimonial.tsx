const testimonials = [
  {
    name: "Client",
    role: "Insurance Client",
    quote:
      "Professional, patient, and knowledgeable. KARBA helped me choose the right protection plan for my family.",
  },
  {
    name: "Client",
    role: "Financial Planning",
    quote:
      "The consultation was practical and easy to understand. I now have a clear financial roadmap.",
  },
  {
    name: "Client",
    role: "Real Estate Advisory",
    quote:
      "Excellent guidance throughout my property investment journey. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-gray-600">
            Building long-term relationships through trust and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="italic text-gray-600">
                "{item.quote}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}