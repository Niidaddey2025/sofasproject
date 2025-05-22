
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MaterialsHeader from "../components/materials/MaterialsHeader";
import MaterialsContent from "../components/materials/MaterialsContent";

const Materials = () => {
  useEffect(() => {
    document.title = "Materials | SofasAndMore";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <MaterialsHeader />
        <MaterialsContent />
      </main>
      <Footer />
    </div>
  );
};

export default Materials;
