import { notFound } from "next/navigation";
import Section from "@/components/layout/Section";
import insightsContent from "@/content/insights.json";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import siteContent from "@/content/site.json";
import { generateArticleSchema } from "@/lib/jsonLd";

// Helper to find insight by slug
function getInsightBySlug(slug: string) {
    return insightsContent.posts.find((item: any) => item.slug === slug);
}

export async function generateStaticParams() {
    return insightsContent.posts.map((post: any) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = params;
    const post = getInsightBySlug(slug);
    if (!post) return {};

    return generatePageMetadata({
        title: post.title,
        description: post.excerpt,
        path: `/insights/${slug}`,
    });
}

export default async function InsightDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
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
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Header */}
            <Section variant="muted" className="pt-32 pb-16">
                <FadeIn>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-4 text-sm text-slate-500 mb-6 font-medium uppercase tracking-wider">
                            <span>{post.category}</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-medium text-slate-900 mb-8 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>
                </FadeIn>
            </Section>

            {/* Article Content */}
            <Section>
                <FadeIn>
                    <article className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:font-medium prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
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
            <Section variant="dark" className="py-20 mt-20">
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
        </>
    );
}
