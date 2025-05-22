
import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const articles = [
  {
    id: 1,
    title: "The Future of Sustainable Furniture Design",
    excerpt: "Exploring how eco-friendly materials and manufacturing processes are shaping the future of furniture design.",
    category: "Sustainability",
    date: "April 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-4.0.3",
    content: `
      <p>The furniture industry is undergoing a significant transformation as sustainability becomes a central focus in design and manufacturing. Eco-friendly materials and innovative production processes are revolutionizing how we create and consume furniture.</p>
      
      <p>Reclaimed wood, recycled metals, and bio-based materials are replacing traditional resources, reducing environmental impact while often providing unique aesthetic qualities. Manufacturers are implementing zero-waste production methods and developing furniture pieces designed for disassembly and recycling at the end of their lifecycle.</p>
      
      <p>Beyond materials, sustainable furniture design embraces principles of longevity. Durable construction, timeless aesthetics, and adaptable functionality ensure pieces remain relevant and useful for generations, counteracting the "fast furniture" trend that contributes to excessive waste.</p>
      
      <p>Consumer awareness is driving this evolution, with more people prioritizing environmental responsibility in their purchasing decisions. As this trend continues, we can expect even more innovation in sustainable materials, manufacturing techniques, and circular economy business models within the furniture industry.</p>
    `
  },
  {
    id: 2,
    title: "Biophilic Design in Modern Spaces",
    excerpt: "How incorporating natural elements into furniture design creates healthier living spaces.",
    category: "Design Insights",
    date: "April 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3",
    content: `
      <p>Biophilic design—incorporating natural elements and patterns into our living spaces—has emerged as a powerful approach to creating environments that support human wellbeing. This design philosophy goes beyond aesthetics to address our innate connection to nature and its positive impacts on our physical and mental health.</p>
      
      <p>In furniture design, biophilic principles manifest through the use of natural materials like wood, stone, and plant fibers, preserving their authentic textures and patterns. Organic shapes and forms that mimic natural contours create a subtle resonance with the natural world, while living elements—from indoor plants integrated with furniture to moss walls—bring literal nature indoors.</p>
      
      <p>Research consistently demonstrates the benefits of biophilic design elements in our spaces. Exposure to natural materials and patterns has been shown to reduce stress, improve cognitive function, and enhance mood. In workplaces, these elements contribute to increased productivity and creativity, while in homes, they promote relaxation and better sleep quality.</p>
      
      <p>As urban living continues to distance many from nature, thoughtfully incorporating biophilic elements into our furniture and interior design becomes increasingly valuable for creating spaces that truly support human flourishing.</p>
    `
  },
  {
    id: 3,
    title: "2024 Furniture Trends",
    excerpt: "The latest trends in contemporary furniture design and how they reflect changing lifestyles.",
    category: "Trends",
    date: "April 5, 2024",
    imageUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3",
    content: `
      <p>As we move through 2024, furniture design continues to evolve in response to our changing lifestyles, values, and global contexts. Several key trends are shaping how we furnish and experience our spaces this year.</p>
      
      <p>Multifunctional pieces have become essential as living spaces adapt to hybrid work models and flexible living arrangements. Furniture that transforms—from sofa beds with integrated storage to dining tables that adjust for work and entertainment—provides versatility without sacrificing style.</p>
      
      <p>Curved forms are dominating contemporary design, with rounded sofas, circular tables, and arched cabinets bringing a sense of softness and organic flow to interiors. This trend represents a departure from the rigid minimalism of previous years, embracing more expressive and comforting silhouettes.</p>
      
      <p>Textural richness has become a priority, with bouclé, corduroy, and other tactile fabrics creating inviting surfaces that engage our senses. This focus on texture extends to mixed material compositions that combine wood, metal, stone, and textiles within single pieces, creating visual and tactile complexity.</p>
      
      <p>Sustainability continues to influence furniture design, with increased transparency about sourcing, manufacturing processes, and environmental impact. Consumers are increasingly seeking pieces with authentic sustainability credentials rather than superficial "green" marketing.</p>
      
      <p>These trends reflect our collective desire for spaces that support our complex modern lives while providing comfort, expression, and environmental responsibility.</p>
    `
  }
];

const JournalGrid = () => {
  const [openArticle, setOpenArticle] = useState<typeof articles[0] | null>(null);
  
  return (
    <>
      <section className="py-12 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{article.category}</span>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-muted-foreground">{article.excerpt}</p>
                <Button 
                  variant="ghost" 
                  className="mt-4" 
                  onClick={() => setOpenArticle(article)}
                >
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Dialog open={openArticle !== null} onOpenChange={(open) => !open && setOpenArticle(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {openArticle && (
            <>
              <DialogHeader>
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{openArticle.category}</span>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{openArticle.date}</span>
                    </div>
                  </div>
                  <DialogTitle className="text-2xl md:text-3xl">{openArticle.title}</DialogTitle>
                </div>
              </DialogHeader>

              <div className="aspect-[16/9] overflow-hidden mb-6">
                <img 
                  src={openArticle.imageUrl} 
                  alt={openArticle.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="prose dark:prose-invert max-w-none" 
                   dangerouslySetInnerHTML={{ __html: openArticle.content }} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JournalGrid;
