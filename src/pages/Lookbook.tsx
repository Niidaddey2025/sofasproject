
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LookbookHeader from "../components/lookbook/LookbookHeader";
import LookbookGallery from "../components/lookbook/LookbookGallery";

const Lookbook = () => {
  useEffect(() => {
    document.title = "Lookbook | SofasAndMore";
    
    // Preload critical resources
    const preloadImages = () => {
      const imagesToPreload = [
        "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ];
      
      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <LookbookHeader />
        <LookbookGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Lookbook;
