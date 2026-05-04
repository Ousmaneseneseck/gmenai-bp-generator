/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compression
  compress: true,
  
  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 86400,
    dangerouslyAllowSVG: true,
  },
  
  // Désactiver les logs inutiles
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Optimisations (sans swcMinify qui est déprécié)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'recharts'],
  },
  
  // Headers de cache (sans /_next/static qui peut casser Next.js)
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
