import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const pressReleases = [
  {
    id: 1,
    title: "SofasAndMore Launches New Sustainable Collection",
    date: "April 15, 2025",
    excerpt: "The new Terra Collection features reclaimed wood and recycled fabrics, setting a new standard for sustainable furniture design.",
    content: `SofasAndMore, the leader in sustainable furniture design, today announced the launch of its groundbreaking Terra Collection. This innovative line features furniture crafted from 100% reclaimed wood and upholstered with fabrics made from recycled plastic bottles.

The Terra Collection represents a significant step forward in SofasAndMore's commitment to environmental stewardship and circular economy principles. Each piece is designed to be both beautiful and durable, with a timeless aesthetic that transcends trends.

"The Terra Collection embodies our belief that sustainability and luxury are not mutually exclusive," said Maria Chen, Chief Design Officer at SofasAndMore. "We've created pieces that customers can feel good about buying, knowing they're making a positive impact on the planet without sacrificing style or quality."

The collection will be available in all SofasAndMore showrooms and online starting May 1, 2025.`
  },
  {
    id: 2,
    title: "SofasAndMore Opens Flagship Store in San Francisco",
    date: "March 2, 2025",
    excerpt: "The 10,000 square foot showroom in San Francisco's design district showcases the brand's full range of contemporary furniture.",
    content: `SofasAndMore has expanded its retail presence with the opening of a new flagship store in San Francisco's vibrant design district. The 10,000 square foot space has been thoughtfully designed to showcase the brand's complete collection of contemporary furniture in immersive room settings.

The new location features dedicated areas for each of SofasAndMore's collections, a design studio where customers can work with in-house designers to customize pieces, and a materials library displaying the full range of sustainable fabrics and finishes available.

"This flagship store represents a new chapter for SofasAndMore in how we engage with our customers," said James Wilson, CEO. "We've created an inspiring environment where people can experience our furniture in context and envision how pieces might work in their own homes."

The store officially opens to the public on March 10, 2025, with a grand opening celebration featuring local artists, sustainable refreshments, and exclusive opening promotions.`
  },
  {
    id: 3,
    title: "SofasAndMore Partners with Leading Interior Designers",
    date: "January 20, 2025",
    excerpt: "New collaborative collection with renowned designers brings exclusive pieces to the SofasAndMore catalog.",
    content: `SofasAndMore today announced an exciting new partnership with five internationally renowned interior designers to create a limited-edition furniture collection. The Designer Series will feature exclusive pieces that blend SofasAndMore's commitment to sustainability with each designer's unique aesthetic vision.

Participating designers include Milan-based Carlo Rossi, New York's Sarah Jenkins, Tokyo's Hiro Tanaka, London's Emma Davies, and Copenhagen's Anders Nielsen. Each designer has created three to five pieces that reflect both their signature style and SofasAndMore's sustainable ethos.

"Collaborating with these visionary designers has pushed us to explore new techniques and aesthetics while staying true to our core values," said Maria Chen, Chief Design Officer. "The result is a collection that brings fresh perspectives to sustainable furniture design."

The Designer Series will be unveiled at the International Furniture Fair in April and will be available for purchase in May 2025. Production runs will be limited, with each piece numbered and signed by the designer.`
  },
  {
    id: 4,
    title: "SofasAndMore Achieves Carbon Neutral Certification",
    date: "November 12, 2024",
    excerpt: "After years of sustainability initiatives, the company has achieved full carbon neutrality across all operations.",
    content: `SofasAndMore has reached a significant milestone in its sustainability journey, achieving official carbon neutral certification across all operations. This certification recognizes the company's comprehensive efforts to reduce and offset its carbon footprint throughout the entire supply chain.

The achievement comes after a three-year sustainability initiative that included transitioning manufacturing facilities to renewable energy, optimizing logistics to reduce transportation emissions, and implementing a comprehensive carbon offset program that supports reforestation projects around the world.

"Becoming carbon neutral has been a top priority for us since our founding," said James Wilson, CEO of SofasAndMore. "This certification is not the end of our journey but a milestone that validates our ongoing commitment to environmental responsibility."

The certification was awarded following a rigorous assessment by the Climate Neutral Standards Organization, which evaluated SofasAndMore's greenhouse gas emissions across scope 1, 2, and 3 categories and verified the company's reduction and offset measures.

Moving forward, SofasAndMore plans to focus on helping customers reduce their own environmental impact through furniture that lasts longer and can be easily repaired or refurbished.`
  }
];

const mediaFeatures = [
  {
    publication: "Design Today",
    title: "The Future of Sustainable Furniture",
    date: "May 2025",
    link: "#"
  },
  {
    publication: "Home & Living",
    title: "10 Brands Transforming Interior Design",
    date: "April 2025",
    link: "#"
  },
  {
    publication: "Architecture Weekly",
    title: "Innovations in Residential Furnishing",
    date: "March 2025",
    link: "#"
  },
  {
    publication: "Sustainable Business",
    title: "How SofasAndMore Built a Green Supply Chain",
    date: "February 2025",
    link: "#"
  },
  {
    publication: "Interior Design Magazine",
    title: "Award-Winning Sustainable Collections to Watch",
    date: "January 2025",
    link: "#"
  },
  {
    publication: "Modern Living",
    title: "Behind the Scenes: The Rise of SofasAndMore",
    date: "December 2024",
    link: "#"
  }
];

