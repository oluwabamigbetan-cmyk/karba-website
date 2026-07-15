import ConsultationForm from "@/components/consultation/ConsultationForm";
import FAQ from "@/components/consultation/FAQ";

export const metadata = {
  title: "Book Consultation | KARBA Financial Consultant Ltd",
  description:
    "Book a professional consultation with KARBA Financial Consultant Ltd for Insurance Advisory, Financial Advisory, and Real Estate Advisory services.",
};

export default function BookConsultationPage() {
  return (
    <>
      {/* Hero Section */}

      <section className="relative bg-[#071A3D] text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            BOOK CONSULTATION
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Professional Financial
            <br />
            Guidance Starts Here.
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-slate-300 leading-relaxed">
            Whether you need Insurance Advisory, Financial Planning,
            Real Estate Advisory, Property Purchase, Property Sales,
            Property Rental, Property Leasing or Investment guidance,
            our team is ready to help you make informed decisions with
            confidence.
          </p>

        </div>

      </section>

      {/* Introduction */}

      <section className="bg-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-[#071A3D]">
            Let's Discuss Your Financial Goals
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Complete the consultation request form below. One of our
            consultants will review your request and contact you within
            one business day.
          </p>
          <p className="mt-6 text-sm text-center text-gray-500 leading-7">
  Your privacy matters to us. All information you provide will be treated
  with strict confidentiality and used solely for the purpose of responding
  to your enquiry and providing professional advisory services.
</p>

        </div>

      </section>

      <FAQ />

      {/* Consultation Form */}

      <ConsultationForm />
    </>
  );
}