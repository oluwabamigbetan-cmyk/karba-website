import Link from "next/link";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Mrs. Adeola A.",
      title: "Children's Education Planning",
      message:
        "Planning for my children's education always seemed overwhelming until I consulted KARBA. They helped me choose a practical education savings and insurance plan that gives me confidence about my children's future.",
    },
    {
      name: "Mr. Michael O.",
      title: "Family Protection Plan",
      message:
        "KARBA explained the importance of family protection in a way I could easily understand. I now have a life insurance plan that gives me peace of mind knowing my loved ones are financially protected.",
    },
    {
      name: "Mrs. Grace E.",
      title: "House Purchase",
      message:
        "Buying a home is a major decision, but KARBA's real estate advisory made the entire process easier. Their professional guidance helped me make the right investment with confidence.",
    },
    {
      name: "Mr. David A.",
      title: "Apartment Purchase",
      message:
        "I wanted to purchase an apartment but wasn't sure where to begin. KARBA provided honest advice, helped me evaluate my options, and ensured I made an informed decision.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#071A3D] py-24 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Client Testimonials
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-300">
            Trusted by individuals and families who have chosen
            KARBA Financial Consultant Ltd for professional insurance
            and real estate advisory services.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-[#D4AF37] text-xl">
                ★★★★★
              </div>

              <h3 className="mt-4 text-2xl font-bold text-[#071A3D]">
                {item.name}
              </h3>

              <p className="text-[#D4AF37] font-semibold mt-1">
                {item.title}
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                "{item.message}"
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Closing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-[#071A3D]">
            Your Success Story Could Be Next
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            At KARBA Financial Consultant Ltd, every client relationship
            is built on trust, professionalism, and a genuine commitment
            to helping individuals and families make confident financial
            and real estate decisions. We look forward to helping you
            achieve your financial goals.
          </p>

          <Link
            href="/book-consultation"
            className="inline-block mt-10 bg-[#D4AF37] hover:bg-yellow-400 text-[#071A3D] font-bold px-8 py-4 rounded-xl transition"
          >
            Book Consultation
          </Link>

        </div>
      </section>
    </>
  );
}