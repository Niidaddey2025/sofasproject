
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import JournalHeader from "../components/journal/JournalHeader";
import JournalGrid from "../components/journal/JournalGrid";

const Journal = () => {
  useEffect(() => {
    document.title = "Journal | SofasAndMore";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <JournalHeader />
        <JournalGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
