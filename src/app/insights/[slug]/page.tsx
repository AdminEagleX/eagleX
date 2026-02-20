import { notFound } from "next/navigation";
import Section from "@/components/layout/Section";
import insightsContent from "@/content/insights.json";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import siteContent from "@/content/site.json";
import { generateArticleSchema } from "@/lib/jsonLd";
import ParticleBackground from "@/components/animations/ParticleBackground";
import ParallaxSection from "@/components/animations/ParallaxSection";

// Helper to find insight by slug
function getInsightBySlug(slug: string) {
    return insightsContent.posts.find((item: any) => item.slug === slug);
}

export async function generateStaticParams() {
    return insightsContent.posts.map((post: any) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getInsightBySlug(slug);
    if (!post) return {};

    return generatePageMetadata({
        title: post.title,
        description: post.excerpt,
        path: `/insights/${slug}`,
    });
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post: any = getInsightBySlug(slug);

    if (!post || !post.content) {
        notFound();
    }

    const jsonLd = generateArticleSchema(
        post.title,
        post.excerpt,
        post.date,
        `${siteContent.site.url.replace(/\/+$/, "")}/insights/${slug}`
    );

    return (
        <div className="bg-black min-h-screen text-white overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Header */}
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
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="flex items-center justify-center gap-4 text-xs md:text-sm text-slate-400 mb-6 font-medium uppercase tracking-wider">
                            <span className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300">
                                {post.category}
                            </span>
                            <span className="w-1 h-1 bg-white/20 rounded-full" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.05]">
                            {post.title}
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-400 leading-relaxed font-light">
                            {post.excerpt}
                        </p>
                    </div>
                </FadeIn>
            </Section>

            {/* Article Content */}
            <Section containerSize="narrow" className="pb-32">
                <FadeIn>
                    <article className="prose prose-lg prose-invert prose-headings:font-semibold prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white max-w-none">
                        {post.content.split('\n').map((paragraph: string, index: number) => {
                            if (paragraph.startsWith('### ')) {
                                return <h3 key={index} className="text-2xl mt-12 mb-6">{paragraph.replace('### ', '')}</h3>
                            }
                            if (paragraph.trim() === '') return null;
                            return <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>
                        })}
                    </article>
                </FadeIn>
            </Section>

            {/* Navigation / CTA */}
            <Section variant="dark" className="py-20 mt-0">
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-medium text-white mb-8">Detailed engineering discussions?</h2>
                        <div className="flex justify-center gap-4">
                            <Button href="/contact" variant="primary" size="lg" showArrow>
                                Talk to our Engineers
                            </Button>
                            <Button href="/insights" variant="outline" size="lg">
                                Read More Insights
                            </Button>
                        </div>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
}
