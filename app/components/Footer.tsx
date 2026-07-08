import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              KARBA
            </h2>

            <p className="mt-4 text-slate-300">
              Live Confidently.
              <br />
              Invest Wisely.
              <br />
              Leave a Legacy.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Services
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>Insurance Advisory</li>

              <li>Property Advisory</li>

              <li>Retirement Planning</li>

              <li>Education Planning</li>

            </ul>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Contact
            </h3>

            <p className="text-slate-300">
              09162631205
            </p>

            <p className="text-slate-300">
              oluwabamigbetan@gmail.com
            </p>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500">

          © {new Date().getFullYear()} KARBA Financial Consultant Ltd.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}