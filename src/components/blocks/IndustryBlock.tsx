import React from "react";

interface IndustryBlockProps {
    name: string;
    description: string;
    features: string[];
    index: number;
}

const IndustryBlock: React.FC<IndustryBlockProps> = ({ name, description, features, index }) => {
    const isReversed = index % 2 === 1;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={isReversed ? "md:order-2" : ""}>
                <h3 className="text-2xl font-medium text-slate-900 mb-4">{name}</h3>
                <p className="text-lg text-slate-600 mb-6">{description}</p>
                <ul className="space-y-2">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-center text-slate-700">
                            <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`bg-slate-100 rounded-xl h-64 flex items-center justify-center ${isReversed ? "md:order-1" : ""}`}>
                <span className="text-slate-400 font-mono text-sm">[ {name} Illustration ]</span>
            </div>
        </div>
    );
};

export default IndustryBlock;
