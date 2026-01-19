/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.isabelortunopsicologia.com",
      },
    ],
  },
};

export default nextConfig;
