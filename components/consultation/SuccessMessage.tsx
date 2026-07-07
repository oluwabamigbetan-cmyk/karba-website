interface Props {
  onReset: () => void;
}

export default function SuccessMessage({ onReset }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
        <span className="text-4xl">✓</span>
      </div>

      <h2 className="mt-8 text-4xl font-bold text-[#071A3D]">
        Consultation Request Sent
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        Thank you for choosing KARBA Financial Consultant Ltd.
      </p>

      <p className="mt-2 text-gray-600 leading-8">
        We have received your consultation request successfully.
      </p>

      <p className="mt-2 text-gray-600 leading-8">
        One of our consultants will contact you within one business day.
      </p>

      <div className="mt-10 space-y-4">

        <a
          href="https://wa.me/2349162631205"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition"
        >
          Continue on WhatsApp
        </a>

        <button
          onClick={onReset}
          className="w-full bg-[#071A3D] hover:bg-[#0B2554] text-white font-bold py-4 rounded-xl transition"
        >
          Submit Another Request
        </button>

      </div>

    </div>
  );
}