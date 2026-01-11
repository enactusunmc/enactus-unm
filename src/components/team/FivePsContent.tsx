import TeamMember from "@/components/TeamMember";

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
            name: "Jimmy Koo",
            title: "Chief Executive Officer",
            description: "It has been an honor to lead this incredible team of highly competent and passionate individuals in our Enactus family. I deeply believe in social entrepreneurship and, more importantly, in the power of this team. The journey has been both challenging and memorable, filled with moments of growth, collaboration, and achievement. Through this experience, I have learned more than words can express. 'Givers gain'—a principle that truly resonates with me—has shaped my time in this role. To those who have been part of this community, I believe you understand the depth of this meaning. For those yet to join, I can only say: embrace the journey, and you will see how transformative it can be.",
            image: ceoImage
        },
        {
            name: "Celeste Ritchell",
            title: "Chair Operations Officer",
            description: "It's an honor to lead the operations team, overseeing three distinct projects that promote social entrepreneurship and align with various SDG goals. In this role, I am committed to driving impactful initiatives that give back to society, create meaningful change in the lives of those in need, and support our team members in achieving their personal and professional growth. My goal is to ensure that every member not only learns and develops but also understands how even the smallest actions contribute to a greater impact, fostering a shared vision and purpose, while giving back to the community. 'I can walk fast alone, but to go far, I need a team by my side.'",
            image: cooImage
        },

        {
            name: "Jamie Azharin",
            title: "Chief Marketing Officer",
            description: "Becoming CMO has been the best decision I've made during my time here in Enactus. From strategizing impactful campaigns to enhancing Enactus's marketing, I've gained invaluable leadership, communication, and innovation skills. My goal has always been to elevate our Marketing Department, improving our brand awareness and giving my members a place where they can learn and improve themselves too. Through my leadership and support to my members, I'm proud to have set a new standard that will set future marketing department to success. If time ever rewinds, I'd choose this path again and again—no regrets. Forever stress-free! (winks)",
            image: cmoImage
        },
        {
            name: "Lily Zheng",
            title: "Chief People Officer",
            description: "Starting out with an interest in Operations only and simply wanting to make a positive impact through the initiatives that Enactus offered, I grew to love the big community I found and the members we call Enactus Family. My aim was to give every member a fulfilling and memorable experience full of growth and self development as I had. I have grown to deeply value my 3 years of constantly rediscovering my strengths and weaknesses, developing new skills while working alongside the most capable people. I look forward to seeing Enactus continue to grow and thrive, and secretly hope to have proved that intro-verts can also be great in talent management :)",
            image: cpoImage
        },
        {
            name: "Jason Kong",
            title: "Chief Finance Officer",
            description: "Although I never planned or imagined becoming the CFO of Enactus, I could say it was a thrilling experience in my journey in Enactus. Overseeing two revenue-generating projects for Enactus, I deeply appreciate how it feels growing throughout this time period while managing both teams. I have learnt, practiced and most importantly adapted to multiple shortcomings, and am extremely proud yet grateful of the painful and valuable lessons that dawned on me. While my goal remains the same- to sustain Enactus and its impactful activities through our revenue-generating initiatives, I have also honed my communication and critical-thinking skills, as well as providing a platform for my members to learn and expose themselves to continuous, rigorous and sustainable projects. The process of learning is never alone, and Enactus has been a platform for my members and I to make mistakes, grow and commemorate. Whatever doesn't kill you, makes you stronger.",
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
