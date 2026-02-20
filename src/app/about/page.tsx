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
        <div className="bg-black min-h-screen text-white overflow-hidden">
            {/* Header Section */}
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

            {/* Narrative Story Section */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <ScrollReveal>
                            <h2 className="text-3xl font-semibold text-white sticky top-32">
                                {story.title}
                            </h2>
                        </ScrollReveal>
                    </div>
                    <div className="md:col-span-2 space-y-8">
                        {story.content.map((paragraph: string, index: number) => (
                            <ScrollReveal key={index} delay={0.1 * index}>
                                <p className="text-lg text-slate-400 leading-relaxed">
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
                            <h3 className="text-2xl font-semibold text-white mb-4">{mission.title}</h3>
                            <p className="text-slate-400 mb-12 leading-relaxed">{mission.description}</p>

                            <h3 className="text-2xl font-semibold text-white mb-4">{methodology.title}</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">{methodology.description}</p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-8">
                        <ScrollReveal delay={0.3}>
                            <h3 className="text-2xl font-semibold text-white mb-6">Our Core Values</h3>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {values.map((value, index) => (
                                <ScrollReveal key={index} delay={0.1 * index + 0.3}>
                                    <Card padding="md" background="dark" className="h-full hover:bg-white/[0.06] transition-colors duration-300">
                                        <h4 className="font-medium text-white mb-2">{value.title}</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
