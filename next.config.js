/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.investors.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
