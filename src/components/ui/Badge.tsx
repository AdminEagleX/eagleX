import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "accent";
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "default", className }) => {
    const variants = {
        default: "bg-slate-100 text-slate-600",
        accent: "bg-accent-light text-accent",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
};

export default Badge;
