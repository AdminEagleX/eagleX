import { Metadata } from "next";
import Section from "@/components/layout/Section";
import TimelineStep from "@/components/blocks/TimelineStep";
import howWeWorkContent from "@/content/how-we-work.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import ParticleBackground from "@/components/animations/ParticleBackground";

export const metadata: Metadata = generatePageMetadata({
    title: howWeWorkContent.page.title,
    description: howWeWorkContent.page.subtitle,
    path: "/how-we-work",
});

export default function HowWeWorkPage() {
    const { page, steps } = howWeWorkContent;

    return (
        <div className="bg-black min-h-screen text-white overflow-hidden">
            <Section className="pt-32 pb-20 relative overflow-hidden">
                {/* Particle Background */}
                <ParticleBackground />

                {/* Dark Mode Gradient Background Mesh */}
                <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-screen overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/40 rounded-full blur-[120px]" style={{ animation: "float 15s ease-in-out infinite alternate" }}></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-900/40 rounded-full blur-[100px]" style={{ animation: "float 20s ease-in-out infinite alternate-reverse" }}></div>
                </div>

                <FadeIn>
                    <div className="max-w-4xl relative z-10">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight">{page.title}</h1>
                        <p className="text-xl md:text-3xl text-slate-400 font-light leading-relaxed max-w-3xl">{page.subtitle}</p>
                    </div>
                </FadeIn>
            </Section>

            <Section className="pb-32">
                <div className="relative">
                    {/* Dark/Glowing Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-900 via-purple-500 to-purple-900 hidden md:block transform -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

                    <div className="space-y-32">
                        {steps.map((step, index) => (
                            <FadeIn key={index} delay={0.15}>
                                <TimelineStep
                                    index={index}
                                    phase={step.phase}
                                    title={step.title}
                                    description={step.description}
                                />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
