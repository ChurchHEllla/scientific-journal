import type { NextConfig } from 'next'

module.exports = {
  allowedDevOrigins: ['192.168.1.3'],
}

const nextConfig: NextConfig = {
  output: 'export',
}

export default nextConfig
