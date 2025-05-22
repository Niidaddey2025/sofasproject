
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "Collections",
      links: [
        { name: "Aurora" },
        { name: "Nova" },
        { name: "Terra" },
        { name: "Aria" },
        { name: "Zenith" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Our Story", href: "/story" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Collections", href: "/collections" },
        { name: "Journal", href: "/journal" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "FAQs", href: "/faqs" },
        { name: "Shipping & Returns", href: "/shipping" },
        { name: "Care & Maintenance", href: "/care" }
      ]
    }
  ];
  
  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-brand-orange"></div>
                <span className="font-display font-bold text-xl">SofasAndMore</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Contemporary furniture that combines innovative design, sustainable practices, 
              and exceptional craftsmanship for modern living.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/__ms_portia"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Instagram"
              >
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="tel:+233551297475"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Telephone"
              >
                <span className="sr-only">Telephone</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.093 15.093 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1.003 1.003 0 0 1-.24 1.01l-2.21 2.2z"/>
                </svg>
              </a>
              <a 
                href="https://www.snapchat.com/add/portiamicheals"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Snapchat"
              >
                <span className="sr-only">Snapchat</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm0 472c-119.103 0-216-96.897-216-216S136.897 40 256 40s216 96.897 216 216-96.897 216-216 216z"/>
                  <path d="M352 176c0 53.019-43.981 96-96 96s-96-42.981-96-96 43.981-96 96-96 96 42.981 96 96z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/+233551297475"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="WhatsApp"
              >
                <span className="sr-only">whatsApp</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M16.002 3C9.375 3 3.998 8.376 3.998 15.002c0 2.641.82 5.09 2.219 7.137L4 29l6.998-2.185a11.934 11.934 0 0 0 5.004 1.104C22.628 27.919 28 22.546 28 15.919 28 9.292 22.625 3 16.002 3zm-.006 22.634c-1.58 0-3.08-.42-4.383-1.152l-.313-.184-4.146 1.293 1.293-4.035-.203-.32a9.416 9.416 0 0 1-1.523-5.129c0-5.246 4.27-9.51 9.516-9.51 5.242 0 9.506 4.27 9.506 9.516s-4.27 9.52-9.55 9.52zm5.195-6.918c-.313-.156-1.855-.914-2.145-1.02-.285-.102-.492-.156-.7.16s-.797 1.02-.977 1.23c-.18.203-.359.23-.668.078-.313-.156-1.32-.48-2.512-1.527-.93-.832-1.559-1.86-1.742-2.172-.18-.313-.02-.48.137-.637.14-.14.313-.359.465-.539.16-.18.211-.313.316-.52.105-.203.055-.391-.027-.547-.078-.16-.698-1.684-.957-2.301-.25-.602-.5-.52-.699-.531-.18-.008-.391-.01-.602-.01a1.157 1.157 0 0 0-.84.39c-.285.305-1.086 1.062-1.086 2.59 0 1.52 1.11 2.988 1.266 3.191.16.203 2.184 3.332 5.297 4.684.742.32 1.32.508 1.77.656.742.23 1.418.2 1.953.121.598-.09 1.855-.758 2.117-1.488.262-.726.262-1.352.184-1.488-.074-.133-.27-.211-.57-.367z" />
                </svg>
              </a>
            </div>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SofasAndMore. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
