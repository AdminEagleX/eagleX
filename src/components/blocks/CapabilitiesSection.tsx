"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Link from "next/link";

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
        <section className="py-24 bg-white">
            <Container>
                <div className="mb-16 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-medium text-slate-900 mb-6 leading-tight">
                        {title}
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Side: Tabs */}
                    <div className="flex flex-col lg:w-1/3">
                        <div className="flex flex-col space-y-2 border-l-2 border-slate-200">
                            {capabilities.map((cap, index) => (
                                <button
                                    key={cap.id}
                                    onClick={() => setActiveTab(index)}
                                    className={cn(
                                        "text-left px-6 py-4 text-xl md:text-2xl font-medium transition-all duration-500 border-l-4 -ml-[3px]",
                                        activeTab === index
                                            ? "border-purple-600 text-slate-900 bg-gradient-to-r from-purple-50 to-transparent"
                                            : "border-transparent text-slate-500 hover:text-slate-700 hover:border-purple-300 hover:bg-purple-50/30"
                                    )}
                                >
                                    {cap.title}
                                </button>
                            ))}
                        </div>

                        <div className="mt-12 pl-6 hidden lg:block">
                            <Button href={capabilities[activeTab].link} variant="primary" showArrow>
                                Explore {capabilities[activeTab].title}
                            </Button>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="flex-1">
                        <div className="mb-10 lg:hidden">
                            <h3 className="text-2xl font-medium text-slate-900 mb-4">{capabilities[activeTab].title}</h3>
                            <p className="text-slate-600 mb-6">{capabilities[activeTab].description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {capabilities[activeTab].items.map((item, idx) => (
                                <div key={idx} className="group flex flex-col items-start p-5 rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 hover:shadow-md">
                                    {item.slug ? (
                                        <Link href={`/services/${item.slug}`} className="block w-full">
                                            <h4 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors flex items-center">
                                                {item.title}
                                                <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </h4>
                                        </Link>
                                    ) : (
                                        <h4 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                                            {item.title}
                                        </h4>
                                    )}
                                    <p className="text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 lg:hidden">
                            <Button href={capabilities[activeTab].link} variant="primary" showArrow>
                                Explore {capabilities[activeTab].title}
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CapabilitiesSection;
