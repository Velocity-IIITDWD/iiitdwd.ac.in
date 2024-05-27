/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iiitdwd.ac.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.iiitdwd.ac.in',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
