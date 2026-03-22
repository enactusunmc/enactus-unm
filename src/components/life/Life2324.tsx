import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

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

const Life2324 = () => {
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
                        <CarouselPrevious className="left-2 md:-left-12" />
                        <CarouselNext className="right-2 md:-right-12" />
                    </Carousel>
                </div>
            ))}
        </div>
    );
};

export default Life2324;
