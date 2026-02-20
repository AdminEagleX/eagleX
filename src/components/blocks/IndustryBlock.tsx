import React from "react";
import Image from "next/image";

interface IndustryBlockProps {
    name: string;
    image?: string;
    description: string;
    features: string[];
    index: number;
}

const IndustryBlock: React.FC<IndustryBlockProps> = ({ name, image, description, features, index }) => {
    const isReversed = index % 2 === 1;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div className={isReversed ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs tracking-widest uppercase text-purple-300 mb-5">
                    Industry
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-5 leading-tight">{name}</h3>
                <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed">{description}</p>
                <ul className="space-y-3">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-center text-slate-300 text-sm md:text-base">
                            <span className="w-2 h-2 bg-accent rounded-full mr-3 shadow-[0_0_12px_rgba(123,37,235,0.5)]" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Image Card — Dark Glassmorphism */}
            <div className={isReversed ? "lg:order-1" : ""}>
                <div className="group relative rounded-3xl overflow-hidden border border-white/[0.06] bg-gradient-to-br from-white/[0.06] to-white/[0.02] shadow-[0_20px_80px_-30px_rgba(123,37,235,0.25)] transition-shadow duration-500 hover:shadow-[0_30px_100px_-30px_rgba(123,37,235,0.4)]">
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.08] via-pink-500/[0.05] to-cyan-400/[0.06] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-0 backdrop-blur-xl" />
                    <div className="relative aspect-[3/2] w-full">
                        {image ? (
                            <Image
                                src={image}
                                alt={`${name} illustration`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustryBlock;
