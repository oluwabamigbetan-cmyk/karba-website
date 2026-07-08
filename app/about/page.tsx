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
            KARBA Financial Consultant Ltd helps individuals, families and
            businesses make informed financial decisions through trusted
            Insurance Advisory, Real Estate Advisory and Financial Advisory
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
        grow and preserve wealth through professional Insurance Advisory,
        Real Estate Advisory and Financial Advisory services.
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
        We understand that financial decisions can be complex.
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
          <li>• Client First</li>
          <li>• Excellence</li>
          <li>• Transparency</li>
          <li>• Continuous Learning</li>
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

        <p className="uppercase tracking-widest text-[#D4AF37] font-bold">
          Meet the Founder
        </p>

        <h2 className="mt-4 text-4xl font-bold text-[#071A3D]">
          Babatunde Bamigbetan
        </h2>

        <p className="text-xl text-gray-500 mt-2">
          Founder & Financial Consultant
        </p>

        <p className="mt-8 text-lg text-gray-600 leading-9">
          At KARBA Financial Consultant Ltd, our mission is to help individuals,
          families and businesses make informed financial decisions with confidence.
          We believe that trust, professionalism and long-term relationships are the
          foundation of lasting financial success.
        </p>

        <p className="mt-6 text-lg text-gray-600 leading-9">
          Whether you are protecting your loved ones, planning your future or building
          wealth through real estate, we are committed to providing guidance that is
          practical, ethical and tailored to your unique goals.
        </p>

      </div>

    </div>

  </div>
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
