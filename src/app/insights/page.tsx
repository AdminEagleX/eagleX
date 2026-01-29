import { Metadata } from "next";
import Section from "@/components/layout/Section";
import InsightCard from "@/components/blocks/InsightCard";
import insightsContent from "@/content/insights.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import ParticleBackground from "@/components/animations/ParticleBackground";
import ParallaxSection from "@/components/animations/ParallaxSection";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = generatePageMetadata({
    title: insightsContent.page.title,
    description: insightsContent.page.subtitle,
    path: "/insights",
});

export default function InsightsPage() {
    const { page, posts } = insightsContent;

    return (
        <>
            <Section className="pt-32 pb-20 bg-white relative overflow-hidden">
                <ParticleBackground />

                {/* Background Parallax Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <ParallaxSection speed={0.3} className="absolute right-0 top-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40 -z-10" />
                    <ParallaxSection speed={0.5} className="absolute left-0 bottom-0 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-40 -z-10" />
                    {/* User Requested Blob */}
                    <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
                </div>

                <FadeIn>
                    <div className="max-w-4xl relative z-10">
                        <h1 className="text-5xl md:text-6xl font-medium text-slate-900 mb-8 leading-tight">{page.title}</h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">{page.subtitle}</p>
                    </div>
                </FadeIn>
            </Section>

            <Section containerSize="narrow">
                <div className="space-y-8">
                    {posts.map((post, index) => (
                        <ScrollReveal key={index} delay={0.1 * index}>
                            <InsightCard
                                slug={post.slug}
                                title={post.title}
                                date={post.date}
                                category={post.category}
                                excerpt={post.excerpt}
                            />
                        </ScrollReveal>
                    ))}
                </div>
            </Section>
        </>
    );
}
