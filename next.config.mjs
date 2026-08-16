/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res-console.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;