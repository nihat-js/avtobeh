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
  aliases: {
    '@': '/',
    "@/src": "/src"
  },
  reactStrictMode: true,

  // middleware: {
  //   '/': [
  //     // Run this middleware on the home page and other paths that require authentication
  //     './middleware.ts',
  //   ],
  //   '/profile': [
  //     './middleware.ts',
  //   ],
  // },
};

export default nextConfig;
