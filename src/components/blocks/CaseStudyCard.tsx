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
        <div className="flex flex-col md:flex-row items-stretch bg-slate-50 rounded-3xl overflow-hidden">
            {/* Content Section */}
            <div className="w-full md:w-7/12 lg:w-7/12">
                <div className="p-8 lg:p-12">
                    <div className="flex flex-col gap-8 md:gap-10">
                        {/* Client Logo Placeholder */}
                        <div className="h-10 w-32 bg-slate-200 rounded flex items-center justify-center">
                            <span className="text-xs text-slate-500 font-medium">{client}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl lg:text-3xl font-medium text-slate-900 leading-tight">
                            {title}
                        </h2>

                        {/* Metrics */}
                        {metrics && metrics.length > 0 && (
                            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                                {metrics.map((metric, index) => (
                                    <div key={index} className="flex-1">
                                        <h3 className="text-4xl lg:text-5xl font-medium text-slate-900 mb-1">
                                            {metric.value}
                                        </h3>
                                        <p className="text-slate-600 text-sm">{metric.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Summary (if no metrics) */}
                        {(!metrics || metrics.length === 0) && (
                            <p className="text-slate-600 leading-relaxed">{summary}</p>
                        )}

                        {/* CTA */}
                        <div className="mt-4">
                            <Button
                                href={slug ? `/case-studies/${slug}` : "#"}
                                variant="primary"
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
            <div className="w-full md:w-5/12 lg:w-5/12 h-64 md:h-auto flex justify-center items-center p-6 md:p-12">
                <div className="w-full h-full bg-slate-200 rounded-2xl flex items-center justify-center">
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            width={400}
                            height={300}
                            className="object-cover rounded-xl"
                        />
                    ) : (
                        <span className="text-slate-400 font-mono text-sm">[ Image ]</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyCard;
