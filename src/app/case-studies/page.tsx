import { Metadata } from "next";
import Section from "@/components/layout/Section";
import CaseStudyCard from "@/components/blocks/CaseStudyCard";
import caseStudiesContent from "@/content/case-studies.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export const metadata: Metadata = generatePageMetadata({
    title: caseStudiesContent.page.title,
    description: caseStudiesContent.page.subtitle,
    path: "/case-studies",
});

export default function CaseStudiesPage() {
    const { page, items } = caseStudiesContent;

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

            <Section>
                <StaggerContainer className="flex flex-col gap-12" staggerDelay={0.2}>
                    {items.map((study, index) => (
                        <FadeIn key={index}>
                            <CaseStudyCard
                                client={study.client}
                                title={study.title}
                                metrics={study.metrics}
                                tags={study.tags}
                                summary={study.summary}
                                slug={study.slug}
                            />
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </Section>
        </>
    );
}
