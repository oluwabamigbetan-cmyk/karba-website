import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        <p className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase">
          Error 404
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-[#071A3D]">
          Page Not Found
        </h1>

        <p className="mt-8 text-lg leading-8 text-gray-600">
          Sorry, the page you are looking for doesn't exist, may have been
          moved, or the link is incorrect.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/"
            className="bg-[#D4AF37] text-[#071A3D] font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
          >
            Back to Home
          </Link>

          <Link
            href="/book-consultation"
            className="border-2 border-[#071A3D] text-[#071A3D] font-bold px-8 py-4 rounded-xl hover:bg-[#071A3D] hover:text-white transition"
          >
            Book Consultation
          </Link>

        </div>

      </div>
    </main>
  );
}