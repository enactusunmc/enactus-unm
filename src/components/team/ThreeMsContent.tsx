import TeamMember from "@/components/TeamMember";

// Import images
import secretaryImage from "@/assets/team/3m/secretary.avif";
import emImage from "@/assets/team/3m/em.avif";
import treasurerImage from "@/assets/team/3m/treasurer.avif";
import threeMsMainImage from "@/assets/team/3m/main.avif";

const ThreeMsContent = () => {
    const teamMembers = [
        {
            name: "Ashlyn Yap",
            title: "Secretary",
            description: "As the secretary, my role was straightforward: organizing documents and streamlining communications. From sending emails and keeping Google Docs organized to hosting townhall meetings, these responsibilities formed the foundation of my work. Through this role, I developed invaluable skills such as time management, organization, and efficient resource utilization. What I enjoyed most about this experience was the opportunity to meet new people. Being part of a core team at university for the first time allowed me to connect with many inspiring individuals. Learning from their passion and dedication made this journey incredibly rewarding.",
            image: secretaryImage
        },
        {
            name: "Christine Yee",
            title: "Events Manager",
            description: "Being an Event Manager for Enactus UNM has been an enriching and fulfilling journey. I assisting the events team with matters related to the SA, ensuring that our events run smoothly and comply with necessary procedures. Through this role, I've gained valuable experience in event coordination, communication, and problem-solving. Beyond these, what truly makes this experience special is being part of the Enactus family. The supportive and passionate community has made every challenge feel like an opportunity for growth. Working alongside like-minded individuals who are driven to create meaningful impact has been incredibly rewarding.",
            image: emImage
        },
        {
            name: "Mandy Ng",
            title: "Treasurer",
            description: "As the Treasurer of Enactus UNM, I manage the finances to support our projects. This role has helped me improve my budgeting and planning skills while working with a great team. It's been a rewarding experience to help create positive change through ensuring our social entrepreneurship events run smoothly. Being part of Enactus UNM has also given me the chance to meet many amazing people and make great friends. Working together on projects has helped me learn from others, share ideas, and build strong connections. I'm really happy to be part of such a supportive and inspiring community.",
            image: treasurerImage
        }
    ];

    return (
        <div className="space-y-16">
            {/* Main 3Ms Image */}
            <div className="w-full max-w-4xl mx-auto">
                <img
                    src={threeMsMainImage}
                    alt="3Ms Team"
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

export default ThreeMsContent;
