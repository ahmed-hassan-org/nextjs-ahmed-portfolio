/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n,
  redirects: async () => {
    return [
      // {
      //   source: "/",
      //   has: [
      //     {
      //       type: "cookie",
      //       key: "bikerz-token",
      //     },
      //   ],
      //   permanent: false,
      //   destination: "/",
      // },
    ];
  },
  images: {
    domains: [
      "www.kawasaki.co.th",
      "static.toiimg.co",
      "static.toiimg.com",
      "images.unsplash.com",
      "bikerz.sgp1.cdn.digitaloceanspaces.com",
      "drive.google.com",
      "www.google.com",
      "bikerz-development-6y2im.ondigitalocean.app",
      "tecdn.b-cdn.net",
      "www.tecdn.b-cdn.net",
      "ahmed-hassn-portfolio.netlify.app",
      "ahmed-hassn-portfolio.netlify",
    ],
  },
};

module.exports = nextConfig;
