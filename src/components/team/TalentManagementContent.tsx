import TeamMember from "@/components/TeamMember";

// Import images
import directorImage from "@/assets/team/tm/director.avif";
import asstDirectorImage from "@/assets/team/tm/asst_director.avif";
import exec1Image from "@/assets/team/tm/exec1.avif";
import exec2Image from "@/assets/team/tm/exec2.avif";
import exec3Image from "@/assets/team/tm/exec3.avif";
import exec4Image from "@/assets/team/tm/exec4.avif";
import exec5Image from "@/assets/team/tm/exec5.avif";
import tmMainImage from "@/assets/team/tm/main.avif";

const TalentManagementContent = () => {
    const leadership = [
        {
            name: "Tan Chyi En",
            title: "Talent Management Director",
            description: "As the Talent Management Director has been an incredibly rewarding experience. This role has given me the opportunity to play a part in shaping the growth and success of Enactus by ensuring that individuals with the right skills and passion are recruited into roles where they can thrive. Beyond recruitment, I have been deeply involved in fostering a supportive, engaging, and inclusive environment, where every member feels valued and empowered to contribute meaningfully to our initiatives. Seeing our members develop their talents, take on new challenges and contribute to impactful projects has been one of the most fulfilling aspects of my journey.",
            image: directorImage
        },
        {
            name: "Chong Swee En",
            title: "Assistant Talent Management Director",
            description: "Joining Enactus for the second year and this year as a Talent Management Assistant Director has been one of the best decisions I've made in university so far. Aside from my responsibility to assist my Director and the Chief People Officer, I help to oversee the overall welfare of the members and brainstorm ideas to integrate members' bond and passion for our club activities. I love to get to know more people, and this position is perfect for me as I got to utilise my communication skills to get to know more people and foster connections with new and existing members. I am a strong advocate for the idea that Human Resources are the core of an organisation, believing that with proper foundation and suitable members, the organisation is sure to flourish.",
            image: asstDirectorImage
        }
    ];

    const executives = [
        { name: "Janson Wong", image: exec1Image },
        { name: "Lam Wei Heng", image: exec2Image },
        { name: "Lai Jun Yu", image: exec3Image },
        { name: "Adom Teh", image: exec4Image },
        { name: "Pherozdev Singh", image: exec5Image }
    ];

    return (
        <div className="space-y-16">
            {/* Main TM Image */}
            <div className="w-full max-w-4xl mx-auto">
                <img
                    src={tmMainImage}
                    alt="Talent Management Team"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {executives.map((exec) => (
                        <div key={exec.name} className="flex flex-col items-center space-y-4">
                            <img
                                src={exec.image}
                                alt={exec.name}
                                className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
                            />
                            <h4 className="text-2xl font-bold text-foreground text-center">
                                {exec.name}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TalentManagementContent;
