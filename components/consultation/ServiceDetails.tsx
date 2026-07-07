import { UseFormRegister } from "react-hook-form";
import { ConsultationFormData } from "./types";

interface Props {
  register: UseFormRegister<ConsultationFormData>;
}

export default function ServiceDetails({
  register,
}: Props) {
  return (
    <div className="space-y-6">

      {/* Service */}

      <div>
        <label className="block mb-2 font-semibold">
          Service Required *
        </label>

        <select
          {...register("service", {
            required: true,
          })}
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#D4AF37] outline-none"
        >
          <option value="">Select a Service</option>

          <option>Insurance Advisory</option>

          <option>Financial Advisory</option>

          <option>Real Estate Advisory</option>

          <option>Life Insurance</option>

          <option>Children's Education Planning</option>

          <option>Retirement Planning</option>

          <option>Family Protection Planning</option>

          <option>Business Protection</option>

          <option>Buy Property</option>

          <option>Sell Property</option>

          <option>Rent Property</option>

          <option>Lease Property</option>

          <option>Land Purchase</option>

          <option>Investment Property</option>

          <option>Other</option>

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
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#D4AF37] outline-none"
        />
      </div>

      {/* Preferred Time */}

      <div>
        <label className="block mb-2 font-semibold">
          Preferred Consultation Time
        </label>

        <input
          type="time"
          {...register("preferredTime")}
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#D4AF37] outline-none"
        />
      </div>

      {/* Contact Method */}

      <div>
        <label className="block mb-2 font-semibold">
          Preferred Contact Method
        </label>

        <select
          {...register("contactMethod")}
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#D4AF37] outline-none"
        >
          <option>WhatsApp</option>

          <option>Phone Call</option>

          <option>Email</option>

          <option>Google Meet</option>

          <option>Physical Meeting</option>
        </select>
      </div>

      {/* Message */}

      <div>
        <label className="block mb-2 font-semibold">
          Tell us how we can help
        </label>

        <textarea
          rows={6}
          {...register("message")}
          placeholder="Briefly describe your needs..."
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#D4AF37] outline-none resize-none"
        />
      </div>

    </div>
  );
}