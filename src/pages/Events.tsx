import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Enactus Thursday",
      date: "Every Thursday",
      description: "Weekly gathering for updates, workshops, and team bonding activities.",
      time: "6:00 PM - 8:00 PM"
    },
    {
      title: "Community Outreach",
      date: "Monthly",
      description: "Regular visits to our project communities for implementation and monitoring.",
      time: "Varies"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-foreground mb-8 text-center">
              EVENTS
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Join us in our upcoming events and activities.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="p-8 bg-card border-2 border-primary rounded-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="mr-2" size={18} />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
