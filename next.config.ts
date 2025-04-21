/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.icons8.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],
  },
};

module.exports = nextConfig;
