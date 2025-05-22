
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const faqCategories = [
  { id: "all", name: "All Questions" },
  { id: "orders", name: "Orders & Shipping" },
  { id: "returns", name: "Returns & Warranties" },
  { id: "product", name: "Product Information" },
  { id: "care", name: "Care & Maintenance" },
  { id: "custom", name: "Custom Orders" }
];

const allFaqs = [
  {
    category: "orders",
    question: "How long will it take for my furniture to arrive?",
    answer: "Standard delivery times range from 2-4 weeks for in-stock items and 8-12 weeks for made-to-order pieces. You'll receive specific delivery timeframes during checkout, and we'll keep you updated throughout the process. Delivery times may vary based on your location and the current demand for specific items."
  },
  {
    category: "orders",
    question: "Do you offer assembly services?",
    answer: "Yes, we offer white-glove delivery service that includes professional assembly in your home. This service is complimentary for orders over $2,500. For smaller orders, assembly can be added for an additional fee during checkout. Our assembly team is fully trained on all our products to ensure proper setup."
  },
  {
    category: "orders",
    question: "Do you ship internationally?",
    answer: "Yes, we ship to select countries internationally. International shipping costs and delivery times vary by location. Please contact our customer service team for specific information about shipping to your country. Additional customs duties and taxes may apply based on your country's import regulations."
  },
  {
    category: "returns",
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy on most items. Custom pieces and made-to-order items cannot be returned unless there is a manufacturing defect. To initiate a return, please contact our customer service team within 30 days of delivery. Items must be in original condition and packaging. A return shipping fee may apply unless the return is due to a defect or error on our part."
  },
  {
    category: "returns",
    question: "What warranty do your products have?",
    answer: "Our furniture comes with a 3-year warranty against manufacturing defects under normal use. Specific warranty details vary by product category and can be found on individual product pages. The warranty covers structural integrity, frame construction, and major mechanisms. Normal wear and tear, damage from improper use, or damage from environmental factors are not covered."
  },
  {
    category: "returns",
    question: "What happens if my furniture arrives damaged?",
    answer: "If your furniture arrives with any damage, please document it with photos and contact our customer service team within 48 hours of delivery. We'll arrange for a replacement or repair as quickly as possible. Please keep all original packaging until the claim is resolved. Our team will work with you to find the most convenient solution."
  },
  {
    category: "product",
    question: "What materials do you use in your furniture?",
    answer: "We use a variety of sustainably sourced materials including FSC-certified hardwoods, recycled metals, organic cotton, wool, and natural latex. Each product page details the specific materials used in that item. We're committed to transparency in our material sourcing and are continuously working to improve our sustainability standards."
  },
  {
    category: "product",
    question: "Are your products eco-friendly?",
    answer: "Sustainability is a core value at SofasAndMore. We use responsibly sourced materials, including FSC-certified wood and eco-friendly fabrics. Our manufacturing processes are designed to minimize waste and environmental impact. We've eliminated over 90% of single-use plastics in our packaging and continue to work on reducing our carbon footprint throughout our supply chain."
  },
  {
    category: "product",
    question: "Can I request fabric swatches before ordering?",
    answer: "Yes, we offer complimentary fabric swatches so you can see and feel our materials before making a purchase decision. You can order up to 5 swatches at a time through our website or by contacting our customer service team. Swatches typically arrive within 3-5 business days."
  },
  {
    category: "care",
    question: "How do I care for my furniture?",
    answer: "Each piece comes with specific care instructions. Generally, we recommend regular dusting, keeping furniture out of direct sunlight, and promptly cleaning spills. For wooden pieces, avoid harsh chemicals and use furniture polish every few months. For upholstered items, vacuum regularly and treat stains quickly. We offer a comprehensive care guide for each material type on our website."
  },
  {
    category: "care",
    question: "How can I fix scratches on wooden furniture?",
    answer: "For light scratches on wooden furniture, we recommend using a touch-up pen or crayon that matches your furniture color. For deeper scratches, a wood filler followed by touch-up color may be necessary. We offer touch-up kits for all our wood finishes. For detailed instructions based on your specific piece, please contact our customer service team."
  },
  {
    category: "care",
    question: "How do I clean upholstered furniture?",
    answer: "For routine cleaning, vacuum your upholstered furniture weekly using a soft brush attachment. For stains, blot (don't rub) immediately with a clean, dry cloth. Different fabrics require different cleaning methods, so check the care instructions for your specific piece. For persistent stains, we recommend professional cleaning. Fabric protector sprays can help prevent future stains."
  },
  {
    category: "custom",
    question: "Can I order custom sizes or fabrics?",
    answer: "Absolutely! Many of our collections can be customized with different dimensions, materials, and finishes. Contact our design consultants for more information about custom orders. Custom pieces typically have a 10-12 week production time. We offer hundreds of fabric options and can even work with customer-provided materials (COM) subject to testing for durability."
  },
  {
    category: "custom",
    question: "Do you offer design consultations?",
    answer: "Yes, we offer complimentary design consultations both in our showrooms and virtually. Our design experts can help you select pieces that fit your space, style, and budget. Schedule a consultation through our website or by contacting customer service. Our consultants can provide 3D renderings of your space with our furniture to help you visualize the final result."
  },
  {
    category: "custom",
    question: "Can I customize the finish of wooden furniture?",
    answer: "Yes, many of our wooden furniture pieces are available in multiple finish options. Beyond our standard offerings, we can also create custom stains to match existing furniture or your specific design vision. Custom finishes typically add 2-4 weeks to production time and may include an additional charge depending on complexity."
  },
  {
    category: "orders",
    question: "Do you offer financing options?",
    answer: "Yes, we offer several financing options to make your purchase more manageable. Apply during checkout to see available plans. We partner with trusted financing providers to offer installment plans with competitive rates. For orders over $3,000, we offer interest-free financing for up to 12 months with approved credit."
  },
  {
    category: "product",
    question: "What is the difference between your sofa collections?",
    answer: "Each of our sofa collections has unique design characteristics, comfort profiles, and material options. Aurora features modern lines with plush comfort, Nova offers more structured support with a contemporary aesthetic, Terra emphasizes sustainable materials with a relaxed feel, and Aria balances elegant design with everyday comfort. Our website has detailed comparison guides, or speak with our design consultants for personalized recommendations."
  }
];

