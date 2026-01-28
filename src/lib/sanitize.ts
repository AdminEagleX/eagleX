/**
 * Input sanitization utilities for security
 */

/**
 * Sanitize string input to prevent XSS attacks
 */
export function sanitizeString(input: string): string {
    return input
        .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
        .trim()
        .slice(0, 1000); // Limit length
}

/**
 * Sanitize email input
 */
export function sanitizeEmail(email: string): string {
    const sanitized = email.toLowerCase().trim();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitized)) {
        throw new Error('Invalid email format');
    }

    return sanitized.slice(0, 254); // RFC 5321 max length
}

/**
 * Sanitize text area input
 */
export function sanitizeTextArea(input: string): string {
    return input
        .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
        .trim()
        .slice(0, 5000); // Limit length for message fields
}

/**
 * Check if input contains potential malicious patterns
 */
export function detectMaliciousInput(input: string): boolean {
    const maliciousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+=/i, // Event handlers like onclick=
        /eval\(/i,
        /<iframe/i,
    ];

    return maliciousPatterns.some(pattern => pattern.test(input));
}
