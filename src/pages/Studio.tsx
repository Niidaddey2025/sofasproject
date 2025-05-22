
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import StudioHeader from "../components/studio/StudioHeader";
import StudioContent from "../components/studio/StudioContent";

const Studio = () => {
  useEffect(() => {
    document.title = "Custom Studio | SofasAndMore";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <StudioHeader />
        <StudioContent />
      </main>
      <Footer />
    </div>
  );
};

export default Studio;
