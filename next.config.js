/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
  },
};

module.exports = nextConfig;
