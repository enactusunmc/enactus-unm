const Econow = () => {
  return (
    <>
      <section className="py-20 rounded-lg bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-foreground mb-8 text-center">
            EcoNow
          </h1>
          <p className="text-xl text-center text-foreground/90 max-w-3xl mx-auto">
            Environmental sustainability initiatives for a greener future.
          </p>
        </div>
      </section>

      <section className="py-20 rounded-lg bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">About the Project</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                EcoNow 2.0 is our environmental sustainability project dedicated to promoting
                eco-friendly practices and raising awareness about environmental conservation.
                We implement practical solutions to reduce waste and carbon footprint.
              </p>
              <p>
                Our initiatives include recycling programs, environmental education workshops,
                and community clean-up drives, working towards a more sustainable future for all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Econow;
