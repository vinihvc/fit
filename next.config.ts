import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['dummyimage.com', 'images.unsplash.com'],
  },
}

export default nextConfig
