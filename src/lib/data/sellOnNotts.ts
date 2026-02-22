import { Project } from '../types';
import sellOnNottsLogo from "@/assets/logos/son.avif";
import event1 from "@/assets/projects/son/son1.png";
import event2 from "@/assets/projects/son/son2.png";

export const sellOnNottsData: Project = {
    title: 'SELL-ON-NOTTS',
    logo: sellOnNottsLogo,
    sectionHeadings: {
        story: 'What We Do',
        events: 'Check us Out!'
    },
    colorTheme: {
        color: '#99b8ff'
    },
    description: 'Sell-On-Notts is a student-run resale platform under Enactus UNM that helps students buy and sell second-hand items in a convenient and secure way. It provides a hybrid marketplace, combining an online platform and a weekly physical booth at the University of Nottingham Malaysia. This initiative encourages sustainable consumption, reduces waste, and helps students declutter while earning extra cash.',
    logoSize: '150px',
    events: [
        {
            title: 'Weekly Resale Booth',
            description: 'Sell on Notts promotes reuse over waste by reselling pre-loved student items, reducing waste while creating meaningful opportunities for student entrepreneurship.',
            images: [event1]
        },
        {
            title: 'End-of-Year Clearance Sale',
            description: 'Our End-of-Year Clearance Sale gives pre-loved student items a final chance to be reused, offering affordable finds while reducing waste and closing the year sustainably.',
            images: [event2]
        }
    ],
    instagram: 'sell_on_notts'
};