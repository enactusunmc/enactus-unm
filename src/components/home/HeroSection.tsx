import heroBanner from "@/assets/hero_banner.avif";

// Letter geometry definitions
const LETTER_GEOMETRY: Record<string, { points: string; dots: number[][] }> = {
  E: {
    points: "2,0 0,0 0,2 1.5,2 0,2 0,4 2,4",
    dots: [[2, 0], [0, 0], [0, 2], [1.5, 2], [0, 4], [2, 4]]
  },
  N: {
    points: "0,4 0,0 2,4 2,0",
    dots: [[0, 4], [0, 0], [2, 4], [2, 0]]
  },
  A: {
    points: "0,4 1,0 2,4 1.5,2.5 0.5,2.5",
    dots: [[0, 4], [1, 0], [2, 4], [1.5, 2.5], [0.5, 2.5]]
  },
  C: {
    points: "2,3 2,4 0,4 0,0 2,0 2,1",
    dots: [[2, 3], [2, 4], [0, 4], [0, 0], [2, 0], [2, 1]]
  },
  T: {
    points: "0,0 2,0 1,0 1,4",
    dots: [[0, 0], [2, 0], [1, 0], [1, 4]]
  },
  U: {
    points: "0,0 0,4 2,4 2,0",
    dots: [[0, 0], [0, 4], [2, 4], [2, 0]]
  },
  S: {
    points: "2,0 0,0 0,2 2,2 2,4 0,4",
    dots: [[2, 0], [0, 0], [0, 2], [2, 2], [2, 4], [0, 4]]
  }
};

// Neon colors for each letter
const NEON_COLORS = [
  // '#2E64FE', // Blue
  '#FF8000', // Orange
  // '#B404AE', // Purple
  // '#FF0000', // Red
  // '#10B981', // Green
  // '#06B6D4', // Cyan
  // '#EC4899'  // Pink
];

const HeroSection = () => {
  const text = "ENACTUS";

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
            <div className="constellation-container">
              {text.split('').map((char, index) => {
                const shape = LETTER_GEOMETRY[char];
                const color = NEON_COLORS[index % NEON_COLORS.length];

                if (!shape) return null;

                return (
                  <div
                    key={index}
                    className="constellation-letter"
                    style={{
                      '--neon-color': color,
                      '--delay': `${index * 0.2}s`
                    } as React.CSSProperties}
                  >
                    <svg viewBox="-0.5 -0.5 3 6">
                      <polyline
                        points={shape.points}
                        className="constellation-line"
                      />

                      {shape.dots.map((dot, i) => (
                        <circle
                          key={i}
                          cx={dot[0]}
                          cy={dot[1]}
                          r="0.15"
                          className="constellation-dot"
                        />
                      ))}
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-xl md:text-2xl text-primary mb-12 font-medium tracking-wide">
            STUDENT ORGANISATION ON SOCIAL ENTERPRISE
          </p>

        </div>
      </div>

      <style>{`
        .constellation-container {
          display: flex;
          gap: 5px;
          justify-content: center;
          align-items: center;
        }

        .constellation-letter {
          width: 35px;
          height: 100px;
        }

        @media (min-width: 640px) {
          .constellation-letter {
            width: 45px;
            height: 130px;
          }
          .constellation-container {
            gap: 6px;
          }
        }

        @media (min-width: 768px) {
          .constellation-letter {
            width: 60px;
            height: 180px;
          }
          .constellation-container {
            gap: 8px;
          }
        }

        @media (min-width: 1024px) {
          .constellation-letter {
            width: 75px;
            height: 220px;
          }
          .constellation-container {
            gap: 10px;
          }
        }

        .constellation-letter svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .constellation-line {
          fill: none;
          stroke-width: 0.15;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .constellation-dot {
          stroke-width: 0.05;
          fill: none;
        }

        .constellation-line, .constellation-dot {
          animation: neonCycle 6s infinite;
          animation-delay: var(--delay);
        }

        @keyframes neonCycle {
          0%, 15% {
            stroke: rgba(255,255,255,0.3);
            filter: drop-shadow(0 0 1px rgba(255,255,255,0.5));
            opacity: 0.5;
          }
          
          25%, 85% {
            stroke: var(--neon-color);
            opacity: 1;
            filter: 
              drop-shadow(0 0 1px white)
              drop-shadow(0 0 3px var(--neon-color))
              drop-shadow(0 0 8px var(--neon-color));
          }
          
          95%, 100% {
            stroke: rgba(255,255,255,0.3);
            filter: drop-shadow(0 0 1px rgba(255,255,255,0.5));
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
