import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

type IconName = keyof typeof LucideIcons;

interface IconProps {
    name: IconName;
    size?: "sm" | "md" | "lg";
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = "md", className }) => {
    const sizes = {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
    };

    const LucideIcon = LucideIcons[name] as React.FC<{ className?: string }>;

    if (!LucideIcon) {
        console.warn(`Icon "${name}" not found in Lucide icons`);
        return null;
    }

    return <LucideIcon className={cn(sizes[size], className)} />;
};

export default Icon;
