import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="KARBA Financial Consultant Ltd"
            width={180}
            height={60}
            priority
          />
        </Link>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/insurance-advisory">
            Insurance
          </Link>

          <Link href="/investment-advisory">
            Investment
          </Link>

          <Link href="/book-consultation">
            Consultation
          </Link>

          <Link href="/insights">
            Insights
          </Link>

        </div>

      </div>
    </nav>
  );
}