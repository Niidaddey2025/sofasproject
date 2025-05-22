
const StoryContent = () => {
  const milestones = [
    {
      year: "2021",
      title: "The Beginning",
      description: "During the stillness of the pandemic, we had an idea of starting a furniture business that would redefine comfort and style since we were mostly indoors. This was the seed that would grow into SofasAndMore."
    },
    {
      year: "2022",
      title: "Expanding Horizons",
      description: "Still confined to our homes, we, like many others, became acutely aware of our surroundings. We realized that our living spaces needed to be more than just functional; they needed to be a reflection of our personalities and lifestyles."
    },
    {
      year: "2023",
      title: "Sustainable Innovation",
      description: "Together with our partners, we Launched our first fully sustainable collection prototype, setting new standards for eco-friendly furniture design."
    },
    {
      year: "2024",
      title: "Going Public",
      description: "As September 2024 unfolded, bringing with it a sense of transition and the promise of new beginnings with the changing season, we officially turned the key. September marked not just the start of autumn, but the vibrant dawn of our operational journey, a chapter brimming with untold possibilities."
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Our Journey</h2>
          <p className="text-muted-foreground">
            At SofasAndMore, we believe that furniture is more than just functional—it's an expression of style, comfort, and innovation. Our journey began with a simple idea: to create furniture that seamlessly blends contemporary design with exceptional comfort.
          </p>
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3"
              alt="Our workshop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Milestones</h2>
          <div className="space-y-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="border-l-2 border-muted pl-6 space-y-2">
                <div className="text-lg font-semibold">{milestone.year}</div>
                <h3 className="text-xl font-medium">{milestone.title}</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryContent;
