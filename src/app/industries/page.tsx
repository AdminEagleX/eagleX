import { Metadata } from "next";
import Section from "@/components/layout/Section";
import IndustryBlock from "@/components/blocks/IndustryBlock";
import industriesContent from "@/content/industries.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import ParticleBackground from "@/components/animations/ParticleBackground";
import ParallaxSection from "@/components/animations/ParallaxSection";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CtaBanner from "@/components/blocks/CtaBanner";

export const metadata: Metadata = generatePageMetadata({
    title: industriesContent.page.title,
    description: industriesContent.page.subtitle,
    path: "/industries",
});

export default function IndustriesPage() {
    const { page, items, cta } = industriesContent;

    return (
        <>
            <Section className="pt-32 pb-20 bg-white relative overflow-hidden">
                <ParticleBackground />

                {/* Background Parallax Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <ParallaxSection speed={0.3} className="absolute right-0 top-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40 -z-10" />
                    <ParallaxSection speed={0.5} className="absolute left-0 bottom-0 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-40 -z-10" />
                </div>

                <FadeIn>
                    <div className="max-w-4xl relative z-10">
                        <h1 className="text-5xl md:text-6xl font-medium text-slate-900 mb-8 leading-tight">{page.title}</h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">{page.subtitle}</p>
                    </div>
                </FadeIn>
            </Section>

            <Section>
                <div className="space-y-16">
                    {items.map((industry, index) => (
                        <ScrollReveal key={index} delay={0.15 * index}>
                            <IndustryBlock
                                index={index}
                                name={industry.name}
                                description={industry.description}
                                features={industry.features}
                            />
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            <ScrollReveal delay={0.2}>
                <CtaBanner
                    title={cta.title}
                    description={cta.description}
                    cta={{
                        label: cta.button,
                        href: "/contact"
                    }}
                    variant="dark"
                />
            </ScrollReveal>
        </>
    );
}
