import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ui/ThemeToggle";
import { ScrollArea } from "./ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Our Story", path: "/story" },
    { title: "Collections", path: "/collections" },
    /* { title: "Custom Studio", path: "/studio" }, */
    { title: "Lookbook", path: "/lookbook" },
    /* { title: "Materials", path: "/materials" }, */
    /* { title: "Journal", path: "/journal" }, */
    { title: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 bg-background/80 backdrop-blur-lg shadow-sm" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold mr-4">
            <span className="sr-only">SofasAndMore</span>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-brand-orange"></div>
              <span>SofasAndMore</span>
            </div>
          </Link>

          {/* Uncommented the horizontal nav for desktop */}
          {/* {!isMobile && (
            <ScrollArea className="flex-1 max-w-xl overflow-x-auto">
              <div className="flex space-x-6 px-1 py-2 min-w-max">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm font-medium transition-colors hover:text-brand-orange whitespace-nowrap"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </ScrollArea>
          )} */}

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <button
              onClick={() => setIsOpen(true)}
              className="flex flex-col justify-center items-center gap-1.5 group md:ml-4"
              aria-label="Open menu"
            >
              <span className="w-6 h-0.5 bg-foreground transition-all group-hover:w-8"></span>
              <span className="w-8 h-0.5 bg-foreground"></span>
              <span className="w-6 h-0.5 bg-foreground self-end transition-all group-hover:w-8"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay navigation menu */}
      <div
        className={`fixed inset-0 z-50 bg-background transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto h-full flex flex-col">
          <div className="flex justify-between items-center py-6">
            <Link to="/" className="text-2xl font-display font-bold">
              <span className="sr-only">SofasAndMore</span>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-brand-orange"></div>
                <span>SofasAndMore</span>
              </div>
            </Link>
            
            <button
              onClick={() => setIsOpen(false)}
              className="w-12 h-12 flex items-center justify-center group"
              aria-label="Close menu"
            >
              <div className="relative w-8 h-8">
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground rotate-45 transition-all"></span>
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground -rotate-45 transition-all"></span>
              </div>
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center">
            {/* Scroll area with fade effect container */}
            <div className="relative h-full">
              {/* Top fade gradient */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
              
              {/* ScrollArea with improved height constraints */}
              <ScrollArea className="h-full max-h-[60vh]">
                <div className="pt-4 pb-4"> {/* Extra padding to ensure first and last items can be fully visible */}
                  <ul className="space-y-6 md:space-y-10 pr-4">
                    {menuItems.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold hover:text-brand-orange transition-colors duration-300 inline-block"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollArea>
              
              {/* Bottom fade gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
            </div>
          </nav>

          <div className="py-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-1">
                <h3 className="text-xl font-medium">Let's connect</h3>
                <p className="text-muted-foreground">Portiabudu2@gmail.com</p>
                <p className="text-muted-foreground">+233 (55) 129 7475</p>
              </div>
              
              <div className="flex gap-6">
                <a href="https://wa.me/+233551297475" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">WhatsApp</a>
                <a href="https://www.snapchat.com/add/portiamicheals" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Snapchat</a>
                <a href="https://www.instagram.com/__ms_portia" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;