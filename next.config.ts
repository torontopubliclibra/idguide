import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: '/sitemap',
        destination: '/about#sitemap',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:file*.xsl",
        headers: [
          {
            key: "Content-Type",
            value: "text/xsl; charset=UTF-8",
          },
        ],
      },
    ];
  },
};

export default nextConfig;