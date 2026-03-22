import TeamMember from "@/components/team/TeamMember";

// Import images
import directorImage from "@/assets/team/mkt/director.avif";
import asstDirectorImage from "@/assets/team/mkt/asst_director.avif";
import publicityImage from "@/assets/team/mkt/exec1.avif";
import creativityImage from "@/assets/team/mkt/exec2.avif";
import digitalMarketingImage from "@/assets/team/mkt/exec3.avif";
import socialMediaImage from "@/assets/team/mkt/socmed.avif";
import mktMainImage from "@/assets/team/mkt/main.avif";

const MarketingContent = () => {
    const members = [
        {
            name: "Sunay Nath",
            title: "Marketing Director",
            description: "",
            image: directorImage
        },
        {
            name: "Nur Fatimah Az-zahraa Binti Mohd. Nasir",
            title: "Marketing Assistant Director",
            description: "",
            image: asstDirectorImage
        },
        {
            name: "Bernie Lee Zheng Yang",
            title: "Marketing Publicity Executive",
            description: "",
            image: publicityImage
        },
        {
            name: "Chloe Ang Zhen Yin",
            title: "Marketing Creativity Executive",
            description: "",
            image: creativityImage
        },
        {
            name: "Lee Wei Li",
            title: "Digital Marketing Executive",
            description: "",
            image: digitalMarketingImage
        },
        {
            name: "Ryanjit Singh Aulakh",
            title: "Social Media Manager",
            description: "",
            image: socialMediaImage
        }
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

            {/* Team Members */}
            <div className="space-y-16">
                {members.map((member, index) => (
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
        </div>
    );
};

export default MarketingContent;
