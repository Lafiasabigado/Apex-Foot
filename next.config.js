/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dfluxxrae/image/upload/**',
      },
    ],
  },
}

module.exports = nextConfig 