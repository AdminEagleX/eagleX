import Hero from "@/components/blocks/Hero";
import CtaBanner from "@/components/blocks/CtaBanner";
import CapabilitiesSection from "@/components/blocks/CapabilitiesSection";
import BentoGrid from "@/components/blocks/BentoGrid";
import homeContent from "@/content/home.json";
import servicesContent from "@/content/services.json";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { generateOrganizationSchema } from "@/lib/jsonLd";

export const metadata: Metadata = generatePageMetadata({
  title: "Enterprise Consulting & Systems Engineering",
  description: homeContent.hero.subtitle,
  path: "/",
});

export default function Home() {
  const { hero, valueProps, whySection, ctaBanner } = homeContent;
  const jsonLd = generateOrganizationSchema();

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <Hero
        title={hero.title}
        titleRotating={hero.titleRotating}
        subtitle={hero.subtitle}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
      />

      {/* Value Props & Why Us combined into Bento Grid */}
      <BentoGrid
        valueProps={valueProps}
        whySection={whySection}
      />

      {/* Capabilities Section */}
      <CapabilitiesSection
        title="Our capabilities are designed to solve your problems"
        capabilities={servicesContent.capabilities}
      />

      {/* CTA Banner */}
      <CtaBanner
        title={ctaBanner.title}
        description={ctaBanner.description}
        cta={ctaBanner.cta}
      />
    </div>
  );
}
