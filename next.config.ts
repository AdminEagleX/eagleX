import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression (gzip + brotli) for all text-based responses
  compress: true,

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Image optimization configurations
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // Cache images for 30 days
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Optional cache control headers for static files
  async headers() {
    return [
      {
        source: '/asset/:all*(svg|jpg|png|webp|avif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ];
  },

  // Example redirects mapping - useful for 301s if we remap URLs
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
