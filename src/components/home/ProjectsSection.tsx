import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Sell-on-Notts",
      description: "A sustainable marketplace platform for the university community",
      color: "bg-amber-100",
      icon: "🛍️"
    },
    {
      name: "NoteBook 2.0",
      description: "Empowering education through accessible learning resources",
      color: "bg-blue-100",
      icon: "📚"
    },
    {
      name: "EcoNow 2.0",
      description: "Environmental sustainability initiatives for a greener future",
      color: "bg-green-100",
      icon: "🌱"
    },
    {
      name: "Maison",
      description: "Supporting local artisans and preserving traditional crafts",
      color: "bg-purple-100",
      icon: "🎨"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
            Our Ongoing
          </p>
          <h2 className="text-5xl font-bold text-foreground">PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary"
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${project.color} rounded-lg flex items-center justify-center text-3xl mb-4`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2" size={18} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
