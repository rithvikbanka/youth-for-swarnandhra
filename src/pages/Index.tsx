import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EventCategories } from "@/components/EventCategories";
import { WhyAttend } from "@/components/WhyAttend";
import { Schedule } from "@/components/Schedule";
import { Gallery } from "@/components/Gallery";
import { RegistrationForm } from "@/components/RegistrationForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EventCategories />
      <WhyAttend />
      <Schedule />
      <Gallery />
      <RegistrationForm />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
