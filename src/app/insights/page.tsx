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
        <div className="bg-black min-h-screen text-white overflow-hidden">
            <Section className="pt-32 pb-20 relative overflow-hidden">
                <ParticleBackground />

                {/* Dark Mode Gradient Background Mesh with Parallax */}
                <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-screen overflow-hidden">
                    <ParallaxSection speed={0.3}>
                        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/40 rounded-full blur-[120px] mix-blend-screen" style={{ animation: "float 15s ease-in-out infinite alternate" }}></div>
                    </ParallaxSection>
                    <ParallaxSection speed={0.5}>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-900/40 rounded-full blur-[100px] mix-blend-screen" style={{ animation: "float 20s ease-in-out infinite alternate-reverse" }}></div>
                    </ParallaxSection>
                </div>

                <FadeIn>
                    <div className="max-w-4xl relative z-10">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.05]">
                            {page.title}
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-400 leading-relaxed max-w-3xl font-light">
                            {page.subtitle}
                        </p>
                    </div>
                </FadeIn>
            </Section>

            <Section containerSize="narrow" className="pb-32">
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
        </div>
    );
}
