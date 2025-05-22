
import { Mail, Phone, Camera, Instagram, MessageSquare } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
        <div className="grid gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold">Greater Accra</h3>
            <address className="not-italic text-muted-foreground">
              Awoshie Ablekuma Highway<br />
              Greater Accra, GA
            </address>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Camera className="h-5 w-5 text-muted-foreground" />
          <a href="https://www.snapchat.com/add/portiamicheals" target="_blank" className="hover:text-foreground transition-colors">
            Snapchat
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Instagram className="h-5 w-5 text-muted-foreground" />
          <a href="https://www.instagram.com/__ms_portia" target="_blank" className="hover:text-foreground transition-colors">
            Instagram
          </a>
        </div>
        <div className="flex items-center gap-3">
          <MessageSquare className="h-5 w-5 text-muted-foreground" />
          <a href="https://wa.me/+233551297475" target="_blank" className="hover:text-foreground transition-colors">
            Whatsapp
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-muted-foreground" />
          <a href="tel:+233551297475" target="_blank" className="hover:text-foreground transition-colors">
            +233 (55) 129 7475
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-muted-foreground" />
          <a href="mailto:Portiabudu2@gmail.com" target="_blank" className="hover:text-foreground transition-colors">
            Portiabudu2@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
