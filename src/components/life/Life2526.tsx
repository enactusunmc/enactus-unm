import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// Import 25/26 images
import sbs1_2526 from "@/assets/life/25_26/sbs1_2526_converted.avif";
import sbs2_2526 from "@/assets/life/25_26/sbs2_2526_converted.avif";
import sbs3_2526 from "@/assets/life/25_26/sbs3_2526_converted.avif";
import sbs4_2526 from "@/assets/life/25_26/sbs4_2526_converted.avif";
import sbs5_2526 from "@/assets/life/25_26/sbs5_2526_converted.avif";
import sbs6_2526 from "@/assets/life/25_26/sbs6_2526_converted.avif";
import sbs7_2526 from "@/assets/life/25_26/sbs7_2526_converted.avif";
import sbs8_2526 from "@/assets/life/25_26/sbs8_2526_converted.avif";
import sbs9_2526 from "@/assets/life/25_26/sbs9_2526_converted.avif";

import getaway1_2526 from "@/assets/life/25_26/getaway1_2526_converted.avif";
import getaway2_2526 from "@/assets/life/25_26/getaway2_2526_converted.avif";
import getaway3_2526 from "@/assets/life/25_26/getaway3_2526_converted.avif";
import getaway4_2526 from "@/assets/life/25_26/getaway4_2526_converted.avif";
import getaway5_2526 from "@/assets/life/25_26/getaway5_2526_converted.avif";
import getaway6_2526 from "@/assets/life/25_26/getaway6_2526_converted.avif";
import getaway7_2526 from "@/assets/life/25_26/getaway7_2526_converted.avif";
import getaway8_2526 from "@/assets/life/25_26/getaway8_2526_converted.avif";
import getaway9_2526 from "@/assets/life/25_26/getaway9_2526_converted.avif";
import getaway10_2526 from "@/assets/life/25_26/getaway10_2526_converted.avif";

import ss1_2526 from "@/assets/life/25_26/ss1_2526_converted.avif";
import ss2_2526 from "@/assets/life/25_26/ss2_2526_converted.avif";
import ss3_2526 from "@/assets/life/25_26/ss3_2526_converted.avif";
import ss4_2526 from "@/assets/life/25_26/ss4_2526_converted.avif";
import ss5_2526 from "@/assets/life/25_26/ss5_2526_converted.avif";

import wc1_2526 from "@/assets/life/25_26/wc1_2526_converted.avif";
import wc2_2526 from "@/assets/life/25_26/wc2_2526_converted.avif";
import wc3_2526 from "@/assets/life/25_26/wc3_2526_converted.avif";
import wc4_2526 from "@/assets/life/25_26/wc4_2526_converted.avif";
import wc5_2526 from "@/assets/life/25_26/wc5_2526_converted.avif";
import wc6_2526 from "@/assets/life/25_26/wc6_2526_converted.avif";

const Life2526 = () => {
    const carousels2526 = [
        {
            title: "Enactus Summer Summit",
            images: [ss1_2526, ss2_2526, ss3_2526, ss4_2526, ss5_2526]
        },
        {
            title: "Social Business Simulation",
            images: [sbs1_2526, sbs2_2526, sbs3_2526, sbs4_2526, sbs5_2526, sbs6_2526, sbs7_2526, sbs8_2526, sbs9_2526]
        },
        {
            title: "Welcoming Night",
            images: [wc1_2526, wc2_2526, wc3_2526, wc4_2526, wc5_2526, wc6_2526]
        },
        {
            title: "Enactus Getaway",
            images: [getaway1_2526, getaway2_2526, getaway3_2526, getaway4_2526, getaway5_2526, getaway6_2526, getaway7_2526, getaway8_2526, getaway9_2526, getaway10_2526]
        },
    ];

    return (
        <div className="space-y-16">
            {carousels2526.map((carousel, index) => (
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
    );
};

export default Life2526;
