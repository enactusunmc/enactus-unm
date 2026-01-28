import Particles from "../Particles";
import CircularText from "../CircularText";

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
          <div className=" lg:w-2/5 w-full mx-7 flex flex-col justify-center space-y-5">
            <div className="flex justify-center items-center mt-8 mb-12">
              <CircularText
                text="ENtrepreneurial • ACTion • US • "
                onHover="speedUp"
                spinDuration={20}
                radius={120}
                fontSize={42}
                className="text-primary"
                highlightColor="#FDB913"
                defaultColor="white"
                highlightWords={['EN', 'ACT', 'US']}
              />
            </div>

          </div>

          {/* Right Column - Values (40%) */}
          <div className="px-7 lg:w-3/5 w-80%">
            <h2 className="text-4xl text-center md:text-5xl font-bold text-white mb-8 animate-fade-in">
              About Us
            </h2>
            <div className="space-y-6 text-white/90">
              <p className="text-lg md:text-xl leading-relaxed text-justify opacity-0 animate-[fadeIn_1s_ease-in_0.3s_forwards]">
                Enactus Nottingham Malaysia is a dynamic student-led branch of the global Enactus network, based at the University of Nottingham Malaysia. The team empowers communities through entrepreneurial action, designing and implementing innovative projects that address social, economic, and environmental challenges.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-justify opacity-0 animate-[fadeIn_1s_ease-in_0.6s_forwards]">
                Rooted in creativity and leadership, Enactus Nottingham Malaysia equips its members with real-world experience while driving tangible, ethical impact aligned with the United Nations Sustainable Development Goals (SDGs).
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
