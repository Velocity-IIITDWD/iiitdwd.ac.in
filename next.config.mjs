/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iiitdwd.ac.in",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
