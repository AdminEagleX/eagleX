import { Metadata } from "next";
import Section from "@/components/layout/Section";
import TimelineStep from "@/components/blocks/TimelineStep";
import howWeWorkContent from "@/content/how-we-work.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = generatePageMetadata({
    title: howWeWorkContent.page.title,
    description: howWeWorkContent.page.subtitle,
    path: "/how-we-work",
});

export default function HowWeWorkPage() {
    const { page, steps } = howWeWorkContent;

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
                <div className="relative">
                    {/* Gradient Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 via-pink-200 to-purple-200 hidden md:block transform -translate-x-1/2 rounded-full" />

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <FadeIn key={index} delay={0.15 * index}>
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
        </>
    );
}
