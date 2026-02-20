import { notFound } from "next/navigation";
import Section from "@/components/layout/Section";
import caseStudiesContent from "@/content/case-studies.json";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import siteContent from "@/content/site.json";
import { generateArticleSchema } from "@/lib/jsonLd";
import ParticleBackground from "@/components/animations/ParticleBackground";
import ParallaxSection from "@/components/animations/ParallaxSection";

// Helper to find case study by slug
function getCaseStudyBySlug(slug: string) {
    return caseStudiesContent.items.find((item: any) => item.slug === slug);
}

// Generate static params if not using dynamic rendering (optional, but good for SSG)
export async function generateStaticParams() {
    return caseStudiesContent.items.map((item: any) => ({
        slug: item.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);
    if (!study) return {};

    return generatePageMetadata({
        title: study.title,
        description: study.summary,
        path: `/case-studies/${slug}`,
    });
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study: any = getCaseStudyBySlug(slug);

    if (!study || !study.content) {
        notFound();
    }

    const { content } = study;
    const jsonLd = generateArticleSchema(
        study.title,
        study.summary,
        new Date().toISOString(),
        `${siteContent.site.url.replace(/\/+$/, "")}/case-studies/${slug}`
    );

    return (
        <div className="bg-black min-h-screen text-white overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero */}
            <Section className="pt-32 pb-20 relative overflow-hidden">
                <ParticleBackground />

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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs tracking-widest uppercase text-purple-300 mb-5">
                            {study.client}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.05]">
                            {study.title}
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-400 leading-relaxed max-w-3xl font-light">
                            {study.summary}
                        </p>
                    </div>
                </FadeIn>
            </Section>

            {/* Metrics & Tags */}
            <Section className="pb-10">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {study.metrics.map((metric: any, index: number) => (
                        <FadeIn key={index}>
                            <div>
                                <p className="text-3xl md:text-4xl font-semibold text-white mb-1 tracking-tight">{metric.value}</p>
                                <p className="text-slate-400">{metric.label}</p>
                            </div>
                        </FadeIn>
                    ))}
                    <FadeIn delay={0.3}>
                        <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                            {study.tags.map((tag: string, i: number) => (
                                <span key={i} className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-xs tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </FadeIn>
                </StaggerContainer>
            </Section>

            {/* Content */}
            <Section className="pb-32">
                <div className="max-w-4xl mx-auto space-y-16">
                    <FadeIn>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">The Challenge</h2>
                            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                                {content.challenge}
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">The Solution</h2>
                            <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
                                {content.solution}
                            </p>

                            <div className="rounded-3xl p-8 border border-white/[0.06] bg-gradient-to-br from-white/[0.06] to-white/[0.02] shadow-[0_20px_80px_-30px_rgba(123,37,235,0.18)]">
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Key Approach</h3>
                                <ul className="space-y-4">
                                    {content.approach.map((item: string, idx: number) => {
                                        // Simple markdown parsing for bold text
                                        const parts = item.split("**");
                                        return (
                                            <li key={idx} className="flex items-start text-slate-300">
                                                <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 shrink-0" />
                                                <span>
                                                    {parts.length > 1 ? (
                                                        <>
                                                            <strong className="font-semibold text-white">{parts[1]}</strong>
                                                            {parts[2]}
                                                        </>
                                                    ) : item}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">The Impact</h2>
                            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                                {content.results}
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* CTA */}
            <Section variant="dark" className="py-24 text-center">
                <FadeIn>
                    <h2 className="text-3xl font-semibold text-white mb-6">Ready to achieve similar results?</h2>
                    <div className="flex justify-center gap-4">
                        <Button href="/contact" variant="primary" size="lg" showArrow>
                            Start a Project
                        </Button>
                        <Button href="/case-studies" variant="outline" size="lg">
                            All Case Studies
                        </Button>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
}
