import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const UpdatesSection = () => {
  const updates = [
    {
      title: "Enactus National Competition 2024",
      date: "December 15, 2024",
      description: "Our team represented UNM at the national competition, showcasing our innovative projects.",
      image: "🏆"
    },
    {
      title: "Community Outreach: Kg. Sungai Lui",
      date: "November 28, 2024",
      description: "Successful community engagement project bringing sustainable solutions to local communities.",
      image: "🤝"
    },
    {
      title: "Workshop: Social Entrepreneurship 101",
      date: "November 10, 2024",
      description: "Interactive workshop attended by 50+ students learning about social enterprise fundamentals.",
      image: "💡"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
            Latest
          </p>
          <h2 className="text-5xl font-bold text-foreground">UPDATES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {updates.map((update, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary overflow-hidden"
            >
              <div className="bg-primary h-48 flex items-center justify-center text-6xl">
                {update.image}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar size={16} className="mr-2" />
                  {update.date}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {update.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {update.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
