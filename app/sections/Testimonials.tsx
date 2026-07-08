export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[0.3em] text-yellow-600 text-sm font-semibold">
          TESTIMONIALS
        </p>

        <h2 className="text-4xl font-bold text-slate-900 mt-4">
          Trusted by Individuals and Families
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="rounded-3xl bg-slate-50 p-8 shadow">
            <p className="italic">
              "Professional, patient and knowledgeable. KARBA made insurance easy to understand."
            </p>

            <h4 className="mt-6 font-bold">
              Client Testimonial
            </h4>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 shadow">
            <p className="italic">
              "Excellent financial guidance and genuine concern for our family's future."
            </p>

            <h4 className="mt-6 font-bold">
              Client Testimonial
            </h4>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 shadow">
            <p className="italic">
              "Professional service from consultation to implementation."
            </p>

            <h4 className="mt-6 font-bold">
              Client Testimonial
            </h4>
          </div>

        </div>

      </div>
    </section>
  );
}