/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
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
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: 'https://iiitdwd.ac.in/images/:path*',
      },
      {
        source: '/docs/:path*',
        destination: 'https://iiitdwd.ac.in/docs/:path*',
      },
    ];
  },

};

export default nextConfig;
