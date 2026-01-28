"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface RotatingTextProps {
    words: string[];
    className?: string;
}

export default function RotatingText({ words, className = "" }: RotatingTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Smooth 3s rotation
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <span className={`inline-grid relative overflow-hidden ${className}`} style={{ height: '1.2em' }}>
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1], // Premium easing
                    }}
                    className="col-start-1 row-start-1 flex items-center whitespace-nowrap"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
            {/* Invisibly render the longest word to maintain container width */}
            <span className="invisible h-0 overflow-hidden pointer-events-none col-start-1 row-start-1 whitespace-nowrap">
                {words.reduce((a, b) => (a.length > b.length ? a : b))}
            </span>
        </span>
    );
}
