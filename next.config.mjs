/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    // Case study media is local by default. Add remote hosts here if you
    // start serving screenshots from a CDN or asset service.
    remotePatterns: [],
  },
}

export default nextConfig
