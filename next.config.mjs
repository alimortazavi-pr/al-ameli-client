/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
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
