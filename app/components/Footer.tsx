export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold text-yellow-400">
          KARBA Financial Consultant Ltd
        </h2>

        <p className="mt-4 text-slate-300 max-w-xl">
          Helping individuals, families and businesses build financial
          confidence through Insurance and Property Advisory.
        </p>

        <div className="mt-10 border-t border-slate-700 pt-6 text-slate-400">
          © {new Date().getFullYear()} KARBA Financial Consultant Ltd.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}