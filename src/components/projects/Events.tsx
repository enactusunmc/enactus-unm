import { Calendar } from "lucide-react";

const Events = () => {

  return (
    <>
      <section className="py-20 rounded-lg bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-foreground mb-8 text-center">
            EVENTS
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Join us in our upcoming events and activities.
          </p>
        </div>
      </section>

      <section className="py-20 rounded-lg bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">About the Project</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Lorem Ipsum
              </p>
              <p>
                Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
