
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Journal from "./pages/Journal";
import Story from "./pages/Story";
import Studio from "./pages/Studio";
import Lookbook from "./pages/Lookbook";
import Materials from "./pages/Materials";
import Sustainability from "./pages/Sustainability";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import FAQs from "./pages/FAQs";
import Shipping from "./pages/Shipping";
import Care from "./pages/Care";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/story" element={<Story />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/care" element={<Care />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
