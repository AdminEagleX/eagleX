import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: "default" | "narrow" | "wide";
}

const Container: React.FC<ContainerProps> = ({ children, className, size = "default" }) => {
    const sizes = {
        narrow: "max-w-4xl",
        default: "max-w-7xl",
        wide: "max-w-screen-2xl",
    };

    return (
        <div className={cn("mx-auto px-4 md:px-6", sizes[size], className)}>
            {children}
        </div>
    );
};

export default Container;
