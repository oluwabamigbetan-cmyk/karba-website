"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#071A3D]/95 backdrop-blur-md border-b border-yellow-500/20 shadow-lg">

      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" onClick={closeMenu}>
          <Image
            src="/images/logo.PNG"
            alt="KARBA Financial Consultant Ltd"
            width={220}
            height={70}
            priority
            className="h-12 md:h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-8">

          <Link href="/" className="text-white hover:text-[#D4AF37]">
            Home
          </Link>

          <Link href="/about" className="text-white hover:text-[#D4AF37]">
            About
          </Link>

          <Link href="/services" className="text-white hover:text-[#D4AF37]">
            Services
          </Link>

          <Link href="/insights" className="text-white hover:text-[#D4AF37]">
            Insights
          </Link>

          <Link href="/contact" className="text-white hover:text-[#D4AF37]">
            Contact
          </Link>

          <Link
            href="/book-consultation"
            className="bg-[#D4AF37] text-[#071A3D] px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Book Consultation
          </Link>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden bg-[#071A3D] border-t border-yellow-500/20">

          <div className="flex flex-col px-6 py-6 space-y-5">

            <Link href="/" onClick={closeMenu} className="text-white">
              Home
            </Link>

            <Link href="/about" onClick={closeMenu} className="text-white">
              About
            </Link>

            <Link href="/services" onClick={closeMenu} className="text-white">
              Services
            </Link>

            <Link href="/insights" onClick={closeMenu} className="text-white">
              Insights
            </Link>

            <Link href="/contact" onClick={closeMenu} className="text-white">
              Contact
            </Link>

            <Link
              href="/book-consultation"
              onClick={closeMenu}
              className="bg-[#D4AF37] text-[#071A3D] text-center py-3 rounded-lg font-bold"
            >
              Book Consultation
            </Link>

          </div>

        </div>

      )}

    </nav>
  );
}