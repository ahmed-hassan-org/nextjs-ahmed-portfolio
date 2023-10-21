/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  i18n,
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
    ],
  },
};

module.exports = nextConfig;
