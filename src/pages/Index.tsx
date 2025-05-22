
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import DesignPhilosophy from "../components/DesignPhilosophy";
import DesignProcess from "../components/DesignProcess";
import ShopByRoom from "../components/ShopByRoom";
import FeaturedProjects from "../components/FeaturedProjects";
import SustainabilityCommitment from "../components/SustainabilityCommitment";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Update title
    document.title = "SofasAndMore | Contemporary Furniture Design";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <DesignPhilosophy />
        <FeaturedCollections />
        <DesignProcess />
        <ShopByRoom />
        <FeaturedProjects />
        <SustainabilityCommitment />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
