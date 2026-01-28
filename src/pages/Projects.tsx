import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FaultyTerminal from "@/components/FaultyTerminal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
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
                        <div className="text-center">
                            <h1 className="text-4xl text-white md:text-5xl font-bold text-black mb-6 animate-in fade-in duration-1000">
                                Our Projects
                            </h1>
                            <p className="text-lg md:text-xl font-semibold bg-[#fcf9e6] px-5 py-5 rounded-3xl text-black/80 max-w-3xl mx-auto animate-in fade-in duration-1000 delay-300">
                                Explore our innovative projects making a difference
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-10 bg-[#fdffe0]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <Tabs defaultValue="notebook" className="w-full">
                                <TabsList className="flex flex-wrap justify-center gap-4 mb-12 bg-transparent h-auto p-0">
                                    <TabsTrigger
                                        value="notebook"
                                        className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                                    >
                                        NoteBook 2.0
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="econow"
                                        className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                                    >
                                        EcoNow 2.0
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="events"
                                        className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                                    >
                                        Events
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="sell-on-notts"
                                        className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                                    >
                                        Sell-on-Notts
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="maison"
                                        className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                                    >
                                        Maison
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="marketing"
                                        className="px-8 py-4 text-xl font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-foreground bg-muted hover:bg-muted/80 transition-all"
                                    >
                                        Marketing Master Class
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="notebook" className="space-y-8">
                                    <div className="text-center">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">NoteBook 2.0</h2>
                                        <p className="text-base md:text-lg text-muted-foreground">Content for NoteBook 2.0 coming soon...</p>
                                    </div>
                                </TabsContent>

                                <TabsContent value="econow" className="space-y-8">
                                    <div className="text-center">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">EcoNow 2.0</h2>
                                        <p className="text-base md:text-lg text-muted-foreground">Content for EcoNow 2.0 coming soon...</p>
                                    </div>
                                </TabsContent>

                                <TabsContent value="events" className="space-y-8">
                                    <div className="text-center">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Events</h2>
                                        <p className="text-base md:text-lg text-muted-foreground">Content for Events coming soon...</p>
                                    </div>
                                </TabsContent>

                                <TabsContent value="sell-on-notts" className="space-y-8">
                                    <div className="text-center">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sell-on-Notts</h2>
                                        <p className="text-base md:text-lg text-muted-foreground">Content for Sell-on-Notts coming soon...</p>
                                    </div>
                                </TabsContent>

                                <TabsContent value="maison" className="space-y-8">
                                    <div className="text-center">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Maison</h2>
                                        <p className="text-base md:text-lg text-muted-foreground">Content for Maison coming soon...</p>
                                    </div>
                                </TabsContent>

                                <TabsContent value="marketing" className="space-y-8">
                                    <div className="text-center">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Marketing Master Class</h2>
                                        <p className="text-base md:text-lg text-muted-foreground">Content for Marketing Master Class coming soon...</p>
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

export default Projects;
