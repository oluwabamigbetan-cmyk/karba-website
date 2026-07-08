import {
  Building2,
  ShieldCheck,
  Award,
  BadgeCheck,
  Landmark,
  FileCheck,
} from "lucide-react";

const credentials = [
  {
    icon: Building2,
    title: "CAC Incorporated",
    description: "Registered as KARBA Financial Consultant Ltd under the Corporate Affairs Commission.",
  },
  {
    icon: ShieldCheck,
    title: "NAICOM Licensed",
    description: "Authorized Insurance Agent operating in accordance with NAICOM regulations.",
  },
  {
    icon: Award,
    title: "CIIN Certified",
    description: "Professional qualification from the Chartered Insurance Institute of Nigeria.",
  },
  {
    icon: Landmark,
    title: "LASRERA Enrolled",
    description: "Real Estate Agency enrolment supporting professional real estate advisory.",
  },
  {
    icon: FileCheck,
    title: "SCUML Registered",
    description: "Registered for Anti-Money Laundering and Counter Financing of Terrorism compliance.",
  },
  {
    icon: BadgeCheck,
    title: "SMEDAN Registered",
    description: "Recognized as a registered Micro, Small and Medium Enterprise in Nigeria.",
  },
];

export default function Credentials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-yellow-600 font-semibold">
            TRUST & CREDENTIALS
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Why Clients Trust KARBA
          </h2>

          <p className="mt-6 text-slate-600">
            Our registrations and professional credentials reflect our commitment
            to ethical, compliant, and client-focused advisory services.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {credentials.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Icon
                  size={40}
                  className="text-yellow-600 mb-6"
                />

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}