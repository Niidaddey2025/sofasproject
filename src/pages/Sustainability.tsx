
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Globe, Award } from "lucide-react";

const sustainabilityGoals = [
  { name: "Carbon Neutral", current: 85, goal: 100 },
  { name: "Sustainable Materials", current: 78, goal: 95 },
  { name: "Water Reduction", current: 65, goal: 80 },
  { name: "Waste Reduction", current: 90, goal: 100 },
];

const yearlyImpact = [
  { year: '2020', trees: 5000, carbon: 1200, waste: 800 },
  { year: '2021', trees: 7500, carbon: 2000, waste: 1500 },
  { year: '2022', trees: 10000, carbon: 3300, waste: 2200 },
  { year: '2023', trees: 15000, carbon: 4500, waste: 3000 },
  { year: '2024', trees: 20000, carbon: 6000, waste: 4000 },
  { year: '2025 (Projected)', trees: 25000, carbon: 8000, waste: 5000 },
];

const certifications = [
  { name: "FSC Certified", value: 40, color: "#84cc16" },
  { name: "B Corp", value: 30, color: "#22c55e" },
  { name: "LEED", value: 20, color: "#10b981" },
  { name: "Fair Trade", value: 10, color: "#059669" },
];

const COLORS = ["#84cc16", "#22c55e", "#10b981", "#059669"];

const Sustainability = () => {
  useEffect(() => {
    document.title = "Sustainability | SofasAndMore";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="bg-muted/20 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Sustainability</h1>
              <p className="text-lg text-muted-foreground">
                Our commitment to the planet and future generations
              </p>
            </div>
          </div>
        </div>

        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Sustainability Mission</h2>
                <p className="text-lg mb-6">
                  At SofasAndMore, sustainability isn't just a buzzword—it's a core value that guides every decision we make. 
                  We believe that beautiful furniture and environmental responsibility go hand in hand.
                </p>
                <p className="text-lg mb-6">
                  Our mission is to create exceptional furniture that not only enhances your living space but also minimizes 
                  our impact on the planet. This commitment extends from material sourcing to manufacturing processes, 
                  packaging, and the longevity of our products.
                </p>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Responsible Sourcing</h2>
                <p className="text-lg mb-6">
                  We carefully select our materials from sustainable sources. All our wood comes from FSC-certified forests, 
                  ensuring that for every tree harvested, new ones are planted. Our fabrics are increasingly made from 
                  recycled or organic materials, reducing the environmental impact of textile production.
                </p>
                <div className="bg-muted/30 p-6 rounded-lg my-8">
                  <h3 className="font-bold text-lg mb-2">Our 2025 Commitment</h3>
                  <p>By 2025, we aim to have 90% of our materials sourced from certified sustainable suppliers.</p>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Eco-Friendly Manufacturing</h2>
                <p className="text-lg mb-6">
                  Our manufacturing facilities are designed to minimize waste, energy consumption, and water usage. 
                  We've invested in advanced technology that allows us to create beautiful furniture while reducing our 
                  carbon footprint.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
                  <li>Solar-powered manufacturing facilities</li>
                  <li>Water recycling systems</li>
                  <li>Zero-waste initiatives across all operations</li>
                  <li>Low-VOC finishes and adhesives for better indoor air quality</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        
        {/* New impact metrics section with visualization */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Our Environmental Impact</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-xl font-bold mb-6">Progress Towards Our 2025 Goals</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={sustainabilityGoals}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="current" fill="#84cc16" name="Current %" />
                      <Bar dataKey="goal" fill="#22c55e" name="Goal %" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">Yearly Environmental Impact</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={yearlyImpact}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="trees" name="Trees Planted" stroke="#84cc16" fill="#84cc16" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="carbon" name="Carbon Offset (tons)" stroke="#059669" fill="#059669" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="waste" name="Waste Diverted (tons)" stroke="#ca8a04" fill="#ca8a04" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-bold mb-6">Our Certifications</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={certifications}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {certifications.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">Key Sustainability Achievements</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                      <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">100,000+ Trees Planted</h4>
                      <p className="text-muted-foreground mt-1">Through our partnership with reforestation programs globally</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="shrink-0 bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                      <Recycle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">15,000 Tons of Waste Diverted</h4>
                      <p className="text-muted-foreground mt-1">From landfills through our recycling and upcycling programs</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="shrink-0 bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                      <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Carbon Neutral Operations</h4>
                      <p className="text-muted-foreground mt-1">Achieved in our San Francisco and Portland facilities</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="shrink-0 bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                      <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">B Corp Certified</h4>
                      <p className="text-muted-foreground mt-1">Meeting the highest standards of social and environmental performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Longevity & Circular Design</h2>
                <p className="text-lg mb-6">
                  True sustainability means creating products that last. Our furniture is designed to be timeless, both in 
                  style and durability. When you purchase from SofasAndMore, you're investing in pieces that won't need 
                  to be replaced after just a few years.
                </p>
                <p className="text-lg mb-6">
                  We're also developing a furniture take-back program, allowing customers to return pieces when they're 
                  ready for something new. These items are either refurbished or responsibly disassembled for recycling.
                </p>
                
                <div className="mt-12 text-center">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Read Our Sustainability Report
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;
