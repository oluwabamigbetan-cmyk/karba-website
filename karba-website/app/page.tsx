export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-5 border-b">
        <div>
          <h1 className="text-2xl font-bold text-blue-900">
            KARBA
          </h1>
        </div>

        <div className="hidden md:flex gap-6">
          <a href="/" className="hover:text-yellow-500">
  Home
</a>

<a href="/about" className="hover:text-yellow-500">
  About
</a>

<a href="/insurance-advisory" className="hover:text-yellow-500">
  Insurance
</a>

<a href="/property-advisory" className="hover:text-yellow-500">
  Property
</a>

<a href="/insights" className="hover:text-yellow-500">
  Insights
</a>
        </div>

        <a
  href="/book-consultation"
  className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
>
  Book Consultation
</a>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-6">
          Secure Your Future.
          <br />
          Build Your Wealth.
          <br />
          Leave a Legacy.
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mb-8">
          KARBA Financial Consultant Ltd provides professional
          Insurance Advisory and Real Estate Consultancy services
          across Nigeria, helping individuals, families,
          business owners and investors achieve financial
          protection, wealth creation and long-term security.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg"
          >
            Book Consultation
          </a>

          <a
            href="https://wa.me/2349162631205"
            target="_blank"
            className="border border-blue-900 text-blue-900 px-6 py-3 rounded-lg"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">
            Trusted Credentials
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="p-4 bg-white rounded-lg shadow">
              CAC Registered
            </div>

            <div className="p-4 bg-white rounded-lg shadow">
              SCUML Registered
            </div>

            <div className="p-4 bg-white rounded-lg shadow">
              SMEDAN Registered
            </div>

            <div className="p-4 bg-white rounded-lg shadow">
              CIIN Certified
            </div>

            <div className="p-4 bg-white rounded-lg shadow">
              NAICOM Licensed
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Insurance Advisory
            </h3>

            <ul className="space-y-3">
              <li>✓ Life Insurance Planning</li>
              <li>✓ Family Protection Planning</li>
              <li>✓ Children's Education Planning</li>
              <li>✓ Retirement & Annuity Planning</li>
              <li>✓ Business Protection Solutions</li>
            </ul>
          </div>

          <div className="border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Real Estate Consultancy
            </h3>

            <ul className="space-y-3">
              <li>✓ Property Acquisition</li>
              <li>✓ Property Sales</li>
              <li>✓ Property Investment Advisory</li>
              <li>✓ Wealth Building Through Real Estate</li>
              <li>✓ Long-Term Asset Growth Strategies</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div>
              <h3 className="font-bold text-xl mb-2">
                Integrity
              </h3>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">
                Transparency
              </h3>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">
                Professionalism
              </h3>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">
                Innovation
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold mb-8">
          About KARBA
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          KARBA Financial Consultant Ltd was founded with a vision
          to provide individuals, families, business owners and
          investors with one trusted advisory partner for wealth
          creation, financial protection and legacy planning.
          Through Insurance Advisory and Real Estate Consultancy,
          we help clients make informed decisions that support
          financial confidence today and financial independence
          for future generations.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Take the Next Step?
        </h2>

        <p className="mb-8">
          Book a consultation and let's discuss your financial goals.
        </p>

        <a
          href="https://wa.me/2349162631205"
          target="_blank"
          className="bg-blue-900 text-white px-8 py-4 rounded-lg"
        >
          Contact KARBA Today
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto px-8">

          <h3 className="font-bold text-xl mb-4">
            KARBA Financial Consultant Ltd
          </h3>

          <p>
            Email: info@karbafinancialconsultant.com
          </p>

          <p>
            Serving Clients Across Nigeria
          </p>

          <p className="mt-6 text-sm text-gray-400">
            © 2026 KARBA Financial Consultant Ltd.
            All Rights Reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}