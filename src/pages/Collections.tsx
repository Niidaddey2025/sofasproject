
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CollectionsGrid from "../components/collections/CollectionsGrid";
import CollectionsHeader from "../components/collections/CollectionsHeader";

const Collections = () => {
  useEffect(() => {
    document.title = "Collections | SofasAndMore";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <CollectionsHeader />
        <CollectionsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
