import { Card, CardContent } from "@/components/ui/card";
import sonImage from "@/assets/logos/son.avif";
import notebookImage from "@/assets/logos/notebook.avif";
import econowImage from "@/assets/logos/econow.avif";
import mktImage from "@/assets/logos/mkt.png";
import evtImage from "@/assets/logos/events.jpeg";
import maisonImage from "@/assets/logos/maison.jpeg";
import FaultyTerminal from "@/components/animations/FaultyTerminal";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Marketing Master Class",
      image: mktImage,
      bgColor: "bg-[#FFFFFF]",
      borderColor: "border-black",
    },
    {
      name: "Maison",
      image: maisonImage,
      bgColor: "bg-[#FFFFFF]",
      borderColor: "border-black"
    },
    {
      name: "Events",
      image: evtImage,
      bgColor: "bg-[#F5F5DC]",
      borderColor: "border-gray-600",
    },
    {
      name: "Econow",
      image: econowImage,
      bgColor: "bg-[#cfffda]",
      borderColor: "border-gray-600"
    },
    {
      name: "Notebook",
      image: notebookImage,
      bgColor: "bg-[#C9BDA8]",
      borderColor: "border-gray-600"
    },
    {
      name: "Sell on Notts",
      image: sonImage,
      bgColor: "bg-[#073879]",
      borderColor: "border-gray-600"
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <FaultyTerminal
          tint="#f8ffc2"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
            Our Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`${project.bgColor} border-4 ${project.borderColor} rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer`}
              >
                <CardContent className="p-0 flex items-center justify-center min-h-[180px] md:min-h-[280px]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <h3 className="text-5xl font-semibold text-black">{project.name}</h3>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
