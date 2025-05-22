
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import StoryHeader from "../components/story/StoryHeader";
import StoryContent from "../components/story/StoryContent";

const Story = () => {
  useEffect(() => {
    document.title = "Our Story | SofasAndMore";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <StoryHeader />
        <StoryContent />
      </main>
      <Footer />
    </div>
  );
};

export default Story;
