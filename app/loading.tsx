export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <div className="text-center">

        <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <p className="text-white mt-6">
          Loading...
        </p>

      </div>

    </div>
  );
}