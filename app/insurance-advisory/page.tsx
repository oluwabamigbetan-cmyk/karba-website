import Hero from "@/components/insurance/Hero";
import Services from "@/components/insurance/Services";
import Process from "@/components/insurance/Process";
import WhyKarba from "@/components/insurance/WhyKarba";
import Credentials from "@/components/insurance/Credentials";
import FAQ from "@/components/insurance/FAQ";
import CTA from "@/components/insurance/CTA";
import Disclaimer from "@/components/insurance/Disclaimer";

export const metadata = {
  title: "Insurance Advisory | KARBA Financial Consultant Ltd",
  description:
    "Professional Insurance Advisory services from KARBA Financial Consultant Ltd. We help individuals, families and businesses choose the right insurance solutions for financial protection, wealth preservation and peace of mind.",
};

export default function InsuranceAdvisoryPage() {
  return (
    <main>

      <Hero />

      <Services />

      <Process />

      <WhyKarba />

      <Credentials />

      <FAQ />

      <CTA />

      <Disclaimer />

    </main>
  );
}