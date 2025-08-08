/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    }
    return config
  },
  images: {
    domains: [],
    unoptimized: false,
  },
  eslint: {
    dirs: ['pages', 'components', 'lib'],
  },
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig