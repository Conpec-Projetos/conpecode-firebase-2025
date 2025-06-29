import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/conpecode-firebase-2025.firebasestorage.app/o/images**",
      },
    ]
  },
};

export default nextConfig;
