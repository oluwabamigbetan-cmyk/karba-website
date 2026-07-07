export const metadata = {
  title: "Privacy Policy | KARBA Financial Consultant Ltd",
  description:
    "Privacy Policy for KARBA Financial Consultant Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="bg-[#071A3D] text-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            LEGAL
          </p>

          <h1 className="mt-6 text-5xl font-bold">
            Privacy Policy
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
              Introduction
            </h2>

            <p className="mt-4">
              KARBA Financial Consultant Ltd respects your privacy and is
              committed to protecting your personal information. This
              Privacy Policy explains how we collect, use, store and
              protect the information you provide through our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071A3D]">
              Information We Collect
            </h2>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Consultation Details</li>
              <li>Messages you send to us</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071A3D]">
              How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Respond to your enquiries.</li>
              <li>Provide consultation services.</li>
              <li>Improve our services.</li>
              <li>Communicate with you regarding your request.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071A3D]">
              Data Protection
            </h2>

            <p className="mt-4">
              We implement appropriate technical and organisational
              measures to safeguard your personal information. We do not
              sell or rent your personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071A3D]">
              Contact Us
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