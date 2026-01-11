import heroBanner from "@/assets/hero_banner.avif";
import TextPressure from "@/components/TextPressure";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-bottom"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/50 to-foreground/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="h-56 md:h-64 flex items-center justify-center">
            <TextPressure
              text="ENACTUS"
              textColor="#FDB913"
              className="animate-fade-in"
              minFontSize={50}
            />
          </div>
          <p className="text-xl md:text-2xl text-primary mb-12 font-medium tracking-wide">
            STUDENT ORGANISATION ON SOCIAL ENTERPRISE
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
