"use client";

import React from "react";

const ParticleBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full mix-blend-screen"
                    style={{
                        width: Math.random() * 6 + 3 + 'px',
                        height: Math.random() * 6 + 3 + 'px',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                        background: i % 2 === 0
                            ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.6), rgba(236, 72, 153, 0.4))'
                            : 'linear-gradient(135deg, rgba(236, 72, 153, 0.6), rgba(147, 51, 234, 0.4))',
                        animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                        filter: 'blur(1px)'
                    }}
                />
            ))}

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    50% {
                        transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(180deg);
                        opacity: 0.8;
                    }
                }
            `}</style>
        </div>
    );
};

export default ParticleBackground;
