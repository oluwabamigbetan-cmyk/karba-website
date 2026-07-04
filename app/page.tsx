import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TrustBar from "./sections/TrustBar";
import Services from "./sections/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Footer />
    </>
  );
}