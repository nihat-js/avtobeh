/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "*"
      }
    ]
  },
  serverExternalPackages: ["sequelize"],
  reactStrictMode: true,
};

export default nextConfig;
