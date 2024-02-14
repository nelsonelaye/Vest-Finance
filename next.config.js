/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.investors.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
