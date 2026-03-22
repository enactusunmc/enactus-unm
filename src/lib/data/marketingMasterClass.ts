import { Project } from '../types';
import marketingLogo from "@/assets/logos/mkt.png";

import marketing1_1 from "@/assets/projects/marketing/mmc1.png";
import marketing1_2 from "@/assets/projects/marketing/mmc2.png";
import marketing1_3 from "@/assets/projects/marketing/mmc3.png";
import marketing1_4 from "@/assets/projects/marketing/mmc4.png";

export const marketingMasterClassData: Project = {
    title: 'Marketing Master Class',
    logo: marketingLogo,
    sectionHeadings: {
        story: 'Who We Are',
        events: 'Marketing Master Class'
    },
    colorTheme: {
        color: '#d4d4d4'
    },
    description: 'Marketing Department is dedicated to promoting our projects and engaging with our audience. We create compelling content, manage our social media presence, and organize events to raise awareness about our initiatives. Our goal is to effectively communicate our mission and impact, while fostering a strong connection with our community.',
    logoSize: '200px',
        events: [
        {
            title: 'Marketing Master Class',
            description: 'The Marketing Masterclass was an educational event designed to introduce participants to the fundamentals of marketing. During the session, attendees learned about key concepts such as the 7Ps of Marketing, including Product, Price, Place, Promotion, and People, and how these elements contribute to effective marketing strategies. Participants were also given the opportunity to apply these theories in practice through scenario-based activities, where they developed marketing ideas for a product or situation. This allowed them to better understand how marketing concepts can be used in real-world contexts.',
            images: [marketing1_1, marketing1_2, marketing1_3, marketing1_4]
        },
    ],
    instagram: 'enactusunm'
};