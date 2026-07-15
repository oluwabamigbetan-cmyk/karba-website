import Hero from "@/components/home/Hero";
import CredentialsBar from "@/components/CredentialsBar";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WhyChooseKarba from "@/components/home/WhyChooseKarba";
import HowWeWork from "@/components/home/HowWeWork";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import KnowledgeCentre from "@/components/home/KnowledgeCentre";
import CallToAction from "./sections/CallToAction";


export default function HomePage() {
  return (
    <main className="min-h-screen">

      <Hero />

      <CredentialsBar />

      <About />

      <Services />

      <WhyChooseKarba />

      <HowWeWork />

      <Testimonials />

      <Faq />

      <KnowledgeCentre />

      <CallToAction />

    </main>
  );
}