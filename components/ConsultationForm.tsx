"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

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
    const response = await fetch(
      "https://formspree.io/f/xlgyvpbd",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    );

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

        <div className="text-6xl mb-6">
          ✅
        </div>

        <h2 className="text-4xl font-bold text-[#071A3D]">
          Thank You!
        </h2>

        <p className="mt-5 text-gray-600">
          Your consultation request has been received successfully.
        </p>

        <p className="text-gray-600 mt-2">
          We will contact you within one business day.
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

          <Link href="/">
  Back to Home
</Link>

        </div>

      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

      <div className="mb-10">

  <h2 className="text-4xl font-bold text-[#071A3D]">
    Consultation Request
  </h2>

  <p className="mt-3 text-gray-600">
    Complete this form and our team will contact you within one business day.
  </p>

</div>

<form
  onSubmit={handleSubmit(onSubmit)}
  className="space-y-8"
>
    
            {/* Full Name */}
      <div>
        <label className="block mb-2 font-semibold">
          Full Name <span className="text-red-600">*</span>
        </label>

        <input
          type="text"
          {...register("fullName", {
            required: "Full name is required",
          })}
          className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          placeholder="Enter your full name"
        />

        {errors.fullName && (
          <p className="mt-2 text-sm text-red-600">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-2 font-semibold">
          Phone Number <span className="text-red-600">*</span>
        </label>

        <input
          type="tel"
          {...register("phone", {
            required: "Phone number is required",
          })}
          className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          placeholder="+234..."
        />

        {errors.phone && (
          <p className="mt-2 text-sm text-red-600">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-semibold">
          Email Address <span className="text-red-600">*</span>
        </label>

        <input
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
          className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          placeholder="you@example.com"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Service */}
      <div>
        <label className="block mb-2 font-semibold">
          Service Required
        </label>

        <select
          {...register("service")}
          className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          <option value="">Select a service</option>
          <option>Life Insurance</option>
          <option>Children Education Plan</option>
          <option>Retirement Planning</option>
          <option>Annuity</option>
          <option>Investment Advisory</option>
          <option>Real Estate Consultancy</option>
          <option>Property Investment</option>
          <option>General Financial Consultation</option>
        </select>
      </div>
      {/* Preferred Date */}
      <div>
        <label className="block mb-2 font-semibold">
          Preferred Consultation Date
        </label>

        <input
          type="date"
          {...register("preferredDate")}
          className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        />
      </div>

      {/* Preferred Time */}
      <div>
        <label className="block mb-2 font-semibold">
          Preferred Time
        </label>

        <input
          type="time"
          {...register("preferredTime")}
          className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        />
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block mb-2 font-semibold">
          Preferred Contact Method
        </label>

        <select
          {...register("contactMethod")}
          className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          <option value="">Select one</option>
          <option>Phone Call</option>
          <option>WhatsApp</option>
          <option>Email</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 font-semibold">
          Tell us about your needs
        </label>

        <textarea
          rows={6}
          {...register("message")}
          placeholder="Please provide any additional information that will help us prepare for your consultation..."
          className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-[#D4AF37] py-4 font-bold text-[#071A3D] transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Book Consultation"}
      </button>
      </form>

  </div>
);
}