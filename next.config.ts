import type { NextConfig } from "next";

module.exports = {
    allowedDevOrigins: ['192.168.1.6'],
}

const nextConfig: NextConfig = {
    output: "export",
};

export default nextConfig;
