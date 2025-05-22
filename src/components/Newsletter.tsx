
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    
    // Here you would typically send the email to your newsletter service
    toast.success("Thank you for subscribing!");
    setEmail("");
  };
  
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Inspired</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter for exclusive offers, design inspiration, and early access to new collections.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit">Subscribe</Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </form>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Design Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Our expert designers are ready to help you create the perfect space for your lifestyle.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Sustainability</h3>
                  <p className="text-sm text-muted-foreground">
                    Every piece is crafted with respect for our planet, using sustainable materials and processes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Custom Orders</h3>
                  <p className="text-sm text-muted-foreground">
                    Can't find exactly what you're looking for? We offer custom furniture solutions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Free Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Enjoy white-glove delivery service on orders all over the country.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
