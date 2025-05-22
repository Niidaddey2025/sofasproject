
import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    const textEl = textRef.current;
    const imageEl = imageRef.current;

    if (!heroEl || !textEl || !imageEl) return;

    // Simple parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.15;
      
      // Parallax for text
      if (textEl) {
        textEl.style.transform = `translateY(${scrollY * speed}px)`;
      }
      
      // Parallax for image (opposite direction)
      if (imageEl) {
        imageEl.style.transform = `translateY(-${scrollY * speed * 0.7}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-end relative hero-gradient overflow-hidden pt-28 pb-10 md:pb-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div ref={textRef} className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-fade-up [animation-delay:300ms]">
              Spaces That <br />
              <span className="text-brand-orange">Evolve</span> With You
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up [animation-delay:500ms]">
              Contemporary furniture that combines innovative design, sustainable practices, 
              and exceptional craftsmanship for modern living.
            </p>
            
            <div className="animate-fade-up [animation-delay:700ms]">
              <a
                href="#collections"
                className="group inline-flex items-center gap-2 text-lg md:text-xl font-medium bg-foreground text-background px-6 py-3 rounded-full hover:bg-brand-orange transition-colors duration-300"
              >
                Explore Collections
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="relative h-[500px] md:h-auto overflow-hidden animate-fade-in [animation-delay:800ms]">
            <div className="absolute -right-20 -bottom-16 md:right-0 md:bottom-0 w-[600px] h-[600px] bg-muted/30 rounded-full filter blur-3xl"></div>
            
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
              alt="Modern living room with contemporary furniture"
              className="absolute z-10 object-cover object-center w-full h-full rounded-lg shadow-2xl image-mask"
            />
            
            <div className="glass absolute left-4 bottom-4 md:left-6 md:bottom-6 z-20 p-4 md:p-6 rounded-lg max-w-xs">
              <h3 className="font-medium text-sm md:text-base">Aurora Collection</h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Minimal design with maximum comfort</p>
            </div>
            
            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 glass px-3 py-1 rounded-full">
              <p className="text-xs">New Arrival</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
