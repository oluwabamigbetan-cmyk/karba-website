import ConsultationForm from "@/components/ConsultationForm";

export default function BookConsultationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#071A3D] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            Book Consultation
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Request a Professional Consultation
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-slate-300">
            Whether you're planning your financial future, protecting your
            family, buying or selling property, or building long-term wealth,
            we're here to guide you with trusted professional advice.
          </p>

        </div>
      </section>

      {/* Why Choose KARBA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="rounded-2xl border p-8">
              <h3 className="font-bold text-xl text-[#071A3D]">
                Personalised Advice
              </h3>

              <p className="mt-4 text-gray-600">
                Every recommendation is tailored to your unique financial goals.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="font-bold text-xl text-[#071A3D]">
                Professional Guidance
              </h3>

              <p className="mt-4 text-gray-600">
                Receive expert advice before making important financial decisions.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="font-bold text-xl text-[#071A3D]">
                Confidential Consultation
              </h3>

              <p className="mt-4 text-gray-600">
                Your information is treated with complete confidentiality.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="font-bold text-xl text-[#071A3D]">
                Trusted Expertise
              </h3>

              <p className="mt-4 text-gray-600">
                Licensed, certified and committed to helping you make informed decisions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">

          <ConsultationForm />

        </div>
      </section>

    </>
  );
}