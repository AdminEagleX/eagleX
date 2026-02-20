import React from "react";
import Container from "./Container";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    variant?: "default" | "dark" | "muted" | "accent";
    container?: boolean;
    containerSize?: "default" | "narrow" | "wide";
}

const Section: React.FC<SectionProps> = ({
    children,
    className,
    id,
    variant = "default",
    container = true,
    containerSize = "default",
}) => {
    const variants = {
        default: "relative z-10",
        dark: "bg-black text-white",
        muted: "bg-slate-900/50 text-white",
        accent: "bg-accent text-white",
    };

    return (
        <section id={id} className={cn("py-16 md:py-24", variants[variant], className)}>
            {container ? (
                <Container size={containerSize}>{children}</Container>
            ) : (
                children
            )}
        </section>
    );
};

export default Section;
