import React from "react";
import Button from "@/components/ui/Button";

interface CtaBannerProps {
    title: string;
    description: string;
    cta: {
        label: string;
        href: string;
    };
    variant?: "dark" | "accent";
}

const CtaBanner: React.FC<CtaBannerProps> = ({ title, description, cta, variant = "dark" }) => {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute right-0 top-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float"></div>
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
                    {title}
                </h2>
                <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
                <Button
                    href={cta.href}
                    variant="primary"
                    className="!bg-white !text-purple-600 hover:!bg-purple-50 hover:!scale-105 border-none shadow-2xl shadow-purple-500/30"
                    size="lg"
                    showArrow
                >
                    {cta.label}
                </Button>
            </div>
        </section>
    );
};

export default CtaBanner;
