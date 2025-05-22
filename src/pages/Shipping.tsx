
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Shipping = () => {
  useEffect(() => {
    document.title = "Shipping & Returns | SofasAndMore";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="bg-muted/20 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Shipping & Returns</h1>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about delivery and our return policy
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="shipping">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="shipping">Shipping Information</TabsTrigger>
                  <TabsTrigger value="returns">Returns & Exchanges</TabsTrigger>
                </TabsList>
                
                <TabsContent value="shipping" className="mt-6">
                  <div className="space-y-8">
                    <section>
                      <h2 className="text-2xl font-bold mb-4">Delivery Options</h2>
                      <p className="mb-6">
                        We offer multiple delivery options to ensure your furniture arrives safely and conveniently.
                      </p>
                      
                      <div className="space-y-6">
                        <div className="border border-border rounded-lg p-6">
                          <h3 className="text-xl font-semibold mb-2">Standard Delivery</h3>
                          <p className="mb-4">
                            Our standard delivery service includes delivery to your door or inside your home's ground floor. This service is available for all locations within the continental United States.
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-medium">Timeframe:</span> 2-4 weeks for in-stock items, 8-12 weeks for made-to-order items
                          </p>
                        </div>
                        
                        <div className="border border-border rounded-lg p-6">
                          <h3 className="text-xl font-semibold mb-2">White Glove Delivery</h3>
                          <p className="mb-4">
                            Our premium delivery service includes room of choice placement, complete assembly, and packaging removal. This service is complimentary for orders over $2,500.
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-medium">Timeframe:</span> 2-4 weeks for in-stock items, 8-12 weeks for made-to-order items
                          </p>
                        </div>
                        
                        <div className="border border-border rounded-lg p-6">
                          <h3 className="text-xl font-semibold mb-2">International Shipping</h3>
                          <p className="mb-4">
                            We ship to select countries internationally. Shipping costs, delivery times, and customs fees vary by location.
                          </p>
                          <p className="text-muted-foreground">
                            <span className="font-medium">Timeframe:</span> Varies by destination
                          </p>
                        </div>
                      </div>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl font-bold mb-4">Delivery Timeframes</h2>
                      <p className="mb-6">
                        Delivery times vary based on product availability and your location:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>In-stock items:</strong> 2-4 weeks from order date</li>
                        <li><strong>Made-to-order items:</strong> 8-12 weeks from order date</li>
                        <li><strong>Custom orders:</strong> 12-16 weeks from order date</li>
                      </ul>
                      <p className="mt-4">
                        You'll receive a confirmation email with estimated delivery dates after placing your order. As your delivery date approaches, our team will contact you to schedule a specific delivery window.
                      </p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl font-bold mb-4">Shipping Costs</h2>
                      <p className="mb-6">
                        Shipping costs are calculated based on the value of your order and your delivery location:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Orders under $1,000:</strong> Shipping fee calculated at checkout</li>
                        <li><strong>Orders $1,000-$2,499:</strong> Reduced shipping rate</li>
                        <li><strong>Orders $2,500+:</strong> Free standard delivery or white glove service</li>
                      </ul>
                    </section>
                  </div>
                </TabsContent>
                
                <TabsContent value="returns" className="mt-6">
                  <div className="space-y-8">
                    <section>
                      <h2 className="text-2xl font-bold mb-4">Return Policy</h2>
                      <p className="mb-6">
                        We want you to be completely satisfied with your purchase. If you're not happy with your item, we offer a 30-day return policy for most products.
                      </p>
                      
                      <div className="bg-muted/30 p-6 rounded-lg my-6">
                        <h3 className="font-bold mb-2">Return Eligibility</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Items must be in original condition</li>
                          <li>Original packaging is preferred but not required</li>
                          <li>Proof of purchase is required</li>
                          <li>Return requests must be initiated within 30 days of delivery</li>
                        </ul>
                      </div>
                      
                      <p className="mb-4 font-medium">Items not eligible for return:</p>
                      <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Custom or made-to-order pieces (unless manufacturing defect)</li>
                        <li>Clearance or final sale items</li>
                        <li>Items showing signs of wear or damage not caused by manufacturing defects</li>
                      </ul>
                      
                      <p>
                        To initiate a return, please contact our customer service team at support@sofasandmore.com or call 1-800-SOFAS-123.
                      </p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl font-bold mb-4">Return Shipping</h2>
                      <p className="mb-4">
                        For eligible returns, we offer the following options:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><strong>Manufacturing Defects:</strong> We cover all return shipping costs</li>
                        <li><strong>Change of Mind Returns:</strong> Return shipping fee applies</li>
                      </ul>
                      <p>
                        Our customer service team will coordinate the return shipping process with you once your return is approved.
                      </p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl font-bold mb-4">Exchanges</h2>
                      <p className="mb-6">
                        If you'd like to exchange an item for a different size, color, or product, please contact our customer service team. We'll help you process the exchange and arrange for the pickup of the original item and delivery of the replacement.
                      </p>
                      <p>
                        For exchanges due to manufacturing defects, we'll cover all shipping costs. For preference-based exchanges, shipping fees may apply.
                      </p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl font-bold mb-4">Refunds</h2>
                      <p className="mb-4">
                        Once we receive and inspect your return, we'll process your refund. Refunds are issued to the original payment method.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Credit Card Payments:</strong> 5-10 business days for funds to appear</li>
                        <li><strong>Financing Plans:</strong> 10-14 business days for credit to appear</li>
                      </ul>
                    </section>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Questions About Your Order?</h2>
              <p className="mb-8">
                Our customer service team is ready to assist you with any questions about shipping, returns, or your order status.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-card shadow-sm">
                  <h3 className="font-bold mb-2">Contact Support</h3>
                  <p className="text-muted-foreground mb-1">Email: support@sofasandmore.com</p>
                  <p className="text-muted-foreground">Phone: 1-800-SOFAS-123</p>
                </div>
                <div className="p-6 rounded-lg bg-card shadow-sm">
                  <h3 className="font-bold mb-2">Order Tracking</h3>
                  <p className="text-muted-foreground">
                    Track your order status through your account or using the tracking number provided in your shipping confirmation email.
                  </p>
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

export default Shipping;