const FAQs = () => {
  useEffect(() => {
    document.title = "FAQs | SofasAndMore";
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredFaqs = allFaqs.filter(faq => {
    // Filter by category
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    
    // Filter by search query
    const matchesSearch = !searchQuery || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="bg-muted/20 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our products and services
              </p>
              
              <div className="mt-8 relative w-full max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Search questions..." 
                  className="pl-10" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 flex flex-wrap gap-2">
                {faqCategories.map((category) => (
                  <Badge 
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className="cursor-pointer text-sm py-1.5"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
              
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-6">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 shadow-sm bg-card">
                      <AccordionTrigger className="text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                      <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No matching questions found</h3>
                  <p className="text-muted-foreground mb-6">Try adjusting your search or category filter</p>
                  <Badge 
                    variant="outline"
                    className="cursor-pointer"
                    onClick={() => {setActiveCategory("all"); setSearchQuery("");}}
                  >
                    Reset filters
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Still Have Questions?</h2>
              <p className="mb-8">
                Our customer support team is ready to help. Reach out to us for personalized assistance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-card shadow-sm">
                  <h3 className="font-bold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">support@sofasandmore.com</p>
                </div>
                <div className="p-6 rounded-lg bg-card shadow-sm">
                  <h3 className="font-bold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">1-800-SOFAS-123</p>
                </div>
                <div className="p-6 rounded-lg bg-card shadow-sm">
                  <h3 className="font-bold mb-2">Live Chat</h3>
                  <p className="text-muted-foreground">Available 9am-6pm EST</p>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Popular Resources</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/care" className="inline-block px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
                    Care Instructions
                  </a>
                  <a href="/shipping" className="inline-block px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
                    Shipping Policy
                  </a>
                  <a href="/sustainability" className="inline-block px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
                    Sustainability
                  </a>
                  <a href="#" className="inline-block px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
                    Assembly Guides
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
