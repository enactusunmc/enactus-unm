import { Project } from '../types';
import econowLogo from "@/assets/logos/econow.avif";

export const econowData: Project = {
    title: 'EcoNow',
    logo: econowLogo,
    sectionHeadings: {
        story: 'Our Mission',
        events: 'Our Events'
    },
    colorTheme: {
        color: '#af9a83'
    },
    description: 'Empowering underprivileged communities through eco-friendly, handcrafted products.',
    logoSize: '300px',
    events: [
        {
            description: 'Lorem Ipsum',
            images: [econowLogo]
        },
    ],
    instagram: 'econow.my'
};