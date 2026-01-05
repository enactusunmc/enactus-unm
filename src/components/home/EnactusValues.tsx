const EnactusValues = () => {
  const values = [
    {
      letter: "EN",
      word: "Entrepreneurial",
      description: "We act with an entrepreneurial mindset, with a bias toward action and innovation."
    },
    {
      letter: "ACT",
      word: "Action",
      description: "We turn ideas into sustainable ventures that create positive impact."
    },
    {
      letter: "US",
      word: "Us",
      description: "We believe in the power of working together to create a better world."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card border-2 border-primary rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl font-bold text-primary mb-4">
                {value.letter}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {value.word}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnactusValues;
