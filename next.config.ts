/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation des images Next.js
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Compression Gzip/Brotli activée
  compress: true,
  
  // Minification avec SWC (plus rapide que Terser)
  swcMinify: true,
  
  // Désactiver le header x-powered-by pour sécurité
  poweredByHeader: false,
  
  // Désactiver les source maps en production (réduit la taille)
  productionBrowserSourceMaps: false,
  
  // Headers HTTP pour cache agressif
  async headers() {
    return [
      {
        // Cache des assets statiques Next.js (JS, CSS)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache des images
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache de toutes les images (svg, jpg, png, webp, avif, gif)
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache des fichiers dans /bd/ et /clips/
        source: '/(bd|clips)/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Optimisations expérimentales
  experimental: {
    // Optimise le CSS (enlève le CSS inutilisé)
    optimizeCss: true,
    // Optimise les imports de packages
    optimizePackageImports: ['@/components'],
  },
};

module.exports = nextConfig;