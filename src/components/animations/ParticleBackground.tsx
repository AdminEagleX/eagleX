"use client";

import React from "react";

// Deterministic particle data to ensure Server ~ Client match (Fixes Hydration Error)
const PARTICLES = [
    { id: 1, width: 6, height: 6, left: 10, top: 20, isEven: true, duration: 15, delay: 0, tx: -50, ty: 80 },
    { id: 2, width: 4, height: 4, left: 25, top: 60, isEven: false, duration: 18, delay: 2, tx: 60, ty: -40 },
    { id: 3, width: 8, height: 8, left: 45, top: 15, isEven: true, duration: 20, delay: 5, tx: -30, ty: 50 },
    { id: 4, width: 5, height: 5, left: 60, top: 80, isEven: false, duration: 12, delay: 1, tx: 40, ty: -60 },
    { id: 5, width: 7, height: 7, left: 80, top: 30, isEven: true, duration: 25, delay: 3, tx: -70, ty: 20 },
    { id: 6, width: 3, height: 3, left: 15, top: 85, isEven: false, duration: 14, delay: 4, tx: 20, ty: -80 },
    { id: 7, width: 6, height: 6, left: 90, top: 10, isEven: true, duration: 16, delay: 6, tx: -50, ty: 90 },
    { id: 8, width: 4, height: 4, left: 5, top: 50, isEven: false, duration: 22, delay: 0.5, tx: 80, ty: -20 },
    { id: 9, width: 9, height: 9, left: 55, top: 90, isEven: true, duration: 19, delay: 2.5, tx: -40, ty: 60 },
    { id: 10, width: 5, height: 5, left: 35, top: 40, isEven: false, duration: 13, delay: 1.5, tx: 30, ty: -50 },
    { id: 11, width: 7, height: 7, left: 70, top: 70, isEven: true, duration: 21, delay: 4.5, tx: -60, ty: 30 },
    { id: 12, width: 4, height: 4, left: 20, top: 15, isEven: false, duration: 17, delay: 3.5, tx: 50, ty: -70 },
    { id: 13, width: 8, height: 8, left: 85, top: 55, isEven: true, duration: 24, delay: 5.5, tx: -80, ty: 40 },
    { id: 14, width: 6, height: 6, left: 40, top: 5, isEven: false, duration: 11, delay: 0.8, tx: 20, ty: -10 },
    { id: 15, width: 5, height: 5, left: 50, top: 45, isEven: true, duration: 23, delay: 2.2, tx: -10, ty: 100 },
];

const ParticleBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            {/* Floating particles */}
            {PARTICLES.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full mix-blend-screen animate-float"
                    style={{
                        width: `${p.width}px`,
                        height: `${p.height}px`,
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        background: p.isEven
                            ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.6), rgba(236, 72, 153, 0.4))'
                            : 'linear-gradient(135deg, rgba(236, 72, 153, 0.6), rgba(147, 51, 234, 0.4))',
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        filter: 'blur(1px)',
                        // @ts-ignore - CSS custom properties
                        '--tx': `${p.tx}px`,
                        '--ty': `${p.ty}px`,
                    }}
                />
            ))}

            <style jsx>{`
                .animate-float {
                    animation-name: float;
                    animation-timing-function: ease-in-out;
                    animation-iteration-count: infinite;
                }
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
                        transform: translate(var(--tx), var(--ty)) rotate(180deg);
                        opacity: 0.8;
                    }
                }
            `}</style>
        </div>
    );
};

export default ParticleBackground;
