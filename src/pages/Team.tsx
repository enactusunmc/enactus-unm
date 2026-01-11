import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Squares from "@/components/Squares";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FivePsContent from "@/components/team/FivePsContent";
import ThreeMsContent from "@/components/team/ThreeMsContent";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Squares
              borderColor="#000000"
              direction="diagonal"
              speed={0.5}
              squareSize={50}
              hoverFillColor="#cccccc"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl font-bold text-foreground mb-8 text-center animate-in fade-in duration-1000">
              OUR TEAM
            </h1>
            <p className="text-2xl bg-[#fcf9e6] px-5 py-5 rounded-3xl font-semibold text-justify text-muted-foreground max-w-7xl mx-auto animate-in fade-in duration-1000 delay-300">
              Here in Enactus UNM, we are a group of aspiring students from University of Nottingham Malaysia who wish to transform the live of others and the world by means of social entrepreneurship.
              <br></br>Guided by academic advisors and business experts, we create and implement community empowerment projects around the globe. The experience not only transforms lives, it helps us to develop the kind of talent and perspective that are essential to leadership in this ever-more complicated and challenging world.
            </p>
          </div>
        </section>

        <section className="py-20 bg-[#fdffe0]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
                Meet the Team
              </h2>
              <Tabs defaultValue="5ps" className="w-full">
                <TabsList className="flex flex-wrap justify-center gap-4 mb-12 bg-transparent h-auto p-0">
                  <TabsTrigger
                    value="5ps"
                    className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                  >
                    5Ps
                  </TabsTrigger>
                  <TabsTrigger
                    value="3ms"
                    className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                  >
                    3Ms
                  </TabsTrigger>
                  <TabsTrigger
                    value="tm"
                    className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                  >
                    Talent Management
                  </TabsTrigger>
                  <TabsTrigger
                    value="ops"
                    className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                  >
                    Operations
                  </TabsTrigger>
                  <TabsTrigger
                    value="cv"
                    className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                  >
                    Commercial Ventures
                  </TabsTrigger>
                  <TabsTrigger
                    value="mkt"
                    className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                  >
                    Marketing
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="5ps" className="space-y-8">
                  <FivePsContent />
                </TabsContent>

                <TabsContent value="3ms" className="space-y-8">
                  <ThreeMsContent />
                </TabsContent>

                <TabsContent value="tm" className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Talent Management</h3>
                    <p className="text-xl text-muted-foreground">Content for Talent Management team coming soon...</p>
                  </div>
                </TabsContent>

                <TabsContent value="ops" className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Operations</h3>
                    <p className="text-xl text-muted-foreground">Content for Operations team coming soon...</p>
                  </div>
                </TabsContent>

                <TabsContent value="cv" className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Commercial Ventures</h3>
                    <p className="text-xl text-muted-foreground">Content for Commercial Ventures team coming soon...</p>
                  </div>
                </TabsContent>

                <TabsContent value="mkt" className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Marketing</h3>
                    <p className="text-xl text-muted-foreground">Content for Marketing team coming soon...</p>
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

export default Team;
