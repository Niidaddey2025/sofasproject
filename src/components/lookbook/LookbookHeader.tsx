
import { ImageIcon } from "lucide-react";

const LookbookHeader = () => {
  return (
    <section className="pt-32 pb-12 container mx-auto px-4 md:px-6">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Lookbook</h1>
        <p className="text-muted-foreground max-w-xl text-lg">
          Explore our furniture in real spaces. Get inspired by our curated collection of interior designs featuring our signature pieces.
        </p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <ImageIcon className="h-5 w-5" />
          <span>Inspiration · Styling · Spaces</span>
        </div>
      </div>
    </section>
  );
};

export default LookbookHeader;
