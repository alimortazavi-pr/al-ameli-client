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
        hostname: "api.alameli.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "al-ameli-back.pourhomestore.top",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "al-ameli-back",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
