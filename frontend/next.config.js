/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
