import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Life from "./pages/Life";
import Events from "./pages/Events";
import SellOnNotts from "./pages/SellOnNotts";
import Notebook from "./pages/Notebook";
import Econow from "./pages/Econow";
import Projects from "./pages/Projects";
import ContactSection from "./pages/ContactSection";
import Maison from "./pages/Maison";
import MarketingMasterClass from "./pages/MarketingMasterClass";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/life" element={<Life />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sell-on-notts" element={<SellOnNotts />} />
          <Route path="/notebook" element={<Notebook />} />
          <Route path="/econow" element={<Econow />} />
          <Route path="/maison" element={<Maison />} />
          <Route path="/marketing-master-class" element={<MarketingMasterClass />} />
          <Route path="/contact" element={<ContactSection />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
