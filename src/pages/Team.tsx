import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-foreground mb-8 text-center">
              OUR TEAM
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate individuals driving social change through entrepreneurial action.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
                Team Structure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {["5Ps", "3Ms", "TM", "Ops", "CV", "Mkt"].map((dept) => (
                  <div
                    key={dept}
                    className="p-8 bg-card border-2 border-primary rounded-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer text-center"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-2">{dept}</h3>
                    <p className="text-muted-foreground">Team Department</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
