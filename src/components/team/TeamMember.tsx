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
            <div className="w-full max-w-[360px] md:max-w-[420px] lg:max-w-none lg:w-1/2">
                <div className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-auto lg:h-[500px] overflow-hidden rounded-3xl shadow-lg">
                    <img
                        src={image}
                        alt={name}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                </div>
            </div>
            <div className={`lg:w-1/2 space-y-4 text-left ${reverse ? 'lg:text-right' : 'lg:text-left'}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">{name}</h3>
                <h4 className="text-xl md:text-2xl font-semibold text-primary">{title}</h4>
                {description && (
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>
                )}
            </div>
        </div>
    );
};

export default TeamMember;
