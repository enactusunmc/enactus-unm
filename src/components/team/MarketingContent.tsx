import TeamMember from "@/components/team/TeamMember";

// Import images
import directorImage from "@/assets/team/mkt/director.avif";
import asstDirectorImage from "@/assets/team/mkt/asst_director.avif";
import publicityImage from "@/assets/team/mkt/publicity.avif";
import creativityImage from "@/assets/team/mkt/creativity.avif";
import mktMainImage from "@/assets/team/mkt/main.avif";

const MarketingContent = () => {
    const leadership = [
        {
            name: "Lim Sy Chyi",
            title: "Director",
            description: "As the Marketing Director for Enactus, my goal is to maintain a cohesive and aesthetic brand identity that aligns with Enactus' mission, while fostering a creative and collaborative environment where everyone can work hard and have fun throughout the process. With experience from previous marketing internships, I bring creativity, content creation skills, and a dedication to improving my communication and leadership abilities to guide the team and achieve our marketing goals.",
            image: directorImage
        },
        {
            name: "Thashwin",
            title: "Assistant Director",
            description: "Becoming the Assistant Marketing Director of Enactus UNM has been one of the most rewarding experiences of my university life. From coordinating exciting events to building strong brand collaborations, I've honed my skills in marketing strategy, communication, and leadership. My goal has always been to create a supportive, stress-free environment where my team can grow, learn, and thrive. I'm proud to have played a role in elevating our marketing initiatives and setting the stage for future successes. In the book of life, this chapter I'd rewrite, stress-free with pride and joy in every line.",
            image: asstDirectorImage
        }
    ];

    const executives = [
        { name: "Daniel Tan", title: "Publicity Executive", image: publicityImage },
        { name: "Afiqah", title: "Creativity Executive", image: creativityImage }
    ];

    return (
        <div className="space-y-16">
            {/* Main Marketing Image */}
            <div className="w-full max-w-4xl mx-auto">
                <img
                    src={mktMainImage}
                    alt="Marketing Team"
                    className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
                />
            </div>

            {/* Leadership Team Members */}
            <div className="space-y-16">
                {leadership.map((member, index) => (
                    <TeamMember
                        key={member.name}
                        name={member.name}
                        title={member.title}
                        description={member.description}
                        image={member.image}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </div>

            {/* Our Executives Section */}
            <div className="space-y-12 mt-20">
                <h3 className="text-5xl font-bold text-center text-foreground">
                    Our Executives
                </h3>

                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {executives.map((exec) => (
                        <div key={exec.name} className="flex flex-col items-center space-y-4">
                            <h4 className="text-3xl font-bold text-foreground text-center">
                                {exec.title}
                            </h4>
                            <img
                                src={exec.image}
                                alt={exec.name}
                                className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
                                style={{ width: "350px" }}
                            />
                            <p className="text-2xl font-semibold text-foreground text-center">
                                {exec.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarketingContent;
