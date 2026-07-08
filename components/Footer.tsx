import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-yellow-500">
              KARBA
            </h2>

            <p className="mt-6 text-slate-300 leading-8">

              Professional Insurance Advisory and Real Estate Advisory
              helping individuals, families and businesses make informed
              financial decisions.

            </p>

            <p className="mt-5 text-yellow-500 font-semibold">
              Live Confidently.
              <br />
              Invest Wisely.
              <br />
              Leave a Legacy.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><Link href="/">Home</Link></li>

              <li><Link href="/about">About</Link></li>

              <li><Link href="/insurance-advisory">Insurance</Link></li>

              <li><Link href="/real-estate-advisory">Real Estate</Link></li>

              <li><Link href="/insights">Insights</Link></li>

              <li><Link href="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Services
            </h3>

            <ul className="space-y-3">

              <li>Insurance Advisory</li>

              <li>Real Estate Advisory</li>

              <li>Financial Planning</li>

              <li>Children Education Planning</li>

              <li>Retirement Planning</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Phone size={18} />

                <span>09162631205</span>

              </div>

              <div className="flex gap-3">

                <Mail size={18} />

                <span>info@karbafinancialconsultant.com</span>

              </div>

              <div className="flex gap-3">

                <MapPin size={18} />

                <span>Lagos, Nigeria</span>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between">

          <div className="text-center text-sm text-slate-400 leading-7">
  <p>© 2026 KARBA Financial Consultant Ltd.</p>
  <p>All rights reserved.</p>
</div>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link
  href="/privacy-policy"
  className="hover:text-[#D4AF37] transition"
>
  Privacy Policy
</Link>

<Link
  href="/terms"
  className="hover:text-[#D4AF37] transition"
>
  Terms of Service
</Link>

          </div>

        </div>

      </div>

    </footer>
  );
}