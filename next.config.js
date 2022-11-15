/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: "/" }
    }
  }
}

module.exports = nextConfig
