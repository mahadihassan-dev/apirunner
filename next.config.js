/* @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverless: {
        // Increase the timeout to 30 seconds (or any suitable value)
        timeout: 30,
    },
};

module.exports = nextConfig;
