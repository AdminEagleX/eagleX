"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Shield, Zap, Layout, CheckCircle } from "lucide-react";

interface BentoGridProps {
    valueProps: {
        title: string;
        description: string;
    }[];
    whySection: {
        title: string;
        description: string;
        points: string[];
    };
    className?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ valueProps, whySection, className }) => {
    // Icons mapped to the 3 value props
    const icons = [Shield, Zap, Layout];

    return (
        <section className={cn("py-24 relative overflow-hidden", className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-white"
                    >
                        {whySection.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-400 max-w-3xl mx-auto"
                    >
                        {whySection.description}
                    </motion.p>
                </div>

                {/* Bento Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

                    {/* Main Feature / Points List - Spans 2 columns on desktop */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 md:row-span-2 glass-panel rounded-3xl p-8 relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent z-0"></div>
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] group-hover:bg-purple-500/30 transition-colors duration-500 z-0"></div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl md:text-4xl font-semibold text-white mb-6">Built for the long term</h3>
                                <ul className="space-y-4 mb-8">
                                    {whySection.points.map((point, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (index * 0.1) }}
                                            className="flex items-center text-slate-300 text-lg"
                                        >
                                            <CheckCircle className="w-6 h-6 mr-4 text-purple-400 shrink-0" />
                                            {point}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto inset-x-0 h-40 bg-gradient-to-t from-black/50 to-transparent absolute bottom-0 -z-10 rounded-b-3xl"></div>
                        </div>
                    </motion.div>

                    {/* Value Prop Cards */}
                    {valueProps.map((prop, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                className={cn(
                                    "glass-panel rounded-3xl p-8 relative group hover:-translate-y-1 transition-transform duration-300 overflow-hidden",
                                    index === 0 ? "md:col-span-1 md:row-span-2" : "md:col-span-1 md:row-span-1"
                                )}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent z-0"></div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/30 transition-all duration-300 border border-purple-500/20">
                                        <Icon className="w-6 h-6 text-purple-300" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">{prop.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{prop.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
