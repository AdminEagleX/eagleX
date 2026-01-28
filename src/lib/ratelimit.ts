/**
 * Simple in-memory rate limiting
 * For production, consider using Redis or a dedicated rate limiting service
 */

interface RateLimitRecord {
    count: number;
    resetTime: number;
}

const store = new Map<string, RateLimitRecord>();

// Clean up old entries periodically
setInterval(() => {
    const now = Date.now();
    for (const [key, record] of store.entries()) {
        if (now > record.resetTime) {
            store.delete(key);
        }
    }
}, 60000); // Clean up every minute

export interface RateLimitConfig {
    /**
     * Maximum number of requests allowed in the time window
     */
    max: number;

    /**
     * Time window in milliseconds
     */
    windowMs: number;
}

export interface RateLimitResult {
    success: boolean;
    limit: number;
    remaining: number;
    resetTime: number;
}

/**
 * Check if a request should be rate limited
 * @param identifier Unique identifier (e.g., IP address, user ID)
 * @param config Rate limit configuration
 */
export function checkRateLimit(
    identifier: string,
    config: RateLimitConfig
): RateLimitResult {
    const now = Date.now();
    const record = store.get(identifier);

    // No record or expired record
    if (!record || now > record.resetTime) {
        const newRecord: RateLimitRecord = {
            count: 1,
            resetTime: now + config.windowMs,
        };
        store.set(identifier, newRecord);

        return {
            success: true,
            limit: config.max,
            remaining: config.max - 1,
            resetTime: newRecord.resetTime,
        };
    }

    // Existing record
    if (record.count < config.max) {
        record.count++;
        store.set(identifier, record);

        return {
            success: true,
            limit: config.max,
            remaining: config.max - record.count,
            resetTime: record.resetTime,
        };
    }

    // Rate limit exceeded
    return {
        success: false,
        limit: config.max,
        remaining: 0,
        resetTime: record.resetTime,
    };
}

/**
 * Get client identifier from request (IP address or fallback)
 */
export function getClientIdentifier(request: Request): string {
    // Try to get real IP from headers (for proxies/CDNs)
    const forwarded = request.headers.get('x-forwarded-for');
    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }

    const realIp = request.headers.get('x-real-ip');
    if (realIp) {
        return realIp;
    }

    // Fallback to a combination of headers for fingerprinting
    const userAgent = request.headers.get('user-agent') || 'unknown';
    return `fallback-${userAgent.slice(0, 50)}`;
}
