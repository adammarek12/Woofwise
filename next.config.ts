import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Skip ESLint during builds to avoid interactive prompts
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
