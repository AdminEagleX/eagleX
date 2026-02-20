import { Metadata } from "next";
import Section from "@/components/layout/Section";
import CtaBanner from "@/components/blocks/CtaBanner";
import CapabilityBlock from "@/components/blocks/CapabilityBlock";
import servicesContent from "@/content/services.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import ParallaxSection from "@/components/animations/ParallaxSection";
import ParticleBackground from "@/components/animations/ParticleBackground";

export const metadata: Metadata = generatePageMetadata({
    title: "Our Capabilities",
    description: servicesContent.page.subtitle,
    path: "/services",
});

export default function ServicesPage() {
    const { page, capabilities, cta } = servicesContent;

    return (
        <div className="bg-black min-h-screen text-white overflow-hidden">
            <Section className="pt-32 pb-20 relative overflow-hidden">
                {/* Particle Background */}
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

            <Section className="pb-32">
                <div className="flex flex-col gap-32">
                    {capabilities.map((cap, index) => (
                        <FadeIn key={index} delay={0.15}>
                            <CapabilityBlock
                                index={index}
                                title={cap.title}
                                description={cap.description}
                                link={cap.link}
                                subCapabilities={cap.items.map((item: any) => item.title)}
                                image={(cap as any).image}
                            />
                        </FadeIn>
                    ))}
                </div>
            </Section>

            <FadeIn delay={0.2}>
                <CtaBanner
                    title={cta.title}
                    description={cta.description}
                    cta={{
                        label: cta.button,
                        href: "/contact"
                    }}
                />
            </FadeIn>
        </div>
    );
}
