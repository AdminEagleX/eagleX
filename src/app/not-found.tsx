import Link from 'next/link'
import Section from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';

export default function NotFound() {
    return (
        <Section className="min-h-[70vh] flex items-center justify-center text-center relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 -z-10"></div>

            <FadeIn>
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-8xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-none">
                        404
                    </h2>
                    <h1 className="text-3xl md:text-5xl font-medium text-slate-900 mb-6">
                        Page Not Found
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-md mx-auto leading-relaxed">
                        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/" variant="primary" showArrow>
                            Return Home
                        </Button>
                        <Button href="/contact" variant="secondary">
                            Contact Support
                        </Button>
                    </div>
                </div>
            </FadeIn>
        </Section>
    )
}
