import { Metadata } from "next";
import Section from "@/components/layout/Section";
import { generatePageMetadata } from "@/lib/metadata";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = generatePageMetadata({
    title: "Privacy Policy",
    description: "Privacy Policy for EagleX",
    path: "/privacy",
});

export default function PrivacyPage() {
    return (
        <Section>
            <FadeIn>
                <div className="max-w-3xl mx-auto prose prose-slate">
                    <h1 className="text-3xl font-medium mb-8">Privacy Policy</h1>
                    <p>Last updated: January 1, 2026</p>

                    <h2 className="text-xl font-medium mt-8 mb-4">1. Introduction</h2>
                    <p>EagleX ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>

                    <h2 className="text-xl font-medium mt-8 mb-4">2. Data We Collect</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Technical Data, and Usage Data.</p>

                    <h2 className="text-xl font-medium mt-8 mb-4">3. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you.</p>

                    <h2 className="text-xl font-medium mt-8 mb-4">4. Contact Us</h2>
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: hello@eaglexinfo.com</p>
                </div>
            </FadeIn>
        </Section>
    );
}
