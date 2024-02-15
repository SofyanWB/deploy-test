/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/deploy-test",

    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig
