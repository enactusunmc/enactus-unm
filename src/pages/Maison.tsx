import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Maison = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-grow pt-20">
                <section className="py-20 bg-[#FDB913]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-6xl md:text-7xl font-bold text-black mb-8">
                                Maison
                            </h1>
                            <div className="bg-white rounded-3xl p-12 border-4 border-black">
                                <p className="text-xl md:text-2xl text-black/80 leading-relaxed">
                                    Content for Maison project coming soon...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Maison;
