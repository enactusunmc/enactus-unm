interface TeamMemberProps {
    name: string;
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
}

const TeamMember = ({ name, title, description, image, reverse = false }: TeamMemberProps) => {
    return (
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center`}>
            <div className="lg:w-1/2 w-full">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-lg"
                />
            </div>
            <div className="lg:w-1/2 space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">{name}</h3>
                <h4 className="text-xl md:text-2xl font-semibold text-primary">{title}</h4>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">{description}</p>
            </div>
        </div>
    );
};

export default TeamMember;
