export default function TrustBar() {
  const credentials = [
    "CAC Registered",
    "NAICOM Licensed",
    "CIIN Authorized",
    "SCUML Registered",
    "LASRERA Enrolled",
    "SMEDAN Registered",
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-yellow-400">
          {credentials.map((item) => (
            <span key={item}>✓ {item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}