
import { LayersIcon } from "lucide-react";

const StudioHeader = () => {
  return (
    <section className="pt-32 pb-12 container mx-auto px-4 md:px-6">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Custom Studio</h1>
        <p className="text-muted-foreground max-w-xl text-lg">
          Create your perfect piece of furniture with our custom design service. Choose materials, dimensions, and finishes to match your space.
        </p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <LayersIcon className="h-5 w-5" />
          <span>Design · Customize · Create</span>
        </div>
      </div>
    </section>
  );
};

export default StudioHeader;
