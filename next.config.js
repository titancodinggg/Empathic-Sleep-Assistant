/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/v1/ai/speech',
        destination: 'https://api.lmnt.com/v1/ai/speech',
      },
    ];
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
};