import React from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import RotatingText from "@/components/animations/RotatingText";

interface HeroProps {
    title: string;
    titleAccent?: string;
    titleRotating?: string[];
    history?: string;
    subtitle: string;
    primaryCta?: {
        label: string;
        href: string;
    };
    secondaryCta?: {
        label: string;
        href: string;
    };
    variant?: "default" | "dark";
    className?: string;
}

const Hero: React.FC<HeroProps> = ({
    title,
    titleAccent,
    titleRotating,
    history,
    subtitle,
    primaryCta,
    secondaryCta,
    variant = "default",
    className,
}) => {
    const variants = {
        default: "bg-white text-slate-900",
        dark: "bg-slate-900 text-white",
    };

    // Replace accent word with styled span or RotatingText
    const renderTitle = () => {
        if (titleRotating && titleRotating.length > 0) {
            const parts = title.split("{rotation}");
            return (
                <>
                    {parts[0]}
                    <RotatingText words={titleRotating} className={variant === "dark" ? "text-accent-light" : "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"} />
                    {parts[1]}
                </>
            );
        }
        if (!titleAccent) return title;
        const parts = title.split(titleAccent);
        return (
            <>
                {parts[0]}
                <span className={variant === "dark" ? "text-accent-light" : "text-accent"}>{titleAccent}</span>
                {parts[1]}
            </>
        );
    };

    return (
        <section className={cn("relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28", variants[variant], className)}>
            {/* Animated Gradient Background */}
            {variant === "default" && (
                <>
                    <div
                        className="absolute inset-0 -z-10 opacity-30"
                        style={{
                            background: 'radial-gradient(circle at 20% 50%, rgba(123, 37, 235, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(102, 126, 234, 0.15) 0%, transparent 50%)',
                        }}
                    ></div>
                    {/* Floating circles for visual interest */}
                    <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                </>
            )}

            <Container>
                <div className="max-w-4xl">
                    {history && (
                        <p className="text-sm md:text-base text-slate-500 mb-6 font-mono tracking-wide uppercase">
                            {history}
                        </p>
                    )}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-[1.1] overflow-hidden">
                        {renderTitle()}
                    </h1>

                
                    <p className={cn("text-lg md:text-xl mb-10 max-w-2xl leading-relaxed", variant === "dark" ? "text-slate-300" : "text-slate-600")}>
                        {subtitle}
                    </p>
                    {(primaryCta || secondaryCta) && (
                        <div className="flex flex-col sm:flex-row gap-4">
                            {primaryCta && (
                                <Button href={primaryCta.href} variant="primary" showArrow>
                                    {primaryCta.label}
                                </Button>
                            )}
                            {secondaryCta && (
                                <Button href={secondaryCta.href} variant={variant === "dark" ? "outline" : "secondary"}>
                                    {secondaryCta.label}
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Hero;
