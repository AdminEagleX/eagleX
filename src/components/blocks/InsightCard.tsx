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
            <article className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 group-hover:bg-white/[0.06] group-hover:border-white/[0.1] group-hover:shadow-[0_10px_40px_-20px_rgba(123,37,235,0.2)]">
                <div className="flex items-center justify-between mb-4">
                    <Badge variant="default">{category}</Badge>
                    <span className="text-sm text-slate-500">{formattedDate}</span>
                </div>
                <h2 className="text-xl lg:text-2xl font-medium text-white group-hover:text-slate-200 transition-colors mb-3 leading-tight">
                    {title}
                </h2>
                <p className="text-slate-400 leading-relaxed line-clamp-2">{excerpt}</p>
            </article>
        </Link>
    );
};

export default InsightCard;
