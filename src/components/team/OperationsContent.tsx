import TeamMember from "@/components/team/TeamMember";

// Import EcoNow images
import econowMainImage from "@/assets/team/ops/econow/main.avif";
import econowOmImage from "@/assets/team/ops/econow/om.avif";
import econowAomImage from "@/assets/team/ops/econow/aom.avif";

// Import NoteBook images
import notebookMainImage from "@/assets/team/ops/notebook/main.avif";
import notebookOmImage from "@/assets/team/ops/notebook/om.avif";
import notebookAomImage from "@/assets/team/ops/notebook/aom.avif";

// Import Events images
import eventsMainImage from "@/assets/team/ops/events/main.avif";
import eventsOcImage from "@/assets/team/ops/events/oc.avif";
import eventsVocImage from "@/assets/team/ops/events/voc.avif";

import placeHolder from "/placeholder.png";

const OperationsContent = () => {
    const econowTeam = [
        {
            name: "Lam Wei Heng",
            title: "Operation Manager Project Econow",
            description: "",
            image: econowOmImage
        },
        {
            name: "Cheong Zhe Yi",
            title: "Assistant Operation Manager Project Econow",
            description: "",
            image: econowAomImage
        }
    ];

    const notebookTeam = [
        {
            name: "Kiing Sin Yee",
            title: "Operation Manager Project Notebook",
            description: "",
            image: notebookOmImage
        },
        {
            name: "Jacqueline Teo Zhi Qi",
            title: "Assistant Operation Manager Project Notebook",
            description: "",
            image: notebookAomImage
        },
        {
            name: "Ho Yvonne",
            title: "Marketing Manager Project Notebook",
            description: "",
            image: placeHolder
        }
    ];

    const eventsTeam = [
        {
            name: "Lew Xin Yu",
            title: "Organizing Chairperson",
            description: "",
            image: eventsOcImage
        },
        {
            name: "Tan Qiao Yan",
            title: "Vice Organizing Chairperson",
            description: "",
            image: eventsVocImage
        }
    ];

    return (
        <div className="space-y-24">
            {/* EcoNow Section */}
            <div className="space-y-16">
                <h3 className="text-5xl font-bold text-center text-foreground">
                    EcoNow
                </h3>
                <div className="w-full max-w-4xl mx-auto">
                    <img
                        src={econowMainImage}
                        alt="EcoNow Team"
                        className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
                    />
                </div>
                <div className="space-y-16">
                    {econowTeam.map((member, index) => (
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

            {/* NoteBook Section */}
            <div className="space-y-16">
                <h3 className="text-5xl font-bold text-center text-foreground">
                    NoteBook
                </h3>
                <div className="w-full max-w-4xl mx-auto">
                    <img
                        src={notebookMainImage}
                        alt="NoteBook Team"
                        className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
                    />
                </div>
                <div className="space-y-16">
                    {notebookTeam.map((member, index) => (
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

            {/* Events Section */}
            <div className="space-y-16">
                <h3 className="text-5xl font-bold text-center text-foreground">
                    Events
                </h3>
                <div className="w-full max-w-4xl mx-auto">
                    <img
                        src={eventsMainImage}
                        alt="Events Team"
                        className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
                    />
                </div>
                <div className="space-y-16">
                    {eventsTeam.map((member, index) => (
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

        </div>
    );
};

export default OperationsContent;
