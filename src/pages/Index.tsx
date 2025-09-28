import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { BrowseTutors } from "@/components/BrowseTutors";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <BrowseTutors />
      <Footer />
    </div>
  );
};

export default Index;
