/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = {
      buffer: false,
      fs: false,
      path: false,
      process: false,
    }
    return config
  },
}
