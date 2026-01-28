"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

const StaggerContainer = ({
    children,
    className = "",
    delay = 0,
    staggerDelay = 0.1,
}: StaggerContainerProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default StaggerContainer;
