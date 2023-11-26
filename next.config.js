/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();
const nextConfig = withNextIntl({
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: "avatars.githubusercontent.com"
        }]
    },
    experimental: {
        serverComponentsExternalPackages: [
            '@react-email/components',
            '@react-email/render',
            '@react-email/tailwind'
        ]
    }
});

module.exports = nextConfig
