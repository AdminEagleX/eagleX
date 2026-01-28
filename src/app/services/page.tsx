import { Metadata } from "next";
import Section from "@/components/layout/Section";
import CtaBanner from "@/components/blocks/CtaBanner";
import CapabilityBlock from "@/components/blocks/CapabilityBlock";
import servicesContent from "@/content/services.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import ParallaxSection from "@/components/animations/ParallaxSection";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ParticleBackground from "@/components/animations/ParticleBackground";

export const metadata: Metadata = generatePageMetadata({
    title: "Our Capabilities",
    description: servicesContent.page.subtitle,
    path: "/services",
});

export default function ServicesPage() {
    const { page, capabilities, cta } = servicesContent;

    return (
        <>
            <Section variant="default" className="pt-32 pb-20 relative overflow-hidden">
                {/* Particle Background */}
                <ParticleBackground />

                {/* Gradient Background Mesh with Parallax */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <ParallaxSection speed={0.3}>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
                    </ParallaxSection>
                    <ParallaxSection speed={0.5}>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-200 rounded-full blur-3xl"></div>
                    </ParallaxSection>
                </div>

                <FadeIn>
                    <div className="max-w-4xl relative z-10">
                        <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mb-8 leading-tight">
                            {page.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">
                            {page.subtitle}
                        </p>
                    </div>
                </FadeIn>
            </Section>

            <Section className="pb-24">
                <div className="flex flex-col gap-24">
                    {capabilities.map((cap, index) => (
                        <ScrollReveal key={index} delay={0.15 * index} direction="up">
                            <CapabilityBlock
                                index={index}
                                title={cap.title}
                                description={cap.description}
                                link={cap.link}
                                subCapabilities={cap.items.map(item => item.title)}
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
                />
            </ScrollReveal>
        </>
    );
}
