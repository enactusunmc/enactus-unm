import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import EnactusValues from "@/components/home/EnactusValues";
import ProjectsSection from "@/components/home/ProjectsSection";
import UpdatesSection from "@/components/home/UpdatesSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <EnactusValues />
        <ProjectsSection />
        <UpdatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
