/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media.discordapp.net' },
    ],
  },
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  }
};
export default nextConfig;
