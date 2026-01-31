import { useEffect, useState, useRef } from "react";
import dragonImage from "/dragon.png";

const Dragon = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const dragonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Calculate total scrollable distance
            const totalScrollable = documentHeight - windowHeight;

            // Calculate scroll percentage (0 to 1)
            const scrollPercent = Math.min(scrollTop / totalScrollable, 1);

            // The dragon should complete its journey and disappear at the end of the page
            const normalizedProgress = scrollPercent;

            setScrollProgress(normalizedProgress);

            // Determine flip state based on position
            // Dragon travels right -> hits edge -> flips -> travels left -> hits edge -> flips -> etc.
            const screenWidth = window.innerWidth;
            const dragonWidth = 400; // Much bigger dragon
            const travelDistance = screenWidth - dragonWidth - 40; // Available travel distance

            // Number of complete passes (right to left or left to right)
            const numPasses = 2; // Dragon will do 2 passes before disappearing
            const progressPerPass = 1 / numPasses;

            const currentPass = Math.floor(normalizedProgress / progressPerPass);
            const isGoingLeft = currentPass % 2 === 1;

            setIsFlipped(isGoingLeft);

            // Fade out the dragon during the last 10% of its journey
            if (normalizedProgress > 0.9) {
                const fadeProgress = (normalizedProgress - 0.9) / 0.1;
                setOpacity(1 - fadeProgress);
            } else {
                setOpacity(1);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Calculate horizontal position based on scroll progress
    const calculatePosition = () => {
        const screenWidth = window.innerWidth;
        const dragonWidth = 400;
        const padding = 20;
        const travelDistance = screenWidth - dragonWidth - padding * 2;

        const numPasses = 2;
        const progressPerPass = 1 / numPasses;

        const currentPass = Math.floor(scrollProgress / progressPerPass);
        const passProgress = (scrollProgress % progressPerPass) / progressPerPass;

        let xPosition;
        if (currentPass % 2 === 0) {
            // Moving from right to left
            xPosition = screenWidth - dragonWidth - padding - (passProgress * travelDistance);
        } else {
            // Moving from left to right
            xPosition = padding + (passProgress * travelDistance);
        }

        return xPosition;
    };

    const xPosition = calculatePosition();

    // Rotation: When facing left (not flipped), point downward-left (-30deg)
    // When facing right (flipped), point downward-right (need to flip both the image AND rotate it)
    // Since scaleX(-1) flips horizontally, we need to negate the rotation for natural orientation
    const baseRotation = isFlipped ? -30 : -30;

    // Don't render if fully faded out
    if (opacity <= 0) return null;

    return (
        <div
            ref={dragonRef}
            className="fixed z-50 pointer-events-none"
            style={{
                top: "50%",
                left: `${xPosition}px`,
                transform: `translateY(-50%) ${isFlipped ? "scaleX(-1)" : "scaleX(1)"} rotate(${baseRotation}deg)`,
                opacity: opacity,
                transition: "transform 0.3s ease-out",
            }}
        >
            <div className="dragon-hover">
                <img
                    src={dragonImage}
                    alt="Dragon"
                    className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-2xl"
                    style={{
                        filter: "drop-shadow(0 0 20px rgba(253, 185, 19, 0.5))",
                    }}
                />
            </div>

            <style>{`
        @keyframes dragonHover {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(2deg);
          }
          50% {
            transform: translateY(-5px) rotate(0deg);
          }
          75% {
            transform: translateY(-20px) rotate(-2deg);
          }
        }
        
        @keyframes wingFlap {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.95);
          }
        }
        
        .dragon-hover {
          animation: dragonHover 3s ease-in-out infinite;
        }
        
        .dragon-hover img {
          animation: wingFlap 0.5s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default Dragon;
