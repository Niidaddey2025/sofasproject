
import { useEffect, useRef } from "react";

const milestones = [
  {
    year: 2010,
    title: "The Beginning",
    description: "SofasAndMore was founded with a simple yet ambitious vision: to create sustainable, beautiful furniture for modern living."
  },
  {
    year: 2014,
    title: "Sustainable Materials Initiative",
    description: "Launched our commitment to using 100% sustainable materials in all our products."
  },
  {
    year: 2017,
    title: "Design Innovation Award",
    description: "Received international recognition for our innovative approach to furniture design."
  },
  {
    year: 2021,
    title: "Global Expansion",
    description: "Opened showrooms in major cities worldwide, bringing our vision to new markets."
  },
  {
    year: 2023,
    title: "Carbon Neutral",
    description: "Achieved carbon neutrality across all operations and supply chains."
  }
];

const Story = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, { threshold: 0.1 });

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground">
            Since 2010, we've been reimagining what furniture can be. Our journey is defined by a 
            passion for innovative design, sustainable practices, and exceptional craftsmanship.
          </p>
        </div>
        
        <div ref={timelineRef} className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border"></div>
          
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              ref={el => itemRefs.current[index] = el}
              className={`relative mb-16 md:mb-24 opacity-0 translate-y-10 transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                {/* Year bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pt-20 md:pt-0`}>
                  <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
                
                {/* Empty div to balance the layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-lg font-medium border-b-2 border-brand-orange hover:text-brand-orange transition-colors">
            Learn more about our sustainable practices
          </a>
        </div>
      </div>
    </section>
  );
};

export default Story;
