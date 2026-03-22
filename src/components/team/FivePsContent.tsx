import TeamMember from "@/components/team/TeamMember";

// Import images 
import ceoImage from "@/assets/team/5ps/ceo.avif";
import cooImage from "@/assets/team/5ps/coo.avif";
import cfoImage from "@/assets/team/5ps/cfo.avif";
import cmoImage from "@/assets/team/5ps/cmo.avif";
import cpoImage from "@/assets/team/5ps/cpo.avif";
import fivePsMainImage from "@/assets/team/5ps/main.avif";

const FivePsContent = () => {
    const teamMembers = [
        {
            name: "Christine Yee",
            title: "Chief Executive Officer",
            description: "",
            image: ceoImage
        },
        {
            name: "Celine Ling",
            title: "Chief Operations Officer",
            description: "",
            image: cooImage
        },

        {
            name: "Thashwin Kalithas",
            title: "Chief Marketing Officer",
            description: "",
            image: cmoImage
        },
        {
            name: "Lai Jun Yu",
            title: "Chief People Officer",
            description: "",
            image: cpoImage
        },
        {
            name: "Janson Wong",
            title: "Chief Finance Officer",
            description: "",
            image: cfoImage
        },
    ];

    return (
        <div className="space-y-16">
            {/* Main 5Ps Image */}
            <div className="w-full max-w-4xl mx-auto">
                <img
                    src={fivePsMainImage}
                    alt="5Ps Team"
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

export default FivePsContent;
