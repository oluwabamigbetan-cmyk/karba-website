"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import PersonalInfo from "./PersonalInfo";
import ServiceDetails from "./ServiceDetails";
import SuccessMessage from "./SuccessMessage";
import ConsultationSidebar from "./ConsultationSidebar";

import type { ConsultationFormData } from "./types";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ConsultationFormData>();

  const onSubmit = async (
    data: ConsultationFormData
  ) => {
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
      reset();
      setSubmitted(true);
    } else {
      alert(
        "Something went wrong. Please try again."
      );
    }
  };

  if (submitted) {
    return (
      <SuccessMessage
        onReset={() => setSubmitted(false)}
      />
    );
  }

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-10">

            <h2 className="text-4xl font-bold text-[#071A3D]">
              Request a Consultation
            </h2>

            <p className="mt-4 text-gray-600">
              Complete the form below and one of our
              consultants will contact you shortly.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8 mt-10"
            >

              <PersonalInfo
                register={register}
                errors={errors}
              />

              <ServiceDetails
                register={register}
              />
              <div className="pt-4">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] hover:bg-yellow-400 text-[#071A3D] font-bold py-4 rounded-xl transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Request Consultation"}
                </button>

              </div>

            </form>

          </div>

          <ConsultationSidebar />

        </div>

      </div>

    </section>
  );
}