import Hero from "@/components/real-estate/Hero";
import WhyKarba from "@/components/real-estate/WhyKarba";
import RealEstateServices from "@/components/real-estate/Services";
import Process from "@/components/real-estate/Process";
import FAQ from "@/components/real-estate/FAQ";
import CTA from "@/components/real-estate/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Advisory | KARBA Financial Consultant Ltd",
  description:
    "Professional real estate advisory services in Nigeria. Get expert guidance on property purchase, investment planning, due diligence, and real estate consultation.",
  keywords: [
    "Real Estate Advisory",
    "Property Investment",
    "Property Purchase",
    "Real Estate Consultant Nigeria",
    "KARBA Financial Consultant",
    "Lagos Real Estate",
  ],
};

export default function RealEstatePage() {
  return (
    <main>
      <Hero />
      <WhyKarba />
      <RealEstateServices />
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
}