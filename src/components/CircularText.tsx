import React, { useRef, useEffect } from 'react';

interface CircularTextProps {
    text: string;
    radius?: number;
    fontSize?: number;
    className?: string;
    spinDuration?: number;
    onHover?: 'pause' | 'speedUp' | 'reverse';
    highlightColor?: string;
    defaultColor?: string;
    highlightWords?: string[];
}

const CircularText: React.FC<CircularTextProps> = ({
    text,
    radius = 100,
    fontSize = 16,
    className = '',
    spinDuration = 20,
    onHover = 'pause',
    highlightColor = '#FDB913',
    defaultColor = 'white',
    highlightWords = []
}) => {
    const textRef = useRef<SVGTextPathElement>(null);
    const [isHovered, setIsHovered] = React.useState(false);

    // Function to determine if a character should be highlighted
    const getCharColor = (index: number) => {
        for (const word of highlightWords) {
            const wordIndex = text.indexOf(word);
            if (wordIndex !== -1 && index >= wordIndex && index < wordIndex + word.length) {
                return highlightColor;
            }
        }
        return defaultColor;
    };

    const characters = text.split('');
    const angleStep = 360 / characters.length;

    return (
        <div
            className={`inline-block ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <svg
                width={radius * 2}
                height={radius * 2}
                viewBox={`0 0 ${radius * 2} ${radius * 2}`}
                className="overflow-visible"
            >
                <defs>
                    <path
                        id="circlePath"
                        d={`
              M ${radius}, ${radius}
              m -${radius - 10}, 0
              a ${radius - 10},${radius - 10} 0 1,1 ${(radius - 10) * 2},0
              a ${radius - 10},${radius - 10} 0 1,1 -${(radius - 10) * 2},0
            `}
                    />
                </defs>

                <g
                    style={{
                        animation: isHovered
                            ? onHover === 'pause'
                                ? 'none'
                                : onHover === 'speedUp'
                                    ? `spin ${spinDuration / 2}s linear infinite`
                                    : `spin-reverse ${spinDuration}s linear infinite`
                            : `spin ${spinDuration}s linear infinite`,
                        transformOrigin: 'center',
                    }}
                >
                    <text
                        fontSize={fontSize}
                        fontWeight="bold"
                        letterSpacing="2"
                    >
                        <textPath
                            ref={textRef}
                            href="#circlePath"
                            startOffset="0%"
                        >
                            {characters.map((char, index) => (
                                <tspan key={index} fill={getCharColor(index)}>
                                    {char}
                                </tspan>
                            ))}
                        </textPath>
                    </text>
                </g>

                <style>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          @keyframes spin-reverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
        `}</style>
            </svg>
        </div>
    );
};

export default CircularText;
