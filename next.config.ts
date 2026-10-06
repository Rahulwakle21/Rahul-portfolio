import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    // Tailwind output is ~7 KB and most visitors are first-time, so inlining beats a render-blocking request.
    inlineCss: true,
  },
};

export default nextConfig;
