
import { MapPin } from "lucide-react";

const ContactHeader = () => {
  return (
    <section className="pt-32 pb-12 container mx-auto px-4 md:px-6">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Get in Touch</h1>
        <p className="text-muted-foreground max-w-xl text-lg">
          Whether you're looking to discuss a project, join our team, or simply want to learn more about our furniture, we'd love to hear from you.
        </p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5" />
          <span>Greater Accra . Awoshie - Ablemkuma Highway</span>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
