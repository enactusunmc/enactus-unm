import { Project } from '../types';
import notebookLogo from "@/assets/logos/notebook.avif";
import notebook1_1 from "@/assets/projects/notebook/notebook1_1.avif";
import notebook1_2 from "@/assets/projects/notebook/notebook1_2.avif";
import notebook2_1 from "@/assets/projects/notebook/notebook2_1.avif";

export const notebookData: Project = {
    title: 'Project Notebook',
    logo: notebookLogo,
    sectionHeadings: {
        story: 'Our Story',
        events: 'What We Do'
    },
    colorTheme: {
        color: '#c8eef3'
    },
    description: 'Education is the spark — we\'re lighting the way. Through engaging campaigns and the innovative NAA module, Project Notebook is dedicated to creating inclusive spaces where underserved students can thrive. Our initiative goes beyond academic achievement; we empower these young minds to become the changemakers of tomorrow. By fostering creativity and critical thinking, we equip them with the tools they need to make a lasting impact in their communities and beyond. Together, we are building a brighter future for all.',
    logoSize: '300px',
    events: [
        {
            title: 'Emotions in Motion',
            description: 'This interactive event combines a scavenger hunt with emotion-themed station games. Participants will navigate through a series of creative clues across the campus. At each station, they will complete challenges representing Joy, Sadness, Anger, Fear, and Disgust. Through fun, interactive and collaborative activities, the event fosters self-awareness, empathy and teamwork, encouraging participants to appreciate the value of all emotions in personal growth and relationships.',
            images: [notebook1_1, notebook1_2]
        },
        {
            title: 'Beneficiary Visit',
            description: 'The Beneficiary Visit is an engagement session designed to strengthen the connection between the project team and the beneficiaries of the initiative. The visit provides an opportunity to understand beneficiaries’ needs, living conditions, and challenges more deeply, while fostering meaningful interaction and mutual trust.',
            images: [notebook2_1]
        }
    ],
    instagram: 'projectnotebook.my'
};