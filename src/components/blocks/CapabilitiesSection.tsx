"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CapabilityItem {
    title: string;
    description: string;
    slug?: string;
}

interface Capability {
    id: string;
    title: string;
    description: string;
    link: string;
    items: CapabilityItem[];
}

interface CapabilitiesSectionProps {
    title: string;
    capabilities: Capability[];
}

const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ title, capabilities }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <Container>
                <div className="mb-16 max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]"
                    >
                        {title}
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative">
                    {/* Left Side: Sticky Tabs */}
                    <div className="flex flex-col lg:w-1/3 relative z-10">
                        <div className="sticky top-32 flex flex-col space-y-2">
                            {capabilities.map((cap, index) => (
                                <button
                                    key={cap.id}
                                    onClick={() => setActiveTab(index)}
                                    className={cn(
                                        "text-left px-6 py-5 text-xl md:text-2xl font-medium transition-all duration-300 rounded-2xl relative overflow-hidden group",
                                        activeTab === index
                                            ? "text-white"
                                            : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"
                                    )}
                                >
                                    {/* Active Tab Background */}
                                    {activeTab === index && (
                                        <motion.div
                                            layoutId="activeTabBg"
                                            className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl -z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center justify-between">
                                        {cap.title}
                                        {activeTab === index && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                            >
                                                <ArrowRight className="w-5 h-5 text-purple-400" />
                                            </motion.div>
                                        )}
                                    </span>
                                </button>
                            ))}

                            <div className="mt-12 pl-6 hidden lg:block">
                                <Button href={capabilities[activeTab].link} className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3 transition-colors">
                                    Explore {capabilities[activeTab].title}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Animated Content */}
                    <div className="flex-1 min-h-[600px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="h-full"
                            >
                                <div className="mb-12 lg:hidden">
                                    <h3 className="text-2xl font-semibold text-white mb-4">{capabilities[activeTab].title}</h3>
                                    <p className="text-slate-400 mb-6">{capabilities[activeTab].description}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {capabilities[activeTab].items.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                                            className="group glass-panel p-6 rounded-2xl hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(123,37,235,0.1)] hover:-translate-y-1"
                                        >
                                            {item.slug ? (
                                                <Link href={`/services/${item.slug}`} className="block w-full">
                                                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors flex items-center justify-between">
                                                        {item.title}
                                                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-purple-400" />
                                                    </h4>
                                                </Link>
                                            ) : (
                                                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                                    {item.title}
                                                </h4>
                                            )}
                                            <p className="text-slate-400 leading-relaxed text-sm">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-12 lg:hidden">
                                    <Button href={capabilities[activeTab].link} className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3 w-full text-center transition-colors">
                                        Explore {capabilities[activeTab].title}
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CapabilitiesSection;
