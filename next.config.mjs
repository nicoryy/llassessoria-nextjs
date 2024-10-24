/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tonykarlos.com",
      },
      {
        protocol: "https",
        hostname: "w3.cdn.cl9.cloud",
      },
      {
        protocol: "https",
        hostname: "docs.uft.edu.br",
      },
    ],
  },
};

export default nextConfig;
