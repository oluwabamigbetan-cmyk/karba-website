import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#071A3D]/95 backdrop-blur-md border-b border-yellow-500/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">

        <Link href="/" className="flex items-center">
  <Image
    src="/images/logo.PNG"
    alt="KARBA Financial Consultant Ltd"
    width={230}
    height={90}
    className="w-auto h-20"
    priority
  />
</Link>

        <div className="hidden md:flex gap-8 text-white font-medium">

          <Link
  href="/"
  className="text-white hover:text-[#D4AF37] transition-all duration-300 hover:-translate-y-0.5"
>
  Home
</Link>

          <Link
            href="/about"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            About
          </Link>

          <Link
  href="/services"
  className="hover:text-yellow-400 transition-colors duration-300"
>
  Services
</Link>

          <Link
            href="/insights"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Insights
          </Link>

          <Link
            href="/book-consultation"
            className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-5 py-2 rounded-lg font-semibold transition-all duration-300"
          >
            Book Consultation
          </Link>

        </div>

      </div>
    </nav>
  );
}