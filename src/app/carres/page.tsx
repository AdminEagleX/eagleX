import { Metadata } from "next";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import careersContent from "@/content/careers.json";
import siteContent from "@/content/site.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import ParallaxSection from "@/components/animations/ParallaxSection";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ParticleBackground from "@/components/animations/ParticleBackground";

export const metadata: Metadata = generatePageMetadata({
    title: "Careers",
    description: careersContent.page.subtitle,
    path: "/carres",
});

export default function CarresPage() {
    const mailtoHref = `mailto:${siteContent.emails.careers}?subject=${encodeURIComponent(
        "Application - EagleX"
    )}`;

    return (
        <>
            <Section className="pt-32 pb-20 bg-white relative overflow-hidden">
                <ParticleBackground />

                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <ParallaxSection speed={0.4}>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
                    </ParallaxSection>
                    <ParallaxSection speed={0.6}>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-200 rounded-full blur-3xl"></div>
                    </ParallaxSection>
                </div>

                <FadeIn>
                    <div className="max-w-4xl relative z-10">
                        <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mb-8 leading-tight">
                            {careersContent.page.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">
                            {careersContent.page.subtitle}
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Button href="#open-roles" variant="secondary" showArrow>
                                View open roles
                            </Button>
                            <Button href={mailtoHref} variant="primary" showArrow>
                                {careersContent.apply.ctaLabel}
                            </Button>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            <Section className="relative">
                <ParallaxSection speed={0.2} className="absolute right-0 top-0 w-64 h-64 bg-purple-50 rounded-full blur-2xl opacity-50 -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <ScrollReveal delay={0.05}>
                            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                                {careersContent.principles.title}
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {careersContent.principles.items.map((item, index) => (
                                <ScrollReveal key={item.title} delay={0.08 * index}>
                                    <Card className="border-2 border-slate-100" hover>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    <div>
                        <ScrollReveal delay={0.08}>
                            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                                {careersContent.process.title}
                            </h2>
                        </ScrollReveal>

                        <div className="space-y-5">
                            {careersContent.process.steps.map((step, index) => (
                                <ScrollReveal key={step.title} delay={0.08 * index}>
                                    <Card className="border-2 border-slate-100">
                                        <div className="flex gap-4">
                                            <div className="shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                                                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="open-roles" variant="muted">
                <ScrollReveal delay={0.05}>
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">Open roles</h2>
                        <p className="text-slate-600 leading-relaxed">
                            We are currently hiring for the positions below. If you are a strong match, apply via email and include the role title in your subject line.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {careersContent.roles.map((role, index) => (
                        <ScrollReveal key={role.id} delay={0.08 * index}>
                            <Card className="border-2 border-slate-200/70" hover>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-slate-900">{role.title}</h3>
                                        <p className="text-slate-600 mt-1">{role.summary}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 text-sm">
                                        <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                                            {role.location}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                                            {role.type}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                                            {role.experience}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-900 mb-2">Responsibilities</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                                                {role.responsibilities.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-900 mb-2">Requirements</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                                                {role.requirements.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <Button href={mailtoHref} variant="primary" size="sm" showArrow>
                                            Apply for this role
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-10">
                    <ScrollReveal delay={0.2}>
                        <Card className="border-2 border-slate-200/70">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{careersContent.apply.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {careersContent.apply.subtitle}
                                        <span className="block mt-2 text-slate-700 font-medium">{siteContent.emails.careers}</span>
                                    </p>
                                </div>
                                <div className="shrink-0">
                                    <Button href={mailtoHref} variant="primary" showArrow>
                                        {careersContent.apply.ctaLabel}
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>
                </div>

                <div className="mt-8">
                    <ScrollReveal delay={0.25}>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-4xl">
                            {careersContent.equalOpportunity}
                        </p>
                    </ScrollReveal>
                </div>
            </Section>
        </>
    );
}
