
const StudioContent = () => {
  const services = [
    {
      title: "Design Consultation",
      description: "Work with our expert designers to bring your vision to life through personalized consultations.",
      image: "https://images.unsplash.com/photo-1486946255434-2466348c2166?ixlib=rb-4.0.3"
    },
    {
      title: "Material Selection",
      description: "Choose from our curated collection of premium fabrics, leathers, and sustainable materials.",
      image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-4.0.3"
    },
    {
      title: "Custom Dimensions",
      description: "Get furniture that fits your space perfectly with custom measurements and proportions.",
      image: "https://images.unsplash.com/photo-1630699144867-37acec97df5a?ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="group hover:scale-[1.02] transition-transform duration-300">
            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href="/contact"
          className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-3 rounded-full hover:bg-brand-orange/90 transition-colors"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
};

export default StudioContent;
