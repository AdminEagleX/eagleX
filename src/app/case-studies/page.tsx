import { Metadata } from "next";
import Section from "@/components/layout/Section";
import CaseStudyCard from "@/components/blocks/CaseStudyCard";
import caseStudiesContent from "@/content/case-studies.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import ParticleBackground from "@/components/animations/ParticleBackground";
import ParallaxSection from "@/components/animations/ParallaxSection";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = generatePageMetadata({
    title: caseStudiesContent.page.title,
    description: caseStudiesContent.page.subtitle,
    path: "/case-studies",
});

export default function CaseStudiesPage() {
    const { page, items } = caseStudiesContent;

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

            <Section>
                <div className="flex flex-col gap-12">
                    {items.map((study, index) => (
                        <ScrollReveal key={index} delay={0.15 * index}>
                            <CaseStudyCard
                                client={study.client}
                                title={study.title}
                                metrics={study.metrics}
                                tags={study.tags}
                                summary={study.summary}
                                slug={study.slug}
                            />
                        </ScrollReveal>
                    ))}
                </div>
            </Section>
        </>
    );
}
