import { Metadata } from "next";
import Section from "@/components/layout/Section";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = generatePageMetadata({
    title: "Terms of Service",
    description: "Terms of Service for EagleX",
    path: "/terms",
});

export default function TermsPage() {
    return (
        <Section>
            <FadeIn>
                <div className="max-w-3xl mx-auto prose prose-slate">
                    <h1 className="text-3xl font-medium mb-8">Terms of Service</h1>
                    <p>Last updated: January 1, 2026</p>

                    <h2 className="text-xl font-medium mt-8 mb-4">1. Agreement to Terms</h2>
                    <p>By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.</p>

                    <h2 className="text-xl font-medium mt-8 mb-4">2. Intellectual Property</h2>
                    <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary rights.</p>

                    <h2 className="text-xl font-medium mt-8 mb-4">3. Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on EagleX's website for personal, non-commercial transitory viewing only.</p>

                    <h2 className="text-xl font-medium mt-8 mb-4">4. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                </div>
            </FadeIn>
        </Section>
    );
}
