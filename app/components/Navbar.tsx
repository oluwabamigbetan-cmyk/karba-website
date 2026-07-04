"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/branding/karba-logo.png"
            alt="KARBA Financial Consultant Ltd"
            width={55}
            height={55}
            priority
          />

          <div>
            <h2 className="font-bold text-slate-900">
              KARBA
            </h2>

            <p className="text-xs text-slate-500">
              Financial Consultant Ltd
            </p>
          </div>

        </Link>

        <nav className="hidden lg:flex items-center gap-8">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/insurance-advisory">Insurance</Link>

          <Link href="/real-estate-advisory">Property</Link>

          <Link href="/insights">Insights</Link>

          <Link href="/contact">Contact</Link>

        </nav>

        <div className="hidden lg:flex gap-4">

          <Link
            href="/book-consultation"
            className="rounded-xl bg-[#D4AF37] px-5 py-3 font-semibold hover:opacity-90 transition"
          >
            Book Consultation
          </Link>

        </div>

        <button className="lg:hidden">
          <Menu size={28} />
        </button>

      </div>
    </header>
  );
}