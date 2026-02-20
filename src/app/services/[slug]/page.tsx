import { notFound } from "next/navigation";
import Section from "@/components/layout/Section";
import servicesContent from "@/content/services.json";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

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

    return (
        <>
            {/* Hero */}
            <Section variant="dark" className="pt-32 pb-20">
                <FadeIn>
                    <div className="max-w-4xl">
                        <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">Service Offering</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
                            {service.description}
                        </p>
                    </div>
                </FadeIn>
            </Section>

            {/* Overview */}
            <Section>
                <div className="max-w-4xl">
                    <FadeIn delay={0.2}>
                        <h2 className="text-2xl font-medium text-slate-900 mb-6">Overview</h2>
                        <div className="text-lg text-slate-600 leading-relaxed mb-12">
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
                                <h3 className="text-2xl font-medium text-slate-900 mb-8">Our Approach</h3>
                                <div className="space-y-8">
                                    {details.methodology.map((step: any, idx: number) => (
                                        <div key={idx} className="flex gap-6">
                                            <div className="shrink-0 w-12 h-12 rounded-full bg-accent-light/30 flex items-center justify-center text-accent font-bold border border-accent-light">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-medium text-slate-900 mb-2">{step.title}</h4>
                                                <p className="text-slate-600 leading-relaxed">{step.description}</p>
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
                                <h3 className="text-xl font-medium text-slate-900 mb-6">Key Benefits</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {details.benefits.map((benefit: string, idx: number) => (
                                        <div key={idx} className="flex items-start">
                                            <span className="text-accent mr-3 mt-1">✓</span>
                                            <span className="text-slate-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    )}

                    {/* Offerings */}
                    {details.offerings && (
                        <FadeIn delay={0.4}>
                            <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100">
                                <h3 className="text-2xl font-medium text-slate-900 mb-8">Service Offerings</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    {details.offerings.map((offering: string, idx: number) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 shrink-0" />
                                            <span className="text-slate-700 font-medium">{offering}</span>
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
                                <h3 className="text-xl font-medium text-slate-900 mb-6">Platforms & Technologies</h3>
                                <div className="flex flex-wrap gap-3">
                                    {details.platforms.map((platform: string, idx: number) => (
                                        <span key={idx} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 font-medium shadow-sm">
                                            {platform}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    )}

                    <FadeIn delay={0.6}>
                        <div className="mt-20">
                            <Button href="/contact" variant="primary" size="lg" showArrow>
                                Get Started with {service.title}
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </>
    );
}
