import { Metadata } from "next";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import aboutContent from "@/content/about.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import ParticleBackground from "@/components/animations/ParticleBackground";
import ParallaxSection from "@/components/animations/ParallaxSection";
import ScrollReveal from "@/components/animations/ScrollReveal";
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
                    <div className="md:col-span-1">
                        <ScrollReveal>
                            <h2 className="text-3xl font-medium text-slate-900 sticky top-32">
                                {story.title}
                            </h2>
                        </ScrollReveal>
                    </div>
                    <div className="md:col-span-2 space-y-8">
                        {story.content.map((paragraph: string, index: number) => (
                            <ScrollReveal key={index} delay={0.1 * index}>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {paragraph}
                                </p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Mission & Methodology Section */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <ScrollReveal delay={0.2}>
                        <div>
                            <h3 className="text-2xl font-medium text-slate-900 mb-4">{mission.title}</h3>
                            <p className="text-slate-600 mb-12 leading-relaxed">{mission.description}</p>

                            <h3 className="text-2xl font-medium text-slate-900 mb-4">{methodology.title}</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">{methodology.description}</p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-8">
                        <ScrollReveal delay={0.3}>
                            <h3 className="text-2xl font-medium text-slate-900 mb-6">Our Core Values</h3>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {values.map((value, index) => (
                                <ScrollReveal key={index} delay={0.1 * index + 0.3}>
                                    <Card padding="md" className="h-full border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-medium text-slate-900 mb-2">{value.title}</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
