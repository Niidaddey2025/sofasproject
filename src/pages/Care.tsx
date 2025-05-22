
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Care = () => {
  useEffect(() => {
    document.title = "Care & Maintenance | SofasAndMore";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="bg-muted/20 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Care & Maintenance</h1>
              <p className="text-lg text-muted-foreground">
                Keep your furniture looking beautiful for years to come
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">General Care Tips</h2>
              <p className="text-lg mb-8">
                Following these general care tips will help extend the life of your furniture and keep it looking its best:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">Positioning</h3>
                    <ul className="space-y-2">
                      <li>Keep furniture away from direct sunlight to prevent fading</li>
                      <li>Maintain distance from heat sources like radiators and fireplaces</li>
                      <li>Use felt pads under furniture legs to protect floors</li>
                      <li>Rotate cushions regularly for even wear</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">Cleaning</h3>
                    <ul className="space-y-2">
                      <li>Dust regularly with a soft, lint-free cloth</li>
                      <li>Clean spills immediately to prevent staining</li>
                      <li>Vacuum upholstery weekly with a soft brush attachment</li>
                      <li>Avoid harsh chemical cleaners on any surfaces</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Material-Specific Care</h2>

              <div className="space-y-12">
                <section>
                  <h3 className="text-xl md:text-2xl font-bold mb-6">Wood Furniture</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="mb-4">
                        Our solid wood furniture is finished with natural oils or water-based lacquers that enhance its beauty 
                        while providing protection. With proper care, your wooden pieces will develop a rich patina over time.
                      </p>
                      <h4 className="font-semibold mb-2">Regular Maintenance:</h4>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Dust with a soft, slightly damp cloth, following the wood grain</li>
                        <li>Wipe dry immediately with a soft cloth</li>
                        <li>Apply furniture polish every 3-6 months (avoid silicone-based products)</li>
                        <li>Use coasters under beverages and place mats under hot dishes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Dealing with Issues:</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Water Marks</p>
                          <p className="text-sm text-muted-foreground">
                            For white water marks, try gently rubbing with a mixture of equal parts white vinegar and olive oil 
                            along the wood grain. Buff dry with a soft cloth.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">Scratches</p>
                          <p className="text-sm text-muted-foreground">
                            Minor scratches can often be disguised with a furniture touch-up marker or stick matched to your 
                            wood finish. Contact us for product recommendations specific to your piece.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">Refinishing</p>
                          <p className="text-sm text-muted-foreground">
                            For significant wear or damage, consider professional refinishing to restore your piece to its 
                            original beauty.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl md:text-2xl font-bold mb-6">Upholstered Furniture</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="mb-4">
                        Our upholstered pieces feature high-quality fabrics and leathers. Different materials require specific 
                        care to maintain their appearance and extend their lifespan.
                      </p>
                      <h4 className="font-semibold mb-2">Fabric Upholstery:</h4>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Vacuum regularly using a soft brush attachment</li>
                        <li>Rotate cushions weekly to ensure even wear</li>
                        <li>Blot spills immediately with a clean, absorbent cloth</li>
                        <li>Have professionally cleaned annually or as needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Leather Upholstery:</h4>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Dust regularly with a soft, dry cloth</li>
                        <li>Clean with a slightly damp cloth and mild soap if needed</li>
                        <li>Apply leather conditioner every 6-12 months</li>
                        <li>Keep away from direct sunlight to prevent drying and cracking</li>
                        <li>Blot spills immediately with a clean, dry cloth</li>
                      </ul>
                      <p className="text-sm text-muted-foreground">
                        Note: Each leather piece includes specific care instructions based on the type of leather used.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-bold mb-6">Metal Elements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="mb-4">
                        Our furniture often incorporates metal elements like brass, steel, or aluminum. These materials 
                        add strength and visual interest but require specific care to maintain their finish.
                      </p>
                      <h4 className="font-semibold mb-2">Regular Maintenance:</h4>
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Dust regularly with a soft, dry cloth</li>
                        <li>Clean with a slightly damp cloth and mild soap if needed</li>
                        <li>Dry thoroughly to prevent water spots</li>
                        <li>Apply a specialized metal polish appropriate for your specific finish</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Specific Metal Care:</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Brass & Copper</p>
                          <p className="text-sm text-muted-foreground">
                            These metals naturally patina over time. If you prefer the original shine, use a specialized 
                            brass or copper polish. For a natural patina, simply clean with mild soap and water.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">Stainless Steel</p>
                          <p className="text-sm text-muted-foreground">
                            Clean with a microfiber cloth and glass cleaner for a streak-free shine. For stubborn 
                            fingerprints, use a specialized stainless steel cleaner.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Need More Assistance?</h2>
              <p className="mb-8">
                Our customer service team is available to provide specific care advice for your furniture pieces.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Contact Our Care Experts</h3>
                    <p className="text-muted-foreground mb-1">Email: care@sofasandmore.com</p>
                    <p className="text-muted-foreground">Phone: 1-800-SOFAS-123</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Care Products</h3>
                    <p className="text-muted-foreground">
                      Visit our online shop for our recommended care products specific to your furniture pieces.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Care;
