"use client";

"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071A3D] text-white">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>

            <Image
              src="/images/logo.PNG"
              alt="KARBA Financial Consultant Ltd"
              width={180}
              height={70}
              className="mb-6"
            />

            <p className="text-slate-300 leading-relaxed">
              KARBA Financial Consultant Ltd provides trusted Insurance
              Advisory, Real Estate Advisory and Financial Advisory
              services for individuals, families and businesses.
            </p>

            <p className="mt-6 text-[#D4AF37] font-semibold">
              Live Confidently.
              <br />
              Invest Wisely.
              <br />
              Leave a Legacy.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-bold text-xl mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link href="/">Home</Link>

              <br />

              <Link href="/about">About</Link>

              <br />

              <Link href="/services">Services</Link>

              <br />

              <Link href="/insights">Insights</Link>

              <br />

              <Link href="/contact">Contact</Link>

            </div>

          </div>

          {/* Services */}
          <div>

            <h3 className="font-bold text-xl mb-6">
              Our Services
            </h3>

            <div className="space-y-4">

              <p>Insurance Advisory</p>

              <p>Real Estate Advisory</p>

              <p>Financial Advisory</p>

              <p>Children Education Planning</p>

              <p>Retirement Planning</p>

            </div>

          </div>

          {/* Contact */}

          <div className="space-y-4">

            <a
              href="tel:+2349162631205"
              className="flex items-center gap-3 hover:text-[#D4AF37]"
            >
              <Phone size={20} />
              <span>+234 916 263 1205</span>
            </a>

            <a
              href="mailto:oluwabamigbetan@gmail.com"
              className="flex items-center gap-3 hover:text-[#D4AF37]"
            >
              <Mail size={20} />
              <span>oluwabamigbetan@gmail.com</span>
            </a>

            <a
              href="https://wa.me/2349162631205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#D4AF37]"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>

          </div>

        </div>

      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400 text-center">
            © 2026 KARBA Financial Consultant Ltd.
            All Rights Reserved.
          </p>

          <div className="flex gap-6 text-slate-300">

            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms-of-service">
              Terms of Service
            </Link>

            <Link href="/disclaimer">
              Disclaimer
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}