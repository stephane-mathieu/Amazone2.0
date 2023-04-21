/** @type {import('next').NextConfig} */

// next.config.js

module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com']
  },
  experimental: {
    appDir: true
  }
}

