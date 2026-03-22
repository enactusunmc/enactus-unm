import TeamMember from "@/components/team/TeamMember";

// Import images
import ermMainImage from "@/assets/team/erm/main.avif";
import ermHeadImage from "@/assets/team/erm/erm_head.avif";
import ermImage1 from "@/assets/team/erm/erm1.avif";
import ermImage2 from "@/assets/team/erm/erm2.avif";
import placeHolder from "/placeholder.png";

const ExternalRelationsContent = () => {
    const teamMembers = [
        {
            name: "Lee Mhing Zheh",
            title: "External Relation Manager Head",
            description: "",
            image: ermHeadImage
        },
        {
            name: "Mikaeel Naeem Kamarul Nizam",
            title: "External Relation Manager",
            description: "",
            image: ermImage1
        },
        {
            name: "Goay Ying Xin",
            title: "External Relation Manager",
            description: "",
            image: ermImage2
        },

        {
            name: "Roshini D.Ravichandran",
            title: "External Relation Manager",
            description: "",
            image: placeHolder
        },
    ];

    return (
        <div className="space-y-16">
            {/* Main ERM Image */}
            <div className="w-full max-w-4xl mx-auto">
                <img
                    src={ermMainImage}
                    alt="External Relations Team"
                    className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
                />
            </div>

            {/* Team Members */}
            <div className="space-y-16">
                {teamMembers.map((member, index) => (
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

export default ExternalRelationsContent;
