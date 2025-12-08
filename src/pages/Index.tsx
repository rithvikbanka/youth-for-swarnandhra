import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EventCategories } from "@/components/EventCategories";
import { WhyAttend } from "@/components/WhyAttend";
import { Schedule } from "@/components/Schedule";
import { Gallery } from "@/components/Gallery";
import { RegistrationForm } from "@/components/RegistrationForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { OrganizedBy } from "@/components/OrganizedBy";
import { TransformSection } from "@/components/TransformSection";


const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <OrganizedBy />
      <TransformSection />
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
