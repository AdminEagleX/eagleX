import { Metadata } from "next";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import aboutContent from "@/content/about.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export const metadata: Metadata = generatePageMetadata({
    title: "About",
    description: aboutContent.page.subtitle,
    path: "/about",
});

export default function AboutPage() {
    const { page, story, mission, methodology, values } = aboutContent;

    return (
        <>
            {/* Header Section */}
            <Section className="pt-32 pb-20 bg-white">
                <FadeIn>
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-medium text-slate-900 mb-8 leading-tight">
                            {page.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">
                            {page.subtitle}
                        </p>
                    </div>
                </FadeIn>
            </Section>

            {/* Narrative Story Section */}
            <Section variant="muted">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <FadeIn className="md:col-span-1">
                        <h2 className="text-3xl font-medium text-slate-900 sticky top-32">
                            {story.title}
                        </h2>
                    </FadeIn>
                    <div className="md:col-span-2 space-y-8">
                        <StaggerContainer>
                            {story.content.map((paragraph: string, index: number) => (
                                <FadeIn key={index} delay={0.1 * index}>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {paragraph}
                                    </p>
                                </FadeIn>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </Section>

            {/* Mission & Methodology Section */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <FadeIn delay={0.2}>
                        <div>
                            <h3 className="text-2xl font-medium text-slate-900 mb-4">{mission.title}</h3>
                            <p className="text-slate-600 mb-12 leading-relaxed">{mission.description}</p>

                            <h3 className="text-2xl font-medium text-slate-900 mb-4">{methodology.title}</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">{methodology.description}</p>
                        </div>
                    </FadeIn>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-medium text-slate-900 mb-6">Our Core Values</h3>
                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" delay={0.3}>
                            {values.map((value, index) => (
                                <FadeIn key={index}>
                                    <Card padding="md" className="h-full border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-medium text-slate-900 mb-2">{value.title}</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                                    </Card>
                                </FadeIn>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </Section>
        </>
    );
}
