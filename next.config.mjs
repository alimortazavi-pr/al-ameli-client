/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "7079",
      },
      {
        protocol: "https",
        hostname: "al-ameli-back.pourhomestore.top",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
