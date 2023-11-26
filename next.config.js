/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: "avatars.githubusercontent.com"
        }]
    },
    experimental: { serverActions: true,serverComponentsExternalPackages: [
        '@react-email/components',
        '@react-email/render',
        '@react-email/tailwind'
    ] }
}

module.exports = nextConfig
