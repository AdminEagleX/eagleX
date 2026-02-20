import { notFound } from "next/navigation";
import Section from "@/components/layout/Section";
import servicesContent from "@/content/services.json";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { generateServiceSchema } from "@/lib/jsonLd";
import siteContent from "@/content/site.json";
import ParticleBackground from "@/components/animations/ParticleBackground";
import ParallaxSection from "@/components/animations/ParallaxSection";

// Helper to find service by slug
// Helper to find service by slug
function getServiceBySlug(slug: string) {
    // First check top-level categories
    const category = servicesContent.capabilities.find((cap: any) => cap.slug === slug);
    if (category) return category;

    // Then check individual items
    for (const cap of servicesContent.capabilities) {
        const item = cap.items.find((i: any) => i.slug === slug);
        if (item) return item;
    }
    return null;
}

export async function generateStaticParams() {
    const params: { slug: string }[] = [];

    // Add top-level capability slugs
    servicesContent.capabilities.forEach((cap: any) => {
        params.push({ slug: cap.slug });

        // Add sub-item slugs
        cap.items.forEach((item: any) => {
            params.push({ slug: item.slug });
        });
    });

    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return {};

    return generatePageMetadata({
        title: service.title,
        description: service.description,
        path: `/services/${slug}`,
    });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service: any = getServiceBySlug(slug);

    if (!service || !service.details) {
        notFound();
    }

    const { details } = service;
    const jsonLd = generateServiceSchema(
        service.title,
        service.description,
        `${siteContent.site.url.replace(/\/+$/, "")}/services/${slug}`
    );

    return (
        <div className="bg-black min-h-screen text-white overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero */}
            <Section className="pt-32 pb-20 relative overflow-hidden">
                <ParticleBackground />

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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs tracking-widest uppercase text-purple-300 mb-5">
                            Service Offering
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.05]">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-400 leading-relaxed max-w-3xl font-light">
                            {service.description}
                        </p>
                    </div>
                </FadeIn>
            </Section>

            {/* Overview */}
            <Section className="pb-32">
                <div className="max-w-4xl">
                    <FadeIn delay={0.2}>
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Overview</h2>
                        <div className="text-base md:text-lg text-slate-400 leading-relaxed mb-12">
                            {details.overview.split('\n\n').map((paragraph: string, idx: number) => (
                                <p key={idx} className="mb-6 last:mb-0">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Methodology / Process if present */}
                    {details.methodology && (
                        <FadeIn delay={0.3}>
                            <div className="mb-20">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">Our Approach</h3>
                                <div className="space-y-8">
                                    {details.methodology.map((step: any, idx: number) => (
                                        <div key={idx} className="flex gap-6">
                                            <div className="shrink-0 w-12 h-12 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white font-semibold">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                                                <p className="text-slate-400 leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    )}

                    {/* Benefits if present */}
                    {details.benefits && (
                        <FadeIn delay={0.4}>
                            <div className="mb-16">
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Key Benefits</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {details.benefits.map((benefit: string, idx: number) => (
                                        <div key={idx} className="flex items-start">
                                            <span className="text-accent mr-3 mt-1">✓</span>
                                            <span className="text-slate-300">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    )}

                    {/* Offerings */}
                    {details.offerings && (
                        <FadeIn delay={0.4}>
                            <div className="rounded-3xl p-8 md:p-10 border border-white/[0.06] bg-gradient-to-br from-white/[0.06] to-white/[0.02] shadow-[0_20px_80px_-30px_rgba(123,37,235,0.18)]">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">Service Offerings</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    {details.offerings.map((offering: string, idx: number) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 shrink-0" />
                                            <span className="text-slate-300 font-medium">{offering}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    )}

                    {/* Platforms if present */}
                    {details.platforms && (
                        <FadeIn delay={0.5}>
                            <div className="mt-16">
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Platforms & Technologies</h3>
                                <div className="flex flex-wrap gap-3">
                                    {details.platforms.map((platform: string, idx: number) => (
                                        <span key={idx} className="px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-lg text-slate-300 font-medium">
                                            {platform}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    )}

                    <FadeIn delay={0.6}>
                        <div className="mt-20">
                            <Button href="/contact" variant="outline" size="lg" showArrow>
                                Get Started with {service.title}
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    );
}
