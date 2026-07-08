import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#071A3D]/95 backdrop-blur-md border-b border-yellow-500/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.PNG"
            alt="KARBA Financial Consultant Ltd"
            width={220}
            height={80}
            priority
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center gap-8 text-white font-medium">

          <Link href="/" className="hover:text-[#D4AF37]">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#D4AF37]">
            About
          </Link>

          <Link href="/services" className="hover:text-[#D4AF37]">
            Services
          </Link>

          <Link href="/insights" className="hover:text-[#D4AF37]">
            Insights
          </Link>

          <Link href="/contact" className="hover:text-[#D4AF37]">
            Contact
          </Link>

          <Link
            href="/book-consultation"
            className="bg-[#D4AF37] text-[#071A3D] px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400"
          >
            Book Consultation
          </Link>

        </div>

      </div>
    </nav>
  );
}