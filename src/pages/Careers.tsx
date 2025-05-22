
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const coreValues = [
  {
    title: "Sustainability",
    description: "Environmental responsibility guides everything we do, from material sourcing to manufacturing processes.",
    icon: "🌱"
  },
  {
    title: "Innovation",
    description: "We constantly push the boundaries of furniture design, embracing new techniques and technologies.",
    icon: "💡"
  },
  {
    title: "Craftsmanship",
    description: "We honor traditional woodworking and upholstery techniques while integrating modern methods.",
    icon: "🛠️"
  },
  {
    title: "Inclusivity",
    description: "We celebrate diverse perspectives and create an environment where everyone feels welcomed and valued.",
    icon: "🤝"
  }
];

const benefits = [
  {
    category: "Health & Wellness",
    items: [
      "Comprehensive health, dental, and vision insurance",
      "Mental health resources and support",
      "Wellness stipend for gym memberships or fitness classes",
      "Generous paid time off policy"
    ]
  },
  {
    category: "Financial Benefits",
    items: [
      "Competitive salary packages",
      "401(k) matching program",
      "Employee stock ownership plan",
      "Profit sharing opportunities"
    ]
  },
  {
    category: "Work-Life Balance",
    items: [
      "Flexible working hours",
      "Remote work options",
      "Paid parental leave",
      "Sabbatical program for long-term employees"
    ]
  },
  {
    category: "Professional Growth",
    items: [
      "Education reimbursement",
      "Professional development budget",
      "Industry conference attendance",
      "Internal mentorship programs"
    ]
  }
];

const jobOpenings = [
  {
    title: "Senior Furniture Designer",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Join our design team to create innovative, sustainable furniture pieces that inspire and delight our customers."
  },
  {
    title: "Retail Experience Manager",
    location: "New York, NY",
    type: "Full-time",
    description: "Lead our flagship showroom experience and help customers find the perfect pieces for their spaces."
  },
  {
    title: "Sustainability Coordinator",
    location: "Portland, OR",
    type: "Full-time",
    description: "Help drive our sustainability initiatives forward and ensure our practices align with our environmental commitments."
  },
  {
    title: "Digital Marketing Specialist",
    location: "Remote",
    type: "Full-time",
    description: "Create compelling digital content and campaigns that tell the SofasAndMore story to a global audience."
  },
  {
    title: "Supply Chain Analyst",
    location: "Chicago, IL",
    type: "Full-time",
    description: "Optimize our supply chain processes to ensure efficient, sustainable operations from sourcing to delivery."
  }
];

const testimonials = [
  {
    name: "Sarah J.",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    quote: "Working at SofasAndMore has been the highlight of my career. The creative freedom combined with a supportive team culture makes this a truly special place to work."
  },
  {
    name: "Michael T.",
    role: "Logistics Manager",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    quote: "I'm proud to be part of a company that values sustainability and ethical practices as much as efficiency. We're making beautiful furniture and making a difference."
  },
  {
    name: "Elena R.",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    quote: "The collaborative environment at SofasAndMore encourages innovation and allows us to tell authentic stories about our brand that resonate with customers worldwide."
  }
];

const Careers = () => {
  useEffect(() => {
    document.title = "Careers | SofasAndMore";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="bg-muted/20 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
              <p className="text-lg text-muted-foreground">
                Build a career crafting beautiful spaces and sustainable futures
              </p>
              <div className="mt-8">
                <Button size="lg" className="font-medium">View Current Openings</Button>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 md:py-24 bg-white dark:bg-transparent relative overflow-hidden">
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
          
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                These core principles guide how we work and what we create
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {coreValues.map((value, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                alt="Team collaborating on furniture design" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Life at SofasAndMore</h2>
              <p className="text-lg text-muted-foreground">
                We believe in creating an environment where you can do your best work
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="benefits" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="benefits">Benefits & Perks</TabsTrigger>
                  <TabsTrigger value="testimonials">Employee Stories</TabsTrigger>
                </TabsList>
                <TabsContent value="benefits">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-4">{benefit.category}</h3>
                          <ul className="space-y-2">
                            {benefit.items.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="testimonials">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <blockquote className="mb-4">"{testimonial.quote}"</blockquote>
                            <div>
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Work With Us</h2>
              <p className="text-lg mb-6">
                At SofasAndMore, we're passionate about creating furniture that transforms spaces and lives. 
                Our team is made up of designers, craftspeople, and professionals who share a commitment to 
                quality, sustainability, and innovation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Growth & Development</h3>
                  <p>Continuous learning opportunities and clear career pathways for every team member</p>
                </div>
                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Sustainability Focus</h3>
                  <p>Be part of a company making real environmental impact through sustainable practices</p>
                </div>
                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Creative Environment</h3>
                  <p>Work alongside talented designers and innovators in a collaborative atmosphere</p>
                </div>
                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Work-Life Balance</h3>
                  <p>Flexible schedules, generous PTO, and a culture that respects life outside work</p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Current Openings</h2>
              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <div>
                          <h3 className="font-bold text-xl">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 mt-2 text-muted-foreground">
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.type}</span>
                          </div>
                          <p className="mt-3">{job.description}</p>
                        </div>
                        <Button className="self-start md:self-center mt-2 md:mt-0">Apply Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-lg mb-6">
                  Don't see the perfect role? We're always looking for talented individuals.
                </p>
                <Button variant="outline" size="lg">
                  Submit Your Resume
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
