/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/employee/list',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
