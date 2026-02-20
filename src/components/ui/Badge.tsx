import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "accent";
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "default", className }) => {
    const variants = {
        default: "bg-white/[0.08] text-slate-300 border border-white/[0.08]",
        accent: "bg-purple-500/15 text-purple-300 border border-purple-500/20",
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
