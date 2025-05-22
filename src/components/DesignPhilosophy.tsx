
import { Check } from "lucide-react";

const philosophyPoints = [
  {
    title: "Sustainability First",
    description: "Every piece is created with environmental impact in mind, using responsibly sourced materials and ethical production methods."
  },
  {
    title: "Timeless Design",
    description: "We believe in creating furniture that transcends trends, pieces that will look as beautiful in twenty years as they do today."
  },
  {
    title: "Functional Comfort",
    description: "Beauty should never sacrifice comfort. Our designs balance aesthetic appeal with practical, everyday usability."
  },
  {
    title: "Craftsmanship",
    description: "Each piece is meticulously crafted by skilled artisans who take pride in their work and attention to detail."
  }
];

const DesignPhilosophy = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Design Philosophy</h2>
            <p className="text-lg text-muted-foreground mb-10">
              We approach furniture design with intention, balancing form and function to create pieces 
              that enhance your living space and stand the test of time.
            </p>
            
            <div className="space-y-6">
              {philosophyPoints.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 bg-brand-orange rounded-full p-1 text-white flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-orange/10 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1630585308572-f53438fc684f?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Artisan crafting furniture" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
