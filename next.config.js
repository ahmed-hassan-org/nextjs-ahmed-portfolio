/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n,
  // redirects: async () => {
  //   return [
  //     // {
  //     //   source: "/",
  //     //   has: [
  //     //     {
  //     //       type: "cookie",
  //     //       key: "bikerz-token",
  //     //     },
  //     //   ],
  //     //   permanent: false,
  //     //   destination: "/",
  //     // },
  //   ];
  // },
  images: {
    domains: [
      "ahmed-hassn-portfolio.netlify.app",
      "ahmed-hassn-portfolio.netlify",
      "https://master--ahmed-hassn-portfolio.netlify.app/",
      "localhost:3000",
      "localhost:3000/public",
    ],
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
