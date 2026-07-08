export const metadata = {
  title: "Terms of Service | KARBA Financial Consultant Ltd",
  description:
    "Terms of Service for KARBA Financial Consultant Ltd.",
};

export default function TermsPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="bg-[#071A3D] text-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            LEGAL
          </p>

          <h1 className="mt-6 text-5xl font-bold">
            Terms of Service
          </h1>

          <p className="mt-6 text-slate-300 text-lg">
            Effective Date: July 2026
          </p>

        </div>
      </section>

      {/* Content */}

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10 text-gray-700 leading-8">

          <div>
            <h2 className="text-2xl font-bold text-[#071A3D]">
              Acceptance of Terms
            </h2>

            <p className="mt-4">
              By accessing or using this website, you agree to these
              Terms of Service. If you do not agree with these terms,
              please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071A3D]">
              Professional Advisory
            </h2>

            <p className="mt-4">
              Information provided on this website is for general
              educational and informational purposes only. Personalised
              recommendations are provided only after a consultation and
              assessment of your specific needs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071A3D]">
              User Responsibilities
            </h2>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide accurate information.</li>
              <li>Use this website lawfully.</li>
              <li>Do not attempt to interfere with website operations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071A3D]">
              Intellectual Property
            </h2>

            <p className="mt-4">
              All content on this website, including text, graphics,
              logos, branding and designs, remains the property of
              KARBA Financial Consultant Ltd unless otherwise stated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071A3D]">
              Limitation of Liability
            </h2>

            <p className="mt-4">
              KARBA Financial Consultant Ltd shall not be liable for
              losses arising from reliance on general information
              published on this website. Professional advice should be
              obtained before making financial or property decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071A3D]">
              Contact Information
            </h2>

            <p className="mt-4">
              KARBA Financial Consultant Ltd
              <br />
              Email: info@karbafinancialconsultant.com
              <br />
              Phone: +234 916 263 1205
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}