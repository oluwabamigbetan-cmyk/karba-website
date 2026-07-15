import Hero from "@/components/real-estate/Hero";
import WhyKarba from "@/components/real-estate/WhyKarba";
import RealEstateServices from "@/components/real-estate/Services";
import Process from "@/components/real-estate/Process";
import FAQ from "@/components/real-estate/FAQ";
import CTA from "@/components/real-estate/CTA";
import Disclaimer from "@/components/real-estate/Disclaimer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Advisory | KARBA Financial Consultant Ltd",
  description:
    "Professional real estate advisory services in Nigeria. Get expert guidance on property purchase, investment planning, due diligence, and real estate consultation.",
  keywords: [
    "Karba",
    "KARBA Financial Consultant",
    "Real Estate",
    "Insurance",
    "Retirement Planning",
    "Children Education Planning",
    "Children Education Plan",
    "Family Protection Planning",
    "KARBA Financial",
    "KARBA Consultant",
    "Life Insurance",
    "Insurance Agent",
    "KARBA Financial Consultant Ltd",
    "Real Estate Advisory",
    "Real Estate Consultant",
    "Insurance Consultant",
    "Insurance Advisory",
    "Financial Consultant",
    "Financial Planning",
    "Financial Advisor",
    "Property Investment",
    "Property Purchase",
    "Property Rental",
    "Real Estate Consultancy",
    "Property Sales",
    "Property Leasing",
    "Property Rental",
    "Property Investment",
    "Property Purchase",
    "Real Estate Consultant Nigeria",
    "Insurance Consultant Nigeria",
    "Financial Consultant Nigeria",
    "Financial Planning Nigeria",
    "Financial Advisor Nigeria",
    "Lagos Real Estate",
    "Lagos Property Investment",
    "Lagos Property Purchase",
    "Lagos Property Rental",
    "Lagos Insurance Consultant",
    "Lagos Financial Consultant",
    "Lagos Financial Planning",
    "Lagos Financial Advisor",
  ],
};

export default function RealEstatePage() {
  return (
    <main>
      <Hero />
      <RealEstateServices />
      <WhyKarba />
      <Process />
      <FAQ />
      <CTA />
      <Disclaimer />
    </main>
  );
}