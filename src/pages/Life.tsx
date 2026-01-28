import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FaultyTerminal from "@/components/FaultyTerminal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import 24/25 images
import sbsImage2425 from "@/assets/life/24_25/sbs_2425.avif";
import welcomingNightImage2425 from "@/assets/life/24_25/welcoming_night_2425.avif";
import getawayImage2425 from "@/assets/life/24_25/getaway_2425.avif";

// Import 23/24 images
import sbs1_2324 from "@/assets/life/23_24/sbs1_23234.avif";
import sbs2_2324 from "@/assets/life/23_24/sbs2_23234.avif";
import sbs3_2324 from "@/assets/life/23_24/sbs3_23234.avif";
import sbs4_2324 from "@/assets/life/23_24/sbs4_23234.avif";
import sbs5_2324 from "@/assets/life/23_24/sbs5_23234.avif";
import sbs6_2324 from "@/assets/life/23_24/sbs6_23234.avif";
import sbs7_2324 from "@/assets/life/23_24/sbs7_23234.avif";
import sbs8_2324 from "@/assets/life/23_24/sbs8_23234.avif";
import sbs9_2324 from "@/assets/life/23_24/sbs9_2324.avif";
import sbs10_2324 from "@/assets/life/23_24/sbs10_2324.avif";

import getaway1_2324 from "@/assets/life/23_24/getaway1_2324.avif";
import getaway2_2324 from "@/assets/life/23_24/getaway2_2324.avif";
import getaway3_2324 from "@/assets/life/23_24/getaway3_2324.avif";
import getaway4_2324 from "@/assets/life/23_24/getaway4_2324.avif";
import getaway5_2324 from "@/assets/life/23_24/getaway5_2324.avif";
import getaway6_2324 from "@/assets/life/23_24/getaway6_2324.avif";
import getaway7_2324 from "@/assets/life/23_24/getaway7_2324.avif";
import getaway8_2324 from "@/assets/life/23_24/getaway8_2324.avif";
import getaway9_2324 from "@/assets/life/23_24/getaway9_2324.avif";
import getaway10_2324 from "@/assets/life/23_24/getaway10_2324.avif";

import edp1_2324 from "@/assets/life/23_24/edp1_2324.avif";
import edp2_2324 from "@/assets/life/23_24/edp2_2324.avif";
import edp3_2324 from "@/assets/life/23_24/edp3_2324.avif";
import edp4_2324 from "@/assets/life/23_24/edp4_2324.avif";
import edp5_2324 from "@/assets/life/23_24/edp5_2324.avif";
import edp6_2324 from "@/assets/life/23_24/edp6_2324.avif";

import wc1_2324 from "@/assets/life/23_24/wc1_2324.avif";
import wc2_2324 from "@/assets/life/23_24/wc2_2324.avif";
import wc3_2324 from "@/assets/life/23_24/wc3_2324.avif";
import wc4_2324 from "@/assets/life/23_24/wc4_2324.avif";
import wc5_2324 from "@/assets/life/23_24/wc5_2324.avif";

const Life = () => {
  const activities2425 = [
    {
      title: "Social Business Simulation",
      description: "Get to know more about our first event of the academic year, where we get to indulge ourselves with fun and educational games, while bond over new and smart future team member, and the future of Enactus.",
      image: sbsImage2425
    },
    {
      title: "Welcoming Night",
      description: "A fun-filled event after our recruitment is completed, where we prepare fun games and delicious food for our team, and get to know more about each other. Stand a chance to win prizes as well!",
      image: welcomingNightImage2425
    },
    {
      title: "Enactus Getaway",
      description: "After a long and tiring semester, Enactus organizes a fun-fill trip to Bentong, where the whole team comes to spend quality time, games prepared, and eat delicious barbequed food together! A truly wonderful 2-day trip!",
      image: getawayImage2425
    }
  ];

  const carousels2324 = [
    {
      title: "Social Business Simulation",
      images: [sbs1_2324, sbs2_2324, sbs3_2324, sbs4_2324, sbs5_2324, sbs6_2324, sbs7_2324, sbs8_2324, sbs9_2324, sbs10_2324]
    },
    {
      title: "Enactus Getaway",
      images: [getaway1_2324, getaway2_2324, getaway3_2324, getaway4_2324, getaway5_2324, getaway6_2324, getaway7_2324, getaway8_2324, getaway9_2324, getaway10_2324]
    },
    {
      title: "Enactus Development Program",
      images: [edp1_2324, edp2_2324, edp3_2324, edp4_2324, edp5_2324, edp6_2324]
    },
    {
      title: "Welcoming Night",
      images: [wc1_2324, wc2_2324, wc3_2324, wc4_2324, wc5_2324]
    }
  ];
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
                  <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Year 24/25</h2>
                    <p className="text-xl text-muted-foreground">A milestone only one can hope to achieve.</p>
                  </div>
                  <div className="space-y-16">
                    {activities2425.map((activity, index) => (
                      <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>
                        <div className="lg:w-1/2">
                          <img
                            src={activity.image}
                            alt={activity.title}
                            className="w-full h-[450px] object-cover rounded-lg shadow-lg"
                          />
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{activity.title}</h3>
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{activity.description}</p>
                          <button className="bg-primary text-foreground px-8 py-3 text-base rounded font-semibold hover:bg-primary/90 transition-colors">
                            Read More
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="23-24" className="space-y-8">
                  <div className="space-y-16">
                    {carousels2324.map((carousel, index) => (
                      <div key={index} className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">{carousel.title}</h3>
                        <Carousel
                          opts={{
                            align: "start",
                            loop: true,
                          }}
                          className="w-full max-w-5xl mx-auto"
                        >
                          <CarouselContent>
                            {carousel.images.map((image, imgIndex) => (
                              <CarouselItem key={imgIndex} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                  <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-0">
                                      <img
                                        src={image}
                                        alt={`${carousel.title} ${imgIndex + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                      />
                                    </CardContent>
                                  </Card>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </div>
                    ))}
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
