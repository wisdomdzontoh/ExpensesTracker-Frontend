import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // WARNING: skips all ESLint checks at build time
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
