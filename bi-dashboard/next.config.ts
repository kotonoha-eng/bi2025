import type { NextConfig } from "next";

const repo = "bi2025"; // GitHub のリポジトリ名
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isProd
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
  : {}),
  reactCompiler: true,
};

export default nextConfig;
