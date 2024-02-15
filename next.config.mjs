/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    basePath: '/deploy-test',

    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig
