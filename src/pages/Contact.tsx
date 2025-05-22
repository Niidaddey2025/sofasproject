
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | SofasAndMore";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactHeader />
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
