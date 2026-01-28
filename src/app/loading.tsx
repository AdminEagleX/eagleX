import Section from '@/components/layout/Section';

export default function Loading() {
    return (
        <Section className="min-h-[70vh] flex items-center justify-center">
            <div className="text-center">
                {/* Animated Logo Spinner */}
                <div className="relative w-20 h-20 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-accent border-t-transparent animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-accent">E</span>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="space-y-2">
                    <div className="h-4 w-48 bg-slate-200 rounded-full mx-auto animate-pulse"></div>
                    <div className="h-3 w-32 bg-slate-100 rounded-full mx-auto animate-pulse delay-75"></div>
                </div>
            </div>
        </Section>
    );
}
