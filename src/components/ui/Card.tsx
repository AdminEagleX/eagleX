import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
    rounded?: "md" | "lg" | "xl" | "2xl" | "3xl";
    background?: "white" | "muted" | "transparent" | "dark";
}

const Card: React.FC<CardProps> = ({
    children,
    className,
    hover = false,
    padding = "md",
    rounded = "2xl",
    background = "white",
}) => {
    const paddingSizes = {
        none: "",
        sm: "p-4",
        md: "p-6 lg:p-8",
        lg: "p-8 lg:p-12",
    };

    const roundedSizes = {
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
    };

    const backgrounds = {
        white: "bg-white",
        muted: "bg-slate-50",
        transparent: "bg-transparent",
        dark: "bg-white/[0.04] border border-white/[0.06]",
    };

    return (
        <div
            className={cn(
                "overflow-hidden",
                backgrounds[background],
                roundedSizes[rounded],
                paddingSizes[padding],
                hover && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;
