import { Project } from '../types';
import eventsLogo from "@/assets/logos/events.avif";
import i4i1 from "@/assets/projects/events/i4i1.avif";
import i4i2 from "@/assets/projects/events/i4i2.avif";

export const eventsData: Project = {
    title: 'EVENTS',
    logo: eventsLogo,
    sectionHeadings: {
        story: 'About Us',
        events: 'What We Achieved'
    },
    colorTheme: {
        color: '#f6cd0a'
    },
    description: 'Project Under Operations',
    logoSize: '300px',
    events: [
        {
            title: 'Innovate for Impact',
            description: 'The Enactus UNM Events Team comprises passionate and driven students committed to creating meaningful community empowerment projects through impactful events, both on and off campus. The team focuses on effective logistics, stakeholder coordination, and seamless event execution to ensure high engagement and positive outcomes. \n\n Previously, we organised flagship events such as the Innovate For Impact, which is a pitching competition designed to empower participants to develop innovative solutions that address real-world social and environmental challenges. The event provides a platform for ideas to be presented, refined, and evaluated by industry professionals, fostering creativity, entrepreneurship, and impact-driven innovation.',
            images: [i4i1, i4i2]
        }
    ],
    instagram: 'enactiveunm'
};