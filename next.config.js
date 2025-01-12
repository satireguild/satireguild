/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/college-satire-guild',
  assetPrefix: '/college-satire-guild',
}

module.exports = nextConfig
