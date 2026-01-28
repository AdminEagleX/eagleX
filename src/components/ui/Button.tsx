import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    className?: string;
    isLoading?: boolean;
    showArrow?: boolean;
}

const ArrowIcon = () => (
    <svg
        className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M3 8L13 8M13 8L8.5 3.5M13 8L8.5 12.5" />
    </svg>
);

const LoadingSpinner = () => (
    <svg
        className="animate-spin h-4 w-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
    </svg>
);

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    href,
    className,
    isLoading = false,
    showArrow = false,
    disabled,
    ...props
}) => {
    const baseStyles =
        "group inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-accent hover:bg-accent-hover text-white focus-visible:ring-accent rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group",
        secondary:
            "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus-visible:ring-slate-300 rounded-full shadow-sm hover:shadow-md transition-all duration-300",
        outline:
            "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50 focus-visible:ring-white/50 rounded-full backdrop-blur-sm transition-all duration-300",
        ghost:
            "bg-transparent text-slate-600 hover:text-slate-900 focus-visible:ring-slate-300 rounded-lg hover:bg-slate-100 transition-all duration-300",
    };

    const sizes = {
        sm: "px-5 py-2.5 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    const content = (
        <>
            {isLoading && <LoadingSpinner />}
            <span>{children}</span>
            {showArrow && !isLoading && <ArrowIcon />}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} disabled={disabled || isLoading} {...props}>
            {content}
        </button>
    );
};

export default Button;
