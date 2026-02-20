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
        <div className="bg-black min-h-screen text-white overflow-hidden">
            {/* Header Section with Particles */}
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
                            {page.title}
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-400 leading-relaxed max-w-3xl font-light">
                            {page.subtitle}
                        </p>
                    </div>
                </FadeIn>
            </Section>

            <Section className="pb-32 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <ScrollReveal delay={0.1} direction="right">
                        <div className="space-y-8">
                            <div className="group p-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300">
                                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">Office</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {site.address.street}
                                    <br />
                                    {site.address.city}, {site.address.state} {site.address.zip}
                                </p>
                            </div>

                            <div className="group p-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300">
                                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">Email</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    <span className="block mb-2">
                                        <span className="font-medium text-slate-300">Careers:</span> {emails.careers}
                                    </span>
                                    <span className="block">
                                        <span className="font-medium text-slate-300">General:</span> {emails.general}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Form */}
                    <ScrollReveal delay={0.2} direction="left">
                        <ContactForm />
                    </ScrollReveal>
                </div>
            </Section>
        </div>
    );
}
