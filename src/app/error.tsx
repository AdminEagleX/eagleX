'use client';

import { useEffect } from 'react';
import Section from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log error to error reporting service in production
        console.error('Application error:', error);
    }, [error]);

    return (
        <Section className="min-h-[70vh] flex items-center justify-center text-center">
            <FadeIn>
                <div className="max-w-2xl mx-auto">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg
                            className="w-10 h-10 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6">
                        Something went wrong
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        We encountered an unexpected error. Our team has been notified and is working on a fix.
                    </p>
                    {error.digest && (
                        <p className="text-sm text-slate-400 mb-8 font-mono">
                            Error ID: {error.digest}
                        </p>
                    )}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={reset}
                            variant="primary"
                            showArrow
                        >
                            Try Again
                        </Button>
                        <Button href="/" variant="secondary">
                            Return Home
                        </Button>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
