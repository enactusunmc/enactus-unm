const SellOnNotts = () => {
  return (
    <>
      <section className="py-20 rounded-lg bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-foreground mb-8 text-center">
            SELL-ON-NOTTS
          </h1>
          <p className="text-xl text-center text-foreground/90 max-w-3xl mx-auto">
            A sustainable marketplace platform for the university community.
          </p>
        </div>
      </section>

      <section className="py-20 rounded-lg bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">About the Project</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Sell-on-Notts is our flagship project aimed at promoting sustainable consumption
                within the university community. We provide a platform for students to buy and sell
                second-hand items, reducing waste and supporting circular economy principles.
              </p>
              <p>
                Through this initiative, we help students save money while contributing to
                environmental sustainability and fostering a culture of responsible consumption.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellOnNotts;
