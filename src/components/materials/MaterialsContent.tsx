
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { X } from "lucide-react";

const MaterialsContent = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<{image: string, name: string} | null>(null);
  
  const materialCategories = [
    { id: "fabrics", label: "Fabrics" },
    { id: "leathers", label: "Leathers" },
    { id: "woods", label: "Woods" },
    { id: "metals", label: "Metals" },
    { id: "stones", label: "Stones" },
    { id: "upholstery", label: "Upholstery" }
  ];
  
  const materials = {
    fabrics: [
      {
        name: "Organic Cotton",
        description: "Sustainably sourced cotton with no harmful pesticides or chemicals. Soft, breathable, and environmentally friendly.",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3",
        properties: ["Breathable", "Soft", "Hypoallergenic", "Sustainable"]
      },
      {
        name: "Premium Linen",
        description: "Natural fiber made from the flax plant, known for its exceptional coolness and freshness in hot weather.",
        image: "https://images.unsplash.com/photo-1620799907114-80dab3736ade?ixlib=rb-4.0.3",
        properties: ["Durable", "Breathable", "Moisture-wicking", "Antibacterial"]
      },
      {
        name: "Recycled Polyester",
        description: "Created from post-consumer plastic bottles. Durable and sustainable alternative to virgin polyester.",
        image: "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?ixlib=rb-4.0.3",
        properties: ["Stain-resistant", "Durable", "Eco-friendly", "Easy care"]
      },
      {
        name: "Bamboo Fabric",
        description: "Silky smooth textile made from bamboo fibers. Highly sustainable with natural antibacterial properties.",
        image: "https://images.unsplash.com/photo-1602010038999-1aef81cbfde1?ixlib=rb-4.0.3",
        properties: ["Antibacterial", "Soft", "Hypoallergenic", "Eco-friendly"]
      },
      {
        name: "Organic Hemp",
        description: "One of the most durable natural fibers available with minimal environmental impact and excellent insulation.",
        image: "https://images.unsplash.com/photo-1580284915012-f7f762517953?ixlib=rb-4.0.3",
        properties: ["Durable", "UV resistant", "Antimicrobial", "Sustainable"]
      },
      {
        name: "Merino Wool",
        description: "Ultra-fine wool from Merino sheep. Naturally temperature-regulating and incredibly soft against the skin.",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3",
        properties: ["Temperature-regulating", "Moisture-wicking", "Odor-resistant", "Renewable"]
      }
    ],
    leathers: [
      {
        name: "Full-Grain Leather",
        description: "The highest quality leather that includes the entire grain layer. Develops a beautiful patina over time.",
        image: "https://images.unsplash.com/photo-1620733723572-11c53f73a416?ixlib=rb-4.0.3",
        properties: ["Durable", "Natural texture", "Ages beautifully", "Breathable"]
      },
      {
        name: "Vegetable-Tanned Leather",
        description: "Tanned using natural materials like tree bark instead of chemicals. Environmentally friendly process.",
        image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3",
        properties: ["Eco-friendly", "Unique patina", "Biodegradable", "Natural"]
      },
      {
        name: "Nubuck Leather",
        description: "Top-grain leather that has been sanded or buffed to create a soft, velvet-like surface.",
        image: "https://images.unsplash.com/photo-1598903859369-4424faade247?ixlib=rb-4.0.3",
        properties: ["Soft texture", "Luxurious feel", "Water-resistant", "Durable"]
      },
      {
        name: "Aniline Leather",
        description: "Premium leather dyed exclusively with soluble dyes without covering the surface with a topcoat paint or pigment.",
        image: "https://images.unsplash.com/photo-1563294723-113e33973781?ixlib=rb-4.0.3",
        properties: ["Natural look", "Soft", "Breathable", "Premium"]
      },
      {
        name: "Italian Calfskin",
        description: "Luxurious leather made from young cattle, known for its exceptionally fine grain and supple feel.",
        image: "https://images.unsplash.com/photo-1585717294284-ad2f93992201?ixlib=rb-4.0.3",
        properties: ["Ultra-soft", "Lightweight", "Fine grain", "Elegant"]
      },
      {
        name: "Recycled Leather",
        description: "Eco-friendly material made from reclaimed leather scraps and fibers, offering a sustainable alternative.",
        image: "https://images.unsplash.com/photo-1531585770322-6857a998d6d4?ixlib=rb-4.0.3",
        properties: ["Eco-friendly", "Consistent", "Durable", "Resource-efficient"]
      }
    ],
    woods: [
      {
        name: "Walnut",
        description: "Rich, dark hardwood prized for its straight grain and chocolate-brown color. Sustainably harvested.",
        image: "https://images.unsplash.com/photo-1609686527308-10783a64c301?ixlib=rb-4.0.3",
        properties: ["Strong", "Shock resistant", "Fine grain", "Rich color"]
      },
      {
        name: "White Oak",
        description: "Heavy, strong hardwood with beautiful grain patterns. Resistant to moisture and highly durable.",
        image: "https://images.unsplash.com/photo-1611785658006-8e63d01f89c3?ixlib=rb-4.0.3",
        properties: ["Water-resistant", "Durable", "Stable", "Distinctive grain"]
      },
      {
        name: "Reclaimed Wood",
        description: "Salvaged wood from old buildings, barns, or other structures. Each piece has unique character and history.",
        image: "https://images.unsplash.com/photo-1606298855672-1c604a2a3fa3?ixlib=rb-4.0.3",
        properties: ["Eco-friendly", "Character", "Rustic", "One-of-a-kind"]
      },
      {
        name: "Maple",
        description: "Light-colored hardwood with a subtle grain pattern. Exceptionally hard and resistant to wear.",
        image: "https://images.unsplash.com/photo-1620218776119-12b6c927ec27?ixlib=rb-4.0.3",
        properties: ["Hard", "Shock-resistant", "Consistent grain", "Light tone"]
      },
      {
        name: "Cherry",
        description: "Reddish-brown hardwood that darkens beautifully with age. Smooth grain and natural luster.",
        image: "https://images.unsplash.com/photo-1645370953807-4b1cb2f59d0f?ixlib=rb-4.0.3",
        properties: ["Ages gracefully", "Smooth texture", "Medium hardness", "Rich color"]
      },
      {
        name: "Bamboo",
        description: "Technically a grass, but used like hardwood. Extremely fast-growing and sustainable building material.",
        image: "https://images.unsplash.com/photo-1670073855344-9ed9e24e2660?ixlib=rb-4.0.3",
        properties: ["Sustainable", "Hard", "Stable", "Fast-growing"]
      }
    ],
    metals: [
      {
        name: "Brushed Brass",
        description: "Alloy of copper and zinc with a soft, brushed finish that reduces fingerprints and adds warmth.",
        image: "https://images.unsplash.com/photo-1627472638524-747659b054a8?ixlib=rb-4.0.3",
        properties: ["Corrosion-resistant", "Antimicrobial", "Warm tone", "Long-lasting"]
      },
      {
        name: "Blackened Steel",
        description: "Steel that has been treated to create a dark, protective surface with an industrial aesthetic.",
        image: "https://images.unsplash.com/photo-1535161837575-3651f912d264?ixlib=rb-4.0.3",
        properties: ["Strong", "Heat-resistant", "Modern look", "Low maintenance"]
      },
      {
        name: "Recycled Aluminum",
        description: "Lightweight metal made from recycled sources. Requires significantly less energy to produce than virgin aluminum.",
        image: "https://images.unsplash.com/photo-1530577197743-7adf14f05b9d?ixlib=rb-4.0.3",
        properties: ["Lightweight", "Rust-resistant", "Sustainable", "Recyclable"]
      },
      {
        name: "Stainless Steel",
        description: "Corrosion-resistant alloy with a sleek, contemporary appearance. Hygienic and easy to maintain.",
        image: "https://images.unsplash.com/photo-1589469526531-0fc88c281b37?ixlib=rb-4.0.3",
        properties: ["Hygienic", "Scratch-resistant", "Strong", "Low maintenance"]
      },
      {
        name: "Copper",
        description: "Distinctive reddish-brown metal that develops a unique patina over time. Natural antimicrobial properties.",
        image: "https://images.unsplash.com/photo-1612194566813-32ff824bb0d7?ixlib=rb-4.0.3",
        properties: ["Antimicrobial", "Conductive", "Living finish", "Heritage appeal"]
      },
      {
        name: "Bronze",
        description: "Ancient alloy of copper and tin with a warm, golden hue. Highly durable with a rich heritage.",
        image: "https://images.unsplash.com/photo-1519219788971-8d9797e0928e?ixlib=rb-4.0.3",
        properties: ["Durable", "Corrosion-resistant", "Rich patina", "Timeless"]
      }
    ],
    stones: [
      {
        name: "Carrara Marble",
        description: "Luxurious Italian white marble with subtle gray veining. Prized for its luminous appearance and classic elegance.",
        image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3",
        properties: ["Heat-resistant", "Unique patterns", "Timeless", "Premium"]
      },
      {
        name: "Black Granite",
        description: "Dense igneous rock with crystalline texture. Exceptionally hard and resistant to scratches and heat.",
        image: "https://images.unsplash.com/photo-1619545093367-64806dc61c0a?ixlib=rb-4.0.3",
        properties: ["Durable", "Scratch-resistant", "Heat-resistant", "Low maintenance"]
      },
      {
        name: "Travertine",
        description: "Natural limestone formed by mineral springs. Features distinctive pitted surface and warm earth tones.",
        image: "https://images.unsplash.com/photo-1624720114708-0cbd6ee41f4e?ixlib=rb-4.0.3",
        properties: ["Natural variation", "Earth tones", "Textured", "Classic"]
      },
      {
        name: "Soapstone",
        description: "Natural quarried stone composed primarily of talc. Smooth, soft feel with excellent heat retention properties.",
        image: "https://images.unsplash.com/photo-1621996659249-94447b242ed5?ixlib=rb-4.0.3",
        properties: ["Heat-resistant", "Non-porous", "Soft touch", "Ages gracefully"]
      },
      {
        name: "Terrazzo",
        description: "Composite material consisting of chips of marble, quartz, granite, or glass set in concrete and polished.",
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3",
        properties: ["Customizable", "Durable", "Low maintenance", "Distinctive"]
      }
    ],
    upholstery: [
      {
        name: "Performance Velvet",
        description: "Plush, soft fabric with stain-resistant properties. Combines luxury feel with practical durability.",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3",
        properties: ["Stain-resistant", "Plush", "Durable", "Luxurious"]
      },
      {
        name: "Boucle",
        description: "Textured fabric with curled loops creating a soft, nubby surface. On-trend material with cozy appeal.",
        image: "https://images.unsplash.com/photo-1618221118493-9cfa1a38c92e?ixlib=rb-4.0.3",
        properties: ["Textured", "Warm", "Contemporary", "Cozy"]
      },
      {
        name: "Woven Jute",
        description: "Natural vegetable fiber with a rustic appearance and substantial texture. Sustainable and biodegradable.",
        image: "https://images.unsplash.com/photo-1620654458481-1a739efc9736?ixlib=rb-4.0.3",
        properties: ["Natural", "Textured", "Sustainable", "Rustic"]
      },
      {
        name: "Mohair",
        description: "Luxury fiber from Angora goats. Exceptionally soft with a distinctive sheen and excellent insulation.",
        image: "https://images.unsplash.com/photo-1595512768422-e26ec94dd0c1?ixlib=rb-4.0.3",
        properties: ["Plush", "Warm", "Lustrous", "Resilient"]
      },
      {
        name: "Crypton",
        description: "High-performance fabric with built-in stain, moisture, and odor resistance without sacrificing softness.",
        image: "https://images.unsplash.com/photo-1598340165516-fe270f7508c2?ixlib=rb-4.0.3",
        properties: ["Stain-proof", "Moisture-resistant", "Easy to clean", "Family-friendly"]
      }
    ]
  };
  
  const renderMaterialCard = (material) => (
    <Card key={material.name} className="h-full cursor-pointer" onClick={() => setSelectedMaterial({image: material.image, name: material.name})}>
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 h-full">
          <div className="aspect-square md:aspect-auto h-full">
            <img 
              src={material.image} 
              alt={material.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-2">{material.name}</h3>
            <p className="text-muted-foreground mb-4">{material.description}</p>
            <div className="mt-auto">
              <h4 className="font-medium mb-2">Properties:</h4>
              <div className="flex flex-wrap gap-2">
                {material.properties.map(property => (
                  <span key={property} className="bg-secondary text-secondary-foreground px-3 py-1 text-sm rounded-full">
                    {property}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
  
  return (
    <section className="py-16 container mx-auto px-4 md:px-6">
      <Tabs defaultValue="fabrics" className="w-full">
        <TabsList className="mb-8 flex flex-wrap justify-center">
          {materialCategories.map(category => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {Object.keys(materials).map(category => (
          <TabsContent key={category} value={category} className="mt-6 space-y-8">
            {materials[category].map(renderMaterialCard)}
          </TabsContent>
        ))}
      </Tabs>
      
      <Dialog open={!!selectedMaterial} onOpenChange={(isOpen) => !isOpen && setSelectedMaterial(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
          <div className="relative">
            {selectedMaterial && (
              <img 
                src={selectedMaterial.image} 
                alt={selectedMaterial.name} 
                className="w-full object-contain max-h-[80vh]"
              />
            )}
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

export default MaterialsContent;
