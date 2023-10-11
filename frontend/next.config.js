/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: process.env.PROTOCOL,
        hostname: process.env.HOSTNAME,
        pathname: '/media/**',
      },
    ],
  },
};

module.exports = nextConfig;
