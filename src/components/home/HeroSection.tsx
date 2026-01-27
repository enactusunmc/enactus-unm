import heroBanner from "@/assets/hero_banner.avif";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-bottom"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/50 to-foreground/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="h-56 md:h-64 flex items-center justify-center">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold tracking-wider animate-fade-in flex">
              <span className="neon-letter" data-color="orange">E</span>
              <span className="neon-letter" data-color="orange">N</span>
              <span className="neon-letter" data-color="orange">A</span>
              <span className="neon-letter" data-color="orange">C</span>
              <span className="neon-letter" data-color="orange">T</span>
              <span className="neon-letter" data-color="orange">U</span>
              <span className="neon-letter" data-color="orange">S</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-primary mb-12 font-medium tracking-wide">
            STUDENT ORGANISATION ON SOCIAL ENTERPRISE
          </p>

        </div>
      </div>

      <style>{`
        .neon-letter {
          animation: neon-flicker 1.5s infinite alternate;
          -webkit-text-stroke: 0.8px #000000;
          transform: scaleY(1.3) scaleX(1.0);
          display: inline-block;
        }

        @media (min-width: 640px) {
          .neon-letter {
            -webkit-text-stroke: 1px #000000;
            transform: scaleY(1.4) scaleX(1.0);
          }
        }

        @media (min-width: 768px) {
          .neon-letter {
            -webkit-text-stroke: 1.2px #000000;
            transform: scaleY(1.5) scaleX(1.0);
          }
        }

        .neon-letter[data-color="blue"] {
          color: #000000;
          text-shadow:
            0 0 7px #3B82F6,
            0 0 10px #3B82F6,
            0 0 21px #3B82F6,
            0 0 42px #3B82F6,
            0 0 82px #3B82F6,
            0 0 92px #3B82F6,
            0 0 102px #3B82F6,
            0 0 151px #3B82F6;
        }

        .neon-letter[data-color="orange"] {
          color: #000000;
          text-shadow:
            0 0 7px #FB923C,
            0 0 10px #FB923C,
            0 0 21px #FB923C,
            0 0 42px #FB923C,
            0 0 82px #FB923C,
            0 0 92px #FB923C,
            0 0 102px #FB923C,
            0 0 151px #FB923C;
        }

        .neon-letter[data-color="purple"] {
          color: #000000;
          text-shadow:
            0 0 7px #C026D3,
            0 0 10px #C026D3,
            0 0 21px #C026D3,
            0 0 42px #C026D3,
            0 0 82px #C026D3,
            0 0 92px #C026D3,
            0 0 102px #C026D3,
            0 0 151px #C026D3;
        }

        .neon-letter[data-color="red"] {
          color: #000000;
          text-shadow:
            0 0 7px #EF4444,
            0 0 10px #EF4444,
            0 0 21px #EF4444,
            0 0 42px #EF4444,
            0 0 82px #EF4444,
            0 0 92px #EF4444,
            0 0 102px #EF4444,
            0 0 151px #EF4444;
        }

        .neon-letter[data-color="green"] {
          color: #000000;
          text-shadow:
            0 0 7px #10B981,
            0 0 10px #10B981,
            0 0 21px #10B981,
            0 0 42px #10B981,
            0 0 82px #10B981,
            0 0 92px #10B981,
            0 0 102px #10B981,
            0 0 151px #10B981;
        }

        .neon-letter[data-color="cyan"] {
          color: #000000;
          text-shadow:
            0 0 7px #06B6D4,
            0 0 10px #06B6D4,
            0 0 21px #06B6D4,
            0 0 42px #06B6D4,
            0 0 82px #06B6D4,
            0 0 92px #06B6D4,
            0 0 102px #06B6D4,
            0 0 151px #06B6D4;
        }


        @keyframes neon-flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
            filter: brightness(1.2);
          }
          20%, 24%, 55% {        
            opacity: 0.8;
            filter: brightness(0.9);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
