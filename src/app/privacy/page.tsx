import { Metadata } from "next";
import Section from "@/components/layout/Section";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import ParticleBackground from "@/components/animations/ParticleBackground";
import ParallaxSection from "@/components/animations/ParallaxSection";

export const metadata: Metadata = generatePageMetadata({
    title: "Privacy Policy",
    description: "Privacy Policy for EagleX",
    path: "/privacy",
});

export default function PrivacyPage() {
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
                            Privacy Policy
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-400 leading-relaxed max-w-3xl font-light">
                            How we protect and handle your data.
                        </p>
                    </div>
                </FadeIn>
            </Section>

            <Section className="pb-32">
                <FadeIn>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-slate-500 mb-10">Last updated: January 1, 2026</p>

                        <div className="space-y-10">
                            <div>
                                <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
                                <p className="text-slate-400 leading-relaxed">EagleX (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-white mb-4">2. Data We Collect</h2>
                                <p className="text-slate-400 leading-relaxed">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Technical Data, and Usage Data.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
                                <p className="text-slate-400 leading-relaxed">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-white mb-4">4. Contact Us</h2>
                                <p className="text-slate-400 leading-relaxed">If you have any questions about this privacy policy or our privacy practices, please contact us at: hello@eaglexinfo.com</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
}
