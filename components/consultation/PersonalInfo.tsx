import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ConsultationFormData } from "./types";

interface Props {
  register: UseFormRegister<ConsultationFormData>;
  errors: FieldErrors<ConsultationFormData>;
}

export default function PersonalInfo({
  register,
  errors,
}: Props) {
  return (
    <div className="space-y-6">

      <div>
        <label className="block mb-2 font-semibold">
          Full Name *
        </label>

        <input
          type="text"
          {...register("fullName", {
            required: "Full Name is required",
          })}
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#D4AF37] outline-none"
        />

        {errors.fullName && (
          <p className="text-red-600 text-sm mt-2">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-semibold">
          Phone Number *
        </label>

        <input
          type="tel"
          {...register("phone", {
            required: "Phone Number is required",
          })}
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#D4AF37] outline-none"
        />

        {errors.phone && (
          <p className="text-red-600 text-sm mt-2">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-semibold">
          Email Address *
        </label>

        <input
          type="email"
          {...register("email", {
            required: "Email Address is required",
          })}
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#D4AF37] outline-none"
        />

        {errors.email && (
          <p className="text-red-600 text-sm mt-2">
            {errors.email.message}
          </p>
        )}
      </div>

    </div>
  );
}