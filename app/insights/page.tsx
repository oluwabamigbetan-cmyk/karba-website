import Link from "next/link";

const articles = [
  {
    title: "Why Life Insurance Is More Than Just a Policy",
    description:
      "Discover how life insurance protects your family, secures your future and builds long-term financial confidence.",
    category: "Insurance",
    slug: "#",
  },
  {
    title: "7 Things to Check Before Buying Land in Nigeria",
    description:
      "Avoid costly mistakes with practical tips before purchasing land or property in Nigeria.",
    category: "Real Estate",
    slug: "#",
  },
  {
    title: "Children's Education Planning: Start Early, Save Smarter",
    description:
      "Learn how proper financial planning today can secure your children's educational future.",
    category: "Financial Planning",
    slug: "#",
  },
  {
    title: "Retirement Planning: Don't Wait Until It's Too Late",
    description:
      "Build a retirement strategy that provides financial independence and peace of mind.",
    category: "Retirement",
    slug: "#",
  },
  {
    title: "Rent, Lease or Buy? Making the Right Property Decision",
    description:
      "Understand the advantages of renting, leasing and buying to choose the best option for your needs.",
    category: "Real Estate",
    slug: "#",
  },
  {
    title: "Financial Planning for Business Owners",
    description:
      "Protect your business, employees and future with smart financial planning strategies.",
    category: "Business",
    slug: "#",
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}

      <section className="bg-[#071A3D] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            INSIGHTS
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Knowledge That Helps You
            <br />
            Make Better Financial Decisions.
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-slate-300 leading-relaxed">
            Explore expert articles, practical guides and professional
            insights on Insurance, Financial Planning and Real Estate.
          </p>

        </div>
      </section>

      {/* Articles */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {articles.map((article) => (
              <div
                key={article.title}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition p-8 border border-gray-100"
              >
                <span className="inline-block bg-[#D4AF37]/20 text-[#071A3D] px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>

                <h2 className="mt-6 text-2xl font-bold text-[#071A3D]">
                  {article.title}
                </h2>

                <p className="mt-4 text-gray-600 leading-7">
                  {article.description}
                </p>

                <Link
                  href={article.slug}
                  className="inline-block mt-8 text-[#071A3D] font-semibold hover:text-[#D4AF37] transition"
                >
                </Link>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-[#071A3D] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Need Personal Financial Advice?
          </h2>

          <p className="mt-8 text-xl text-slate-300">
            Book a consultation and receive professional guidance tailored
            to your financial goals.
          </p>

          <Link
            href="/book-consultation"
            className="inline-block mt-10 bg-[#D4AF37] text-[#071A3D] font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
          >
            Book Consultation
          </Link>

        </div>

      </section>
    </>
  );
}