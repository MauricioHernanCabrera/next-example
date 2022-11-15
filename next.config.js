/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: "/" }
    }
  }, 
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
