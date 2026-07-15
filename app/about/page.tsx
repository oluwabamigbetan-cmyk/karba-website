import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#071A3D] text-white py-28">
        <div className="max-w-7xl mx-auto px-6">

          <span className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            About KARBA
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Building Financial
            <br />
            Confidence for
            <span className="text-[#D4AF37]"> Every Stage of Life.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-slate-300 leading-relaxed">
            KARBA Financial Consultant Ltd help individuals, families and
            businesses make informed financial decisions through trusted
            Insurance, Real Estate and Financial Advisory
            services.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/book-consultation"
              className="bg-[#D4AF37] text-[#071A3D] font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
            >
              Book Consultation
            </Link>

            <Link
              href="/contact"
              className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#071A3D] transition"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

{/* Who We Are */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="max-w-4xl">

      <p className="uppercase tracking-widest text-[#D4AF37] font-bold">
        Who We Are
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#071A3D]">
        Trusted Financial Guidance.
        <br />
        Personalised for You.
      </h2>

      <p className="mt-8 text-lg text-gray-600 leading-9">
        KARBA Financial Consultant Ltd is a Nigerian financial consultancy
        committed to helping individuals, families and businesses protect,
        grow and preserve wealth through professional Insurance,
        Real Estate and Financial Advisory services.
      </p>

      <p className="mt-6 text-lg text-gray-600 leading-9">
        We believe financial decisions should be made with confidence,
        clarity and trusted professional guidance. Our goal is to simplify
        complex financial choices and help every client achieve long-term
        financial security and peace of mind.
      </p>

    </div>

  </div>
</section>

{/* Our Story */}

<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="max-w-4xl">

      <p className="uppercase tracking-widest text-[#D4AF37] font-bold">
        Our Story
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#071A3D]">
        A Vision Built on Trust,
        <br />
        Integrity and Professional Excellence.
      </h2>

      <p className="mt-8 text-lg text-gray-600 leading-9">
        KARBA Financial Consultant Ltd was founded with a clear purpose:
        to help individuals, families and businesses make informed
        financial decisions through trusted professional guidance.
      </p>

      <p className="mt-6 text-lg text-gray-600 leading-9">
        We understand that financial decisions can be complex,
        That is why we are committed to providing clear, ethical and
        personalised advisory services that empower our clients to
        protect what matters most, build lasting wealth and plan
        confidently for the future.
      </p>

      <p className="mt-6 text-lg text-gray-600 leading-9">
        Today, KARBA Financial Consultant Ltd continues to grow with a
        commitment to professionalism, continuous learning and
        long-term relationships built on trust and measurable value.
      </p>

    </div>

  </div>
</section>

{/* Mission Vision Values */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-3 gap-10">

      <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#071A3D]">
          Our Mission
        </h3>

        <p className="mt-6 text-gray-600 leading-8">
          To provide trusted, ethical and professional financial advisory
          services that empower individuals, families and businesses to
          protect, grow and preserve their wealth with confidence.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#071A3D]">
          Our Vision
        </h3>

        <p className="mt-6 text-gray-600 leading-8">
          To become one of Nigerian most trusted financial consultancy
          firms, recognised for excellence, integrity and long-term client
          success.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#071A3D]">
          Our Core Values
        </h3>

        <ul className="mt-6 space-y-3 text-gray-600">
          <li>• Integrity</li>
          <li>• Professionalism</li>
          <li>• Innovation</li>
          <li>• Client-centered service</li>
          <li>• Long-term relationships</li>
        </ul>
      </div>

    </div>

  </div>
</section>

{/* Our Credentials */}

<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="uppercase tracking-widest text-[#D4AF37] font-bold">
        Our Credentials
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#071A3D]">
        Licensed. Certified. Trusted.
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
        Our registrations and professional certifications reflect our
        commitment to integrity, compliance and excellence in financial
        advisory services.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      <div className="rounded-2xl bg-white p-8 shadow border border-gray-200 hover:border-[#D4AF37] transition">
        <h3 className="font-bold text-xl text-[#071A3D]">
          CAC Incorporated
        </h3>
        <p className="mt-4 text-gray-600">
          Registered as a Private Company Limited by Shares in Nigeria.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow border border-gray-200 hover:border-[#D4AF37] transition">
        <h3 className="font-bold text-xl text-[#071A3D]">
          NAICOM Licensed
        </h3>
        <p className="mt-4 text-gray-600">
          Licensed Insurance Agent authorised to provide insurance advisory services.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow border border-gray-200 hover:border-[#D4AF37] transition">
        <h3 className="font-bold text-xl text-[#071A3D]">
          CIIN Certified
        </h3>
        <p className="mt-4 text-gray-600">
          Chartered Insurance Institute of Nigeria certified professional.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow border border-gray-200 hover:border-[#D4AF37] transition">
        <h3 className="font-bold text-xl text-[#071A3D]">
          SCUML Registered
        </h3>
        <p className="mt-4 text-gray-600">
          Registered in compliance with applicable anti-money laundering regulations.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow border border-gray-200 hover:border-[#D4AF37] transition">
        <h3 className="font-bold text-xl text-[#071A3D]">
          SMEDAN Registered
        </h3>
        <p className="mt-4 text-gray-600">
          Recognised by the Small and Medium Enterprises Development Agency of Nigeria.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow border border-gray-200 hover:border-[#D4AF37] transition">
        <h3 className="font-bold text-xl text-[#071A3D]">
          LASRERA Enrolment
        </h3>
        <p className="mt-4 text-gray-600">
          Enrolled with the Lagos State Real Estate Regulatory Authority.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Meet the Founder */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>

        {/* Replace with your professional photo later */}

        <Image
  src="/images/founder.jpg"
  alt="Babatunde Bamigbetan"
  width={600}
  height={700}
  className="rounded-3xl object-cover w-full h-[500px]"
/>

      </div>

      <div>

        <h2 className="mt-4 text-4xl font-bold text-[#071A3D]">
  A Message from the Founder
</h2>

<p className="mt-4 text-xl text-[#D4AF37] font-semibold">
  Building Financial Confidence, One Family and One Business at a Time
</p>

<h3 className="mt-8 text-3xl font-bold text-[#071A3D]">
  Babatunde Bamigbetan
</h3>

<p className="text-xl text-gray-500 mt-2">
  Founder, Chief Executive Officer & Lead Financial Consultant
</p>

<p className="mt-6 text-lg text-gray-600 leading-9">
  Thank you for taking the time to visit our website.
</p>

<p className="mt-6 text-lg text-gray-600 leading-9">
  I founded KARBA with one simple conviction: <strong>every individual, every family, and every business deserves honest, professional guidance before making financial decisions that shape their future.</strong> Financial decisions often have long-term consequences, and I believe they should never be made based on uncertainty, pressure, or incomplete information.
</p>

<p className="mt-6 text-lg text-gray-600 leading-9">
  Throughout my journey in financial consulting, I have witnessed both the consequences of inadequate planning and the life-changing impact of informed financial decisions. I have seen families secure their future through proper protection, individuals build lasting wealth through disciplined planning, and businesses make confident decisions that support sustainable growth. Those experiences continue to strengthen my passion for helping people make informed choices with clarity and confidence.
</p>

<p className="mt-6 text-lg text-gray-600 leading-9">
  For me, this is more than a profession; it is a responsibility. Every recommendation we make has the potential to influence someone's financial future, and I never take that responsibility lightly. That is why integrity, professionalism, and transparency remain the foundation of everything we do at KARBA.
</p>

<p className="mt-6 text-lg text-gray-600 leading-9">
  At KARBA Financial Consultant Ltd, we believe financial consulting goes beyond recommending insurance solutions, facilitating property transactions, or discussing investment opportunities. It is about listening carefully, understanding your goals, earning your trust, and providing practical guidance that helps you protect what matters most, grow your wealth responsibly, and build a lasting legacy for yourself and future generations.
</p>

<p className="mt-6 text-lg text-gray-600 leading-9">
  Our approach is guided by one simple principle:
</p>

<div className="my-10 border-l-4 border-[#D4AF37] bg-slate-50 p-6 rounded-r-xl">
  <p className="text-xl italic font-semibold text-[#071A3D]">
    “Will this truly help our client achieve their financial goals?”
  </p>
</div>

<p className="mt-6 text-lg text-gray-600 leading-9">
  Every consultation, every recommendation, and every relationship we build begins with that question. It reminds us that our responsibility is not simply to provide services, but to deliver value that genuinely improves the lives of the people we serve.
</p>

<p className="mt-6 text-lg text-gray-600 leading-9">
  Whether you are planning for your family's future, protecting your income, preparing for retirement, investing in real estate, purchasing your first home, growing your wealth, or seeking strategic financial guidance for your business, my commitment is to ensure you receive advice that is objective, practical, and tailored to your unique circumstances.
</p>

<p className="mt-6 text-lg text-gray-600 leading-9">
  At KARBA, we do not measure success solely by the number of consultations we conduct or the transactions we facilitate. We measure success by the confidence our clients gain, the trust they place in us, and the lasting relationships we build over time. There is no greater satisfaction than knowing we have helped someone make a decision that positively impacts their future and provides peace of mind.
</p>

<p className="mt-6 text-lg text-gray-600 leading-9">
  As Founder and Chief Executive Officer, I remain personally committed to the values upon which KARBA was established; <strong>professionalism, integrity, excellence, transparency, and client-focused service.</strong> These are not merely words displayed on our website; they are principles that shape every decision we make and every client relationship we build.
</p>

<p className="mt-6 text-lg text-gray-600 leading-9">
  Thank you once again for visiting KARBA Financial Consultant Ltd.
</p>

<p className="mt-6 text-lg text-gray-600 leading-9">
  Whether you are taking your first step towards financial security or seeking experienced guidance to achieve your next milestone, it would be our privilege to partner with you. I warmly invite you to schedule a consultation, and I look forward to the opportunity to serve you with professionalism, integrity, and excellence.
</p>

<div className="mt-12">
  <p className="font-semibold text-[#071A3D]">
    Warm regards,
  </p>

  <h3 className="mt-6 text-2xl font-bold text-[#071A3D]">
    Babatunde Bamigbetan
  </h3>

  <p className="mt-2 font-semibold text-[#D4AF37]">
    KARBA Financial Consultant Ltd
  </p>
</div>

      </div> {/* End Right Column */}

    </div> {/* End Grid */}

  </div> {/* End Container */}

</section>

{/* CTA */}

<section className="py-24 bg-[#071A3D] text-white">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-4xl md:text-5xl font-bold">
      Let us Build Your Financial Future Together
    </h2>

    <p className="mt-8 text-xl text-slate-300 leading-relaxed">
      Whether you are protecting your family, investing in real estate
      or planning your financial future, KARBA Financial Consultant Ltd
      is ready to help you make informed decisions with confidence.
    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-6">

      <Link
        href="/book-consultation"
        className="bg-[#D4AF37] text-[#071A3D] font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
      >
        Book Consultation
      </Link>

      <Link
        href="/contact"
        className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#071A3D] transition"
      >
        Contact Us
      </Link>

    </div>

  </div>
</section>

    </>
  );
}
