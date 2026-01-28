"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    viewport?: { once?: boolean; margin?: string };
}

const FadeIn = ({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.5,
    viewport = { once: true, margin: "-50px" },
}: FadeInProps) => {
    const shouldReduceMotion = useReducedMotion();

    const getInitialProps = () => {
        if (shouldReduceMotion) {
            return { opacity: 0, y: 0, x: 0 };
        }

        switch (direction) {
            case "up":
                return { opacity: 0, y: 30, x: 0 };
            case "down":
                return { opacity: 0, y: -30, x: 0 };
            case "left":
                return { opacity: 0, x: 30, y: 0 };
            case "right":
                return { opacity: 0, x: -30, y: 0 };
            case "none":
            default:
                return { opacity: 0, x: 0, y: 0 };
        }
    };

    return (
        <motion.div
            initial={getInitialProps()}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={viewport}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1], // "Professional" cubic bezier
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
