/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
}

const withVideos = require('next-videos')


module.exports = nextConfig, withVideos()


// export default {
//   webpack(config, { isServer }) {
//       const prefix = config.assetPrefix ?? config.basePath ?? '';
//       config.module.rules.push({
//         test: /\.mp4$/,
//         use: [{
//           loader: 'file-loader',
//           options: {
//             publicPath: `${prefix}/_next/static/media/`,
//             outputPath: `${isServer ? '../' : ''}static/media/`,
//             name: '[name].[hash].[ext]',
//           },
//         }],
//       });
  
//       return config;
//     },
//   };