import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three']

  // reactCompiler: true,
};

export default nextConfig;
