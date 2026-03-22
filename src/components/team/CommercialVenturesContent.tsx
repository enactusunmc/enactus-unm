import TeamMember from "@/components/team/TeamMember";

// Import images
import directorImage from "@/assets/team/cv/director.avif";
import asstDirectorImage from "@/assets/team/cv/asst_director.avif";
import cvMainImage from "@/assets/team/cv/main.avif";
import placeHolder from "/placeholder.png";

const CommercialVenturesContent = () => {
    const members = [
        {
            name: "Eurwyn",
            title: "Commercial Ventures Director",
            description: "",
            image: directorImage
        },
        {
            name: "Nur Umaira Nazihah Binti Muhamad Kamal",
            title: "Commercial Ventures Assistant Director",
            description: "",
            image: asstDirectorImage
        },
        {
            name: "Ainul Zahrah Zuyyin Binti Zuwislan",
            title: "Commercial Ventures Treasurer",
            description: "",
            image: placeHolder
        },
        {
            name: "Kayana Pembayun Mahendra",
            title: "Commercial Ventures Secretary",
            description: "",
            image: placeHolder
        },
        {
            name: "Wardah Ilyana Bt Zulkefly",
            title: "Commercial Ventures Sell on Notts Project Lead",
            description: "",
            image: placeHolder
        },
        {
            name: "Wan Azfar Imtiyaz Bin Wan Syahiduddin",
            title: "Assistant Marketing Manager",
            description: "",
            image: placeHolder
        }
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

export default CommercialVenturesContent;
