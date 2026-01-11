import TeamMember from "@/components/TeamMember";

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

// Import ERM images
import ermMainImage from "@/assets/team/ops/erm/main.avif";
import erm1Image from "@/assets/team/ops/erm/erm1.avif";
import erm2Image from "@/assets/team/ops/erm/erm2.avif";

const OperationsContent = () => {
    const econowTeam = [
        {
            name: "Celine Ling",
            title: "Operations Manager",
            description: "Joining Enactus for the first year was one of the best decisions I've ever made, which is why I'm thrilled to return for my second year, now taking on the role of Operations Manager for Project EcoNow! This experience has challenged and empowered me to grow both personally and professionally, allowing me to gain valuable hands-on experience in social entrepreneurship. Through EcoNow, I've discovered the power of giving and receiving - serving the community and making a positive and meaningful social impact to the best of our ability.",
            image: econowOmImage
        },
        {
            name: "Christine Yee",
            title: "Assistant Operations Manager",
            description: "I am thrilled to continue my journey with EcoNow as the Assistant Operations Manager. This role has been incredibly enriching, allowing me to develop leadership, teamwork, problem-solving, and project management skills. One of the most exciting aspects has been participating in the UCSE and USEC competitions—an entirely new experience that has challenged me to learn and grow. What makes me stay in Enactus isn't just the personal growth—it's also the people. Being surrounded by passionate and driven individuals who share a common vision for change is truly motivating.",
            image: econowAomImage
        }
    ];

    const notebookTeam = [
        {
            name: "Charmaine Cheah",
            title: "Operations Manager",
            description: "As a second-year member of Enactus UNM and in my first year as Operations Manager for Project Notebook, stepping into this role has been one of the best decisions I've made in my uni life. It has given me the opportunity to apply my organizational and problem-solving skills while making a tangible impact on underprivileged students. Managing logistics, coordinating resources, and ensuring smooth operations have been challenging and rewarding. This experience has not only strengthened my leadership abilities but also deepened my passion for social entrepreneurship and community empowerment. Moving forward, I aim to expand Project Notebook's reach and sustainability, creating lasting change through education.",
            image: notebookOmImage
        },
        {
            name: "Jasper Teo",
            title: "Assistant Operations Manager",
            description: "As one of the Operation Managers of Project Notebook, I am committed to enhancing our impact by streamlining project execution and fostering a collaborative environment for our team. My focus is on strengthening our initiatives, expanding partnerships, and ensuring sustainable growth for Enactus UNM. With experience in student leadership and project coordination, I bring a strategic and structured approach to drive efficiency and innovation. My goal is to empower underprivileged children with entrepreneurial and STEAM skills, equipping them for a brighter future while aligning our efforts with Enactus' mission of social impact and sustainable change. Through this role, I also aim to refine my communication skills, ensuring more effective collaboration and leadership.",
            image: notebookAomImage
        }
    ];

    const eventsTeam = [
        {
            name: "Sunay Nath",
            title: "Organising Chairperson",
            description: "As the Organising Chairperson, one of my main objectives, not just in Events but within Enactus as a whole is to inspire our members, as well as other core members, to continue their journey with Enactus in the next academic year. From the moment I joined Enactus, I was welcomed by an incredibly supportive and friendly community. I hope to give back by promoting that same warmth and encouragement. Last semester was undoubtedly hectic, but thanks to my dedicated team and the efforts of everyone in Enactus, we successfully organized one of the most memorable and successful events at Nottingham. Now, as we step into a new semester, I am beyond excited to resume this journey once again. With this amazing team, I look forward to creating another impactful and successful event!",
            image: eventsOcImage
        },
        {
            name: "Chan Zhi Chen",
            title: "Vice Organising Chairperson",
            description: "Being the Vice Organizing Chairperson of the Events Team has been an incredibly enriching experience. It has allowed me to develop leadership, teamwork and problem-solving skills while organizing impactful events like Enactus x CCS Carnival. Collaborating with a team of passionate members who share a vision for social entrepreneurship has been truly inspiring. More importantly, I hope my dedicated team members will gain valuable insights and skills through this experience. With their passion and commitment, I have no doubt they will go on to create a more meaningful and memorable events that help raise awareness of social entrepreneurship in the future.",
            image: eventsVocImage
        }
    ];

    const ermTeam = [
        {
            name: "Ashlyn Yap",
            title: "External Relations Manager",
            description: "Serving as the Operations External Relations Manager was an invaluable learning journey that honed my communication and negotiation skills. One of the most impactful lessons I learned was how to face rejection. There were countless instances where I encountered setbacks in securing sponsors and vendors, but these challenges built my resilience and perseverance. The most rewarding moment came during the Enactus X CCS carnival, seeing the fruits of my efforts come to life. With approximately 30 vendors participating, it was incredibly fulfilling to reflect on how I first discovered their brands. Witnessing the impact of those connections made all the hard work worthwhile.",
            image: erm1Image
        },
        {
            name: "Chin Jiafu",
            title: "External Relations Manager",
            description: "I am honored to have the opportunity to serve as the Operations External Relations Manager. This position is not easy by any means—it takes courage to face rejections from externals and patience when dealing with them. However, this experience has taught me many valuable skills, such as entrepreneurship, communication, and problem-solving, making it all worthwhile. No regrets.",
            image: erm2Image
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

            {/* ERM Section */}
            <div className="space-y-16">
                <h3 className="text-5xl font-bold text-center text-foreground">
                    External Relations
                </h3>
                <div className="w-full max-w-4xl mx-auto">
                    <img
                        src={ermMainImage}
                        alt="External Relations Team"
                        className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
                    />
                </div>
                <div className="space-y-16">
                    {ermTeam.map((member, index) => (
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
