
import { Grid3X3, LayoutGrid, LayoutList, X } from "lucide-react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const collections = [
  {
    id: 1,
    name: "Aurora",
    description: "Minimalist designs with gentle curves and natural materials.",
    imageUrl: "../src/assets/photo_6014676754439981960_y.jpg",
    category: "Living Room",
    featured: true,
  },
  {
    id: 2,
    name: "Nova",
    description: "Bold, contemporary pieces that make a statement.",
    imageUrl: "../src/assets/port-bed.png",
    category: "Dining Room",
    featured: false,
  },
  {
    id: 3,
    name: "Terra",
    description: "Sustainable furniture crafted from reclaimed materials.",
    imageUrl: "../src/assets/photo_6014676754439981940_y.jpg",
    category: "Bedroom",
    featured: false,
  },
  {
    id: 4,
    name: "Aria",
    description: "Light, elegant designs for modern living spaces.",
    imageUrl: "../src/assets/bed-port.png",
    category: "Dining Room",
    featured: true,
  },
  {
    id: 5,
    name: "Zenith",
    description: "Functional luxury for the discerning customer.",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Living Room",
    featured: false,
  },
  {
    id: 6,
    name: "Nordic",
    description: "Scandinavian-inspired pieces featuring clean lines and light woods.",
    imageUrl: "https://images.unsplash.com/photo-1556910638-b8a66952c94d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Bedroom",
    featured: true,
  },
  {
    id: 7,
    name: "Moderne",
    description: "Mid-century modern classics reimagined for contemporary living.",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Office",
    featured: false,
  },
  {
    id: 8,
    name: "Urban",
    description: "Industrial-inspired designs perfect for city lofts and apartments.",
    imageUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Living Room",
    featured: true,
  },
  {
    id: 9,
    name: "Coastal",
    description: "Relaxed beach-inspired furniture with light colors and natural textures.",
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Bedroom",
    featured: false,
  },
  {
    id: 10,
    name: "Milano",
    description: "Italian-inspired luxury with elegant curves and rich materials.",
    imageUrl: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1126&q=80",
    category: "Dining Room",
    featured: false,
  },
  {
    id: 11,
    name: "Artisan",
    description: "Handcrafted pieces created by skilled craftspeople using traditional techniques.",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80",
    category: "Office",
    featured: true,
  },
  {
    id: 12,
    name: "Fusion",
    description: "East meets West in this eclectic collection of globally-inspired designs.",
    imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    category: "Living Room",
    featured: false,
  }
];

const CollectionsGrid = () => {
  const [isLoading] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedImage, setSelectedImage] = useState<{url: string, name: string} | null>(null);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="space-y-4">
            <Skeleton className="h-[400px] w-full rounded-lg" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-end mb-6 gap-2">
          <Button 
            variant={viewMode === "grid" ? "default" : "ghost"} 
            size="icon" 
            className="rounded-full"
            onClick={() => setViewMode("grid")}
          >
            <LayoutGrid className="h-4 w-4" />
            <span className="sr-only">Grid view</span>
          </Button>
          <Button 
            variant={viewMode === "list" ? "default" : "ghost"} 
            size="icon" 
            className="rounded-full"
            onClick={() => setViewMode("list")}
          >
            <LayoutList className="h-4 w-4" />
            <span className="sr-only">List view</span>
          </Button>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <div 
                key={collection.id} 
                className="group relative overflow-hidden rounded-lg bg-card hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage({ url: collection.imageUrl, name: collection.name })}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={collection.imageUrl}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{collection.name}</h3>
                    {collection.featured && (
                      <span className="text-xs uppercase tracking-wider text-brand-orange">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{collection.description}</p>
                  <p className="text-sm text-muted-foreground">{collection.category}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {collections.map((collection) => (
              <div 
                key={collection.id} 
                className="group relative overflow-hidden rounded-lg bg-card hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row cursor-pointer"
                onClick={() => setSelectedImage({ url: collection.imageUrl, name: collection.name })}
              >
                <div className="md:w-1/3 aspect-[4/3] overflow-hidden">
                  <img 
                    src={collection.imageUrl}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:w-2/3 space-y-2 flex flex-col justify-center">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{collection.name}</h3>
                    {collection.featured && (
                      <span className="text-xs uppercase tracking-wider text-brand-orange">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{collection.description}</p>
                  <p className="text-sm text-muted-foreground">{collection.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
          <div className="relative">
            <img 
              src={selectedImage?.url} 
              alt={selectedImage?.name} 
              className="w-full object-contain max-h-[80vh]" 
            />
            <DialogClose className="absolute top-2 right-2 rounded-full bg-black/50 text-white hover:bg-black/70 p-2 transition-colors">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CollectionsGrid;
