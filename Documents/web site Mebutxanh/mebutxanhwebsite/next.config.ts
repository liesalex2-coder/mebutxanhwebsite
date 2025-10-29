import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // Headers optimisés pour crawlers IA
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
          {
            key: 'X-AI-Indexing',
            value: 'allow',
          },
          {
            key: 'X-GPTBot',
            value: 'allow',
          },
          {
            key: 'X-Claude-Web',
            value: 'allow',
          },
          {
            key: 'X-Google-Extended',
            value: 'allow',
          },
        ],
      },
      {
        source: '/ai.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
        ],
      },
    ];
  },
};

export default nextConfig;