const awards = [
  {
    name: "Sustainable Design Award",
    organization: "International Design Association",
    year: "2025",
    category: "Furniture Design"
  },
  {
    name: "Green Business Excellence",
    organization: "Sustainable Commerce Council",
    year: "2024",
    category: "Manufacturing"
  },
  {
    name: "Innovation in Materials",
    organization: "Design & Materials Institute",
    year: "2024",
    category: "Sustainable Textiles"
  },
  {
    name: "Best Workplace",
    organization: "Industry Today Magazine",
    year: "2023",
    category: "Furniture Manufacturing"
  }
];

const executives = [
  {
    name: "James Wilson",
    title: "Chief Executive Officer",
    bio: "James Wilson founded SofasAndMore with a vision to transform the furniture industry through sustainable practices. With over 20 years of experience in furniture design and manufacturing, James brings a deep understanding of the industry combined with a passion for environmental stewardship.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Maria Chen",
    title: "Chief Design Officer",
    bio: "Maria Chen leads the design direction for all SofasAndMore collections. With a background in industrial design and sustainable materials, Maria has been instrumental in developing the company's signature aesthetic while pioneering the use of eco-friendly materials and manufacturing processes.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "David Thompson",
    title: "Chief Sustainability Officer",
    bio: "David Thompson oversees SofasAndMore's environmental initiatives and ensures that sustainability remains at the core of all business decisions. With a Ph.D. in Environmental Science and previous experience in the renewable energy sector, David brings valuable expertise to the company's mission.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
];

const Press = () => {
  useEffect(() => {
    document.title = "Press | SofasAndMore";
  }, []);
  
  const [selectedRelease, setSelectedRelease] = useState(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="bg-muted/20 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Press & Media</h1>
              <p className="text-lg text-muted-foreground">
                News, announcements, and media coverage of SofasAndMore
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="press-releases" className="w-full max-w-5xl mx-auto mb-16">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="press-releases">Press Releases</TabsTrigger>
                <TabsTrigger value="media">Media Coverage</TabsTrigger>
                <TabsTrigger value="awards">Awards & Recognition</TabsTrigger>
              </TabsList>
              
              <TabsContent value="press-releases">
                <div className="space-y-8">
                  {pressReleases.map((release) => (
                    <Card key={release.id}>
                      <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground mb-2">{release.date}</p>
                        <h3 className="text-xl font-bold mb-3">{release.title}</h3>
                        <p className="mb-4">{release.excerpt}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => setSelectedRelease(release)}
                        >
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="media">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mediaFeatures.map((feature, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground mb-1">{feature.publication} • {feature.date}</p>
                        <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
                        <Button variant="link" className="p-0 h-auto" asChild>
                          <a href={feature.link}>Read Article</a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="awards">
                <div className="space-y-6">
                  {awards.map((award, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 md:flex md:justify-between md:items-center">
                        <div>
                          <h3 className="text-xl font-bold">{award.name}</h3>
                          <p className="text-muted-foreground">{award.organization}</p>
                        </div>
                        <div className="mt-3 md:mt-0 text-right">
                          <span className="bg-muted px-3 py-1 rounded-full text-sm font-medium">{award.year}</span>
                          <p className="text-sm text-muted-foreground mt-1">{award.category}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-10">Company Leadership</h2>
                <div className="space-y-8">
                  {executives.map((executive, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4 flex-shrink-0">
                        <div className="aspect-square w-full rounded-lg overflow-hidden">
                          <img 
                            src={executive.image} 
                            alt={executive.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{executive.name}</h3>
                        <p className="text-muted-foreground mb-3">{executive.title}</p>
                        <p>{executive.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-10">Media Kit</h2>
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Download Assets</h3>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full justify-start">
                        Company Logos
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Product Images
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Executive Headshots
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Brand Guidelines
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-2xl md:text-3xl font-bold mb-6">In The News</h2>
                <div className="space-y-4">
                  {mediaFeatures.slice(0, 4).map((feature, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0">
                      <p className="text-sm text-muted-foreground">{feature.publication} • {feature.date}</p>
                      <h3 className="font-medium hover:underline cursor-pointer">{feature.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Media Inquiries</h2>
              <p className="mb-8">
                For press inquiries, interview requests, or additional information, please contact our media relations team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button>Contact Media Relations</Button>
                <Button variant="outline">Download Press Kit</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <Dialog open={!!selectedRelease} onOpenChange={() => setSelectedRelease(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedRelease?.title}</DialogTitle>
            <DialogDescription>
              <p className="text-muted-foreground">{selectedRelease?.date}</p>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            {selectedRelease?.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
          <div className="mt-4">
            <Button variant="outline" onClick={() => setSelectedRelease(null)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Press;
