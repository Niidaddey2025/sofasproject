
import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rosemond Ohene",
    role: "Interior Designer",
    comment: "SofasAndMore pieces have become essential elements in my designs. The quality and attention to detail are unmatched, and my clients are always impressed with the results.",
    rating: 5,
    avatarUrl: "../src/assets/ro.png"
  },
  {
    id: 2,
    name: "Jason Bonney",
    role: "Homeowner",
    comment: "After searching for months for the perfect sofa, I found SofasAndMore. The Aurora collection transformed our living room into a beautiful, comfortable space we love spending time in.",
    rating: 5,
    avatarUrl: "../src/assets/jesjes.jpg"
  },
  {
    id: 3,
    name: "Jorelle Malaika",
    role: "Architect",
    comment: "The craftsmanship and sustainable approach align perfectly with my design philosophy. I've recommended SofasAndMore to countless clients, and the feedback is consistently positive.",
    rating: 5,
    avatarUrl: "../src/assets/tstst.jpg"
  },
  {
    id: 4,
    name: "Daniel Wilson",
    role: "Hotel Owner",
    comment: "Furnishing our boutique hotel with SofasAndMore pieces was one of the best decisions we made. Our guests frequently comment on how comfortable and stylish our furnishings are.",
    rating: 5,
    avatarUrl: "../src/assets/sample.png"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // Update activeIndex when the carousel slides change
  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    
    // Set initial index
    handleSelect();
    
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // Auto-rotate the carousel
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            Discover why our furniture has earned a reputation for excellence among designers, homeowners, and businesses alike.
          </p>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto">
          <Carousel 
            className="w-full"
            setApi={setApi}
            opts={{
              loop: true,
              align: "center"
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-full">
                  <div className="bg-card shadow-md rounded-xl p-8 md:p-10 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.avatarUrl} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={18} className="fill-brand-orange text-brand-orange" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="flex-1">
                      <p className="text-lg italic">"{testimonial.comment}"</p>
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-brand-orange" : "bg-muted-foreground/30"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
