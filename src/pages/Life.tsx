import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FaultyTerminal from "@/components/animations/FaultyTerminal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Life2425 from "@/components/life/Life2425";
import Life2324 from "@/components/life/Life2324";

const Life = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <FaultyTerminal
              brightness={0.3}
              tint="#f8ffc2"
              glitchAmount={0.1}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl text-white md:text-5xl font-bold text-foreground mb-8 text-center animate-in fade-in duration-1000">
              LIFE@ENACTUS
            </h1>
            <p className="text-lg md:text-xl font-semibold bg-[#fcf9e6] px-5 py-5 rounded-3xl text-center text-muted-foreground max-w-3xl mx-auto animate-in fade-in duration-1000 delay-300">
              Explore our journey, activities, and the impact we've made together.
            </p>
          </div>
        </section>

        <section className="py-10 bg-[#fdffe0]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="24-25" className="w-full">
                <TabsList className="flex justify-center gap-4 mb-6 bg-transparent h-auto p-0">
                  <TabsTrigger
                    value="24-25"
                    className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                  >
                    Year 24/25
                  </TabsTrigger>
                  <TabsTrigger
                    value="23-24"
                    className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                  >
                    Year 23/24
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="24-25" className="space-y-8">
                  <Life2425 />
                </TabsContent>

                <TabsContent value="23-24" className="space-y-8">
                  <Life2324 />
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
