import React from "react";

interface ValuePropCardProps {
    title: string;
    description: string;
}

const ValuePropCard: React.FC<ValuePropCardProps> = ({ title, description }) => {
    return (
        <div className="group p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-purple-200 transition-all duration-500 hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1">
            {/* Icon placeholder or decorative element */}
            <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="w-7 h-7 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg"></div>
            </div>

            <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default ValuePropCard;
