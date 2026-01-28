import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

type IconName = keyof typeof LucideIcons;

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
    const LucideIcon = LucideIcons[icon as IconName] as React.FC<{ className?: string }>;

    return (
        <div className="group p-6 lg:p-8 bg-white border border-slate-100 rounded-2xl hover:border-slate-200 hover:shadow-lg transition-all duration-300">
            {/* Icon */}
            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors duration-300">
                {LucideIcon && (
                    <LucideIcon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors duration-300" />
                )}
            </div>

            {/* Title */}
            <h4 className="text-lg font-semibold text-slate-900 mb-3">{title}</h4>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default ServiceCard;
