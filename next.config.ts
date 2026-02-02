import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@shadergradient/react", "@react-three/fiber", "three", "three-stdlib"],
};

export default nextConfig;
