
import { Filter, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CollectionsHeader = () => {
  return (
    <section className="pt-32 pb-12 container mx-auto px-4 md:px-6">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Collections</h1>
        <p className="text-muted-foreground max-w-xl">
          Discover our curated collection of contemporary furniture pieces, each designed
          to transform your space with style and functionality.
        </p>
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search collections..." 
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>
    </section>
  );
};

export default CollectionsHeader;
