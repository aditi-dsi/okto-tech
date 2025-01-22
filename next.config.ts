import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: '/api/fumadocs/:path*',
      },
    ];
  },
};

export default nextConfig;
