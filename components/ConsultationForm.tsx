"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  contactMethod: string;
  message: string;
};

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const response = await fetch("https://formspree.io/f/xlgyvpbd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitted(true);
      reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
        <div className="text-6xl mb-6">✅</div>

        <h2 className="text-4xl font-bold text-[#071A3D]">
          Thank You!
        </h2>

        <p className="mt-6 text-gray-600 text-lg">
          Your consultation request has been received successfully.
        </p>

        <p className="mt-2 text-gray-600">
          We'll contact you within one business day.
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

<a
  href="/"
  className="block w-full bg-[#071A3D] hover:bg-[#0A2557] text-white font-bold py-4 rounded-xl transition"
>
  Return Home
</a>

</div>

</div>
);
}

return (
  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

    <div className="mb-10">

      <h2 className="text-4xl font-bold text-[#071A3D]">
        Consultation Request Form
      </h2>

      <p className="mt-4 text-gray-600">
        Complete the form below and we'll contact you within one business day.
      </p>

    </div>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >

      {/* Full Name */}

      <div>

        <label className="block mb-2 font-semibold">
          Full Name *
        </label>

        <input
          type="text"
          {...register("fullName", {
            required: "Full name is required",
          })}
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        />

        {errors.fullName && (
          <p className="mt-2 text-red-600 text-sm">
            {errors.fullName.message}
          </p>
        )}

      </div>

      {/* Phone Number */}

      <div>

        <label className="block mb-2 font-semibold">
          Phone Number *
        </label>

        <input
          type="tel"
          {...register("phone", {
            required: "Phone number is required",
          })}
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        />

        {errors.phone && (
          <p className="mt-2 text-red-600 text-sm">
            {errors.phone.message}
          </p>
        )}

      </div>
      <button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-[#D4AF37] hover:bg-[#C49C22] text-[#071A3D] font-bold py-4 rounded-xl transition"
>
  {isSubmitting ? "Submitting..." : "Book Consultation"}
</button>

</form>

</div>
);
}