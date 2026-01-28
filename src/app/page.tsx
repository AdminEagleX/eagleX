import Hero from "@/components/blocks/Hero";
import Section from "@/components/layout/Section";
import ValuePropCard from "@/components/blocks/ValuePropCard";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/blocks/CtaBanner";
import CapabilitiesSection from "@/components/blocks/CapabilitiesSection";
import FadeIn from "@/components/animations/FadeIn";
import ParallaxSection from "@/components/animations/ParallaxSection";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggeredList from "@/components/animations/StaggeredList";
import ParticleBackground from "@/components/animations/ParticleBackground";
import homeContent from "@/content/home.json";
import servicesContent from "@/content/services.json";

export default function Home() {
  const { hero, valueProps, whySection, ctaBanner } = homeContent;

  return (
    <>
      {/* Hero Section with Particles */}
      <div className="relative">
        <ParticleBackground />
        <FadeIn duration={0.8}>
          <Hero
            title={hero.title}
            titleRotating={hero.titleRotating}
            subtitle={hero.subtitle}
            primaryCta={hero.primaryCta}
            secondaryCta={hero.secondaryCta}
          />
        </FadeIn>
      </div>

      {/* Capabilities Section with Parallax */}
      <ScrollReveal delay={0.1}>
        <CapabilitiesSection
          title="Our capabilities are designed to solve your problems"
          capabilities={servicesContent.capabilities}
        />
      </ScrollReveal>

      <Section variant="muted" className="relative overflow-hidden">
        {/* Background Parallax Elements */}
        <ParallaxSection speed={0.3} className="absolute right-0 top-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 -z-10" />
        <ParallaxSection speed={0.5} className="absolute left-0 bottom-0 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-20 -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <ScrollReveal direction="right">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">{whySection.title}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{whySection.description}</p>

              {/* Staggered List with Micro-animations */}
              <StaggeredList
                items={whySection.points}
                className="space-y-4 mb-10"
              />

              <Button href={whySection.cta.href} variant="primary" showArrow>
                {whySection.cta.label}
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <ParallaxSection speed={0.2}>
              <div className="relative h-80 lg:h-[450px] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 shadow-2xl">
                <img
                  src="/asset/abstract-visualization.png"
                  alt="Abstract system architecture visualization"
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>
            </ParallaxSection>
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA Banner with Scroll Reveal */}
      <ScrollReveal delay={0.1}>
        <CtaBanner
          title={ctaBanner.title}
          description={ctaBanner.description}
          cta={ctaBanner.cta}
          variant="dark"
        />
      </ScrollReveal>
    </>
  );
}
