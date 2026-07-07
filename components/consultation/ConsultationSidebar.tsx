import {
  ShieldCheck,
  Phone,
  Mail,
  Award,
} from "lucide-react";

export default function ConsultationSidebar() {
  return (
    <aside className="bg-[#071A3D] text-white rounded-3xl p-10 shadow-xl h-fit">

      <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
        Why Choose KARBA
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        Trusted Financial Guidance.
      </h2>

      <p className="mt-6 text-slate-300 leading-8">
        We are committed to helping individuals, families and businesses
        make informed financial decisions with integrity, professionalism
        and long-term value.
      </p>

      <div className="mt-10 space-y-5">

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-[#D4AF37]" size={22} />
          <span>CAC Incorporated</span>
        </div>

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-[#D4AF37]" size={22} />
          <span>NAICOM Licensed</span>
        </div>

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-[#D4AF37]" size={22} />
          <span>CIIN Certified</span>
        </div>

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-[#D4AF37]" size={22} />
          <span>SCUML Registered</span>
        </div>

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-[#D4AF37]" size={22} />
          <span>SMEDAN Registered</span>
        </div>

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-[#D4AF37]" size={22} />
          <span>LASRERA Enrolled</span>
        </div>

      </div>

      <div className="border-t border-white/20 my-10"></div>

      <div className="flex items-center gap-3">
        <Award className="text-[#D4AF37]" size={22} />
        <span className="font-semibold">
          Live Confidently. Invest Wisely. Leave a Legacy.
        </span>
      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-3">
          <Phone className="text-[#D4AF37]" size={20} />
          <span>09162631205</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-[#D4AF37]" size={20} />
          <span>info@karbafinancialconsultant.com</span>
        </div>

      </div>

    </aside>
  );
}