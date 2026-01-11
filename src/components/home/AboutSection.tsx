import Particles from "../Particles";

const AboutSection = () => {
  return (
    <section className="min-h-screen py-20 bg-black relative overflow-hidden flex items-center">
      {/* Particles Background */}
      <div className="absolute inset-0">
        <Particles
          particleColors={['#FDB913', '#FDB913']}
          particleCount={300}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - About Section (60%) */}
          <div className="lg:w-3/5 w-full">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
              About Us
            </h2>
            <div className="space-y-6 text-white/90">
              <p className="text-xl md:text-2xl leading-relaxed text-justify opacity-0 animate-[fadeIn_1s_ease-in_0.3s_forwards]">
                Enactus Nottingham Malaysia is a dynamic student-led branch of the global Enactus network, based at the University of Nottingham Malaysia. The team empowers communities through entrepreneurial action, designing and implementing innovative projects that address social, economic, and environmental challenges.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-justify opacity-0 animate-[fadeIn_1s_ease-in_0.6s_forwards]">
                Rooted in creativity and leadership, Enactus Nottingham Malaysia equips its members with real-world experience while driving tangible, ethical impact aligned with the United Nations Sustainable Development Goals (SDGs).
              </p>
              {/* <div className="pt-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-bold"
                >
                  Learn More
                </Button>
              </div> */}
            </div>
          </div>

          {/* Right Column - Values (40%) */}
          <div className="lg:w-2/5 w-full flex flex-col justify-center space-y-8">
            <div className="text-white">
              <h3 className="text-7xl md:text-8xl leading-tight">
                <span className="font-bold" style={{ color: '#FDB913', WebkitTextStroke: '2px white' }}>EN</span>trepreneurial.
              </h3>
            </div>
            <div className="text-white">
              <h3 className="text-7xl md:text-8xl leading-tight">
                <span className="font-bold" style={{ color: '#FDB913', WebkitTextStroke: '2px white' }}>ACT</span>ion.
              </h3>
            </div>
            <div className="text-white">
              <h3 className="text-7xl md:text-8xl leading-tight">
                <span className="font-bold" style={{ color: '#FDB913', WebkitTextStroke: '2px white' }}>US</span>.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
