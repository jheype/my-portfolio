/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media.discordapp.net' },
    ],
  },
  reactStrictMode: true,
};
export default nextConfig;
