"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { Check } from "lucide-react";

interface StaggeredListProps {
    items: string[] | ReactNode[];
    showIcon?: boolean;
    delay?: number;
    className?: string;
}

const StaggeredList: React.FC<StaggeredListProps> = ({
    items,
    showIcon = true,
    delay = 0,
    className = ""
}) => {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, x: -20 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1] as const
            }
        }
    };

    return (
        <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {items.map((listItem, idx) => (
                <motion.li
                    key={idx}
                    variants={item}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                >
                    {showIcon && (
                        <motion.div
                            className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mt-0.5"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </motion.div>
                    )}
                    <span className="flex-1 text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                        {listItem}
                    </span>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default StaggeredList;
