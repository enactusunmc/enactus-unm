
// Import 24/25 images
import sbsImage2425 from "@/assets/life/24_25/sbs_2425.avif";
import welcomingNightImage2425 from "@/assets/life/24_25/welcoming_night_2425.avif";
import getawayImage2425 from "@/assets/life/24_25/getaway_2425.avif";

const Life2425 = () => {
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

    return (
        <div className="space-y-8">
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Life2425;
