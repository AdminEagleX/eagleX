import React from "react";
import Button from "@/components/ui/Button";
import * as motion from "framer-motion/client";

interface CtaBannerProps {
    title: string;
    description: string;
    cta: {
        label: string;
        href: string;
    };
    variant?: "dark" | "accent";
}

const CtaBanner: React.FC<CtaBannerProps> = ({ title, description, cta }) => {
    return (
        <section className="py-24 px-4 md:px-8">
            {/* Massive dark background container */}
            <div className="relative bg-black rounded-[3rem] border border-white/5 overflow-hidden w-full max-w-7xl mx-auto">

                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-screen overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute right-[-10%] top-[-20%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute left-[-10%] bottom-[-20%] w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[100px]"
                    />
                </div>

                <div className="absolute inset-0 bg-[url('/asset/noise.png')] opacity-10 mix-blend-overlay"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-24 md:py-32 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 max-w-5xl leading-[1.1]"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-3xl text-slate-300 mb-12 max-w-3xl leading-relaxed font-thin"
                    >
                        {description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Button
                            href={cta.href}
                            className="group relative px-10 py-5 bg-white text-black hover:bg-slate-200 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] rounded-full text-xl font-medium"
                        >
                            {cta.label}
                            <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;
