import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CapabilityBlockProps {
    title: string;
    description: string;
    link: string;
    subCapabilities: string[];
    index: number;
    image?: string;
}

const CapabilityBlock: React.FC<CapabilityBlockProps> = ({
    title,
    description,
    link,
    subCapabilities,
    index,
    image,
}) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}>
            {/* Content Side */}
            <div className="flex-1 space-y-6">
                <div className="inline-block">
                    <span className="text-sm font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                    {title}
                </h2>

                <p className="text-lg text-slate-400 leading-relaxed font-light">
                    {description}
                </p>

                {subCapabilities && subCapabilities.length > 0 && (
                    <div className="pt-4">
                        <h4 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
                            Key Areas
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {subCapabilities.map((subCap, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-slate-300 hover:border-purple-400/50 hover:bg-purple-900/30 hover:text-purple-300 transition-all duration-300 cursor-default hover:scale-105"
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
                        className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:gap-4 transition-all duration-300 group/link mt-6"
                    >
                        Explore {title}
                        <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>

            {/* Visual Side - Gradient Card */}
            <div className="flex-1 w-full">
                <div className="relative h-80 lg:h-96 rounded-[2rem] bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-black p-[2px] group-hover:shadow-[0_0_40px_rgba(123,37,235,0.2)] transition-all duration-500">
                    <div className="h-full w-full rounded-[2rem] bg-black bg-opacity-90 flex items-center justify-center overflow-hidden relative backdrop-blur-xl">

                        {/* Image Layer */}
                        {image && (
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img src={image} alt={title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </div>
                        )}

                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-30 mix-blend-screen z-10 pointer-events-none">
                            <div className="absolute top-10 left-10 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-600/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                        </div>

                        {/* Noise Texture */}
                        <div className="absolute inset-0 opacity-10 mix-blend-overlay z-10 pointer-events-none bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_3px)]"></div>

                        {/* Index Number */}
                        <div className="text-9xl font-bold bg-gradient-to-br from-white/10 to-white/5 bg-clip-text text-transparent group-hover:from-purple-400/30 group-hover:to-pink-400/30 transition-all duration-700 z-20">
                            {String(index + 1).padStart(2, '0')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CapabilityBlock;
