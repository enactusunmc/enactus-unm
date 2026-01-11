import TeamMember from "@/components/TeamMember";

// Import images
import directorImage from "@/assets/team/cv/director.avif";
import asstDirectorImage from "@/assets/team/cv/asst_director.avif";
import exec1Image from "@/assets/team/cv/exec1.avif";
import cvMainImage from "@/assets/team/cv/main.avif";

const CommercialVenturesContent = () => {
    const leadership = [
        {
            name: "Xin Qi Lim",
            title: "Director",
            description: "Hi! I'm Clarisse, the Director of Commercial Ventures, and my passion lies in doing meaningful social work for communities in need. I'm proud to be co-leading an amazing team of people who work tirelessly to ensure that Enactus has sufficient funds to carry out all its social entrepreneurial projects. My previous experiences in various treasury departments throughout my academic career have equipped me with the skills to drive sustainable revenue streams and build strategic partnerships. I'm incredibly honoured to have the opportunity to contribute to Enactus's growth and to help foster a culture of innovation and social responsibility!",
            image: directorImage
        },
        {
            name: "Fiona Ting Xin",
            title: "Assistant Director",
            description: "Joining Enactus in my first year helped me gain a lot of hands-on experience. I went from having zero leadership, teamwork skills and communication skills to learning from my teammates, contributing and seeking funds for Enactus' social entrepreneurship project. Proud to have this opportunity to become assistant director in Commercial Venture Family. Hope Enactus continues to grow, creating a lasting impact on social entrepreneurship from university initiatives to the local community.",
            image: asstDirectorImage
        }
    ];

    const executives = [
        { name: "Executive Member", image: exec1Image }
    ];

    return (
        <div className="space-y-16">
            {/* Main CV Image */}
            <div className="w-full max-w-4xl mx-auto">
                <img
                    src={cvMainImage}
                    alt="Commercial Ventures Team"
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

export default CommercialVenturesContent;
