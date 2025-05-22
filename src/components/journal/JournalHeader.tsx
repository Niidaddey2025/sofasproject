
import { BookOpen } from "lucide-react";

const JournalHeader = () => {
  return (
    <section className="pt-32 pb-12 container mx-auto px-4 md:px-6">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Journal</h1>
        <p className="text-muted-foreground max-w-xl text-lg">
          Explore our latest thoughts on design, sustainability, and the future of furniture.
        </p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <BookOpen className="h-5 w-5" />
          <span>Design Insights · Sustainability · Trends</span>
        </div>
      </div>
    </section>
  );
};

export default JournalHeader;
