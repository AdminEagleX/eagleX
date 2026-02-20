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
        <div className="bg-black min-h-screen text-white overflow-hidden">
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
                            {careersContent.page.title}
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-400 leading-relaxed max-w-3xl font-light">
                            {careersContent.page.subtitle}
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Button href="#open-roles" variant="outline" showArrow>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <ScrollReveal delay={0.05}>
                            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                                {careersContent.principles.title}
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {careersContent.principles.items.map((item, index) => (
                                <ScrollReveal key={item.title} delay={0.08 * index}>
                                    <Card background="dark" className="border-white/[0.06] hover:bg-white/[0.06] transition-colors duration-300" hover>
                                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{item.description}</p>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    <div>
                        <ScrollReveal delay={0.08}>
                            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                                {careersContent.process.title}
                            </h2>
                        </ScrollReveal>

                        <div className="space-y-5">
                            {careersContent.process.steps.map((step, index) => (
                                <ScrollReveal key={step.title} delay={0.08 * index}>
                                    <Card background="dark" className="border-white/[0.06]">
                                        <div className="flex gap-4">
                                            <div className="shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-sm font-semibold shadow-[0_0_15px_rgba(123,37,235,0.3)]">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                                                <p className="text-slate-400 leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="open-roles">
                <ScrollReveal delay={0.05}>
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Open roles</h2>
                        <p className="text-slate-400 leading-relaxed">
                            We are currently hiring for the positions below. If you are a strong match, apply via email and include the role title in your subject line.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {careersContent.roles.map((role, index) => (
                        <ScrollReveal key={role.id} delay={0.08 * index}>
                            <Card background="dark" className="border-white/[0.06] hover:border-white/[0.1] transition-colors duration-300" hover>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-white">{role.title}</h3>
                                        <p className="text-slate-400 mt-1">{role.summary}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 text-sm">
                                        <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-slate-300">
                                            {role.location}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-slate-300">
                                            {role.type}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-slate-300">
                                            {role.experience}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-2">Responsibilities</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
                                                {role.responsibilities.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-2">Requirements</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
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
                        <Card background="dark" className="border-white/[0.06]">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{careersContent.apply.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {careersContent.apply.subtitle}
                                        <span className="block mt-2 text-purple-400 font-medium">{siteContent.emails.careers}</span>
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
        </div>
    );
}
