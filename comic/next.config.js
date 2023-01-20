/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.annihil.us',
        port: '',
        pathname: '**',
      },
    ],
    deviceSizes: [640, 1024, 1440, 1920],
  },
}

module.exports = nextConfig
