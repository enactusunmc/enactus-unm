import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import Dragon from "@/components/animations/Dragon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Dragon />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
