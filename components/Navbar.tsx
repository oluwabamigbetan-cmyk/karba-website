export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-yellow-400">
          KARBA Financial Consultant Ltd
        </h1>

        <div className="flex gap-6 text-sm font-medium">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/insurance-advisory">Insurance</a>
          <a href="/real-estate-advisory">Real Estate</a>
          <a href="/insights">Insights</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}