'use client';

/**
 * Global error boundary - catches errors in root layout
 */
export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en">
            <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif' }}>
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}>
                    <div style={{
                        maxWidth: '600px',
                        background: 'white',
                        padding: '3rem',
                        borderRadius: '1.5rem',
                        textAlign: 'center',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    }}>
                        <div style={{
                            fontSize: '4rem',
                            marginBottom: '1rem',
                        }}>⚠️</div>
                        <h1 style={{
                            fontSize: '2rem',
                            fontWeight: '600',
                            color: '#0f172a',
                            marginBottom: '1rem',
                        }}>
                            Critical Error
                        </h1>
                        <p style={{
                            fontSize: '1.125rem',
                            color: '#64748b',
                            marginBottom: '2rem',
                            lineHeight: '1.75',
                        }}>
                            We're experiencing technical difficulties. Please try refreshing the page.
                        </p>
                        {error.digest && (
                            <p style={{
                                fontSize: '0.875rem',
                                color: '#94a3b8',
                                marginBottom: '2rem',
                                fontFamily: 'monospace',
                            }}>
                                Error ID: {error.digest}
                            </p>
                        )}
                        <button
                            onClick={reset}
                            style={{
                                background: '#7b25eb',
                                color: 'white',
                                padding: '0.75rem 2rem',
                                borderRadius: '9999px',
                                border: 'none',
                                fontSize: '1rem',
                                fontWeight: '500',
                                cursor: 'pointer',
                                marginRight: '1rem',
                            }}
                        >
                            Try Again
                        </button>
                        <a
                            href="/"
                            style={{
                                display: 'inline-block',
                                color: '#0f172a',
                                padding: '0.75rem 2rem',
                                borderRadius: '9999px',
                                border: '1px solid #e2e8f0',
                                fontSize: '1rem',
                                fontWeight: '500',
                                textDecoration: 'none',
                            }}
                        >
                            Go Home
                        </a>
                    </div>
                </div>
            </body>
        </html>
    );
}
