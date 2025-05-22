
import { Layers } from "lucide-react";

const MaterialsHeader = () => {
  return (
    <section className="pt-32 pb-12 container mx-auto px-4 md:px-6">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Materials</h1>
        <p className="text-muted-foreground max-w-xl text-lg">
          Discover our premium selection of sustainable materials. Each chosen for its quality, durability, and environmental impact.
        </p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Layers className="h-5 w-5" />
          <span>Quality · Sustainability · Craftsmanship</span>
        </div>
      </div>
    </section>
  );
};

export default MaterialsHeader;
