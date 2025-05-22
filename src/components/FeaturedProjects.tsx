
import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "The Oceanside Retreat",
    location: "Malibu, California",
    description: "A coastal home featuring Nordic collection throughout, designed to complement the natural seaside surroundings.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    tags: ["Residential", "Complete Home"]
  },
  {
    name: "Urban Heights Office",
    location: "New York, NY",
    description: "A modern workspace furnished with Urban and Nova collections, creating a professional yet comfortable environment.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    tags: ["Commercial", "Office Space"]
  },
  {
    name: "The Harmony Hotel",
    location: "Austin, Texas",
    description: "Luxury hotel suites featuring custom pieces from Aria collection, designed for comfort and durability.",
    image: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    tags: ["Commercial", "Hospitality"]
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Inspired Projects</h2>
            <p className="text-muted-foreground max-w-lg">
              Below are some projects we got inspiration from. We can help you create your own unique space.
            </p>
          </div>
          
          {/* <a 
            href="#" 
            className="inline-flex items-center gap-2 text-lg font-medium border-b-2 border-brand-orange hover:text-brand-orange transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </a> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs uppercase tracking-wider bg-secondary py-1 px-2 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.location}</p>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
