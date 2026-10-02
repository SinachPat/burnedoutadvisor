import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Photos still live on the WordPress site; swap for local files in /public once assets are exported.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "burnedoutadvisor.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
