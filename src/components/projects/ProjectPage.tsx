import { Instagram } from 'lucide-react';
import { Project } from '@/lib/types';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

interface ProjectPageProps {
    project: Project;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
    const storyHeading = project.sectionHeadings?.story ?? 'Our Story';
    const eventsHeading = project.sectionHeadings?.events ?? 'Events';
    const logoSize = project.logoSize ?? '7rem';

    return (
        <div className="space-y-0">

            {/* Hero — title + logo */}
            <section className="py-10 md:py-16 px-8 md:px-16 bg-background">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
                        <h1 className="text-5xl md:text-8xl font-black text-foreground leading-tight">
                            {project.title}
                        </h1>
                        {project.logo && (
                            <div className="flex-shrink-0 flex flex-col items-center gap-2">
                                <img
                                    src={project.logo}
                                    alt={`${project.title} logo`}
                                    className="object-contain"
                                    style={{
                                        width: logoSize,
                                        height: logoSize,
                                        maxWidth: '40vw',
                                        maxHeight: '40vw',
                                    }}
                                />
                                <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                                    {project.title}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Our Story — project colour background */}
            <section
                className="py-16 px-8 md:px-16"
                style={{ backgroundColor: project.colorTheme.color }}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/4 flex-shrink-0">
                            <h2 className="text-3xl font-black text-foreground leading-snug">
                                {/* Mobile: inline */}
                                <span className="md:hidden">{storyHeading}</span>
                                {/* Desktop: one word per line */}
                                <span className="hidden md:inline">
                                    {storyHeading.split(' ').map((word, i) => (
                                        <span key={i}>{word}<br /></span>
                                    ))}
                                </span>
                            </h2>
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-base md:text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events */}
            {project.events.length > 0 && (
                <section className="py-16 px-8 md:px-16 bg-background">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-black text-foreground mb-10 text-center">{eventsHeading}</h2>
                    </div>
                    <div className="space-y-8">
                        {project.events.map((event, index) => (
                            <div
                                key={index}
                                className="rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center"
                                style={{ backgroundColor: project.colorTheme.color }}
                            >
                                {/* Left — image(s), 40% */}
                                {event.images.length > 0 && (
                                    <div className="w-full md:w-[40%] flex-shrink-0">
                                        {event.images.length === 1 ? (
                                            <img
                                                src={event.images[0]}
                                                alt={`Event ${index + 1} — image 1`}
                                                className="w-full h-64 object-cover rounded-lg"
                                            />
                                        ) : (
                                            <Carousel className="w-full" opts={{ loop: true }}>
                                                <CarouselContent>
                                                    {event.images.map((image, imgIndex) => (
                                                        <CarouselItem key={imgIndex}>
                                                            <img
                                                                src={image}
                                                                alt={`Event ${index + 1} — image ${imgIndex + 1}`}
                                                                className="w-full h-64 object-cover rounded-lg"
                                                            />
                                                        </CarouselItem>
                                                    ))}
                                                </CarouselContent>
                                                <CarouselPrevious className="left-2" />
                                                <CarouselNext className="right-2" />
                                            </Carousel>
                                        )}
                                    </div>
                                )}
                                {/* Right — description, 60% */}
                                <div className={event.images.length > 0 ? 'md:w-[60%]' : 'w-full'}>
                                    {event.title && (
                                        <h3 className="text-3xl font-black text-foreground mb-4">
                                            {event.title}
                                        </h3>
                                    )}
                                    <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed whitespace-pre-line">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Contact Us */}
            {project.instagram && (
                <section
                    className="py-16 px-8 md:px-16"
                    style={{ backgroundColor: project.colorTheme.color }}
                >
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-black text-foreground mb-8">Contact Us</h2>
                        <a
                            href={`https://instagram.com/${project.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white/30 hover:bg-white/50 transition-colors rounded-xl px-6 py-4"
                        >
                            <Instagram className="w-6 h-6 text-foreground" strokeWidth={1.75} />
                            <span className="text-lg font-semibold text-foreground">@{project.instagram}</span>
                        </a>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProjectPage;
