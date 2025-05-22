
import { Leaf, Recycle, Home, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const initiatives = [
  {
    icon: <Leaf className="h-12 w-12 text-green-500" />,
    title: "Sustainable Materials",
    description: "We source FSC-certified woods, recycled metals, and organic textiles from suppliers who share our environmental values."
  },
  {
    icon: <Recycle className="h-12 w-12 text-green-500" />,
    title: "Zero Waste Production",
    description: "Our manufacturing processes are designed to minimize waste, with offcuts and remnants being repurposed into smaller products."
  },
  {
    icon: <Home className="h-12 w-12 text-green-500" />,
    title: "Carbon-Neutral Shipping",
    description: "We offset 100% of the carbon emissions from our shipping and delivery processes through certified climate projects."
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-green-500" />,
    title: "Transparent Reporting",
    description: "We publish annual sustainability reports tracking our progress toward our environmental and social responsibility goals."
  }
];

const SustainabilityCommitment = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent"></div>
        <div className="grid grid-cols-6 h-full w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-r border-foreground/5 h-full"></div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Sustainability Commitment</h2>
          <p className="text-lg text-muted-foreground">
            We believe beautiful furniture shouldn't come at the environment's expense. 
            Our commitment to sustainability guides every decision we make.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-6">
                {initiative.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
              <p className="text-muted-foreground">{initiative.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/sustainability"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
          >
            Read Our Full Sustainability Report
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityCommitment;
