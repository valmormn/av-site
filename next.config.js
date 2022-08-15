/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'media.graphcms.com',
      'assets.vercel.com',
      'picsum.photos',
      '192.168.0.123',
      'localhost'
    ]
    // formats: ['image/avif', 'image/webp']
  },
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

module.exports = nextConfig
