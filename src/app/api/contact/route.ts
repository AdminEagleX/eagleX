import { NextResponse } from 'next/server';
import { checkRateLimit, getClientIdentifier } from '@/lib/ratelimit';
import { sanitizeString, sanitizeEmail, sanitizeTextArea, detectMaliciousInput } from '@/lib/sanitize';

// Rate limiting configuration: 5 requests per 15 minutes
const RATE_LIMIT_CONFIG = {
    max: 5,
    windowMs: 15 * 60 * 1000, // 15 minutes
};

export async function POST(request: Request) {
    try {
        // Rate limiting check
        const clientId = getClientIdentifier(request);
        const rateLimitResult = checkRateLimit(clientId, RATE_LIMIT_CONFIG);

        if (!rateLimitResult.success) {
            return NextResponse.json(
                {
                    error: 'Too many requests. Please try again later.',
                    retryAfter: new Date(rateLimitResult.resetTime).toISOString(),
                },
                {
                    status: 429,
                    headers: {
                        'X-RateLimit-Limit': rateLimitResult.limit.toString(),
                        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
                        'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
                        'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString(),
                    },
                }
            );
        }

        const data = await request.json();

        // Honeypot check (spam prevention)
        if (data.website) {
            // This field should be hidden and empty for real users
            // If it's filled, it's likely a bot
            return NextResponse.json(
                { message: 'Message received successfully' },
                { status: 200 }
            );
        }

        // Validate required fields
        if (!data.firstName || !data.lastName || !data.email || !data.message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Sanitize inputs
        let sanitizedData;
        try {
            sanitizedData = {
                firstName: sanitizeString(data.firstName),
                lastName: sanitizeString(data.lastName),
                email: sanitizeEmail(data.email),
                message: sanitizeTextArea(data.message),
            };
        } catch (error) {
            return NextResponse.json(
                { error: error instanceof Error ? error.message : 'Invalid input' },
                { status: 400 }
            );
        }

        // Check for malicious patterns
        const allInputs = Object.values(sanitizedData).join(' ');
        if (detectMaliciousInput(allInputs)) {
            return NextResponse.json(
                { error: 'Invalid input detected' },
                { status: 400 }
            );
        }

        // Validate field lengths
        if (sanitizedData.firstName.length < 2 || sanitizedData.lastName.length < 2) {
            return NextResponse.json(
                { error: 'Name must be at least 2 characters' },
                { status: 400 }
            );
        }

        if (sanitizedData.message.length < 10) {
            return NextResponse.json(
                { error: 'Message must be at least 10 characters' },
                { status: 400 }
            );
        }

        // TODO: Send email using Resend, SendGrid, or your preferred service
        // Example with Resend:
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //     from: 'contact@eaglex.info',
        //     to: 'your-email@example.com',
        //     subject: `New Contact Form Submission from ${sanitizedData.firstName} ${sanitizedData.lastName}`,
        //     html: `
        //         <h2>New Contact Form Submission</h2>
        //         <p><strong>Name:</strong> ${sanitizedData.firstName} ${sanitizedData.lastName}</p>
        //         <p><strong>Email:</strong> ${sanitizedData.email}</p>
        //         <p><strong>Message:</strong></p>
        //         <p>${sanitizedData.message}</p>
        //     `,
        // });

        // For now, we'll just simulate success
        // In production, remove this and use actual email service

        return NextResponse.json(
            { message: 'Message received successfully' },
            {
                status: 200,
                headers: {
                    'X-RateLimit-Limit': rateLimitResult.limit.toString(),
                    'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
                },
            }
        );
    } catch (error) {
        // Log error securely (use proper logging service in production)
        if (process.env.NODE_ENV === 'development') {
            console.error('Contact API error:', error);
        }

        return NextResponse.json(
            { error: 'Internal server error. Please try again later.' },
            { status: 500 }
        );
    }
}
