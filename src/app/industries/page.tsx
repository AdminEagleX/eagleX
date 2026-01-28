import { Metadata } from "next";
import Section from "@/components/layout/Section";
import IndustryBlock from "@/components/blocks/IndustryBlock";
import industriesContent from "@/content/industries.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = generatePageMetadata({
    title: industriesContent.page.title,
    description: industriesContent.page.subtitle,
    path: "/industries",
});

export default function IndustriesPage() {
    const { page, items } = industriesContent;

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
                <div className="space-y-16">
                    {items.map((industry, index) => (
                        <FadeIn key={index} delay={0.1 * (index + 1)}>
                            <IndustryBlock
                                index={index}
                                name={industry.name}
                                description={industry.description}
                                features={industry.features}
                            />
                        </FadeIn>
                    ))}
                </div>
            </Section>
        </>
    );
}
