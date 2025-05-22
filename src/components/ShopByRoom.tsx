
import { ArrowRight } from "lucide-react";
import livingRoomImage from "../assets/living.jpg";
import diningRoomImage from "../assets/dining.jpg";
import bedroomImage from "../assets/photo_6014676754439981954_y.jpg";
import officeImage from "../assets/office.jpg";

const rooms = [
  {
    name: "Living Room",
    description: "Create a welcoming space for family and friends with our stylish yet comfortable living room pieces.",
    image: livingRoomImage,
    link: "/collections"
  },
  {
    name: "Dining Room",
    description: "Transform mealtimes with dining tables and chairs designed for both everyday use and special occasions.",
    image: diningRoomImage,
    link: "/collections"
  },
  {
    name: "Bedroom",
    description: "Create your perfect sanctuary with our bedroom collections that balance style and comfort.",
    image: bedroomImage,
    link: "/collections"
  },
  {
    name: "Home Office",
    description: "Design a productive and inspiring workspace with our ergonomic and stylish office furniture.",
    image: officeImage,
    link: "/collections"
  }
];

const ShopByRoom = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Shop by Room</h2>
          <p className="text-lg text-muted-foreground">
            Discover furniture collections tailored to each space in your home, 
            designed to work harmoniously together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl h-[400px] cursor-pointer"
            >
              <img 
                src={room.image} 
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-white text-2xl md:text-3xl font-bold">{room.name}</h3>
                <p className="text-white/80 mt-2 max-w-md">{room.description}</p>
                <a 
                  href={room.link}
                  className="mt-4 inline-flex items-center gap-2 text-white group-hover:text-brand-orange transition-colors"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByRoom;
