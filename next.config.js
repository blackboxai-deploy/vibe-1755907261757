/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Intentional build issue: Invalid webpack configuration
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/nonexistent': '/path/that/does/not/exist',
    }
    
    // Another issue: Circular dependency
    config.module.rules.push({
      test: /\.js$/,
      use: 'non-existent-loader',
    })
    
    return config
  },
  env: {
    CUSTOM_KEY: process.env.UNDEFINED_VARIABLE,
    API_URL: 'http://localhost:8080/api',
  },
  images: {
    domains: ['invalid-domain-that-will-cause-issues.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
        port: '9999',
        pathname: '/broken/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:9999/api/:path*',
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig