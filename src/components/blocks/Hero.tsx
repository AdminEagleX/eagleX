"use client";

import React from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import RotatingText from "@/components/animations/RotatingText";
import { motion } from "framer-motion";

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
    className,
}) => {
    // Replace accent word with styled span or RotatingText
    const renderTitle = () => {
        if (titleRotating && titleRotating.length > 0) {
            const parts = title.split("{rotation}");
            return (
                <>
                    {parts[0]}
                    <span className="inline-block min-w-[280px] md:min-w-[400px]">
                      <RotatingText words={titleRotating} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
                    </span>
                    {parts[1]}
                </>
            );
        }
        if (!titleAccent) return title;
        const parts = title.split(titleAccent);
        return (
            <>
                {parts[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{titleAccent}</span>
                {parts[1]}
            </>
        );
    };

    return (
        <section className={cn("relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden", className)}>
            {/* Dark Mode Animated Background Mesh */}
            <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 2 }}
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[100px] bg-purple-900/40"
                    style={{ animation: "float 15s ease-in-out infinite alternate" }}
                />
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[120px] bg-indigo-900/40"
                    style={{ animation: "float 20s ease-in-out infinite alternate-reverse" }}
                />
            </div>

            <Container className="relative z-10 w-full">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                    {history && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs md:text-sm font-mono tracking-widest uppercase backdrop-blur-md">
                                {history}
                            </span>
                        </motion.div>
                    )}
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-8 leading-[1.05] text-white"
                    >
                        {renderTitle()}
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl mb-12 max-w-3xl leading-relaxed text-slate-400 font-light"
                    >
                        {subtitle}
                    </motion.p>
                    
                    {(primaryCta || secondaryCta) && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                        >
                            {primaryCta && (
                                <Button 
                                    href={primaryCta.href} 
                                    className="group relative px-8 py-4 bg-white text-black hover:bg-slate-200 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] rounded-full text-lg font-medium"
                                >
                                    {primaryCta.label}
                                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </Button>
                            )}
                            {secondaryCta && (
                                <Button 
                                    href={secondaryCta.href} 
                                    className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white backdrop-blur-sm transition-all duration-300 rounded-full text-lg font-medium"
                                >
                                    {secondaryCta.label}
                                </Button>
                            )}
                        </motion.div>
                    )}
                </div>
            </Container>

            {/* Bottom fading edge */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
