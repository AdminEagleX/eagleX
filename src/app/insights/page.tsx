import { Metadata } from "next";
import Section from "@/components/layout/Section";
import InsightCard from "@/components/blocks/InsightCard";
import insightsContent from "@/content/insights.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export const metadata: Metadata = generatePageMetadata({
    title: insightsContent.page.title,
    description: insightsContent.page.subtitle,
    path: "/insights",
});

export default function InsightsPage() {
    const { page, posts } = insightsContent;

    return (
        <>
            <Section className="pt-32 pb-20 bg-white">
                <FadeIn>
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-medium text-slate-900 mb-8 leading-tight">{page.title}</h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">{page.subtitle}</p>
                    </div>
                </FadeIn>
            </Section>

            <Section containerSize="narrow">
                <StaggerContainer className="space-y-8" staggerDelay={0.15}>
                    {posts.map((post, index) => (
                        <FadeIn key={index}>
                            <InsightCard
                                slug={post.slug}
                                title={post.title}
                                date={post.date}
                                category={post.category}
                                excerpt={post.excerpt}
                            />
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </Section>
        </>
    );
}
