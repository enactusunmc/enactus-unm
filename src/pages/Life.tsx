import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Life = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-foreground mb-8 text-center">
              LIFE @ ENACTUS
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Explore our journey, activities, and the impact we've made together.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="24-25" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                  <TabsTrigger value="24-25" className="text-lg">Year 24/25</TabsTrigger>
                  <TabsTrigger value="23-24" className="text-lg">Year 23/24</TabsTrigger>
                </TabsList>
                
                <TabsContent value="24-25" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-card border-2 border-primary rounded-lg">
                      <h3 className="text-2xl font-bold text-foreground mb-3">Fall Activities</h3>
                      <p className="text-muted-foreground">Activities and events from the fall semester of 2024/2025.</p>
                    </div>
                    <div className="p-6 bg-card border-2 border-primary rounded-lg">
                      <h3 className="text-2xl font-bold text-foreground mb-3">Spring Activities</h3>
                      <p className="text-muted-foreground">Upcoming activities and events for spring semester 2025.</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="23-24" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-card border-2 border-primary rounded-lg">
                      <h3 className="text-2xl font-bold text-foreground mb-3">Past Year Highlights</h3>
                      <p className="text-muted-foreground">Memorable moments from the 2023/2024 academic year.</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Life;
