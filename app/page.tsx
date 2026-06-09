import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProfessionalSection from "@/components/ProfessionalSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-24 bg-[#f7f3f0]">
        <Hero />
        <HowItWorks />
        <ProfessionalSection />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}