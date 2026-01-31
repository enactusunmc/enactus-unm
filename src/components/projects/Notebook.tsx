const Notebook = () => {
  return (
    <>
      <section className="py-20 rounded-lg bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-foreground mb-8 text-center">
            Project Notebook
          </h1>
          <p className="text-xl text-center text-foreground/90 max-w-3xl mx-auto">
            Empowering education through accessible learning resources.
          </p>
        </div>
      </section>

      <section className="py-20 rounded-lg bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">About the Project</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Project Notebook focuses on bridging the educational gap by providing quality learning
                resources to underprivileged communities. We work to ensure that every student has
                access to the materials they need to succeed academically.
              </p>
              <p>
                Through partnerships with schools and community centers, we distribute educational
                materials and organize tutoring sessions to support students' learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notebook;
