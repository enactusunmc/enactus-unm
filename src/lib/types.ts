export interface ProjectEvent {
    title?: string;
    description: string;
    images: string[];
}

export interface Project {
    title: string;
    logo: string;
    logoSize?: string;           // CSS size value, e.g. '7rem' or '112px' (default: '7rem')
    colorTheme: {
        color: string;           // hex color, e.g. '#c8eef3'
    };
    description: string;
    sectionHeadings?: {
        story?: string;          // defaults to 'Our Story'
        events?: string;         // defaults to 'Events'
    };
    events: ProjectEvent[];
    instagram?: string;          // Instagram handle without @, e.g. 'enactusunm'
}