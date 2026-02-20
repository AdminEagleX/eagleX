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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = params;
    const study = getCaseStudyBySlug(slug);
    if (!study) return {};

    return generatePageMetadata({
        title: study.title,
        description: study.summary,
        path: `/case-studies/${slug}`,
    });
}

export default async function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
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
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero */}
            <Section variant="dark" className="pt-32 pb-20">
                <FadeIn>
                    <div className="max-w-4xl">
                        <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">
                            {study.client}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight">
                            {study.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
                            {study.summary}
                        </p>
                    </div>
                </FadeIn>
            </Section>

            {/* Metrics & Tags */}
            <Section className="border-b border-slate-100">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {study.metrics.map((metric: any, index: number) => (
                        <FadeIn key={index}>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{metric.value}</p>
                                <p className="text-slate-500">{metric.label}</p>
                            </div>
                        </FadeIn>
                    ))}
                    <FadeIn delay={0.3}>
                        <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                            {study.tags.map((tag: string, i: number) => (
                                <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </FadeIn>
                </StaggerContainer>
            </Section>

            {/* Content */}
            <Section>
                <div className="max-w-4xl mx-auto space-y-20">
                    <FadeIn>
                        <div>
                            <h2 className="text-2xl font-medium text-slate-900 mb-6">The Challenge</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {content.challenge}
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn>
                        <div>
                            <h2 className="text-2xl font-medium text-slate-900 mb-6">The Solution</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {content.solution}
                            </p>

                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                                <h3 className="text-xl font-medium text-slate-900 mb-6">Key Approach</h3>
                                <ul className="space-y-4">
                                    {content.approach.map((item: string, idx: number) => {
                                        // Simple markdown parsing for bold text
                                        const parts = item.split("**");
                                        return (
                                            <li key={idx} className="flex items-start text-slate-700">
                                                <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 shrink-0" />
                                                <span>
                                                    {parts.length > 1 ? (
                                                        <>
                                                            <strong className="font-medium text-slate-900">{parts[1]}</strong>
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
                            <h2 className="text-2xl font-medium text-slate-900 mb-6">The Impact</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {content.results}
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* CTA */}
            <Section variant="muted" className="py-24 text-center">
                <FadeIn>
                    <h2 className="text-3xl font-medium text-slate-900 mb-6">Ready to achieve similar results?</h2>
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
        </>
    );
}
