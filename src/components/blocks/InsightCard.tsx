import React from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

interface InsightCardProps {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ slug, title, date, category, excerpt }) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <Link href={`/insights/${slug}`} className="block group">
            <article className="p-8 bg-slate-50 rounded-2xl group-hover:bg-slate-100 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                    <Badge variant="default">{category}</Badge>
                    <span className="text-sm text-slate-400">{formattedDate}</span>
                </div>
                <h2 className="text-xl lg:text-2xl font-medium text-slate-900 group-hover:text-slate-700 transition-colors mb-3 leading-tight">
                    {title}
                </h2>
                <p className="text-slate-600 leading-relaxed line-clamp-2">{excerpt}</p>
            </article>
        </Link>
    );
};

export default InsightCard;
