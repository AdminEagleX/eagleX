import React from "react";

interface TimelineStepProps {
    phase: string;
    title: string;
    description: string;
    index: number;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ phase, title, description, index }) => {
    const isReversed = index % 2 !== 0;

    return (
        <div className={`group flex flex-col md:flex-row items-center ${isReversed ? "md:flex-row-reverse" : ""}`}>
            {/* Content */}
            <div className="md:w-1/2 px-8 py-4">
                <div className={`text-left ${isReversed ? "md:text-left" : "md:text-right"} transition-all duration-500`}>
                    {/* Phase Badge */}
                    <span className="inline-block text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 font-mono tracking-wider">
                        PHASE {phase}
                    </span>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-slate-600 leading-relaxed max-w-md ml-auto mr-auto md:mx-0">
                        {description}
                    </p>
                </div>
            </div>

            {/* Phase Circle */}
            <div className="relative z-10 my-8 md:my-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-300/50 transition-all duration-500 group-hover:scale-110">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-2xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {phase}
                        </span>
                    </div>
                </div>

                {/* Decorative Pulse Ring */}
                <div className="absolute inset-0 rounded-full bg-purple-400/20 animate-ping opacity-0 group-hover:opacity-100"></div>
            </div>

            {/* Spacer */}
            <div className="md:w-1/2 px-8" />
        </div>
    );
};

export default TimelineStep;
