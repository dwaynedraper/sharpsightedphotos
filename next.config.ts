import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
  // Clean paths for the two-sided site. Old links keep working.
  async redirects() {
    return [
      { source: '/storyportraits', destination: '/portraits', permanent: true },
      { source: '/headshots', destination: '/business/headshots', permanent: true },
      { source: '/films', destination: '/business/films', permanent: true },
      { source: '/video', destination: '/business/films', permanent: true },
    ];
  },
};

export default nextConfig;
