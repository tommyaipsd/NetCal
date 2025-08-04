/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  // Disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Static export configuration
  output: 'export',
  trailingSlash: true,
  // Netlify doesn't need basePath - it handles routing automatically
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig