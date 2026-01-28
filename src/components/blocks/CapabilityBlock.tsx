import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CapabilityBlockProps {
    title: string;
    description: string;
    link: string;
    subCapabilities: string[];
    image?: string;
    index: number;
}

const CapabilityBlock: React.FC<CapabilityBlockProps> = ({
    title,
    description,
    link,
    subCapabilities,
    index,
}) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}>
            {/* Content Side */}
            <div className="flex-1 space-y-6">
                <div className="inline-block">
                    <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
                    {title}
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                    {description}
                </p>

                {subCapabilities && subCapabilities.length > 0 && (
                    <div className="pt-4">
                        <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">
                            Key Areas
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {subCapabilities.map((subCap, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-white border-2 border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 cursor-default hover:scale-105"
                                >
                                    {subCap}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {link && (
                    <Link
                        href={link}
                        className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition-all duration-300 group/link mt-6"
                    >
                        Explore {title}
                        <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>

            {/* Visual Side - Gradient Card */}
            <div className="flex-1 w-full">
                <div className="relative h-80 lg:h-96 rounded-3xl bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 p-1 group-hover:shadow-2xl group-hover:shadow-purple-200/50 transition-all duration-500">
                    <div className="h-full w-full rounded-3xl bg-gradient-to-br from-slate-50 to-white flex items-center justify-center overflow-hidden relative">
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                        </div>

                        {/* Index Number */}
                        <div className="text-9xl font-bold text-slate-100 group-hover:text-purple-100 transition-colors duration-500">
                            {String(index + 1).padStart(2, '0')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CapabilityBlock;
