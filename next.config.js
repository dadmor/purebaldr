const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    return config;
  },
};
module.exports = withPlugins([withImages], nextConfig);