/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  basePath: '/quartetLanding',
  assetPrefix: '/quartetLanding',
  images: {
    loader: 'imgix',
    path: 'https://pechenyice.github.io/',
  },
};
