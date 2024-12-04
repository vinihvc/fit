import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['picsum.photos', 'images.unsplash.com'],
  },
}

export default nextConfig
