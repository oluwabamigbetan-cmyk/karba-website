"use client";

import {
  ShieldCheck,
  BadgeCheck,
  Building2,
  Landmark,
  BriefcaseBusiness,
  Award,
} from "lucide-react";

const credentials = [
  {
    icon: Building2,
    title: "CAC Registered",
    text: "Private Company Limited by Shares",
  },
  {
    icon: ShieldCheck,
    title: "NAICOM Licensed",
    text: "Licensed Insurance Agent",
  },
  {
    icon: Award,
    title: "CIIN Certified",
    text: "Chartered Insurance Institute of Nigeria",
  },
  {
    icon: BadgeCheck,
    title: "SCUML Registered",
    text: "Federal Registration",
  },
  {
    icon: BriefcaseBusiness,
    title: "SMEDAN Registered",
    text: "Recognized MSME",
  },
  {
    icon: Landmark,
    title: "LASRERA",
    text: "Real Estate Enrolment",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm">
            WHY CLIENTS TRUST KARBA
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Professional Credentials You Can Trust
          </h2>

          <p className="mt-5 text-slate-300 max-w-3xl mx-auto">
            KARBA Financial Consultant Ltd operates with recognized business
            registrations and professional industry credentials, giving clients
            confidence that they are dealing with a credible and accountable
            advisory firm.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {credentials.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="rounded-2xl bg-slate-800 p-8 hover:bg-slate-700 transition"
              >

                <Icon
                  className="text-yellow-400 mb-6"
                  size={42}
                />

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-slate-300 mt-3">
                  {item.text}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}