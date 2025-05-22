
import { BookOpen } from "lucide-react";

const StoryHeader = () => {
  return (
    <section className="pt-32 pb-12 container mx-auto px-4 md:px-6">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Story</h1>
        <p className="text-muted-foreground max-w-xl text-lg">
          From humble beginnings to contemporary design excellence, discover the journey that shaped SofasAndMore.
        </p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <BookOpen className="h-5 w-5" />
          <span>Heritage · Craftsmanship · Innovation</span>
        </div>
      </div>
    </section>
  );
};

export default StoryHeader;
