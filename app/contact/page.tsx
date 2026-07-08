import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#071A3D] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            Contact KARBA
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Let's Talk About Your Financial Goals
          </h1>

          <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto">
            Whether you need insurance advice, real estate guidance, or financial planning,
            we are here to help you make informed decisions with confidence.
          </p>

        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Left */}
          <div>

            <h2 className="text-4xl font-bold text-[#071A3D]">
              Get In Touch
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              We'd love to hear from you. Reach out for professional guidance
              on insurance, real estate and financial planning.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex gap-4">
                <Phone className="text-[#D4AF37]" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>09162631205</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#D4AF37]" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@karbafinancialconsultant.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-[#D4AF37]" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p>Monday – Friday</p>
                  <p>9:00 AM – 5:00 PM</p>
                  <p>Saturday</p>
                  <p>10:00 AM – 3:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-[#D4AF37]" />
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p>Lagos, Nigeria</p>
                  <p className="text-sm text-gray-500">
                    Serving clients accross Nigeria through virtual consultations and in-person consultations by appointments.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="bg-slate-50 rounded-3xl p-10 border">

            <h2 className="text-3xl font-bold text-[#071A3D]">
              Ready to Get Started?
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Book a consultation and let us discuss your financial,
              insurance or real estate needs.
            </p>

            <Link
              href="/book-consultation"
              className="inline-block mt-10 bg-[#D4AF37] text-[#071A3D] font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
            >
              Book Consultation
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}