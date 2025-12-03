/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Turbopack configuration to work alongside the existing webpack config
  // This silences the Next.js 16 error about using Turbopack with a webpack config and no turbopack config
  turbopack: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: ['react-map-gl', 'mapbox-gl'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
  async headers() {
    return [
      {
        // Aggressive caching for hero background videos
        source: '/landing_videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            // Cache in browser and CDN for 1 year; file names are content-hashed / static
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
