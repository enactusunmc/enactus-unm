import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-foreground mb-8">
            ABOUT <span className="block">ENACTUS</span>
          </h2>
          <div className="space-y-6 text-foreground/90">
            <p className="text-lg leading-relaxed">
              Enactus Nottingham Malaysia is a dynamic student-led branch of the 
              global Enactus network, a community of student, academic and business 
              leaders committed to using the power of entrepreneurial action to 
              transform lives and shape a better sustainable world.
            </p>
            <p className="text-lg leading-relaxed">
              Guided by academic advisors and business experts, we create and implement 
              community empowerment projects around the globe. The experience not only 
              transforms lives, it helps us to develop the kind of talent and perspective 
              that are essential to leadership in this ever-more complicated and 
              challenging world.
            </p>
            <div className="pt-6">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-primary font-bold"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
