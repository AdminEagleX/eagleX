import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface Metric {
    value: string;
    label: string;
}

interface CaseStudyCardProps {
    client: string;
    title: string;
    metrics?: Metric[];
    tags: string[];
    summary: string;
    image?: string;
    slug?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
    client,
    title,
    metrics,
    tags,
    summary,
    image,
    slug,
}) => {
    return (
        <div className="group relative flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden border border-white/[0.06] bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-purple-950/40 shadow-[0_20px_80px_-30px_rgba(123,37,235,0.2)] transition-all duration-500 hover:shadow-[0_30px_100px_-30px_rgba(123,37,235,0.35)] hover:border-white/[0.1]">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.04] via-transparent to-pink-500/[0.03] pointer-events-none" />

            {/* Content Section */}
            <div className="relative z-10 w-full md:w-7/12 lg:w-7/12">
                <div className="p-8 lg:p-12">
                    <div className="flex flex-col gap-7 md:gap-8">
                        {/* Client badge */}
                        <div className="inline-flex self-start items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-sm">
                            <span className="text-xs tracking-widest uppercase text-slate-400 font-medium">{client}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl lg:text-3xl font-semibold text-white leading-tight">
                            {title}
                        </h2>

                        {/* Tags */}
                        {tags && tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 text-xs rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Metrics */}
                        {metrics && metrics.length > 0 && (
                            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                                {metrics.map((metric, index) => (
                                    <div key={index} className="flex-1">
                                        <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-1 tracking-tight">
                                            {metric.value}
                                        </h3>
                                        <p className="text-slate-400 text-sm">{metric.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Summary (if no metrics) */}
                        {(!metrics || metrics.length === 0) && (
                            <p className="text-slate-400 leading-relaxed">{summary}</p>
                        )}

                        {/* CTA */}
                        <div className="mt-2">
                            <Button
                                href={slug ? `/case-studies/${slug}` : "#"}
                                variant="outline"
                                size="sm"
                                showArrow
                            >
                                Read case study
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="relative z-10 w-full md:w-5/12 lg:w-5/12 h-64 md:h-auto flex justify-center items-center p-6 md:p-10">
                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01]">
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            width={600}
                            height={450}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-slate-600 font-mono text-sm">[ Image ]</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyCard;
