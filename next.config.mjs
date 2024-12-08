/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    domains : ["*","www.carlogos.org","demo.themesberg.com"]
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
