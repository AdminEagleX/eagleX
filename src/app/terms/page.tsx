import { Metadata } from "next";
import Section from "@/components/layout/Section";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";
import ParticleBackground from "@/components/animations/ParticleBackground";
import ParallaxSection from "@/components/animations/ParallaxSection";

export const metadata: Metadata = generatePageMetadata({
    title: "Terms of Service",
    description: "Terms of Service for EagleX",
    path: "/terms",
});

export default function TermsPage() {
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
                            Terms of Service
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-400 leading-relaxed max-w-3xl font-light">
                            The legal terms governing your use of our services.
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
                                <h2 className="text-xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
                                <p className="text-slate-400 leading-relaxed">By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-white mb-4">2. Intellectual Property</h2>
                                <p className="text-slate-400 leading-relaxed">The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary rights.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-white mb-4">3. Use License</h2>
                                <p className="text-slate-400 leading-relaxed">Permission is granted to temporarily download one copy of the materials (information or software) on EagleX&apos;s website for personal, non-commercial transitory viewing only.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-white mb-4">4. Governing Law</h2>
                                <p className="text-slate-400 leading-relaxed">These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
}
