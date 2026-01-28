import { Metadata } from "next";
import Section from "@/components/layout/Section";
import ContactForm from "@/components/blocks/ContactForm";
import contactContent from "@/content/contact.json";
import siteContent from "@/content/site.json";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import ParallaxSection from "@/components/animations/ParallaxSection";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ParticleBackground from "@/components/animations/ParticleBackground";

export const metadata: Metadata = generatePageMetadata({
    title: "Contact",
    description: contactContent.page.subtitle,
    path: "/contact",
});

export default function ContactPage() {
    const { page } = contactContent;
    const { site, emails } = siteContent;

    return (
        <>
            {/* Header Section with Particles */}
            <Section className="pt-32 pb-20 bg-white relative overflow-hidden">
                <ParticleBackground />

                {/* Gradient Background Elements with Parallax */}
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
                            {page.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">
                            {page.subtitle}
                        </p>
                    </div>
                </FadeIn>
            </Section>

            <Section className="relative">
                {/* Background Parallax Elements */}
                <ParallaxSection speed={0.2} className="absolute right-0 top-0 w-64 h-64 bg-purple-50 rounded-full blur-2xl opacity-50 -z-10" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info with Scroll Reveal */}
                    <ScrollReveal delay={0.1} direction="right">
                        <div className="space-y-8">
                            <div className="group p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
                                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">Office</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {site.address.street}
                                    <br />
                                    {site.address.city}, {site.address.state} {site.address.zip}
                                </p>
                            </div>

                            <div className="group p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
                                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">Email</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    <span className="block mb-2">
                                        <span className="font-medium text-slate-700">Careers:</span> {emails.careers}
                                    </span>
                                    <span className="block">
                                        <span className="font-medium text-slate-700">General:</span> {emails.general}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Form with Scroll Reveal */}
                    <ScrollReveal delay={0.2} direction="left">
                        <ContactForm />
                    </ScrollReveal>
                </div>
            </Section>
        </>
    );
}
