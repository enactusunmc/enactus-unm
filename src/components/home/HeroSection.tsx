import heroBanner from "@/assets/hero_banner.avif";

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
      <div className="relative z-10 container mx-auto px-4 text-center -mt-[500px]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-6 animate-fade-in">
            ENACTUS
          </h1>
          <p className="text-2xl md:text-3xl text-primary mb-12 font-medium tracking-wide">
            STUDENT ORGANISATION ON SOCIAL ENTERPRISE
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
