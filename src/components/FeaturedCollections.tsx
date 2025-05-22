
import { useState, useRef } from "react";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const collections = [
  {
    id: 1,
    name: "Aurora",
    description: "Minimalist designs with gentle curves and natural materials.",
    imageUrl: "../src/assets/ghshsjdjs.png",
    featured: true,
  },
  {
    id: 2,
    name: "Nova",
    description: "Bold, contemporary pieces that make a statement.",
    imageUrl: "../src/assets/455544.png",
    featured: false,
  },
  {
    id: 3,
    name: "Terra",
    description: "Sustainable furniture crafted from reclaimed materials.",
    imageUrl: "../src/assets/tem.jpg",
    featured: false,
  },
  {
    id: 4,
    name: "Aria",
    description: "Light, elegant designs for modern living spaces.",
    imageUrl: "../src/assets/4242.png",
    featured: true,
  },
  {
    id: 5,
    name: "Zenith",
    description: "Functional luxury for the discerning customer.",
    imageUrl: "../src/assets/5555.png",
    featured: false,
  },
  {
    id: 6,
    name: "Urban",
    description: "Industrial-inspired designs perfect for city lofts and apartments.",
    imageUrl: "../src/assets/urban.png",
    featured: true,
  }
];

const FeaturedCollections = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{url: string, name: string} | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = container.clientWidth * 0.8;
    const newPosition = direction === "left" 
      ? scrollPosition - scrollAmount 
      : scrollPosition + scrollAmount;
    
    container.scrollTo({
      left: newPosition,
      behavior: "smooth"
    });
    
    setScrollPosition(newPosition);
  };

  return (
    <section id="collections" className="py-20 md:py-32 bg-secondary dark:bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Featured Collections</h2>
            <p className="text-muted-foreground max-w-lg">
              Explore our curated collections of contemporary furniture pieces
              designed for modern living spaces.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none' }}
        >
          {collections.map((collection) => (
            <div 
              key={collection.id}
              className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] flex-shrink-0 snap-center"
            >
              <div 
                className="group relative overflow-hidden rounded-xl h-[500px] md:h-[600px] cursor-pointer"
                onClick={() => setSelectedImage({ url: collection.imageUrl, name: collection.name })}
              >
                <img 
                  src={collection.imageUrl}
                  alt={`${collection.name} Collection`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 md:p-8">
                  {collection.featured && (
                    <span className="bg-brand-orange text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4 w-fit">
                      Featured
                    </span>
                  )}
                  <h3 className="text-white text-2xl md:text-3xl font-bold">{collection.name}</h3>
                  <p className="text-white/80 mt-2">{collection.description}</p>
                  <a 
                    href="/collections"
                    className="mt-4 inline-flex items-center gap-2 text-white group-hover:text-brand-orange transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
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

export default FeaturedCollections;
