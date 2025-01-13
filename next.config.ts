import type { NextConfig } from "next";

const nextConfig = {
    experimental: {
        reactCompiler: true,
    },
    output: "export",
    images: {
        unoptimized: true,
    },
} satisfies NextConfig;

export default nextConfig;
