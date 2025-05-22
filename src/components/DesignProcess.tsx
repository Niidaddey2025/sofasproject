
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const processSteps = [
  {
    id: "concept",
    title: "Concept",
    description: "Every piece begins as a concept, inspired by nature, architecture, and the human experience. Our designers sketch ideas and create digital renderings to visualize the piece.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  },
  {
    id: "materials",
    title: "Materials",
    description: "We carefully select sustainable materials that meet our quality standards. Each wood, fabric, and metal is chosen not only for its beauty but also for its durability and environmental impact.",
    image: "../src/assets/high-angle-decorative-vinyls-arrangement.jpg"
  },
  {
    id: "crafting",
    title: "Crafting",
    description: "Our skilled artisans bring designs to life using a combination of traditional craftsmanship and modern techniques. Each piece passes through many hands, each adding their expertise.",
    image: "../src/assets/carpenter-cutting-mdf-board-inside.jpg"
  },
  {
    id: "finishing",
    title: "Finishing",
    description: "The finishing touches make all the difference. From sanding and staining to upholstery and quality checks, we ensure every detail meets our exacting standards before it leaves our workshop.",
    image: "../src/assets/istockphoto-501948477-612x612.jpg"
  }
];

const DesignProcess = () => {
  const [activeTab, setActiveTab] = useState("concept");
  
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
          <p className="text-lg text-muted-foreground">
            From initial concept to final delivery, discover the journey of creating 
            furniture that's built to last and designed to inspire.
          </p>
        </div>
        
        <Tabs 
          defaultValue="concept" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {processSteps.map((step) => (
              <TabsTrigger 
                key={step.id} 
                value={step.id}
                className="text-center py-3"
              >
                {step.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {processSteps.map((step) => (
            <TabsContent key={step.id} value={step.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={`${step.title} process`} 
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DesignProcess;
