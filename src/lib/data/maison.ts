import { Project } from '../types';
import maisonLogo from "@/assets/logos/maison.jpeg";
import maison1_1 from "@/assets/projects/maison/maison1_1.png";
import maison1_2 from "@/assets/projects/maison/maison1_2.png";
import maisonMerch from "@/assets/projects/maison/maisonMerch.png";

export const maisonData: Project = {
    title: 'Maison',
    logo: maisonLogo,
    sectionHeadings: {
        story: 'About Us',
        events: 'Check Us Out'
    },
    colorTheme: {
        color: '#d8c5a6'
    },
    description: 'This project proposes the development and sale of merchandise designed in alignment with Enactus operation projects. The merchandise will serve as both a sustainable fundraising mechanism and a promotional tool, showcasing the objectives and impact of Enactus’ initiatives to the UNM student community. By integrating project themes into the merchandise, we aim to foster stronger awareness, engagement, and support among students while generating continuous funds to sustain Enactus operations. This approach ensures financial stability while reinforcing our commitment to innovation for social entrepreneurship.',
    logoSize: '200px',
    events: [
        {
            title: 'Our Merchandise',
            description: 'Something Something',
            images: [maison1_1, maison1_2, maisonMerch]
        },
    ],
    instagram: 'maison.enactus'
};