
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const LookbookGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string} | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  
  const filters = [
    { id: "all", label: "All Spaces" },
    { id: "living", label: "Living Room" },
    { id: "dining", label: "Dining Room" },
    { id: "bedroom", label: "Bedroom" },
    { id: "office", label: "Office" }
  ];
  
  const galleryItems = [
    {
      id: 1,
      title: "Modern Living Space",
      category: "living",
      image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Minimalist Dining Area",
      category: "dining",
      image: "https://images.unsplash.com/photo-1592152045578-7aa07f0d3df3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Cozy Bedroom Retreat",
      category: "bedroom",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Contemporary Office",
      category: "office",
      image: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Scandinavian Living Room",
      category: "living",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Elegant Dining Setting",
      category: "dining",
      image: "https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Serene Master Bedroom",
      category: "bedroom",
      image: "https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Productive Home Office",
      category: "office",
      image: "https://images.unsplash.com/photo-1593476550610-87baa860004a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Urban Loft Living",
      category: "living",
      image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  useEffect(() => {
    // Simulate loading completion after images are ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);
  
  return (
    <section className="py-16 container mx-auto px-4 md:px-6">
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map(filter => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            onClick={() => setActiveFilter(filter.id)}
            className="rounded-full"
          >
            {filter.label}
          </Button>
        ))}
      </div>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <Skeleton className="w-full h-[400px]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden border-none shadow-lg cursor-pointer"
              onClick={() => setSelectedImage({ url: item.image, title: item.title })}
            >
              <CardContent className="p-0">
                <div className="relative group">
                  {!loadedImages[item.id] && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    onLoad={() => handleImageLoad(item.id)}
                    className={`w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105 ${
                      loadedImages[item.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
          <DialogTitle className="sr-only">{selectedImage?.title}</DialogTitle>
          <div className="relative">
            <img 
              src={selectedImage?.url} 
              alt={selectedImage?.title} 
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

export default LookbookGallery;
