/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'kalininmax.temp.swtest.ru',
        pathname: '/media/**',
      },
    ],
  },
};

module.exports = nextConfig;
