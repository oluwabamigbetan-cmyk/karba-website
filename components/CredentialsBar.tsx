import {
  Building2,
  ShieldCheck,
  Award,
  FileCheck,
  Landmark,
 BadgeCheck,
} from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "CAC",
    subtitle: "Incorporated Company",
  },
  {
    icon: ShieldCheck,
    title: "NAICOM",
    subtitle: "Licensed Insurance Agent",
  },
  {
    icon: Award,
    title: "CIIN",
    subtitle: "Certified Professional",
  },
  {
    icon: FileCheck,
    title: "SCUML",
    subtitle: "Registered",
  },
  {
    icon: Landmark,
    title: "LASRERA",
    subtitle: "Enrolled",
  },
  {
    icon: BadgeCheck,
    title: "SMEDAN",
    subtitle: "Registered",
  },
];

export default function CredentialsBar() {
  return (
    <section className="bg-slate-900 border-y border-yellow-500">
      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-3"
              >
                <Icon className="text-yellow-500" size={30} />

                <div>
                  <h3 className="font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm">
                    {item.subtitle}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}