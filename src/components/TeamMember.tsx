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
            <div className="lg:w-1/2">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
                />
            </div>
            <div className="lg:w-1/2 space-y-4">
                <h3 className="text-4xl md:text-5xl font-bold text-foreground">{name}</h3>
                <h4 className="text-2xl md:text-3xl font-semibold text-primary">{title}</h4>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify">{description}</p>
            </div>
        </div>
    );
};

export default TeamMember;
